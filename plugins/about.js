/* 
created by TOHID KHAN
contact me 917849917350
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : ᴍʀ ᴅɪɴᴜᴡᴀ
 ◈ •│
 ◈ •│ Place      : ꜱʀɪ ʟᴀɴᴋᴀ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : ᴜɴʟɪᴍɪᴛᴇᴅ
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/94727163302
 ◈ •│
 ◈ •│ IG ID      : undefined 
 ◈ •│
 ◈ •│ Connect   : undefined 
 ◈ •│
 ◈ •│ Github     : dinuwamd
 ◈ •│
 ◈ •│ Website    :undefined 
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • DINUWA MD-TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴍʀ ᴅɪɴᴇꜱʜ*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ᴅɪɴᴜᴡᴀ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})