import { generateDeploymentConfig,loadEncryptedConfig } from "scripts";

const config = generateDeploymentConfig("plh_kids_teens_pa");

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-pa-content.git",
  content_tag_latest: "1.1.35",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1jCeiY4AUIzAqjsym4woqc-gD9wkYlw_U", name: "kids_teens_global V2" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1XducDjaLaYZCaYXLKrSwl0N-2LPi9Ls-", name: "kids_teens_pa" },
];

config.google_drive.assets_folders = [  
  {id: "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", name: "kids_global_assets"},
  {id: "11FFBdMbwQ8aiUkprH-qXYC-uONXmJLHs", name: "kids_teens_global V2 assets"},
  {id: "1Bd5jF92SY4ehEf-IdLA7cWBYK-nQgO_w", name: "kids_teens_pa"},
];

config.android = {
  app_id:'international.idems.plh_kids_teens_pa',
  app_name:'Crianza Reponsable y Amorosa',
  logo_asset_path: "./app_data/assets/android/icon-foreground.png",
  logo_background_color: "#FFFFFF",
  zoom_enabled: true
};

config.ios = {
  app_id:"international.idems.plh-kids-teens-pa",
  app_name:"Crianza Reponsable y Amorosa",
  logo_asset_path: "./app_data/assets/android/icon-foreground.png",
  logo_background_color: "#FFFFFF",
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

config.web.favicon_asset = "images/logos/favicon.png";

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
config.app_config.APP_THEMES.available = ["plh_kids_teens_pa"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_pa";
config.error_logging = { dsn: "https://17df9395def549e7835dfac8225d53e1@app.glitchtip.com/14124" };


export default config;
