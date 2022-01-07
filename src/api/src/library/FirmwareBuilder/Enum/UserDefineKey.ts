enum UserDefineKey {
  // BINDING PHRASE
  BINDING_PHRASE = 'DMY_BINDING_PHRASE',
  // Regulatory domains
  REGULATORY_DOMAIN_AU_915 = 'DRegulatory_Domain_AU_915',
  REGULATORY_DOMAIN_EU_868 = 'DRegulatory_Domain_EU_868',
  REGULATORY_DOMAIN_IN_866 = 'DRegulatory_Domain_IN_866',
  REGULATORY_DOMAIN_AU_433 = 'DRegulatory_Domain_AU_433',
  REGULATORY_DOMAIN_EU_433 = 'DRegulatory_Domain_EU_433',
  REGULATORY_DOMAIN_FCC_915 = 'DRegulatory_Domain_FCC_915',
  REGULATORY_DOMAIN_ISM_2400 = 'DRegulatory_Domain_ISM_2400',
  REGULATORY_DOMAIN_EU_CE_2400 = 'DRegulatory_Domain_EU_CE_2400',
  // Hybrid switches
  HYBRID_SWITCHES_8 = 'DHYBRID_SWITCHES_8',
  ENABLE_TELEMETRY = 'DENABLE_TELEMETRY',
  TLM_REPORT_INTERVAL_MS = 'DTLM_REPORT_INTERVAL_MS',
  // Performance options
  FAST_SYNC = 'DFAST_SYNC',
  // #unlocks >250mw output power for R9M (Fan mod suggested: https://github.com/AlessandroAU/ExpressLRS/wiki/R9M-Fan-Mod-Cover)
  // deprecated in favour of DUNLOCK_HIGHER_POWER
  R9M_UNLOCK_HIGHER_POWER = 'DR9M_UNLOCK_HIGHER_POWER',
  UNLOCK_HIGHER_POWER = 'DUNLOCK_HIGHER_POWER',
  USE_DIVERSITY = 'DUSE_DIVERSITY',
  NO_SYNC_ON_ARM = 'DNO_SYNC_ON_ARM',
  ARM_CHANNEL = 'DARM_CHANNEL',
  FEATURE_OPENTX_SYNC = 'DFEATURE_OPENTX_SYNC',
  FEATURE_OPENTX_SYNC_AUTOTUNE = 'DFEATURE_OPENTX_SYNC_AUTOTUNE',
  LOCK_ON_FIRST_CONNECTION = 'DLOCK_ON_FIRST_CONNECTION',
  LOCK_ON_50HZ = 'DLOCK_ON_50HZ',
  // Compatibility options
  USE_UART2 = 'DUSE_UART2',
  UART_INVERTED = 'DUART_INVERTED',
  USE_R9MM_R9MINI_SBUS = 'DUSE_R9MM_R9MINI_SBUS',
  RCVR_UART_BAUD = 'DRCVR_UART_BAUD',
  RCVR_INVERT_TX = 'DRCVR_INVERT_TX',
  // Other options
  BLE_HID_JOYSTICK = 'DBLE_HID_JOYSTICK',
  USE_ESP8266_BACKPACK = 'DUSE_ESP8266_BACKPACK',
  USE_TX_BACKPACK = 'DUSE_TX_BACKPACK',
  JUST_BEEP_ONCE = 'DJUST_BEEP_ONCE',
  DISABLE_ALL_BEEPS = 'DDISABLE_ALL_BEEPS',
  DISABLE_STARTUP_BEEP = 'DDISABLE_STARTUP_BEEP',
  MY_STARTUP_MELODY = 'DMY_STARTUP_MELODY',
  USE_500HZ = 'DUSE_500HZ',
  USE_DYNAMIC_POWER = 'DUSE_DYNAMIC_POWER',
  WS2812_IS_GRB = 'DWS2812_IS_GRB',
  //
  FAN_MIN_RUNTIME = 'DFAN_MIN_RUNTIME',
  // Network
  HOME_WIFI_SSID = 'DHOME_WIFI_SSID',
  HOME_WIFI_PASSWORD = 'DHOME_WIFI_PASSWORD',
  AUTO_WIFI_ON_BOOT = 'DAUTO_WIFI_ON_BOOT',
  AUTO_WIFI_ON_INTERVAL = 'DAUTO_WIFI_ON_INTERVAL',
  DEVICE_NAME = 'DDEVICE_NAME',
}

export default UserDefineKey;
