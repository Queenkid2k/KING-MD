const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'india/kerala'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '919961528230'
global.devs = '919961528230';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'QUEEN-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'AJ EDITZ' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFjWFowcW05YWlvbUhBRHZyRytqQjZGeWx6L0lycWg3M3JiS0VxZ2VGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FoWXlNS2lMNXJHcUU1a2RzMVRGN0N0VjkrNzhDbjVZWG9ad1lXZVFVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRTVnMFArTURSUDBFanVMM1k5SWF2SHEyWHNzS2RxUzBCenVrU3hzWmtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyK01mMXlsY3pyODl0Yk1MRHVpdi9tQk41eHcyR3FpU0piUWFYVVhscWtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMcFNSdG0xU3lIV3ZkVUZ5dUtpODhnRDJQbmg1TWU2aEFlOVJ6MGxuWGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRBQ1pwYncwQzZhVElIN3V2a1VPVk84cEZ5MXBld0ZYTHpjalkyeC9VbVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pmaFlGRGlRRk5Ja0FzRm5maUxxa1k0QzlGNGZCNEQvVHduekhhSDVYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDRQOVlMVFlqdUFCNzRoMnIvbk9rVmhrbUg5WUMzYjlRSll2VFVOK09pST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndHd1VjTHp3aUN6R0tVTDdzVHY5UFYzZ3hxYmUrVmhQWkxMdE50SUsxY3gwRzhRQXlwOXFlM1JIZ29abTZZK3BQMGV3N1V2eU95S0dvT2ZLWlQ2VkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJOQVhHTlE5NDcrZXcwbjVTS1UwT2pSTjFXdG5HY1VFWGh0bHRQamtOUGFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTk2MTUyODIzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QkMzQjNDMjlFMDJCNjRGMDMwNEM3M0RBODU1ODk5RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4NjIxNjMxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk5NjE1MjgyMzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjVFMDlERUMwQkUwMzU4MjNBNDRBOUM2QzM5N0VEQjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODYyMTYzMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWUtxUXp2NjJUekdjaG9nQnBMcEkzZyIsInBob25lSWQiOiIyNzZhNjcwNS0wYTBjLTRkZWMtYmZkMS0xYzQ2OTE1OThlMWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDg0RTBjT2ZrUGMvUHBKeEg5bExhaUUyODVNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFQ0lhaWJuV3Z3M1ZFZER0L1Z1TzVsUEZkcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4RERXTDNTOCIsIm1lIjp7ImlkIjoiOTE5OTYxNTI4MjMwOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl5TwnZedIPCdl5jwnZeX8J2XnPCdl6fwnZetIPCdl5jwnZeZ8J2Xq/CflJsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05ieWltTVFycXZBc3dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlLS2g5MjlPN09PL01OQmU3d0g2Vk5NSldjTEV6NFZMNmh5VE0wRWdBbWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVLaEUrcHQ5OGxjc0xyeklLeS96TXVqVndEcWhtUmM2L0ZVTzRvNGtIbnpqVjJkSjVCbWdKZXZOUWg0Y2xzSHZJaXNWWlBXUnNiL0RIN09EWVo3b0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoVm5Ib2MrcHU5S2ZYbkU0bnZiMXd2TmlsVlA1ekRPUDFCR1k0K2phdE9IYnFJdmN3YTJtSS9ScUlpSWtBeElqekQ1ZWNla2Rzc010MjRXU3NlOU9DZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTk2MTUyODIzMDozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZaWlvZmR2VHV6anZ6RFFYdThCK2xUVENWbkN4TStGUytvY2t6TkJJQUpvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NjIxNjI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJxcSJ9" : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
