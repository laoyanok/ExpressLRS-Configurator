import { Service } from 'typedi';
import FirmwareSource from '../../models/enum/FirmwareSource';
import TargetArgs from '../../graphql/args/Target';
import { LoggerService } from '../../logger';
import Device from '../../models/Device';
import DeviceService from '../Device';
import TargetsLoader, { GitRepository } from './index';
import loadTargetsFromDirectory from './loadTargetsFromDirectory';
import {
  findGitExecutable,
  GitFirmwareDownloader,
} from '../../library/FirmwareDownloader';

@Service()
export default class GitTargetsService extends TargetsLoader {
  constructor(
    private logger: LoggerService,
    private deviceService: DeviceService,
    private PATH: string,
    private targetStoragePath: string
  ) {
    super();
  }

  async loadTargetsList(
    args: TargetArgs,
    gitRepository: GitRepository
  ): Promise<Device[]> {
    let gitPath = '';
    try {
      gitPath = await findGitExecutable(this.PATH);
    } catch (e) {
      this.logger?.error('failed to find git', undefined, {
        PATH: this.PATH,
        err: e,
      });
      throw e;
    }
    this.logger?.log('git path', {
      gitPath,
    });

    const firmwareDownload = new GitFirmwareDownloader(
      {
        baseDirectory: this.targetStoragePath,
        gitBinaryLocation: gitPath,
      },
      this.logger
    );

    let availableTargets: string[] = [];
    switch (args.source) {
      case FirmwareSource.GitBranch:
        const branchResult = await firmwareDownload.checkoutBranch(
          gitRepository.url,
          `${gitRepository.srcFolder}/targets`,
          args.gitBranch
        );
        availableTargets = await loadTargetsFromDirectory(branchResult.path);
        break;
      case FirmwareSource.GitCommit:
        const commitResult = await firmwareDownload.checkoutCommit(
          gitRepository.url,
          `${gitRepository.srcFolder}/targets`,
          args.gitCommit
        );
        availableTargets = await loadTargetsFromDirectory(commitResult.path);
        break;
      case FirmwareSource.GitTag:
        const tagResult = await firmwareDownload.checkoutTag(
          gitRepository.url,
          `${gitRepository.srcFolder}/targets`,
          args.gitTag
        );
        availableTargets = await loadTargetsFromDirectory(tagResult.path);
        break;
      case FirmwareSource.GitPullRequest:
        if (args.gitPullRequest === null) {
          throw new Error('empty GitPullRequest head commit hash');
        }
        const prResult = await firmwareDownload.checkoutCommit(
          gitRepository.url,
          `${gitRepository.srcFolder}/targets`,
          args.gitPullRequest.headCommitHash
        );
        availableTargets = await loadTargetsFromDirectory(prResult.path);
        break;
      case FirmwareSource.Local:
        availableTargets = await loadTargetsFromDirectory(
          `${args.localPath}/targets`
        );
        break;
      default:
        throw new Error(
          `unsupported firmware source for the targets service: ${args.source}`
        );
    }
    const devices = this.deviceService.getDevices();
    return devices
      .map((value) => {
        const device = { ...value };
        device.targets = value.targets.filter((item) =>
          availableTargets.find((target) => target === item.name)
        );
        return device;
      })
      .filter((item) => item.targets.length > 0);
  }
}
