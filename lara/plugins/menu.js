const { cmd, commands } = require('../command');
const os = require("os");
const {runtime} = require('../functions');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage} = require('@whiskeysockets/baileys');

cmd({
    pattern: "menu",
    alias:"help",
    desc: "Bot online test",
    react: "🌸",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
 let push = [];
         {       
let cap = `
`;
          let foot = `© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·`;
          const mediaMessage = await prepareWAMessageMedia({ image: { url: `https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/daenerys%20targaryen.jpeg` } }, { upload: conn.waUploadToServer });
          push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: cap
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: foot
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: `*Hi* ${pushname}`,
              subtitle: 'Sadeesha',
              hasMediaAttachment: true,
              ...mediaMessage
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                  {
                  "name": "cta_url",
                     "buttonParamsJson": "{\"display_text\":\"YouTube 🎊\",\"url\":\"https://youtube.com/@Sadeesha_Coder\",\"merchant_url\":\"https://www.google.com\"}"
                  },
                  {
                     "name": "cta_url",
                     "buttonParamsJson": "{\"display_text\":\"Developer 🎈\",\"url\":\"94779062397@s.whatsapp.net\",\"merchant_url\":\"https://www.google.com\"}"
                  },
                  {
                     "name": "cta_url",
                     "buttonParamsJson": "{\"display_text\":\"GitHub 📚\",\"url\":\"https://github.com/sadiyamin\",\"merchant_url\":\"https://www.google.com\"}"
                  },
                  {
                     "name": "cta_url",
                     "buttonParamsJson": "{\"display_text\":\"WhatsApp 🌸\",\"url\":\"https://whatsapp.com/channel/0029VaD5t8S1nozDfDDjRj2J\",\"merchant_url\":\"https://www.google.com\"}"
                  }      
              ]
            })
          });
        }   
        let sadee = `
┏━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻╭─────────────✑
◉│ *1*    *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ*
◉│ *2*    *ꜱᴇᴀʀᴄʜ ᴄᴍᴅ*
◉│ *3*    *ᴀɴɪᴍᴇ ᴄᴍᴅ*
◉│ *4*    *ꜰᴜɴ ᴄᴍᴅ*
◉│ *5*    *ᴄᴏɴᴠᴇʀᴛᴇᴅ ᴄᴍᴅ*
◉│ *6*    *ᴀɪ ᴄᴍᴅ*
◉│ *7*    *ɢʀᴏᴜᴘ ᴄᴍᴅ*
◉│ *8*    *ᴏᴡɴᴇʀ ᴄᴍᴅ*
◉│ *9*    *ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ*
┳╰─────────────✑
⁠⁠⁠⁠┗━┫ *⚬Lααɾα-ᴍᴅ-ᴍᴇɴᴜ⚬* ┣━✾

*ᴍᴇɴᴛɪᴏɴ & ʀᴇᴘʟʏ ᴛᴏ ɴᴜᴍʙᴇʀ ꜱᴇʟᴇᴄᴛ ᴡɪᴛʜ ᴄᴀᴛᴇɢᴏʀʏ*

> Lααɾα-ᴍᴅ ✻
        `;
        let foot2 = `© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·`;
        const msg = generateWAMessageFromContent(from, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                body: proto.Message.InteractiveMessage.Body.create({
                  text: sadee
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                  text: foot2
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                  hasMediaAttachment: false
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                  cards: push
                }),
                /*contextInfo: {
                      mentionedJid: ['94779062397@s.whatsapp.net'], 
                      forwardingScore: 1,
                      isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                      newsletterJid: '120363192254044294@newsletter',
                      newsletterName: 'lara',
                      serverMessageId: 143
                    }
                    */
                    //}
              })
            }
          }
        }, {quoted:mek});
       const sadeeSend = await conn.relayMessage(from, msg.message, {
          messageId: msg.key.id
        });
    console.log('Button Send Sucsses');

let menu1 = `
┏━┫*⚬Lααɾα-ᴍᴅ-ᴅᴏᴡɴ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.song*
 (_Downloading you tube song )_

- _🌸 Ex :  .song lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.video*
 (_Downloading you tube video )_

- _🌸 Ex :  .video lelena_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.fb*
 (_Downloading facebook video )_

- _🌸 Ex :  .fb <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tiktok*
 (_Downloading tiktok )_

- _🌸 Ex :  .tiktok <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.apk*
 (_Downloading apk )_

- _🌸 Ex :  .apk whatsapp_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.mfire*
 (_Downloading mediafire )_

- _🌸 Ex :  .mfire <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gdrive*

 (_Downloading google drive file)_

- _🌸 Ex :  .gdrive <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tg*

 (_Downloading instagrm)_

- _🌸 Ex :  .ig <link>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.twdl*

 (_Downloading twiter )_

- _🌸 Ex :  .twdl <url>_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*

 (_Downloading sinhala sub movie)_

- _🌸 Ex :  .movie spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.baiscope*

 (_Downloading baiscope movie )_

- _🌸 Ex :  .baiscope flash_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ginisisila*

 (_Downloading ginisisila cartoon )_

- _🌸 Ex :  .ginisisila ben 10_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.xvdl*

 (_Downloading xvideos videos )_

- _🌸 Ex :  .xvdl mia khalifa_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.xnxxdl*

 (_Downloading xnxx video )_

- _🌸 Ex :  .xnxxdl <link>_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu2 = `
┏━┫*⚬Lααɾα-ꜱᴇᴀʀᴄʜ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.img*

 (_Searching to google image)_

- _🌸 Ex :  .img cars_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.githubstalk*

 (_Searching to github profile)_

- _🌸 Ex :  .githubstalk sadiyamin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.wether*

 (_Searching to wether)_

- _🌸 Ex :  .wether mathara_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.movie*

 (_Searching to movie details)_

- _🌸 Ex :  .movie spider man_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.yts*

 (_Searching to you tube links)_

- _🌸 Ex :  .yts lara md whatsapp bot_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu3 = `
┏━┫*⚬Lααɾα-ᴀɴɪᴍᴇ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.loli*

 (_Random loli image_)

- _🌸 Ex :  .loli_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.waifu*

 (_Random waifu image_)

- _🌸 Ex :  .waifu_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.neko*

 (_Random neko image_)

- _🌸 Ex :  .neko_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.megumin*

 (_Random megumin image_)

- _🌸 Ex :  .megumin_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.maid*

 (_Random maid image_)

- _🌸 Ex :  .maid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.awoo*

 (_Random awoo image_)

- _🌸 Ex :  .awoo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu4 = `
┏━┫*⚬Lααɾα-ꜰᴜɴ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.hack*

 _(Hack Frank)_

- _🌸 Ex :  .hack_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu5 = `
┏━┫*⚬Lααɾα-ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.sticker*
         *.s*

 _(Photo to convert sticker)_

- _🌸 Ex :  .sticker <reply to photo or short video_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tts*

 _(Generated ai voice)_

- _🌸 Ex :  .tts Hello World_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.trt*

 _(Translate to all language)_

- _🌸 Ex :  .trt si how are you_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu6 = `
┏━┫*⚬Lααɾα-ᴀɪ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ai*

 _(Chat with ai)_

- _🌸 Ex :  .ai how are you_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gpt*

 _(Chat gpt)_

- _🌸 Ex :  .gpt what's node.js_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu7 = `
┏━┫*⚬Lααɾα-ɢʀᴏᴜᴘ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.mute*

 _(Group close)_

- _🌸 Ex :  .mute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.unmute*

 _(Group open)_

- _🌸 Ex :  .unmute_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.tagall*

 _(Group tag to all members)_

- _🌸 Ex :  .tagall Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.hidetag*

 _(Group tag to all members)_

- _🌸 Ex :  .hidetag Hi_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.promote*

 _(Group members promoted)_

- _🌸 Ex :  .promote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.demote*

 _(Group members demoted)_

- _🌸 Ex :  .demote @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kick*

 _(Group members remove)_

- _🌸 Ex :  .kick @mention_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.add*

 _(Group members add)_

- _🌸 Ex :  .add 9477×××××_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.kickall*

 _(Group all members remove)_
*⚠️ Warning*
- _🌸 Ex :  .kickall_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu8 = `
┏━┫*⚬Lααɾα-ᴏᴡɴᴇʀ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.block*

 _(Block user)_

- _🌸 Ex :  .block_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.ublock*

 _(Unblock user)_

- _🌸 Ex :  .unblock_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.jid*

 _(Send to chat jid)_

- _🌸 Ex :  .jid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.gjid*

 _(Send to group jid)_

- _🌸 Ex :  .gjid_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting the bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
let menu9 = `
┏━┫*⚬Lααɾα-ꜱʏꜱᴛᴇᴍ ᴄᴍᴅ⚬*┣━✾
┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┻
╭━━━━━━━━━━━━━━━
         *.ping*

 _(Test bot speed)_

- _🌸 Ex :  .ping
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.system*

 _(Check bot status)_

- _🌸 Ex :  .system_
╰━━━━━━━━━━━━━━━

╭━━━━━━━━━━━━━━━
         *.restart*

 _(Restarting alxa bot)_

- _🌸 Ex :  .restart_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.owner*

 _(Alexa developer team)_

- _🌸 Ex :  .owner_
╰━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━
         *.repo*
         *.src*
 _(Alexa bot github repo)_

- _🌸 Ex :  .repo_
╰━━━━━━━━━━━━━━━

> Lααɾα-ᴍᴅ ✻
`
          
      const messageID = msg.key.id; // Save the message ID for later reference


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
                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu1,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
            }
     }, {quoted: mek});
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu2,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '3') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu3,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '4') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu4,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '5') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu5,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '6') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu6,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '7') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu7,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '8') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu8,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                  } else if (messageType === '9') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/gzDsLsb/IMG-20241127-WA0023.jpg`}, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
            caption: menu9,
                        contextInfo: {
                mentionedJid: ['94779062397@s.whatsapp.net'], // specify mentioned JID(s) if any
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363192254044294@newsletter',
                    newsletterName: "Lααɾα-ᴍᴅ ✻",
                    serverMessageId: 999
                },
                /*externalAdReply: {
                    title: 'LARA MD',
                    body: 'ꜱᴀᴅᴇᴇꜱʜᴀ ᴛʜᴀʀᴜᴍɪɴ',
                    mediaType: 1,
                    sourceUrl: "https://github.com/sadiyamin",
                    thumbnailUrl: 'https://raw.githubusercontent.com/tharumin/Alexa_Voice/refs/heads/main/20241214_204755.jpg', // This should match the image URL provided above
                    renderLargerThumbnail: false,
                    showAdAttribution: true
                }
                */
            }
     }, {quoted: mek});
                    
                }
            }
            });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
