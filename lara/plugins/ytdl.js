const { cmd, commands } = require('../command');
const yts = require('yt-search');
const { fetchJson } = require('../functions');

cmd({
    pattern: "song2",
    alias: "play2",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*`Need YT_URL or Title`*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
◉┏━┫ *⚬Lααɾα-ꜱᴏɴɢ⚬* ┣━✾
◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┏┻━━━━━━━━━━━━━
┃ *Lααɾα-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ ✻*
┗━━━━━━━━━━━━━━

> ❍ *ᴛɪᴛʟᴇ :* ${data.title}
> ❍ *ᴅᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
> ❍ *ᴠɪᴇᴡꜱ :* ${data.views}
> ❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ${data.ago}


🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*
*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*

*1* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧_
*2* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ  📁_
*3* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴠᴏɪᴄᴇ 🎤_

> Lααɾα-ᴍᴅ ✻
`;
let info = `
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
 `;   
const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail},
            caption: desc,
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

                // React to the upload (sending the file)
                

                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const down =  await fetchJson(`https://api.davidcyriltech.my.id/download/ytmp3?url=${url}`);
                const downloadUrl = down.result.download_url;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downloadUrl }, 
                        mimetype: "audio/mpeg" ,
                        //contextInfo: {
                            //externalAdReply: {
                                //title: data.title,
                                //body: data.videoId,
                                //mediaType: 1,
                                //sourceUrl: data.url,
                                //thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                //renderLargerThumbnail: true,
                                //showAdAttribution: true
                            //}
                        //}
                    
                    }, { quoted: mek });
                    await conn.sendMessage(from, { delete: sentMsg.key });
                
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const down =  await fetchJson(`https://api.davidcyriltech.my.id/download/ytmp3?url=${url}`);
                const downloadUrl = down.result.download_url;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                    await conn.sendMessage(from, {
                        document: { url: downloadUrl},
                        mimetype: "audio/mp3",
                        fileName: `${data.title}.mp3`, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                        caption: info
                                            
                      }, { quoted: mek });
                      await conn.sendMessage(from, { delete: sentMsg.key });
                     } else if (messageType === '3') {
                     await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const down =  await fetchJson(`https://api.davidcyriltech.my.id/download/ytmp3?url=${url}`);
                const downloadUrl = down.result.download_url;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downloadUrl }, 
                        mimetype: "audio/mpeg" ,
                        ptt: "true" ,
                        //contextInfo: {
                            //externalAdReply: {
                                //title: data.title,
                                //body: data.videoId,
                                //mediaType: 1,
                                //sourceUrl: data.url,
                                //thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                //renderLargerThumbnail: true,
                                //showAdAttribution: true
                            //}
                        //}
                    
                    }, { quoted: mek });
                    await conn.sendMessage(from, { delete: sentMsg.key }); 
                }
            }
        });
        
 } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});  

cmd({
    pattern: "song",
    alias: "play",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("*`Need YT_URL or Title`*");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
◉┏━┫ *⚬Lααɾα-ꜱᴏɴɢ⚬* ┣━✾
◉┃            *ᴸ  ͣ  ͣ  ͬ  ͣ  ✻  ᴸ  ͣ  ͣ  ͬ  ͣ*
┏┻━━━━━━━━━━━━━
┃ *Lααɾα-ᴍᴅ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅ ✻*
┗━━━━━━━━━━━━━━

> ❍ *ᴛɪᴛʟᴇ :* ${data.title}
> ❍ *ᴅᴜʀᴀᴛɪᴏɴ :* ${data.timestamp}
> ❍ *ᴠɪᴇᴡꜱ :* ${data.views}
> ❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* ${data.ago}


🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*
*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*

*1* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧_
*2* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ  📁_
*3* | _ᴅᴏᴡɴʟᴏᴀᴅ ᴠᴏɪᴄᴇ 🎤_

> Lααɾα-ᴍᴅ ✻
`;
let info = `
*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴇᴇꜱʜᴀ ᴄᴏᴅᴇʀ · · ·*
 `;   
const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail},
            caption: desc,
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

                // React to the upload (sending the file)
                

                if (messageType === '1') {
                    // Handle option 1 (Audio File)
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const sadee =  await fetchJson(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${url}`);
                const downSadee = sadee.data.download;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downSadee }, 
                        mimetype: "audio/mpeg" ,
                        //contextInfo: {
                            //externalAdReply: {
                                //title: data.title,
                                //body: data.videoId,
                                //mediaType: 1,
                                //sourceUrl: data.url,
                                //thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                //renderLargerThumbnail: true,
                                //showAdAttribution: true
                            //}
                        //}
                    
                    }, { quoted: mek });
                    await conn.sendMessage(from, { delete: sentMsg.key });
                
                } else if (messageType === '2') {
                    // Handle option 2 (Document File)
                    await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const sadee =  await fetchJson(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${url}`);
                const downSadee = sadee.data.download;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });
                    await conn.sendMessage(from, {
                        document: { url: downSadee },
                        mimetype: "audio/mp3",
                        fileName: `${data.title}.mp3`, // Ensure `img.allmenu` is a valid image URL or base64 encoded image
                        caption: info
                                            
                      }, { quoted: mek });
                      await conn.sendMessage(from, { delete: sentMsg.key });
                     } else if (messageType === '3') {
                     await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });
                    const sadee =  await fetchJson(`https://dark-shan-yt.koyeb.app/download/ytmp3?url=${url}`);
                const downSadee = sadee.data.download;
                await conn.sendMessage(from, { react: { text: '⬆️', key: mek.key } });  
                    await conn.sendMessage(from, { 
                        audio: { url: downSadee }, 
                        mimetype: "audio/mpeg" ,
                        ptt: "true" ,
                        //contextInfo: {
                            //externalAdReply: {
                                //title: data.title,
                                //body: data.videoId,
                                //mediaType: 1,
                                //sourceUrl: data.url,
                                //thumbnailUrl: data.thumbnail, // This should match the image URL provided above
                                //renderLargerThumbnail: true,
                                //showAdAttribution: true
                            //}
                        //}
                    
                    }, { quoted: mek });
                    await conn.sendMessage(from, { delete: sentMsg.key }); 
                }
            }
        });
        
 } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});  
