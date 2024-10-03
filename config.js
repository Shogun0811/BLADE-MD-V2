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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpwV3JtSmRjMVBiS1FSVkszUERGWmpqTmY5Tmx1ZVdzeHYxZFVEWXIydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3NMU2UrMUpyZ3FXcWs2ZkRScWhkREpxUElHNkRBRmVQQk1VYzBBQldUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSStIN0pzdlNjekFhTzhqQ1NVWVVyTjNNejk5bXBySzB2OG5yNVVKOVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwamZMdVdXeU1FZnlPSEMzMTBLdm1VbkFRdHZFNmkrYWtaK0FpRnRUOENFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKOTRVMFM1S3owR2prMlhoUlFMYXVxUU9iWU00NXZlM3l5a2gxTFF5bXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNlVzkya3hGRnl1aXpWRDc0eE1kdTlKZnRMSFdUVTUrS0tsQ0E1Z3B4Mkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0k4Y0RRVzZTWHV3bktKRG9vUGNtY1QvUUdXZktHRW84SitVZEJnVGxrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWFMZlZFTnlqWExNamdSK0FmVVpGV0dwcXNkZ05jcExtK2JoOU91ZnZSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRPeG4yVm5pZUN5T3d0NWM4ckRIQi81MlN4RnFEbndkcjZJQVhTTTVJclBtaVRRQnFwZU9icDN0UTJpcVd1L0cza3NiOW5samY1MnV4SXdHUFI3d2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJQUFRld2VpN05JVkx2WlVKOG5ZbVpFNnZxVWYzRHRKaWV0MmRDQjhZenZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKdElNNGc4RlREdThma19EaGdvYll3IiwicGhvbmVJZCI6IjIzMDNhMzhlLWQwYzktNDliNy05ZGY3LWQzZjYwMGZhYzI4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdHNvZXdYQmVrMEcveXVmZEJWTzA2d1VpdzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVpHaGZ3MS9RWjJKTWMvTnhIMmRaMWd3VG5nPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg0UU5DOE5XIiwibWUiOnsiaWQiOiIyMjE3NjAyNjM2MzE6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgfCdkKLwnZCc8J2QqPCdkKbwnZCa8J2Qq/CdkK4u8J2QkvCdkKHwnZCo8J2QoPCdkK7wnZCn8J2QmsSrLuOCpOODkOODqeODkuODniJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3U0MDRJREVJdnUrcmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUVtNjVsNVNnb1pRaUdVY2M1NEdycS9PZE8zNTd1NHN6ZVkxWkdMcDZGbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQUcrYkl0YmhzUkFNVC9OcGlDRjBaelJsNkxFeW40c0R6cTRWclZwVHUvcytlSHduTFJ4djRxY1lxNk1WS1Fvd2hVdVBGWjUvZnNaYSszd0NnRGo3REE9PSIsImRldmljZVNpZ25hdHVyZSI6IkM3bXFQSjZBS2FzSHk3WHp5dWRnbDk3UmNaTFVycFlPUVVnTk5ZOG9nM200eEdCZWFNaFlZUDczWml2bXZwdnJHTXIzTFhRZlByaGI2cmtjS0J1UWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzYwMjYzNjMxOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlloSnV1WmVVb0tHVUlobEhIT2VCcTZ2em5UdCtlN3VMTTNtTldSaTZlaGEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc5NjkwNDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkV3In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "★",
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
