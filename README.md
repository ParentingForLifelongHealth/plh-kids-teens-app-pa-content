# Sample content
Copy the structure of this repo for new repos deleting anything in app_data and re working config.ts

# Workflows
## Android-release
### Trigger
Manual
### Description
This will create a release and upload it to Google play console. The first time this is run users will need to upload the 'release_bundle' created in the action manually. It will only upload automatically once the first build as been uploaded.
### Setup needed
- APP_CODE_BRANCH - the tag/branch for the code repository
- APP_ID - app id used in firebase and play store (generally international.idems.[DEPLOYMENT NAME])
- DEPLOYMENT_NAME - Name of app (use underscores)
  
`using keytool -genkeypair -v -keystore [APP_ID] -keyalg RSA -keysize 2048 -validity 10000 -alias [ALIAS]`
  - ALIAS - Name of app (use hyphens)
  - KEY_PASSWORD - random
  - KEY_STORE_PASSWORD
  - SIGNING_KEY - generated with tool
- GOOGLE_PLAY_SERVICE_ACCOUNT_JSON - Service account to access Google Play

Play console set up
#### config.ts
    config.android
    config.api.db_name (to log data)
    config.error_logging (glitch tip dsn added)

## Content-sync
### Trigger
Manual
### Description
This will grab content from Sheets and create a PR with the changes
### Setup needed
- PAT - Personal access token from GitHub in order to comit code and create a PR
access to sheets via credentials (see https://developers.google.com/workspace/guides/create-credentials)
- GDRIVE_CREDENTIALS - 
- GDRIVE_TOKEN - 

#### config.ts
    config.google_drive 


## Deploy-firebase
### Trigger
Automatic - When new code is mergerd into main
### Description
This will create a web preview in Firebase
### Setup needed
- DEPLOYMENT_NAME - Name of app (use underscores)
- FIREBASE_HOSTING_CHANNEL - (live)
- FIREBASE_HOSTING_TARGET - name of the hosting site in the firebase project
- FIREBASE_PROJECT_ID - Project id in firebase (3 parts split by hyphens)
- FIREBASE_CONFIG  - firebase config from Web app created in firebase
## Deploy-pr-preview
### Trigger
Automatic - When 'test - preview' is added to a PR
### Description
This will create a temporary web preview based on the PR branch. The URL will be added to the PR
### Setup needed
See Deploy-firebase

## Firebase-release
### Trigger
Manual
### Description
Same as Deploy-firebase but uses FIREBASE_HOSTING_TARGET_RELEASE and is manually triggered
#### Setup needed

## Translations down
WIP
## Translations up
WIP
