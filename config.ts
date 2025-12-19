import { extendDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_teens_pa", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-pa-content.git",
  content_tag_latest: "1.0.2",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", name: "kids_global" },
  { id: "1GnKk8luhnYcWobeeEfbR23ZSoZakcNF9", name: "kids_teens_global" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1XducDjaLaYZCaYXLKrSwl0N-2LPi9Ls-", name: "kids_teens_pa" },
];

config.google_drive.assets_folders = [
  {id: "1Bd5jF92SY4ehEf-IdLA7cWBYK-nQgO_w", name: "kids_teens_pa"},
];

config.android = {
  app_id:'international.idems.plh_kids_teens_pa',
  app_name:'Panama',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
  zoom_enabled: true
};

config.ios = {
  app_id:"international.idems.plh-kids-teens-pa",
  app_name:"Panama",
  zoom_enabled: true
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
}

config.auth = {
  provider: 'firebase',
}

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";


config.api.db_name = "plh_kids_teens_pa";
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "PanamaApp";
config.app_config.APP_HEADER_DEFAULTS.title = "PanamaApp";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from PanamaApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from PanamaApp";
config.app_config.APP_THEMES.available = ["plh_kids_teens_za"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_za";
config.error_logging = { dsn: "https://17df9395def549e7835dfac8225d53e1@app.glitchtip.com/14124" };


export default config;
