import GitRepo from '../../api/src/graphql/inputs/GitRepoInput';

interface IConfig {
  githubRepositoryUrl: string;
  facebookGroupUrl: string;
  discordUrl: string;
  expressLRSGit: GitRepo;
  backpackGit: GitRepo;
}

export const Config: IConfig = {
  githubRepositoryUrl: 'https://github.com/ExpressLRS/ExpressLRS',
  facebookGroupUrl: 'https://www.facebook.com/groups/636441730280366',
  discordUrl: 'https://discord.gg/dS6ReFY',
  expressLRSGit: {
    cloneUrl: 'https://github.com/ExpressLRS/ExpressLRS',
    url: 'https://github.com/ExpressLRS/ExpressLRS',
    owner: 'ExpressLRS',
    repositoryName: 'ExpressLRS',
    rawRepoUrl: 'https://raw.githubusercontent.com/ExpressLRS/ExpressLRS',
    srcFolder: '/src',
  },
  backpackGit: {
    cloneUrl: 'https://github.com/ExpressLRS/Backpack',
    url: 'https://github.com/ExpressLRS/Backpack',
    owner: 'ExpressLRS',
    repositoryName: 'Backpack',
    rawRepoUrl: 'https://raw.githubusercontent.com/ExpressLRS/Backpack',
    srcFolder: '/',
  },
};

export default Config;
