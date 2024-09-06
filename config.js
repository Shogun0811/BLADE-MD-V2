//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "2348059540212";
global.owner = process.env.OWNER_NUMBER || "221760263631";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0x5ai9HUTBZUUVVbjhVczhGcDNaV0l5RWdCRmZVZ3ovMExlcjg2d0psMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHFjY2p5VFdCTXVWQm1RZmJKTGh0a2g3b3lxMmhmOFdZSnczNXhRSVdpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTFNHWStzelh1dGpFUkJRM3pUYnFUZ2lpVUM5TG9qRVBNMEFCcmNtNGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RnVnWkJEQ0ZnMm9rbGQ0R21lVHNRSDNpaU1YMkEveFJ4VjcrczRlSjFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1LT3lDRFpVSXIyTmxwZ0ViN1pXbW5KVjdLNWhnRmxDeHg5S2RnZE1DRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZaTUxNL1QzZ0xldXMycmxvaHVRUFJURmMrY1l0Zjc0WkZTQmpBdVlhenc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUd6ZVBhL0hTK2tZOHVrMTFSeloyZzhCenJWbWY1cDRDQTNEeVZ1VWlrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWdNbUdDZUJ6dzhETVk1TDhTNkxtb093WVZUVnM0ZzdXSDZYc3N5QjlYZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRBdU54WCswaVdadlpKbjFQZS93bFpXMWVKMk9iY1FEeTBwQlpPQWJ2UFNTZDNrbyt5UFU4WHNJcUdPQUlzd2N5VzY5UTBuUjYwTGJteEpNbllwdEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IlRMZXRCRGJiZ3hWbWlxU1ovS1lRR3ZESEVqdGdEclR4Tlp4eVFWWDh6ZVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNfUEJiUnN2U2Q2d2lXc0lycy04MVEiLCJwaG9uZUlkIjoiYjg3NzUyY2EtZTcxOC00MDZmLThkYWYtZGY0NTNmZWQ5MTYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY0WDlVd2xrby9SUHYxWUlISEhITmR0K0ZEMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydzdSMlZCTWxwMjF2dkhUakRBd1hFZXh1ZVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0RBSEg5RTMiLCJtZSI6eyJpZCI6IjIyMTc2MDI2MzYzMTo3NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWt8J2WjvCdlojwnZaU8J2WkvCdlobwnZaX8J2WmiDwnZW+8J2WjfCdlpTwnZaM8J2WmvCdlpPwnZaGxKsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iZnR5VVFsTHp0dGdZWUh5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVDb1JtTGpDcHVVWnMvZVhZM1h6djRubVh3UlhNY0NTZEVmZzhLaC9kVFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdZY2ZzVjlpVkY3NEwvK2tGa0VjZWFKZW5YVmZWYndNaXBYWmJ1ZjZvWGswWno5R0FYcEd6OFZ1VXovcGRXWEhoWlZodTkzN2J4b3gwVGd4T05QV0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnL1pPa3FoTFFLZXNrSUtqODNsM1hXRExmZ3BJVHhMNmZjSUJSbGszdnpWbTJKNndrN3VBZWlFb0cyTGw2NjNYQ2FJOTdHNXVtR3U1TWFKM1UreUFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc2MDI2MzYzMTo3NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiZ3FFWmk0d3FibEdiUDNsMk4xODcrSjVsOEVWekhBa25SSDRQQ29mM1UwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjUyNTEyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI0bSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "’",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "Bicomaru Shogunaī",
  packname: process.env.PACK_NAME || "illusion.🔋🇸🇳✨🃏",
  botname: process.env.BOT_NAME || "BLADE-MD-V2",
  ownername: process.env.OWNER_NAME || "Alex-tv",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
