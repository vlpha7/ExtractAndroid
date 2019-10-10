export const permissions = [
  "android.permission.WRITE_SYNC_SETTINGS",
  "com.facebook.home.permission.WRITE_BADGES",
  "android.permission.CALL_PHONE",
  "com.facebook.katana.permission.RECEIVE_ADM_MESSAGE",
  "android.permission.ACCESS_NETWORK_STATE",
  "com.google.android.c2dm.permission.RECEIVE",
  "com.facebook.katana.permission.C2D_MESSAGE",
  "android.permission.DOWNLOAD_WITHOUT_NOTIFICATION",
  "com.sec.android.provider.badge.permission.READ",
  "android.permission.READ_SMS",
  "android.permission.READ_EXTERNAL_STORAGE",
  "android.permission.ACCESS_WIFI_STATE",
  "android.permission.MANAGE_ACCOUNTS",
  "android.permission.RECEIVE_BOOT_COMPLETED",
  "android.permission.WRITE_CALENDAR",
  "android.permission.ACCESS_FINE_LOCATION",
  "android.permission.GET_ACCOUNTS",
  "android.permission.READ_SYNC_SETTINGS",
  "android.permission.READ_PHONE_STATE",
  "android.permission.SYSTEM_ALERT_WINDOW",
  "android.permission.BATTERY_STATS",
  "android.permission.EXPAND_STATUS_BAR",
  "com.android.launcher.permission.INSTALL_SHORTCUT",
  "android.permission.CAMERA",
  "android.permission.READ_CONTACTS",
  "com.htc.launcher.permission.UPDATE_SHORTCUT",
  "android.permission.REORDER_TASKS",
  "android.permission.INTERNET",
  "android.permission.BROADCAST_STICKY",
  "com.htc.launcher.permission.READ_SETTINGS",
  "android.permission.SET_WALLPAPER",
  "android.permission.SET_WALLPAPER_HINTS",
  "android.permission.READ_CALENDAR",
  "com.google.android.providers.gsf.permission.READ_GSERVICES",
  "com.facebook.orca.provider.ACCESS",
  "android.permission.CHANGE_NETWORK_STATE",
  "android.permission.WRITE_EXTERNAL_STORAGE",
  "com.nokia.pushnotifications.permission.RECEIVE",
  "com.amazon.device.messaging.permission.RECEIVE",
  "com.sec.android.provider.badge.permission.WRITE",
  "android.permission.WAKE_LOCK",
  "android.permission.ACCESS_COARSE_LOCATION",
  "com.facebook.pages.app.provider.ACCESS",
  "android.permission.READ_PROFILE",
  "android.permission.VIBRATE",
  "android.permission.CHANGE_WIFI_STATE",
  "android.permission.RECORD_AUDIO",
  "com.facebook.katana.permission.CROSS_PROCESS_BROADCAST_MANAGER",
  "com.google.android.launcher.permission.READ_SETTINGS",
  "android.permission.AUTHENTICATE_ACCOUNTS",
  "com.facebook.permission.prod.FB_APP_COMMUNICATION",
  "com.facebook.receiver.permission.ACCESS",
  "com.facebook.permission.prod.SYSTEM_COMMUNICATION",
  "android.permission.GET_TASKS",
  "android.permission.MODIFY_AUDIO_SETTINGS",
  "com.sonyericsson.home.permission.BROADCAST_BADGE",
  "android.permission.WRITE_CONTACTS",
  "com.facebook.katana.provider.ACCESS"
]

export const apis = [
  {
    name: "android.app.ActionBar.getSubtitle()",
    introduce: "afw-test-harness-1.5",
    remove: ""
  },
  {
    name: "android.app.admin.DevicePolicyManager.createAndInitializeUser()",
    introduce: "android-7.0.0_r21",
    remove: "android-8.0.0_r2"
  },
]

export const apks = [
  {
    name: "AdClear", 
    SHA256: "203e36ff2ec14ae5ea3955cdd0090e3ecacdc612a030b20c4d3a6834dce73018", 
    size: 19373226, 
    minSDKVersion: "16", 
    certificate_fingerprint: "22:50:A0:A0:49:56:03:4A:B6:8E:7E:54:B6:5A:89:F0:D7:24:BF:D6:05:4F:F0:DD:16:BC:B2:1E:A5:6A:B4:67", 
    certificate_owner: "Common Name: Seven Networks, Organizational Unit: Seven Networks, Organization: Seven Networks, Locality: Redwood City, State/Province: California, Country: US", 
    permission: ['com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.WAKE_LOCK', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.VIBRATE', 'com.seven.adclear.permission.C2D_MESSAGE', 'android.permission.GET_TASKS', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', 'android.permission.PACKAGE_USAGE_STATS', 'android.permission.DISABLE_KEYGUARD', 'android.permission.KILL_BACKGROUND_PROCESSES', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.SYSTEM_ALERT_WINDOW', 'com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE', 'android.permission.INTERNET']
  },
  {
    name: "YouTube Video", 
    SHA256: "dc948e6db643999eab24b75e9241c1b336e76d9b47e4368393c210c0ffb3d61f", 
    size: 2993634, 
    minSDKVersion: "14", 
    certificate_fingerprint: "A7:FE:9A:C4:9D:CC:DF:B9:9F:06:B6:A3:9A:43:FC:16:CE:04:6D:10:28:8B:41:A2:BC:7C:4C:28:84:99:B0:0B", 
    certificate_owner: "Email Address: lucemus@gmail.com, Common Name: Alex, Organizational Unit: MilkyWay, Organization: University, Locality: SaintPetersburg, State/Province: Petersburg, Country: RU", 
    permission: ['android.permission.SYSTEM_ALERT_WINDOW', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.WAKE_LOCK', 'android.permission.INTERNET']
  },
  {
    name: "Wish", 
    SHA256: "33dca0e8dd9622a2e016d6b6c7f684a05a04d360f1273ade1eab308067e14229", 
    size: 7623896, 
    minSDKVersion: "9", 
    certificate_fingerprint: "39:C5:B5:CC:A7:C5:17:92:91:18:19:A7:19:CF:A2:49:46:5E:BE:AD:4B:18:62:8B:40:59:00:B0:EF:14:29:4B", 
    certificate_owner: "Common Name: ContextLogic, Organizational Unit: Mobile, Organization: ContextLogic, Locality: San Francisco, State/Province: California, Country: US", 
    permission: ['android.permission.VIBRATE', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.CAMERA', 'android.permission.INTERNET', 'com.contextlogic.wish.permission.C2D_MESSAGE', 'android.permission.READ_CONTACTS', 'android.permission.WAKE_LOCK', 'android.permission.GET_ACCOUNTS', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE']
  },
  {
    name: "Viber", 
    SHA256: "f0589256456b9068ca9d86c39bd1f302ef742a1351244b6588c4259c2ccf65f8", 
    size: 12001751, 
    minSDKVersion: "5", 
    certificate_fingerprint: "6E:98:57:86:5C:0D:45:68:E0:2E:F7:6D:C8:38:ED:28:2A:3D:24:B1:2C:70:27:B3:92:61:90:D9:9B:42:FE:09", 
    certificate_owner: "Common Name: Unknown, Organizational Unit: R&D, Organization: Viber Media, Locality: Unknown, State/Province: Unknown, Country: Unknown", 
    permission: ['android.permission.WRITE_SYNC_SETTINGS', 'android.permission.CALL_PHONE', 'android.permission.READ_LOGS', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.READ_SMS', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.WRITE_SETTINGS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.READ_PHONE_STATE', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.WRITE_CALL_LOG', 'android.permission.KILL_BACKGROUND_PROCESSES', 'com.android.vending.BILLING', 'android.permission.WRITE_SECURE_SETTINGS', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.CAMERA', 'android.permission.WRITE_SOCIAL_STREAM', 'android.permission.READ_CONTACTS', 'android.permission.BLUETOOTH_ADMIN', 'android.permission.SEND_SMS', 'android.permission.STATUS_BAR', 'android.permission.USE_CREDENTIALS', 'android.permission.WRITE_SMS', 'android.permission.READ_SOCIAL_STREAM', 'android.permission.INTERNET', 'android.permission.READ_CALL_LOG', 'android.permission.BROADCAST_STICKY', 'android.permission.RECEIVE_SMS', 'android.permission.SET_WALLPAPER', 'android.permission.BLUETOOTH', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.android.launcher.permission.UNINSTALL_SHORTCUT', 'android.permission.WAKE_LOCK', 'com.viber.voip.permission.C2D_MESSAGE', 'android.permission.ACCESS_COARSE_LOCATION', 'android.permission.READ_SYNC_STATS', 'android.permission.VIBRATE', 'android.permission.RECORD_AUDIO', 'android.permission.AUTHENTICATE_ACCOUNTS', 'android.permission.GET_TASKS', 'android.permission.DISABLE_KEYGUARD', 'android.permission.MODIFY_AUDIO_SETTINGS', 'android.permission.DEVICE_POWER', 'android.permission.WRITE_CONTACTS', 'android.permission.MODIFY_PHONE_STATE']
  },
  {
    name: "WhatsApp", 
    SHA256: "d2193f86c13053c3baac29768d14731b1ae4438368c8d56d07e32ea6bcbd3676", 
    size: 26140672, 
    minSDKVersion: "15", 
    certificate_fingerprint: "39:87:D0:43:D1:0A:EF:AF:5A:87:10:B3:67:14:18:FE:57:E0:E1:9B:65:3C:9D:F8:25:58:FE:B5:FF:CE:5D:44", 
    certificate_owner: "Common Name: Brian Acton, Organizational Unit: Engineering, Organization: WhatsApp Inc., Locality: Santa Clara, State/Province: California, Country: US", 
    permission: ['android.permission.RECEIVE_SMS', 'android.permission.ACCESS_COARSE_LOCATION', 'android.permission.CHANGE_WIFI_STATE', 'com.whatsapp.permission.BROADCAST', 'android.permission.MANAGE_ACCOUNTS', 'com.huawei.android.launcher.permission.WRITE_SETTINGS', 'com.sonyericsson.home.permission.BROADCAST_BADGE', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.READ_PHONE_STATE', 'android.permission.READ_SYNC_STATS', 'android.permission.GET_TASKS', 'android.permission.BLUETOOTH', 'android.permission.BROADCAST_STICKY', 'android.permission.VIBRATE', 'android.permission.AUTHENTICATE_ACCOUNTS', 'com.google.android.c2dm.permission.RECEIVE', 'com.sec.android.provider.badge.permission.WRITE', 'com.whatsapp.permission.MAPS_RECEIVE', 'android.permission.INTERNET', 'com.htc.launcher.permission.READ_SETTINGS', 'com.whatsapp.sticker.READ', 'android.permission.INSTALL_SHORTCUT', 'com.huawei.android.launcher.permission.READ_SETTINGS', 'android.permission.WAKE_LOCK', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'android.permission.SEND_SMS', 'android.permission.GET_ACCOUNTS', 'android.permission.MANAGE_OWN_CALLS', 'android.permission.NFC', 'com.sec.android.provider.badge.permission.READ', 'com.htc.launcher.permission.UPDATE_SHORTCUT', 'android.permission.USE_CREDENTIALS', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.REQUEST_INSTALL_PACKAGES', 'com.sonymobile.home.permission.PROVIDER_INSERT_BADGE', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.READ_EXTERNAL_STORAGE', 'com.android.launcher.permission.UNINSTALL_SHORTCUT', 'android.permission.MODIFY_AUDIO_SETTINGS', 'com.whatsapp.permission.REGISTRATION', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.READ_PROFILE', 'android.permission.USE_FINGERPRINT', 'android.permission.CAMERA', 'com.huawei.android.launcher.permission.CHANGE_BADGE', 'android.permission.READ_CONTACTS', 'com.whatsapp.permission.C2D_MESSAGE', 'android.permission.RECORD_AUDIO', 'android.permission.FOREGROUND_SERVICE', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.WRITE_SYNC_SETTINGS', 'android.permission.USE_BIOMETRIC', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.WRITE_CONTACTS']
  },
  {
    name: "Twitter", 
    SHA256: "6521dc04fb74aaa90ca11d2907f76e8710a91a1543d040eff29032d23ea95d63", 
    size: 6877223, 
    minSDKVersion: "8", 
    certificate_fingerprint: "0F:D9:A0:CF:B0:7B:65:95:09:97:B4:EA:EB:DC:53:93:13:92:39:1A:A4:06:53:8A:3B:04:07:3B:C2:CE:2F:E9", 
    certificate_owner: "Common Name: Leland Rechis; Organizational Unit: Mobile; Organization: Twitter, Inc.; Locality: San Francisco; State/Province: CA; Country: US", 
    permission: ['android.permission.WRITE_SYNC_SETTINGS', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.ACCESS_FINE_LOCATION', 'com.twitter.android.permission.C2D_MESSAGE', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_CONTACTS', 'android.permission.USE_CREDENTIALS', 'android.permission.INTERNET', 'com.twitter.android.permission.AUTH_APP', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.twitter.android.permission.RESTRICTED', 'android.permission.WAKE_LOCK', 'android.permission.READ_PROFILE', 'android.permission.VIBRATE', 'android.permission.AUTHENTICATE_ACCOUNTS', 'com.twitter.android.permission.READ_DATA', 'android.permission.WRITE_CONTACTS']
  },
  {
    name: "UrbanDict", 
    SHA256: "e7406f4bb76eb0f5a06337f7aab852f5affd4febf245e04f79628287e7170554", 
    size: 2011681, 
    minSDKVersion: "7", 
    certificate_fingerprint: "53:A2:54:F9:2E:D1:CC:ED:D2:AE:CF:F6:2C:21:DE:8C:E4:C1:74:76:2E:11:EA:F4:05:A6:01:22:2D:75:E2:11", 
    certificate_owner: "Common Name: Unknown, Organizational Unit: Unknown, Organization: Urban Dictionary LLC, Locality: San Francisco, State/Province: California, Country: US", 
    permission: ['android.permission.INTERNET', 'android.permission.ACCESS_NETWORK_STATE']
  },
  {
    name: "Translator", 
    SHA256: "5d9a3d476b498d8d73b11bb1788c4c7509acfd96d4b975e969c6186f53da7c10", 
    size: 198577, 
    minSDKVersion: "7", 
    certificate_fingerprint: "AB:8C:FB:84:EB:99:AA:E7:AB:75:55:59:21:98:E1:3D:D6:DF:97:E1:90:19:A0:EA:8A:D8:DF:80:37:60:1A:CE", 
    certificate_owner: "Common Name: Livio, Organizational Unit: No logo, Organization: No logo, Locality: Roma, State/Province: RM, Country: IT", 
    permission: ['android.permission.INTERNET', 'android.permission.ACCESS_NETWORK_STATE']
  },
  {
    name: "Temple Run 2", 
    SHA256: "143675e757677f7393b889ab8a805a3cf1d07b923792acdc181205dccb10acc7", 
    size: 33984417, 
    minSDKVersion: "7", 
    certificate_fingerprint: "F5:F6:53:1C:BD:88:53:16:5E:64:81:4F:8F:D8:C9:28:72:CE:DB:85:AB:AF:29:85:EE:54:93:68:17:21:9E:A6", 
    certificate_owner: "Organization: Imangi Studios", 
    permission: ['android.permission.ACCESS_WIFI_STATE', 'com.android.vending.BILLING', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.READ_PHONE_STATE', 'android.permission.INTERNET', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.WAKE_LOCK']
  },
  {
    name: "Telegram X", 
    SHA256: "f4709764c5f387c558007a069f794ba1ef8cd1e6d339ecdeb12717f66136d043", 
    size: 15962715, 
    minSDKVersion: "16", 
    certificate_fingerprint: "EB:80:1A:30:32:94:BA:02:A8:4D:03:0E:BB:12:16:C4:38:AC:98:5A:D4:B8:92:08:E3:2D:7A:71:90:DC:DD:33", 
    certificate_owner: "Common Name: Viacheslav Krylov", 
    permission: ['android.permission.ACCESS_FINE_LOCATION', 'android.permission.FLASHLIGHT', 'android.permission.ACCESS_COARSE_LOCATION', 'org.thunderdog.challegram.permission.MAPS_RECEIVE', 'com.huawei.android.launcher.permission.WRITE_SETTINGS', 'com.sonyericsson.home.permission.BROADCAST_BADGE', 'android.permission.READ_PHONE_STATE', 'android.permission.BLUETOOTH', 'com.oppo.launcher.permission.READ_SETTINGS', 'android.permission.VIBRATE', 'me.everything.badger.permission.BADGE_COUNT_READ', 'com.google.android.c2dm.permission.RECEIVE', 'com.sec.android.provider.badge.permission.WRITE', 'android.permission.INTERNET', 'com.htc.launcher.permission.READ_SETTINGS', 'com.huawei.android.launcher.permission.READ_SETTINGS', 'android.permission.SYSTEM_ALERT_WINDOW', 'android.permission.WAKE_LOCK', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'me.everything.badger.permission.BADGE_COUNT_WRITE', 'android.permission.CHANGE_CONFIGURATION', 'com.htc.launcher.permission.UPDATE_SHORTCUT', 'com.sec.android.provider.badge.permission.READ', 'android.permission.WRITE_SETTINGS', 'android.permission.PROCESS_OUTGOING_CALLS', 'android.permission.REQUEST_INSTALL_PACKAGES', 'com.sonymobile.home.permission.PROVIDER_INSERT_BADGE', 'android.permission.READ_APP_BADGE', 'org.thunderdog.challegram.permission.C2D_MESSAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.READ_EXTERNAL_STORAGE', 'com.majeur.launcher.permission.UPDATE_BADGE', 'android.permission.MODIFY_AUDIO_SETTINGS', 'android.permission.CAMERA', 'android.permission.USE_FINGERPRINT', 'com.huawei.android.launcher.permission.CHANGE_BADGE', 'android.permission.READ_CONTACTS', 'android.permission.RECORD_AUDIO', 'com.oppo.launcher.permission.WRITE_SETTINGS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.anddoes.launcher.permission.UPDATE_COUNT']
  },
  {
    name: "Spotify", 
    SHA256: "454b72a972d3e2797acf44e7822cf1a51ca9f01b4c86612a22e2be6b0e5c191f", 
    size: 35820578, 
    minSDKVersion: "16", 
    certificate_fingerprint: "0C:FB:46:63:83:1A:0F:B8:D6:97:3A:AD:44:E2:21:A8:BA:78:F7:F6:84:BD:0B:17:D3:B4:4B:EC:82:31:64:84", 
    certificate_owner: "Common Name: rockz5555 OU=Droid Freedom Unit O=Droid Freedom Inc L=Unknown S=Unknown C=LK", 
    permission: ['android.permission.BROADCAST_STICKY', 'android.permission.INTERNET', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.sony.snei.np.android.account.provider.permission.DUID_READ_PROVIDER', 'android.permission.WAKE_LOCK', 'android.permission.USE_CREDENTIALS', 'com.android.vending.BILLING', 'android.permission.GET_ACCOUNTS', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.READ_PHONE_STATE', 'com.spotify.music.permission.SECURED_BROADCAST', 'android.permission.CHANGE_WIFI_MULTICAST_STATE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.BLUETOOTH_ADMIN', 'android.permission.MANAGE_ACCOUNTS', 'com.samsung.android.app.spage.permission.WRITE_CARD_DATA', 'com.spotify.music.permission.INTERNAL_BROADCAST', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.BLUETOOTH', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.ACCESS_WIFI_STATE', 'com.spotify.music.permission.C2D_MESSAGE', 'com.samsung.android.app.spage.permission.READ_CARD_DATA', 'android.permission.NFC', 'android.permission.MODIFY_AUDIO_SETTINGS']
  },
  {
    name: "Snapchat", 
    SHA256: "46710b44406ca52a6f3a5000ee1588f7e038c401f0c3d2ebedfbc5aa0aee3db8", 
    size: 30932650, 
    minSDKVersion: "14", 
    certificate_fingerprint: "2F:1C:AA:FC:A1:ED:30:D0:B4:E3:88:63:EE:FA:BE:A0:E8:15:71:1F:A4:CF:79:B8:22:51:9A:82:59:D9:5A:58", 
    certificate_owner: "Common Name: Daniel Smith, Organizational Unit: Captain Captcha, Organization: Snapchat, Locality: Los Angeles, State/Province: California, Country: 01", 
    permission: ['com.snapchat.android.permission.C2D_MESSAGE', 'android.permission.INTERNET', 'android.permission.VIBRATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.WAKE_LOCK', 'com.android.vending.BILLING', 'android.permission.READ_CONTACTS', 'android.permission.GET_ACCOUNTS', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.READ_PHONE_STATE', 'android.permission.CAMERA', 'android.permission.FLASHLIGHT', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.RECORD_AUDIO', 'android.permission.RECEIVE_SMS', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.READ_PROFILE', 'android.permission.MODIFY_AUDIO_SETTINGS']
  },
  {
    name: "Monopoly", 
    SHA256: "164e011cdd523769d4bdce9808631b6126bdd0bfa9768dad7ce766a64e33a8ff", 
    size: 1210183, 
    minSDKVersion: "5", 
    certificate_fingerprint: "49:77:61:5A:69:8B:3A:18:AB:D2:8C:D7:40:74:94:F9:5C:A6:F5:F4:8B:3E:B0:DB:47:E6:A5:A3:EF:50:49:FF", 
    certificate_owner: "Email Address: sc@gmail.com, Common Name: sc, Organizational Unit: sc, Organization: sc, Locality: bj, State/Province: bj, Country: CN", 
    permission: ['android.permission.ACCESS_WIFI_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.SET_ORIENTATION', 'com.android.vending.CHECK_LICENSE', 'android.permission.MODIFY_AUDIO_SETTINGS', 'android.permission.WAKE_LOCK', 'android.permission.INTERNET', 'android.permission.READ_PHONE_STATE']
  },
  {
    name: "Messenger", 
    SHA256: "e4d76d094bb8a964eef464f6ab41905181c019c593ae78b48977233689b044fc", 
    size: 39027236, 
    minSDKVersion: "21", 
    certificate_fingerprint: "E3:F9:E1:E0:CF:99:D0:E5:6A:05:5B:A6:5E:24:1B:33:99:F7:CE:A5:24:32:6B:0C:DD:6E:C1:32:7E:D0:FD:C1", 
    certificate_owner: "Common Name: Facebook Corporation, Organizational Unit: Facebook, Organization: Facebook Mobile, Locality: Palo Alto, State/Province: CA, Country: US", 
    permission: ['com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE', 'android.permission.WRITE_SYNC_SETTINGS', 'com.facebook.orca.permission.C2D_MESSAGE', 'android.permission.CALL_PHONE', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION', 'com.sec.android.provider.badge.permission.READ', 'android.permission.READ_SMS', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.READ_PHONE_STATE', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.SYSTEM_ALERT_WINDOW', 'android.permission.ACCESS_FINE_LOCATION', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.CAMERA', 'android.permission.READ_CONTACTS', 'android.permission.SEND_SMS', 'android.permission.WRITE_SMS', 'com.htc.launcher.permission.UPDATE_SHORTCUT', 'android.permission.INTERNET', 'android.permission.RECEIVE_SMS', 'com.htc.launcher.permission.READ_SETTINGS', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'android.permission.BLUETOOTH', 'android.permission.CHANGE_NETWORK_STATE', 'com.facebook.orca.provider.ACCESS', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.NFC', 'com.nokia.pushnotifications.permission.RECEIVE', 'com.amazon.device.messaging.permission.RECEIVE', 'com.facebook.orca.permission.RECEIVE_ADM_MESSAGE', 'com.huawei.android.launcher.permission.CHANGE_BADGE', 'com.sec.android.provider.badge.permission.WRITE', 'android.permission.WAKE_LOCK', 'android.permission.MANAGE_OWN_CALLS', 'android.permission.ACCESS_COARSE_LOCATION', 'android.permission.READ_PROFILE', 'android.permission.VIBRATE', 'android.permission.REQUEST_INSTALL_PACKAGES', 'android.permission.RECORD_AUDIO', 'com.facebook.orca.permission.CROSS_PROCESS_BROADCAST_MANAGER', 'android.permission.CHANGE_WIFI_STATE', 'android.permission.AUTHENTICATE_ACCOUNTS', 'com.facebook.permission.prod.FB_APP_COMMUNICATION', 'com.facebook.receiver.permission.ACCESS', 'android.permission.RECEIVE_MMS', 'com.sonyericsson.home.permission.BROADCAST_BADGE', 'android.permission.MODIFY_AUDIO_SETTINGS', 'android.permission.WRITE_CONTACTS', 'com.facebook.katana.provider.ACCESS', 'com.facebook.mlite.provider.ACCESS']
  },
  {
    name: "Instagram", 
    SHA256: "376aeb3cc6a0d77c0e8b6b7d40dfa676a00a6cd70c9ae9bd2baa692acbbc9fb8", 
    size: 8454384, 
    minSDKVersion: "9", 
    certificate_fingerprint: "5F:3E:50:F4:35:58:3C:9A:E6:26:30:2A:71:F7:34:00:44:08:7A:7E:2C:60:AD:AC:FC:25:42:05:A9:93:E3:05", 
    certificate_owner: "Common Name: Kevin Systrom, Organization: Instagram Inc, Locality: San Francisco, State/Province: California, Country: US", 
    permission: ['android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.GET_ACCOUNTS', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.BATTERY_STATS', 'android.permission.CAMERA', 'com.instagram.android.permission.RECEIVE_ADM_MESSAGE', 'android.permission.READ_CONTACTS', 'android.permission.READ_FRAME_BUFFER', 'android.permission.INTERNET', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.nokia.pushnotifications.permission.RECEIVE', 'com.amazon.device.messaging.permission.RECEIVE', 'android.permission.WAKE_LOCK', 'android.permission.READ_PROFILE', 'android.permission.RECORD_AUDIO', 'android.permission.SET_ORIENTATION', 'com.instagram.android.permission.C2D_MESSAGE']
  },
  {
    name: "Gmail", 
    SHA256: "ce76377894a41b1d661304aba2874354799628fd73cfa3503bf9b63ad7b96eba", 
    size: 3591566, 
    minSDKVersion: "14", 
    certificate_fingerprint: "F0:FD:6C:5B:41:0F:25:CB:25:C3:B5:33:46:C8:97:2F:AE:30:F8:EE:74:11:DF:91:04:80:AD:6B:2D:60:DB:83", 
    certificate_owner: "Common Name: Android, Organizational Unit: Android, Organization: Google Inc., Locality: Mountain View, State/Province: California, Country: US", 
    permission: ['com.google.android.gm.permission.AUTO_SEND', 'android.permission.READ_CONTACTS', 'android.permission.WRITE_CONTACTS', 'com.google.android.voicesearch.AUDIO_FILE_ACCESS', 'com.google.android.googleapps.permission.GOOGLE_AUTH.mail', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_SYNC_STATS', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.google.android.gm.permission.READ_GMAIL', 'android.permission.SUBSCRIBED_FEEDS_WRITE', 'android.permission.NFC', 'com.google.android.gm.permission.WRITE_GMAIL', 'android.permission.USE_CREDENTIALS', 'android.permission.SUBSCRIBED_FEEDS_READ', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'android.permission.WRITE_SYNC_SETTINGS', 'android.permission.WAKE_LOCK', 'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.VIBRATE', 'com.google.android.googleapps.permission.GOOGLE_AUTH', 'android.permission.INTERNET']
  },
  {
    name: "Fruit Ninja Free", 
    SHA256: "b9850cebe9d6e88b5a901e46daa7dce4c803f10ae640cf136dca6fbcda560552", 
    size: 19228297, 
    minSDKVersion: "7", 
    certificate_fingerprint: "C3:E0:EF:6A:2F:0A:B9:78:A9:BB:EA:30:AF:5E:21:6A:81:40:03:7A:B9:34:9C:AD:AD:BD:34:86:2C:F3:16:B9", 
    certificate_owner: "Common Name: Shainiel Deo, Organizational Unit: development, Organization: Halfbrick, Locality: Brisbane, State/Province: Queensland, Country: AU", 
    permission: ['android.permission.ACCESS_COARSE_LOCATION', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.GET_ACCOUNTS', 'android.permission.GET_TASKS', 'android.permission.WAKE_LOCK', 'android.permission.INTERNET', 'android.permission.READ_PHONE_STATE']
  },
  {
    name: "FIFA12", 
    SHA256: "ebae175e20632f6e404e6f6c42560af38ce1ab17b1958c2493f59ffe0f147d0f", 
    size: 14108163, 
    minSDKVersion: "7", 
    certificate_fingerprint: "5B:FF:7D:61:4E:1B:A1:1A:56:6A:BB:58:9C:86:3B:01:3F:79:AA:74:7B:D2:14:67:33:36:6C:56:25:A5:F0:D2", 
    certificate_owner: "Common Name: EAM, Organizational Unit: EAM, Organization: EAM, Locality: LA, State/Province: CA, Country: US", 
    permission: ['android.permission.ACCESS_WIFI_STATE', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.CHANGE_WIFI_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'com.android.vending.CHECK_LICENSE', 'android.permission.MODIFY_AUDIO_SETTINGS', 'android.permission.WAKE_LOCK', 'android.permission.INTERNET', 'android.permission.READ_PHONE_STATE']
  },
  {
    name: "Facebook", 
    SHA256: "3d690add7242d62ad559d3aefc8613015a8f6ed4aa8bc5e2962b857ab21834e1", 
    size: 31489381, 
    minSDKVersion: "14", 
    certificate_fingerprint: "E3:F9:E1:E0:CF:99:D0:E5:6A:05:5B:A6:5E:24:1B:33:99:F7:CE:A5:24:32:6B:0C:DD:6E:C1:32:7E:D0:FD:C1", 
    certificate_owner: "Common Name: Facebook Corporation, Organizational Unit: Facebook, Organization: Facebook Mobile, Locality: Palo Alto, State/Province: CA, Country: US", 
    permission: ['android.permission.WRITE_SYNC_SETTINGS', 'com.facebook.home.permission.WRITE_BADGES', 'android.permission.CALL_PHONE', 'com.facebook.katana.permission.RECEIVE_ADM_MESSAGE', 'android.permission.ACCESS_NETWORK_STATE', 'com.google.android.c2dm.permission.RECEIVE', 'com.facebook.katana.permission.C2D_MESSAGE', 'android.permission.DOWNLOAD_WITHOUT_NOTIFICATION', 'com.sec.android.provider.badge.permission.READ', 'android.permission.READ_SMS', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.MANAGE_ACCOUNTS', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.WRITE_CALENDAR', 'android.permission.ACCESS_FINE_LOCATION', 'android.permission.GET_ACCOUNTS', 'android.permission.READ_SYNC_SETTINGS', 'android.permission.READ_PHONE_STATE', 'android.permission.SYSTEM_ALERT_WINDOW', 'android.permission.BATTERY_STATS', 'android.permission.EXPAND_STATUS_BAR', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.CAMERA', 'android.permission.READ_CONTACTS', 'com.htc.launcher.permission.UPDATE_SHORTCUT', 'android.permission.REORDER_TASKS', 'android.permission.INTERNET', 'android.permission.BROADCAST_STICKY', 'com.htc.launcher.permission.READ_SETTINGS', 'android.permission.SET_WALLPAPER', 'android.permission.SET_WALLPAPER_HINTS', 'android.permission.READ_CALENDAR', 'com.google.android.providers.gsf.permission.READ_GSERVICES', 'com.facebook.orca.provider.ACCESS', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'com.nokia.pushnotifications.permission.RECEIVE', 'com.amazon.device.messaging.permission.RECEIVE', 'com.sec.android.provider.badge.permission.WRITE', 'android.permission.WAKE_LOCK', 'android.permission.ACCESS_COARSE_LOCATION', 'com.facebook.pages.app.provider.ACCESS', 'android.permission.READ_PROFILE', 'android.permission.VIBRATE', 'android.permission.CHANGE_WIFI_STATE', 'android.permission.RECORD_AUDIO', 'com.facebook.katana.permission.CROSS_PROCESS_BROADCAST_MANAGER', 'com.google.android.launcher.permission.READ_SETTINGS', 'android.permission.AUTHENTICATE_ACCOUNTS', 'com.facebook.permission.prod.FB_APP_COMMUNICATION', 'com.facebook.receiver.permission.ACCESS', 'com.facebook.permission.prod.SYSTEM_COMMUNICATION', 'android.permission.GET_TASKS', 'android.permission.MODIFY_AUDIO_SETTINGS', 'com.sonyericsson.home.permission.BROADCAST_BADGE', 'android.permission.WRITE_CONTACTS', 'com.facebook.katana.provider.ACCESS']
  },
  {
    name: "Compass", 
    SHA256: "7717751a45d6578002ba943eede16bdad9e01da5899ffdf8616df639c521ede0", 
    size: 2777192, 
    minSDKVersion: "4", 
    certificate_fingerprint: "3A:D7:BF:3F:04:5B:2F:92:DA:CD:91:88:00:CB:95:FA:C2:94:05:01:21:D4:CF:9A:23:8D:FD:E5:8C:83:73:D6", 
    certificate_owner: "Common Name: Bill Basaraba, Organizational Unit: Android Software, Organization: APK software, Locality: Gilbert, State/Province: AZ, Country: US", 
    permission: ['android.permission.ACCESS_COARSE_LOCATION', 'android.permission.WAKE_LOCK', 'android.permission.ACCESS_FINE_LOCATION', 'com.android.vending.BILLING', 'android.permission.ACCESS_NETWORK_STATE', 'com.apksoftware.compass.permission.ACTIVITY', 'android.permission.RECEIVE_BOOT_COMPLETED', 'android.permission.VIBRATE', 'android.permission.INTERNET']
  },
  {
    name: "Camera360", 
    SHA256: "ee59aee9b1cb340d7076c667be6ad4bb0dec4dcc4abdc356aef3ef75632b5d62", 
    size: 22202798, 
    minSDKVersion: "9", 
    certificate_fingerprint: "01:B6:CA:7F:4E:66:FC:2B:A4:28:67:C5:3E:C6:AC:DD:0C:80:E5:1C:66:E0:76:B8:27:E0:82:48:AE:95:9A:ED", 
    certificate_owner: "Common Name: vStudio", 
    permission: ['android.permission.ACCESS_COARSE_LOCATION', 'android.permission.GET_TASKS', 'android.permission.CAMERA', 'android.permission.CHANGE_WIFI_STATE', 'android.permission.WAKE_LOCK', 'android.permission.READ_PHONE_STATE', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.RECORD_AUDIO', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.CHANGE_WIFI_MULTICAST_STATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.INTERNET', 'android.permission.VIBRATE', 'com.android.launcher.permission.INSTALL_SHORTCUT', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.READ_LOGS', 'android.permission.MOUNT_UNMOUNT_FILESYSTEMS', 'android.permission.CHANGE_NETWORK_STATE', 'android.permission.WRITE_SYNC_SETTINGS', 'android.permission.WRITE_SETTINGS', 'android.permission.ACCESS_FINE_LOCATION']
  },
  {
    name: "Bible", 
    SHA256: "4fe0b2a4e24d0f80f1822a2cdaf4983894c46fb469b9f13483c87f902b16e2c4", 
    size: 13064908, 
    minSDKVersion: "8", 
    certificate_fingerprint: "4B:67:85:8F:AB:C9:2C:39:60:C7:31:55:05:68:BA:3C:72:40:3A:6D:63:7D:1B:10:7C:E3:A6:E6:35:4D:FE:B0", 
    certificate_owner: "Common Name: Michael Allen, Organizational Unit: Development, Organization: Tecarta Inc., Locality: Palo Alto, State/Province: California, Country: US", 
    permission: ['com.android.vending.BILLING', 'android.permission.VIBRATE', 'android.permission.WRITE_EXTERNAL_STORAGE', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.ACCESS_WIFI_STATE', 'android.permission.WAKE_LOCK', 'android.permission.INTERNET', 'android.permission.READ_PHONE_STATE']
  }
]

let backendServer = "https://6b718754.ngrok.io";
if (process.env.NODE_ENV !== 'production') {
  backendServer = "https://6b718754.ngrok.io";
}
export {
  backendServer
};