const { fetchJson } = require('../functions')
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const getFBInfo = require("@xaviabot/fb-downloader");
const cheerio = require('cheerio')
const config = require('../../settings')
const { igdl } = require('ruhend-scraper')
const axios = require('axios');
const { cmd, commands } = require('../command')
const fetch = require('node-fetch'); // Ensure fetch is imported



cmd({
    pattern: "tiktok8",
    alias: ["tt8"],
    react: "🎥",
    desc: "Download tt videos",
    category: "download",
    use: ".tiktok <link>",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("*give me tiktok url ❌*")
        m.react('⬇️')
        //fetch data from api  
        let data = await downloadTiktok(q);
     let desc = `
   *SUHAS-MD TIKTOK DOWNLOADER* ⬇️

🔢 *Reply The Below Number:*

◈Title * ${data.result.title}

*TikTok Video.🎥*

*1 | SD Qulity.*
*2 | HD Qulity.*

*Tiktok Audio.🎶*

*3 | Audio File.*
   
*◈ URL:* ${q}
   
> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*       
     `

const sentMsg = await conn.sendMessage(from, {
  image: { url: data.result.image}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: desc,
  contextInfo: {
      mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363371157309766@newsletter',
          newsletterName: "S U H A S  -  M D 🇱🇰",
          serverMessageId: 999
      },
      externalAdReply: {
          title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
          mediaType: 1,
          sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
          thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
          renderLargerThumbnail: true,
          showAdAttribution: false
      }
  }
});
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
        let dat = data.result;

        // React to the upload (sending the file)
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        if (messageType === '1') {
            // Handle option 1 (no wm File)
            await conn.sendMessage(from, {
              video: { url: dat.dl_link.download_mp4_1}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*",
              contextInfo: {
                  mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
                  groupMentions: [],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363371157309766@newsletter',
                      newsletterName: "S U H A S  -  M D 🇱🇰",
                      serverMessageId: 999
                  },
                  externalAdReply: {
                      title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                      body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
                      mediaType: 1,
                      sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
                      thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
                      renderLargerThumbnail: true,
                      showAdAttribution: false
                  }
              }
            });
            }
         else if (messageType === '2') {
            // Handle option 2 (wm File)
            await conn.sendMessage(from, {
              video: { url: dat.dl_link.download_mp4_2}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*",
              contextInfo: {
                  mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
                  groupMentions: [],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363371157309766@newsletter',
                      newsletterName: "S U H A S  -  M D 🇱🇰",
                      serverMessageId: 999
                  },
                  externalAdReply: {
                      title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                      body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
                      mediaType: 1,
                      sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
                      thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
                      renderLargerThumbnail: true,
                      showAdAttribution: false
                  }
              }
            }); }
           
          else if (messageType === '3') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: dat.dl_link.download_mp3 }, mimetype: "audio/mpeg" }, { quoted: mek })  
    
          }

        // React to the successful completion of the task
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Response sent successfully");
    }
});

} catch (e) {
console.log(e);
reply(`${e}`);
}
});


// Facebook Downloader
cmd({
  pattern: "facebook8",
  alias: ["fb8"],
  desc: "Download Facebook videos",
  category: "download",
  use: ".facebook <link>",
  filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {

  if (!q || !q.startsWith("https://")) {
    return conn.sendMessage(from, { text: "Please provide a valid URL.⁉️" }, { quoted: mek });
}

await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });

const result = await getFBInfo(q);

    const captionHeader = `
*SUHAS-MD FB DOWNLOADER.⬇️*

◈ Title: ${result.title}

🔢 *Reply The Below Number:*


*Facebook Video.🎥*

*1.1 | SD Qulity.*
*1.2 | HD Qulity.*


*Facebook Audio.🎶*

*2.1 | Audio File*
*2.2 | Document File*
*2.3 | Voice Cut*

◈ Url: ${q} 

> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*
`;

const sentMsg = await conn.sendMessage(from, {
  image: { url: result.thumbnail}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
  caption: captionHeader,
  contextInfo: {
      mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363371157309766@newsletter',
          newsletterName: "S U H A S  -  M D 🇱🇰",
          serverMessageId: 999
      },
      externalAdReply: {
          title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
          body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
          mediaType: 1,
          sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
          thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
          renderLargerThumbnail: true,
          showAdAttribution: false
      }
  }
});
const messageID = sentMsg.key.id; // Save the message ID for later reference


// Listen for the user's response
conn.ev.on('messages.upsert', async (messageUpdate) => {
    const mek = messageUpdate.messages[0];
    if (!mek.message) return;
    const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    // Check if the message is a reply to the previously sent message
    const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

    if (isReplyToSentMsg) {
        // React to the user's reply (the "1" or "2" message)
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
        
        

        // React to the upload (sending the file)
        await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });

        if (messageType === '1.1') {
            // Handle option 1 (sd File)
            await conn.sendMessage(from, {
              video: { url: result.sd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*",
              contextInfo: {
                  mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
                  groupMentions: [],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363371157309766@newsletter',
                      newsletterName: "S U H A S  -  M D 🇱🇰",
                      serverMessageId: 999
                  },
                  externalAdReply: {
                      title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                      body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
                      mediaType: 1,
                      sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
                      thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
                      renderLargerThumbnail: true,
                      showAdAttribution: false
                  }
              }
            });
          }

          else if (messageType === '1.2') {
            // Handle option 2 (hd File)
            await conn.sendMessage(from, {
              video: { url: result.hd}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
              caption: "> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*",
              contextInfo: {
                  mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
                  groupMentions: [],
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363371157309766@newsletter',
                      newsletterName: "S U H A S  -  M D 🇱🇰",
                      serverMessageId: 999
                  },
                  externalAdReply: {
                      title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                      body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
                      mediaType: 1,
                      sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
                      thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
                      renderLargerThumbnail: true,
                      showAdAttribution: false
                  }
              }
            });
          }
           
          else if (messageType === '2.1') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: result.sd }, mimetype: "audio/mpeg" }, { quoted: mek })
          }
          
          else if (messageType === '2.2') {
            await conn.sendMessage(from, {
              document: { url: result.sd },
              mimetype: "audio/mpeg",
              fileName: `SUHAS-MD/FBDL.mp3`,
              caption: "> *© 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝚂𝚄𝙷𝙰𝚂  〽️𝙳*",
              contextInfo: {
                mentionedJid: ['94774132871@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363371157309766@newsletter',
                    newsletterName: "S U H A S  -  M D 🇱🇰",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'ᴀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                    body: '✨ 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 💕',
                    mediaType: 1,
                    sourceUrl: "https://github.com/SUHAS-BRO/SUHAS-MD",
                    thumbnailUrl: 'https://i.ibb.co/N6nWD9m/20250128-100821.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: true,
                    showAdAttribution: false
                }
            }
          }, { quoted: mek });
          }
          
          else if (messageType === '2.3') {
            //Handle option 3 (audio File)  
          await conn.sendMessage(from, { audio: { url: result.sd }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
    
          }

        // React to the successful completion of the task
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

        console.log("Response sent successfully");
    }
  });
} catch (e) {
console.log(e);
reply(`${e}`);
}
})
