
const fs = require('fs');
const path = require("path");
const axios = require("axios");
//const fg = require("api-dylux");
//const xnxx = require("xnxx-dl");
const yts = require("yt-search");
//const config = require("../config");
const {
  File
} = require('megajs');
const cheerio = require('cheerio');
const {
  Buffer
} = require("buffer");
const fetch = require("node-fetch");
const {
  igdl
} = require('ruhend-scraper');
const {
  cmd,
  commands
} = require("../command");
const {
  ytsearch,
  ytmp3,
  ytmp4
} = require("@dark-yasiya/yt-dl.js");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../functions');
let baseUrl;
(async () => {
  let _0x3c39e4 = await fetchJson("https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json");
  baseUrl = _0x3c39e4.api;
})();
async function Insta(_0x1d9257) {
  const _0xf3fe6d = [];
  const _0xdd4371 = {
    'url': _0x1d9257,
    'submit': ''
  };
  const {
    data: _0x495ca5
  } = await axios("https://downloadgram.org/", {
    'method': "POST",
    'data': _0xdd4371
  });
  const _0x40fc7f = cheerio.load(_0x495ca5);
  _0x40fc7f("#downloadhere > a").each(function (_0x4159d7, _0x1c1409) {
    const _0x24053e = _0x40fc7f(_0x1c1409).attr("href");
    if (_0x24053e) {
      _0xf3fe6d.push(_0x24053e);
    }
  });
  return _0xf3fe6d;
}
var needus = '';
if (config.LANG === 'SI') {
  needus = "*කරුණාකර මට Instagram url එකක් දෙන්න !!*";
} else {
  needus = "*Please give me Instagram url !!*";
}
var cantf = '';
if (config.LANG === 'SI') {
  cantf = "*මට මෙම වීඩියෝව සොයාගත නොහැක!*";
} else {
  cantf = "*I cant find this video!*";
}
cmd({
  'pattern': "phub",
  'alias': ['phubdl'],
  'react': '🔞',
  'desc': "Search and download Pornhub videos",
  'category': "download",
  'use': ".phub <search query>",
  'filename': __filename
}, async (_0x2eafe3, _0x1e4d30, _0x5d9dde, {
  from: _0x3b616f,
  args: _0x2eca1a,
  reply: _0x5d55df
}) => {
  try {
    const _0x21738e = _0x2eca1a.join(" ");
    if (!_0x21738e) {
      return await _0x5d55df("Please provide a search query.");
    }
    await _0x2eafe3.sendMessage(_0x3b616f, {
      'react': {
        'text': '🔍',
        'key': _0x1e4d30.key
      }
    });
    const _0x387208 = await axios.get("https://www.dark-yasiya-api.site/search/phub?q=" + encodeURIComponent(_0x21738e));
    if (!_0x387208.data.status || !_0x387208.data.result || _0x387208.data.result.length === 0x0) {
      return await _0x2eafe3.sendMessage(_0x3b616f, {
        'text': "No videos found or API error."
      }, {
        'quoted': _0x1e4d30
      });
    }
    const _0x35e01b = _0x387208.data.result.slice(0x0, 0xa);
    let _0x2a4b2f = "*🔞 PORNHUB VIDEO SEARCH RESULTS*\n\n";
    _0x35e01b.forEach((_0x26196a, _0x1e63c4) => {
      _0x2a4b2f += _0x1e63c4 + 0x1 + ". *" + _0x26196a.title + "*\n🔗 [Link](" + _0x26196a.url + ")\n\n";
    });
    _0x2a4b2f += "Reply with the number of the video you want to download.";
    const _0x1f0b88 = await _0x2eafe3.sendMessage(_0x3b616f, {
      'text': _0x2a4b2f,
      'quoted': _0x1e4d30
    });
    _0x2eafe3.ev.on('messages.upsert', async _0x1dff1c => {
      const _0x5ca135 = _0x1dff1c.messages[0x0];
      if (!_0x5ca135.message || !_0x5ca135.message.extendedTextMessage) {
        return;
      }
      const _0x2c1d02 = _0x5ca135.message.extendedTextMessage.text.trim();
      const _0x52633b = _0x5ca135.message.extendedTextMessage.contextInfo;
      if (_0x52633b && _0x52633b.stanzaId === _0x1f0b88.key.id) {
        const _0x5a0db2 = parseInt(_0x2c1d02) - 0x1;
        if (isNaN(_0x5a0db2) || _0x5a0db2 < 0x0 || _0x5a0db2 >= _0x35e01b.length) {
          return await _0x2eafe3.sendMessage(_0x3b616f, {
            'text': "Please enter a valid number corresponding to a video."
          }, {
            'quoted': _0x5ca135
          });
        }
        const _0x359b2b = _0x35e01b[_0x5a0db2];
        try {
          const _0x1e0765 = await axios.get("https://www.dark-yasiya-api.site/download/phub?url=" + encodeURIComponent(_0x359b2b.url));
          if (!_0x1e0765.data.status || !_0x1e0765.data.result || !_0x1e0765.data.result.format || _0x1e0765.data.result.format.length === 0x0) {
            return await _0x2eafe3.sendMessage(_0x3b616f, {
              'text': "Failed to fetch download options."
            }, {
              'quoted': _0x5ca135
            });
          }
          const _0x2d8998 = _0x1e0765.data.result.format;
          let _0x42efdc = "*🔞 DOWNLOAD OPTIONS FOR:*\n*" + _0x1e0765.data.result.video_title + "*\n\n";
          _0x2d8998.forEach((_0x1a37f1, _0x31ed35) => {
            _0x42efdc += _0x31ed35 + 0x1 + ". *" + _0x1a37f1.resolution + "p*\n\n";
          });
          _0x42efdc += "Reply with the number of the quality you want to download.";
          const _0x4fe808 = await _0x2eafe3.sendMessage(_0x3b616f, {
            'text': _0x42efdc,
            'quoted': _0x5ca135
          });
          _0x2eafe3.ev.on("messages.upsert", async _0xd509de => {
            const _0xd65cf3 = _0xd509de.messages[0x0];
            if (!_0xd65cf3.message || !_0xd65cf3.message.extendedTextMessage) {
              return;
            }
            const _0x395009 = _0xd65cf3.message.extendedTextMessage.text.trim();
            const _0x486981 = _0xd65cf3.message.extendedTextMessage.contextInfo;
            if (_0x486981 && _0x486981.stanzaId === _0x4fe808.key.id) {
              const _0x35ab37 = parseInt(_0x395009) - 0x1;
              if (isNaN(_0x35ab37) || _0x35ab37 < 0x0 || _0x35ab37 >= _0x2d8998.length) {
                return await _0x2eafe3.sendMessage(_0x3b616f, {
                  'text': "Please enter a valid number corresponding to a download option."
                }, {
                  'quoted': _0xd65cf3
                });
              }
              const _0x178ad6 = _0x2d8998[_0x35ab37];
              try {
                const _0x562529 = path.join(__dirname, _0x178ad6.resolution + "p.mp4");
                const _0x350e9a = fs.createWriteStream(_0x562529);
                const _0x411175 = await axios({
                  'url': _0x178ad6.download_url,
                  'method': "GET",
                  'responseType': "stream"
                });
                _0x411175.data.pipe(_0x350e9a);
                _0x350e9a.on("finish", async () => {
                  await _0x2eafe3.sendMessage(_0x3b616f, {
                    'video': {
                      'url': _0x562529
                    },
                    'caption': "Here is your " + _0x178ad6.resolution + "p video!"
                  }, {
                    'quoted': _0xd65cf3
                  });
                  await _0x2eafe3.sendMessage(_0x3b616f, {
                    'text': "Enjoy your video! If you have any other requests, feel free to ask."
                  }, {
                    'quoted': _0xd65cf3
                  });
                  fs.unlinkSync(_0x562529);
                });
              } catch (_0x5778ba) {
                console.error("Video Download Error:", _0x5778ba);
                await _0x5d55df("An error occurred while downloading the video.");
              }
            }
          });
        } catch (_0x2b92cf) {
          console.error("Download Options Fetch Error:", _0x2b92cf);
          await _0x5d55df("An error occurred while fetching download options.");
        }
      }
    });
  } catch (_0x545e0b) {
    console.error("Error", _0x545e0b);
    await _0x5d55df("An error occurred. Please try again.");
  }
});

cmd({
  'pattern': "tiktok2",
  'alias': ["tt2", "ttdown2"],
  'react': '📥',
  'desc': '',
  'category': "download",
  'use': ".tiktok < url >",
  'filename': __filename
}, async (_0x3c38c7, _0x1eeb78, _0x3e1147, {
  from: _0x3529a8,
  quoted: _0x457981,
  reply: _0x5e3c9e,
  q: _0x56f2a3
}) => {
  try {
    if (!_0x56f2a3) {
      return await _0x5e3c9e("Please give me tiktok url");
    }
    if (!_0x56f2a3.includes("tiktok.com")) {
      return await _0x5e3c9e("This url is invalid");
    }
    const _0x35ff27 = await fetchJson("https://www.dark-yasiya-api.site/download/tiktok?url=" + _0x56f2a3);
    const _0x1c5b14 = "\n╭─────────────────❖\n│📥*TIKTOK DOWNLOADER*📥\n╰─────────────────❖\n──────────────────❖\n╭────────────────❖\n│ ℹ️ *SUPUN-MD* \n│\n│☍ ⦁ *Title* - " + _0x35ff27.result.title + "\n│☍ ⦁ *Author* - " + _0x35ff27.result.author + "\n│☍ ⦁ *Duration* - " + _0x35ff27.result.duration + "\n│☍ ⦁ *Views* - " + _0x35ff27.result.views + "\n╰────────────────❖\n──────────────────❖\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n";
    await _0x3c38c7.sendMessage(_0x3529a8, {
      'image': {
        'url': _0x35ff27.result.cover || ''
      },
      'caption': _0x1c5b14
    }, {
      'quoted': _0x1eeb78
    });
    await _0x3c38c7.sendMessage(_0x3529a8, {
      'video': {
        'url': _0x35ff27.result.wmVideo
      },
      'mimetype': "video/mp4",
      'caption': _0x35ff27.result.title + "WATERMARK VIDEO ✅"
    }, {
      'quoted': _0x1eeb78
    });
    await _0x3c38c7.sendMessage(_0x3529a8, {
      'video': {
        'url': _0x35ff27.result.hdVideo
      },
      'mimetype': "video/mp4",
      'caption': _0x35ff27.result.title + "NO-WATERMARK VIDEO ✅"
    }, {
      'quoted': _0x1eeb78
    });
    await _0x3c38c7.sendMessage(_0x3529a8, {
      'audio': {
        'url': _0x35ff27.result.sound
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x1eeb78
    });
  } catch (_0x4577d7) {
    console.log(_0x4577d7);
    _0x5e3c9e(_0x4577d7);
  }
});

cmd({
  'pattern': "pussybdl",
  'alias': ['dlpussyb', "pussybdown", 'hentaivid'],
  'desc': "Download adult videos from pussyboy.net.",
  'category': "nsfw",
  'filename': __filename
}, async (_0x243444, _0x2af535, _0x538d2c, {
  from: _0x546d71,
  quoted: _0x4461ef,
  body: _0x422e69,
  isCmd: _0x39042d,
  command: _0x3f5dbc,
  args: _0x266285,
  query: _0x2ca6f4,
  isGroup: _0x37dfaf,
  sender: _0x125453,
  senderNumber: _0x2386ea,
  botNumber2: _0x379a9d,
  botNumber: _0x407860,
  pushname: _0x406fbf,
  isMe: _0x3009a4,
  isOwner: _0x4e02f8,
  groupMetadata: _0x1d537a,
  groupName: _0x35e140,
  participants: _0x58b554,
  groupAdmins: _0x245efe,
  isBotAdmins: _0x4beabd,
  isAdmins: _0x25768e,
  reply: _0x354199
}) => {
  try {
    await _0x538d2c.react('🔞');
    const _0x2d1356 = "https://www.pussyboy.net/porn/" + _0x2ca6f4 + '/';
    const _0x407aff = await fetch(_0x2d1356);
    const _0x246b26 = await _0x407aff.text();
    const _0xbae2e6 = cheerio.load(_0x246b26);
    const _0x31fe18 = _0xbae2e6("body > div.container-xxl.videos > div.col-md-12.videos-detail > div.col-md-12.videos-details > div > video > source").attr("src");
    await _0x243444.sendMessage(_0x546d71, {
      'video': {
        'url': _0x31fe18
      },
      'mimetype': "video/mp4",
      'caption': "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
    }, {
      'quoted': _0x2af535
    });
  } catch (_0x42bf44) {
    console.error(_0x42bf44);
    _0x354199("Error: " + _0x42bf44.message);
  }
});

cmd({
  'pattern': "xnxx",
  'desc': "Downloads a video from XNXX",
  'use': ".xnxx <search_term>",
  'react': '❗',
  'category': 'downloads',
  'filename': __filename
}, async (_0x5ac6fe, _0x52bbdd, _0xdeb73f, {
  from: _0x5c5564,
  quoted: _0x51c8cb,
  body: _0x2df5f2,
  q: _0x18fea1,
  reply: _0x48f5b7
}) => {
  const _0x30066b = _0x18fea1.trim();
  if (!_0x30066b) {
    return _0x48f5b7("NAME FOR URL PLEASE  ➤");
  }
  _0x48f5b7("අවවාදයයි..❌..අසබ්ය දර්ශන දැකිමෙන් ඔබෙ දරුවා ඉට යොමුවිය හැකිය❗...");
  try {
    const _0x1b488a = await xnxx.download(_0x30066b);
    if (!_0x1b488a || !_0x1b488a.link_dl) {
      return await _0x5ac6fe.sendMessage(_0x5c5564, {
        'react': {
          'text': '❌',
          'key': _0x52bbdd.key
        }
      });
    }
    _0x48f5b7("XNXX VIDEO Downloading  please waite 🚀❗💯...");
    const _0x143527 = _0x1b488a.link_dl;
    await _0x5ac6fe.sendMessage(_0x5c5564, {
      'video': {
        'url': _0x143527
      },
      'caption': "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ",
      'mimetype': 'video/mp4'
    }, await _0x5ac6fe.sendMessage(_0x5c5564, {
      'document': {
        'url': _0x143527
      },
      'caption': "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ",
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x52bbdd
    }));
    await _0x5ac6fe.sendMessage(_0x5c5564, {
      'react': {
        'text': '✅',
        'key': _0x52bbdd.key
      }
    });
  } catch (_0x2ef05b) {
    console.log(_0x2ef05b);
    await _0x5ac6fe.sendMessage(_0x5c5564, {
      'react': {
        'text': '❌',
        'key': _0x52bbdd.key
      }
    });
    _0x48f5b7("Error: " + _0x2ef05b.message);
  }
});
module.exports = {};
cmd({
  'pattern': 'img8',
  'desc': "Search and send images from Google.",
  'react': '🏞️',
  'category': 'media',
  'filename': __filename
}, async (_0x149263, _0x1dd89a, _0x51ded4, {
  from: _0x2fe753,
  quoted: _0x162954,
  body: _0x5358ce,
  isCmd: _0x4a4fb3,
  command: _0x3f05ac,
  args: _0x307d7a,
  q: _0xb75735,
  isGroup: _0x1335bc,
  sender: _0x4c8586,
  senderNumber: _0x1ad50d,
  botNumber2: _0x3e2ac4,
  botNumber: _0x100b8e,
  pushname: _0x825560,
  isMe: _0x1cfe47,
  isOwner: _0x3b5ad3,
  groupMetadata: _0x51c93b,
  groupName: _0x544637,
  participants: _0x561035,
  groupAdmins: _0x394cd0,
  isBotAdmins: _0x5d0ca6,
  isAdmins: _0x3adf2d,
  reply: _0x84f964
}) => {
  try {
    if (!_0xb75735) {
      return _0x84f964("Please provide a search query for the image.");
    }
    const _0x1b5ace = encodeURIComponent(_0xb75735);
    const _0x2f8d9f = "https://www.googleapis.com/customsearch/v1?q=" + _0x1b5ace + "&cx=" + "baf9bdb0c631236e5" + "&key=" + 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI' + "&searchType=image&num=5";
    const _0x2521a6 = await axios.get(_0x2f8d9f);
    const _0x283e0b = _0x2521a6.data;
    if (!_0x283e0b.items || _0x283e0b.items.length === 0x0) {
      return _0x84f964("No images found for your query.");
    }
    for (let _0x48ed8a = 0x0; _0x48ed8a < _0x283e0b.items.length; _0x48ed8a++) {
      const _0x3bea66 = _0x283e0b.items[_0x48ed8a].link;
      const _0xbd24c0 = await axios.get(_0x3bea66, {
        'responseType': "arraybuffer"
      });
      const _0x5b56d2 = Buffer.from(_0xbd24c0.data, "binary");
      await _0x149263.sendMessage(_0x2fe753, {
        'image': _0x5b56d2,
        'caption': "\n*⛬ Image " + (_0x48ed8a + 0x1) + " from your search! ⛬*\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
      }, {
        'quoted': _0x1dd89a
      });
    }
  } catch (_0x366577) {
    console.error(_0x366577);
    _0x84f964("Error: " + _0x366577.message);
  }
});

cmd({
  'pattern': "gdrive",
  'alias': ['googledrive'],
  'desc': "download gdrive files",
  'category': "download",
  'react': '🔎',
  'filename': __filename
}, async (_0x28d107, _0x3eacc6, _0x2a4c5e, {
  from: _0x1a06f1,
  quoted: _0xa28ac7,
  body: _0x306e33,
  isCmd: _0x375648,
  command: _0x4928a2,
  args: _0x45ae3c,
  q: _0x2be0bb,
  isGroup: _0x3da4b6,
  sender: _0x15dda7,
  senderNumber: _0x1b5b2b,
  botNumber2: _0x5bf134,
  botNumber: _0x5b531d,
  pushname: _0x334c80,
  isMe: _0x31bc79,
  isOwner: _0x2c2cbd,
  groupMetadata: _0x5500b7,
  groupName: _0x19b04d,
  participants: _0x55779c,
  groupAdmins: _0x22485d,
  isBotAdmins: _0x1035e9,
  isAdmins: _0x5db91c,
  reply: _0x41fd23
}) => {
  try {
    if (!_0x2be0bb && !_0x2be0bb.startsWith("https://")) {
      return _0x41fd23("give me gdrive url");
    }
    let _0x526e77 = await fetchJson(baseUrl + "/api/gdrivedl?url=" + _0x2be0bb);
    _0x41fd23('*Downloading...*');
    await _0x28d107.sendMessage(_0x1a06f1, {
      'document': {
        'url': _0x526e77.data.download
      },
      'fileName': _0x526e77.data.fileName,
      'mimetype': _0x526e77.data.mimeType,
      'caption': _0x526e77.data.fileName + "\n\n" + "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
    }, {
      'quoted': _0x3eacc6
    });
  } catch (_0x5b1e8c) {
    console.log(_0x5b1e8c);
    _0x41fd23('' + _0x5b1e8c);
  }
});
cmd({
  'pattern': "mediafire",
  'alias': ['mfire'],
  'desc': "download mfire files",
  'category': 'download',
  'react': '🔎',
  'filename': __filename
}, async (_0x2cd97a, _0x42faec, _0xee279a, {
  from: _0x220e31,
  quoted: _0x55fa44,
  body: _0x216146,
  isCmd: _0x238448,
  command: _0x226e26,
  args: _0x457385,
  q: _0x1591f7,
  isGroup: _0x45d0bd,
  sender: _0x1ec789,
  senderNumber: _0x296cda,
  botNumber2: _0x433a0b,
  botNumber: _0x3812ae,
  pushname: _0x38b333,
  isMe: _0x1a0c16,
  isOwner: _0x566989,
  groupMetadata: _0x856c21,
  groupName: _0x16c895,
  participants: _0x4ead4e,
  groupAdmins: _0x348602,
  isBotAdmins: _0x1e17d1,
  isAdmins: _0x420873,
  reply: _0x385628
}) => {
  try {
    if (!_0x1591f7 && !_0x1591f7.startsWith("https://")) {
      return _0x385628("give me mediafire url");
    }
    let _0x46dfd0 = await fetchJson(baseUrl + "/api/mediafiredl?url=" + _0x1591f7);
    _0x385628('*Downloading...*');
    await _0x2cd97a.sendMessage(_0x220e31, {
      'document': {
        'url': _0x46dfd0.data.link_1
      },
      'fileName': _0x46dfd0.data.name,
      'mimetype': _0x46dfd0.data.file_type,
      'caption': _0x46dfd0.data.name + "\n\n" + "> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
    }, {
      'quoted': _0x42faec
    });
  } catch (_0x4386d8) {
    console.log(_0x4386d8);
    _0x385628('' + _0x4386d8);
  }
});
cmd({
  'pattern': "spotify",
  'alias': ['spotifydl', "song"],
  'desc': "Download songs from Spotify",
  'category': 'downloader',
  'react': '🎵',
  'filename': __filename
}, async (_0x3c0a21, _0x583e32, _0x3c6ec4, {
  from: _0x240b33,
  args: _0x562ebf,
  reply: _0x137de2
}) => {
  try {
    if (!_0x562ebf[0x0]) {
      return _0x137de2("Please provide a Spotify song URL\nExample: .spotify https://open.spotify.com/track/...");
    }
    const _0x37ca2c = await _0x137de2("🎶 Downloading Spotify track... Please wait.\n> SUPUN MD");
    const _0x41f1a3 = await axios.get("https://www.dark-yasiya-api.site/download/spotify", {
      'params': {
        'url': _0x562ebf[0x0]
      }
    });
    const _0x24fb8a = _0x41f1a3.data.result;
    const _0x1eaf83 = "🎵 *Spotify Song Download* 🎵\n\n*Title:* " + _0x24fb8a.title + "\n\n*Artist:* " + _0x24fb8a.author + "\n\n\n> SUPUN-MD 🌝\n\n📥 Downloading...";
    await _0x3c0a21.sendMessage(_0x240b33, {
      'image': {
        'url': _0x24fb8a.thumbnail
      },
      'caption': _0x1eaf83
    });
    await _0x3c0a21.sendMessage(_0x240b33, {
      'audio': {
        'url': _0x24fb8a.music
      },
      'mimetype': "audio/mpeg",
      'fileName': _0x24fb8a.title + " - " + _0x24fb8a.author + ".mp3"
    }, {
      'quoted': _0x583e32
    });
    await _0x3c0a21.sendMessage(_0x240b33, {
      'delete': _0x37ca2c.key
    });
  } catch (_0x1c4abe) {
    console.error("Spotify Download Error:", _0x1c4abe);
    _0x137de2("Failed to download the song. Please check the URL and try again.");
  }
});
cmd({
  'pattern': "mega",
  'react': '🍟',
  'alias': ["megadl", "meganz"],
  'desc': "urlneed",
  'category': "download",
  'use': ".mega url",
  'filename': __filename
}, async (_0xc93a71, _0xb93fb9, _0x209dd9, {
  from: _0x316745,
  q: _0x4d9d44,
  reply: _0xe74847
}) => {
  if (!_0x4d9d44) {
    return await _0xe74847("*Please provide a mega.nz URL!*");
  }
  try {
    const _0x5ee376 = File.fromURL(_0x4d9d44);
    await _0x5ee376.loadAttributes();
    const _0x443faa = await _0x5ee376.downloadBuffer();
    if (/mp4/.test(_0x5ee376.name)) {
      await _0xc93a71.sendMessage(_0x316745, {
        'document': _0x443faa,
        'mimetype': "video/mp4",
        'filename': '' + _0x5ee376.name
      }, {
        'quoted': _0xb93fb9
      });
    } else {
      if (/pdf/.test(_0x5ee376.name)) {
        await _0xc93a71.sendMessage(_0x316745, {
          'document': _0x443faa,
          'mimetype': "application/pdf",
          'filename': '' + _0x5ee376.name
        }, {
          'quoted': _0xb93fb9
        });
      } else {
        if (/zip/.test(_0x5ee376.name)) {
          await _0xc93a71.sendMessage(_0x316745, {
            'document': _0x443faa,
            'mimetype': "application/zip",
            'filename': '' + _0x5ee376.name
          }, {
            'quoted': _0xb93fb9
          });
        } else {
          if (/rar/.test(_0x5ee376.name)) {
            await _0xc93a71.sendMessage(_0x316745, {
              'document': _0x443faa,
              'mimetype': "application/x-rar-compressed",
              'filename': '' + _0x5ee376.name
            }, {
              'quoted': _0xb93fb9
            });
          } else {
            if (/7z/.test(_0x5ee376.name)) {
              await _0xc93a71.sendMessage(_0x316745, {
                'document': _0x443faa,
                'mimetype': "application/x-7z-compressed",
                'filename': '' + _0x5ee376.name
              }, {
                'quoted': _0xb93fb9
              });
            } else {
              if (/jpg|jpeg/.test(_0x5ee376.name)) {
                await _0xc93a71.sendMessage(_0x316745, {
                  'document': _0x443faa,
                  'mimetype': "image/jpeg",
                  'filename': '' + _0x5ee376.name
                }, {
                  'quoted': _0xb93fb9
                });
              } else if (/png/.test(_0x5ee376.name)) {
                await _0xc93a71.sendMessage(_0x316745, {
                  'document': _0x443faa,
                  'mimetype': "image/png",
                  'filename': '' + _0x5ee376.name
                }, {
                  'quoted': _0xb93fb9
                });
              } else {
                await _0xc93a71.sendMessage(_0x316745, {
                  'document': _0x443faa,
                  'mimetype': 'application/octet-stream',
                  'filename': '' + _0x5ee376.name
                }, {
                  'quoted': _0xb93fb9
                });
              }
            }
          }
        }
      }
    }
    await _0xc93a71.sendMessage(_0x316745, {
      'react': {
        'text': '✅',
        'key': _0xb93fb9.key
      }
    });
  } catch (_0x4219d4) {
    console.log(_0x4219d4);
    _0xe74847('' + _0x4219d4);
  }
});
cmd({
  'pattern': "xnxx2",
  'desc': "Adult content search",
  'use': ".xnxx <search_term>",
  'react': '🔞',
  'category': "download",
  'filename': __filename
}, async (_0x39fe15, _0x20f17c, _0x580f71, {
  from: _0x2540fd,
  prefix: _0x4123de,
  l: _0x212efc,
  quoted: _0x427b36,
  body: _0x5e1265,
  isCmd: _0x35279f,
  command: _0x5e4736,
  args: _0x18c32a,
  q: _0x4910c0,
  isGroup: _0x313723,
  sender: _0x41a3ce,
  senderNumber: _0x2d5f64,
  botNumber2: _0x2f9c25,
  botNumber: _0x509698,
  pushname: _0x1a1a00,
  isMe: _0x5d3977,
  isOwner: _0x399da8,
  groupMetadata: _0xecc2da,
  groupName: _0x208e48,
  participants: _0x21265d,
  groupAdmins: _0x1acbaa,
  isBotAdmins: _0x32c203,
  isAdmins: _0x28458b,
  reply: _0x2e3eda
}) => {
  const _0xe61e40 = await _0x39fe15.sendMessage(_0x2540fd, {
    'text': "\n🚨 *EXPLICIT CONTENT WARNING* 🚨\n\n⚠️ This command accesses adult content:\n\n*IMPORTANT GUIDELINES*:\n1. You must be 18+ years old\n2. Comply with local legal regulations\n3. Respect ethical content consumption\n4. Protect personal privacy\n5. Avoid harmful or exploitative material\n\n*Responsible Usage Principles*:\n- Consent is paramount\n- Respect human dignity\n- Be aware of potential psychological impacts\n\n*Legal Disclaimer*:\n- Content may be inappropriate\n- Potential legal restrictions apply\n- User discretion is strongly advised\n\n*INSTRUCTIONS*:\n- Reply with *CONFIRM* to proceed\n- Reply with *CANCEL* to exit\n\n*ADDITIONAL OPTIONS*:\n1. View Menu\n2. Get Ethical Guidelines\n3. Cancel Operation\n    ",
    'mentions': [_0x41a3ce]
  }, {
    'quoted': _0x20f17c
  });
  const _0x34b199 = await new Promise(_0x395d78 => {
    const _0x3a560c = async _0x53c2c7 => {
      const _0x509a0b = _0x53c2c7.messages[0x0];
      if (_0x509a0b.message?.['extendedTextMessage']?.["contextInfo"]?.["stanzaId"] === _0xe61e40.key.id && _0x509a0b.key.participant === _0x41a3ce) {
        const _0x2cb6b9 = _0x509a0b.message.extendedTextMessage.text.trim();
        switch (_0x2cb6b9.toUpperCase()) {
          case "CONFIRM":
            _0x39fe15.ev.off("messages.upsert", _0x3a560c);
            _0x395d78(true);
            break;
          case "CANCEL":
            _0x39fe15.ev.off("messages.upsert", _0x3a560c);
            _0x395d78(false);
            break;
          case '1':
            await _0x39fe15.sendMessage(_0x2540fd, {
              'text': "Showing main menu..."
            }, {
              'quoted': _0x509a0b
            });
            break;
          case '2':
            await _0x39fe15.sendMessage(_0x2540fd, {
              'text': "\n🛡️ *ETHICAL GUIDELINES* 🛡️\n\n1. Respect consent\n2. Protect privacy\n3. Avoid exploitation\n4. Be mindful of psychological impacts\n5. Comply with legal regulations\n                            "
            }, {
              'quoted': _0x509a0b
            });
            break;
          case '3':
            _0x39fe15.ev.off("messages.upsert", _0x3a560c);
            _0x395d78(false);
            break;
          default:
            await _0x39fe15.sendMessage(_0x2540fd, {
              'text': "Invalid option. Please choose 1, 2, 3, CONFIRM, or CANCEL."
            }, {
              'quoted': _0x509a0b
            });
        }
      }
    };
    _0x39fe15.ev.on("messages.upsert", _0x3a560c);
    setTimeout(() => {
      _0x39fe15.ev.off("messages.upsert", _0x3a560c);
      _0x395d78(false);
    }, 0x7530);
  });
  if (!_0x34b199) {
    await _0x39fe15.sendMessage(_0x2540fd, {
      'text': "⛔ Operation cancelled. Exiting adult content search."
    }, {
      'quoted': _0x20f17c
    });
    return;
  }
  try {
    const _0x17c39b = _0x4910c0?.["trim"]();
    if (!_0x17c39b) {
      return _0x2e3eda("*Please provide a search term*");
    }
    _0x2e3eda("🔍 Searching for content in SUPUN-MD WA BOT ➤...");
    try {
      const _0x508316 = await xnxx.download(_0x17c39b);
      if (!_0x508316 || !_0x508316.link_dl) {
        return _0x39fe15.sendMessage(_0x2540fd, {
          'react': {
            'text': '❌',
            'key': _0x20f17c.key
          }
        });
      }
      _0x2e3eda("⬇️ Downloading content. Please wait ➤...");
      const _0x9771cf = _0x508316.link_dl;
      await _0x39fe15.sendMessage(_0x2540fd, {
        'video': {
          'url': _0x9771cf
        },
        'caption': "\n⚠️ *ETHICAL CONSUMPTION REMINDER* ⚠️\n\n- Respect content creators\n- Ensure consensual material\n- Be mindful of psychological impact\n- Practice responsible viewing\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n            ",
        'mimetype': "video/mp4"
      }, await _0x39fe15.sendMessage(_0x2540fd, {
        'document': {
          'url': _0x9771cf
        },
        'caption': "\n⚠️ *ETHICAL CONSUMPTION REMINDER* ⚠️\n\n- Respect content creators\n- Ensure consensual material\n- Be mindful of psychological impact\n- Practice responsible viewing\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n            ",
        'mimetype': 'video/mp4'
      }, {
        'quoted': _0x20f17c
      }));
      await _0x39fe15.sendMessage(_0x2540fd, {
        'react': {
          'text': '✅',
          'key': _0x20f17c.key
        }
      });
    } catch (_0x4b6b47) {
      console.error("Download Error:", _0x4b6b47);
      _0x2e3eda("*Download Error:* " + _0x4b6b47.message);
    }
  } catch (_0x26605a) {
    console.error("Unexpected Error:", _0x26605a);
    _0x2e3eda("*Unexpected Error:* " + _0x26605a.message);
  }
});
cmd({
  'pattern': 'gitdl',
  'desc': "Download and send a zip file of a GitHub repository.",
  'category': "utilities",
  'react': '🔗',
  'filename': __filename
}, async (_0x576703, _0x3878b5, _0x11dc47, {
  reply: _0x313853,
  prefix: _0x3715f3
}) => {
  try {
    let _0x1d5c8d = _0x11dc47.text.split(" ")[0x1];
    if (!_0x1d5c8d) {
      return _0x313853("⚠️ *Please provide a GitHub repository URL. Example: .git https://github.com/user/repo*");
    }
    const _0x535909 = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
    const _0x1db02c = _0x1d5c8d.match(_0x535909);
    if (!_0x1db02c) {
      return _0x313853("⚠️ *The provided URL doesn't seem to be a valid GitHub repository.*");
    }
    const _0x42993a = "https://github.com/" + _0x1db02c[0x1] + '/' + _0x1db02c[0x2] + "/archive/refs/heads/main.zip";
    console.log("Attempting to download from: " + _0x42993a);
    const _0x2d2867 = await axios.get(_0x42993a, {
      'responseType': 'arraybuffer'
    });
    if (_0x2d2867.status !== 0xc8) {
      throw new Error("Failed to download, HTTP status: " + _0x2d2867.status);
    }
    const _0xf5a86d = path.join(__dirname, 'temp.zip');
    fs.writeFileSync(_0xf5a86d, _0x2d2867.data);
    await _0x313853("Your zip file of the " + _0x1db02c[0x2] + " repository is still downloading for a moment...");
    await new Promise(_0x155703 => setTimeout(_0x155703, 0xbb8));
    await _0x576703.sendMessage(_0x11dc47.chat, {
      'document': fs.createReadStream(_0xf5a86d),
      'fileName': _0x1db02c[0x2] + '.zip',
      'mimetype': "application/zip",
      'caption': "Here is the zip file of the GitHub repository: " + _0x1d5c8d + "\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
    });
    fs.unlinkSync(_0xf5a86d);
  } catch (_0x8cc3bc) {
    console.error("Error with the .git command: ", _0x8cc3bc.message);
    _0x313853("❌ *An error occurred while downloading the repository.*\nDetails: " + _0x8cc3bc.message);
  }
});
cmd({
  'pattern': "song0",
  'alias': "play21",
  'desc': "To download songs.",
  'react': '🎵',
  'category': 'download',
  'filename': __filename
}, async (_0x559e55, _0x1d4d77, _0x143983, _0x48ec4d) => {
  const {
    from: _0x17907d,
    quoted: _0x424bf6,
    body: _0x59f21b,
    isCmd: _0x5f2a90,
    command: _0x5778a5,
    args: _0x47d1c4,
    q: _0x6a79a8,
    isGroup: _0x4aee89,
    sender: _0x413836,
    senderNumber: _0x509576,
    botNumber: _0xee86a1,
    pushname: _0x1ad03d,
    isMe: _0x1c2b81,
    isOwner: _0x38ee39,
    groupMetadata: _0x1e31fc,
    groupName: _0x2c76c3,
    participants: _0x557bf1,
    groupAdmins: _0x21c2ef,
    isBotAdmins: _0x251b90,
    isAdmins: _0x2fdb35,
    reply: _0x1b3025
  } = _0x48ec4d;
  try {
    if (!_0x6a79a8) {
      return await _0x1b3025("Please give me Yt url or Name");
    }
    const _0x523b54 = await ytsearch(_0x6a79a8);
    if (_0x523b54.results.length < 0x1) {
      return _0x1b3025("Results is not found !");
    }
    let _0x25a325 = _0x523b54.results[0x0];
    const _0x442b0d = await ytmp3(_0x25a325.url);
    let _0x564e63 = "\n ╭─────────────────────❖\n │SUPUN-MD SONG DOWNLOADING \n ╰─────────────────────❖\n ──────────────────❖\n╭────────────────❖\n│ ℹ️ *SUPUN-MD* \n│\n│☍ ⦁ *Title:* " + _0x25a325.title + " \n│☍ ⦁ *Duration:* " + _0x25a325.timestamp + "\n│☍ ⦁ *Views:* " + _0x25a325.views + " \n│☍ ⦁ *Uploaded On:* " + _0x25a325.ago + " \n╰────────────────❖\n❖──────────────────❖\n╭──────────────────❖\n│ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢\n│\n│ *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶\n│──────────────────❖\n│ *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂\n⁠╰──────────────────❖\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n    ";
    const _0x2196db = await _0x559e55.sendMessage(_0x17907d, {
      'image': {
        'url': _0x25a325.thumbnail
      },
      'caption': _0x564e63
    }, {
      'quoted': _0x1d4d77
    });
    const _0x4b88d4 = _0x2196db.key.id;
    _0x559e55.ev.on("messages.upsert", async _0xb90742 => {
      const _0xf8e740 = _0xb90742.messages[0x0];
      if (!_0xf8e740.message) {
        return;
      }
      const _0x490603 = _0xf8e740.message.conversation || _0xf8e740.message.extendedTextMessage?.['text'];
      const _0x51e613 = _0xf8e740.key.remoteJid;
      const _0x131269 = _0xf8e740.message.extendedTextMessage && _0xf8e740.message.extendedTextMessage.contextInfo.stanzaId === _0x4b88d4;
      if (_0x131269) {
        await _0x559e55.sendMessage(_0x51e613, {
          'react': {
            'text': '⬇️',
            'key': _0xf8e740.key
          }
        });
        const _0x1c979b = _0x442b0d.download.url;
        await _0x559e55.sendMessage(_0x51e613, {
          'delete': _0x2196db.key
        });
        await _0x559e55.sendMessage(_0x51e613, {
          'react': {
            'text': '⬆️',
            'key': _0xf8e740.key
          }
        });
        if (_0x490603 === '1') {
          await _0x559e55.sendMessage(_0x51e613, {
            'audio': {
              'url': _0x1c979b
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'externalAdReply': {
                'title': _0x25a325.title,
                'body': _0x25a325.videoId,
                'mediaType': 0x1,
                'sourceUrl': _0x25a325.url,
                'thumbnailUrl': _0x25a325.thumbnail,
                'renderLargerThumbnail': true,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0xf8e740
          });
          await _0x559e55.sendMessage(_0x51e613, {
            'react': {
              'text': '✅',
              'key': _0xf8e740.key
            }
          });
        } else if (_0x490603 === '2') {
          await _0x559e55.sendMessage(_0x51e613, {
            'document': {
              'url': _0x1c979b
            },
            'mimetype': 'audio/mp3',
            'fileName': _0x25a325.title + ".mp3",
            'caption': "\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ\n "
          }, {
            'quoted': _0xf8e740
          });
          await _0x559e55.sendMessage(_0x51e613, {
            'react': {
              'text': '✅',
              'key': _0xf8e740.key
            }
          });
        }
      }
    });
  } catch (_0x1cf6ed) {
    console.log(_0x1cf6ed);
    _0x1b3025('' + _0x1cf6ed);
  }
});
cmd({
  'pattern': "song20",
  'react': '🎶',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x31eeeb, _0xcb1ddb, _0x3b3ddc, {
  from: _0x52c7bf,
  quoted: _0xddc987,
  body: _0x1c61a9,
  isCmd: _0x1d8a2e,
  command: _0x2ba725,
  args: _0x557a29,
  q: _0x514bad,
  reply: _0x4d28ab
}) => {
  try {
    if (!_0x514bad) {
      return _0x4d28ab("Please provide a URL or title to download the song.");
    }
    const _0x4c07a0 = await yts(_0x514bad);
    const _0x11f067 = _0x4c07a0.videos[0x0];
    if (!_0x11f067) {
      return _0x4d28ab("No results found for your query. Please try again.");
    }
    const _0x50314d = _0x11f067.url;
    let _0x3d4111 = "\n ╭─────────────────────❖\n │SUPUN-MD SONG DOWNLOADING \n ╰─────────────────────❖\n ──────────────────❖\n╭────────────────❖\n│ ℹ️ *SUPUN-MD* \n│\n│☍ ⦁ *Title:* " + _0x11f067.title + " \n│☍ ⦁ *Duration:* " + _0x11f067.timestamp + "\n│☍ ⦁ *Views:* " + _0x11f067.views + " \n│☍ ⦁ *Uploaded On:* " + _0x11f067.ago + " \n╰────────────────❖\n❖──────────────────❖\n╭──────────────────❖\n│ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢\n│\n│ *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶\n│──────────────────❖\n│ *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂\n⁠╰──────────────────❖\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ        \n        \n";
    const _0x14a062 = await _0x31eeeb.sendMessage(_0x52c7bf, {
      'image': {
        'url': _0x11f067.thumbnail
      },
      'caption': _0x3d4111
    }, {
      'quoted': _0xcb1ddb
    });
    _0x31eeeb.ev.on('messages.upsert', async _0x124a56 => {
      const _0x28b967 = _0x124a56.messages[0x0];
      if (!_0x28b967.message || !_0x28b967.message.extendedTextMessage) {
        return;
      }
      const _0x44edb7 = _0x28b967.message.extendedTextMessage.text.trim();
      if (_0x28b967.message.extendedTextMessage.contextInfo && _0x28b967.message.extendedTextMessage.contextInfo.stanzaId === _0x14a062.key.id) {
        switch (_0x44edb7) {
          case '1':
            let _0x54e9f8 = await fg.yta(_0x50314d);
            let _0x1fc09b = _0x54e9f8.dl_url;
            await _0x31eeeb.sendMessage(_0x52c7bf, {
              'audio': {
                'url': _0x1fc09b
              },
              'caption': "> ꜰᴏᴡᴇʀᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ",
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0xcb1ddb
            });
            break;
          case '2':
            let _0xb63a00 = await fg.yta(_0x50314d);
            let _0x4ecfd5 = _0xb63a00.dl_url;
            await _0x31eeeb.sendMessage(_0x52c7bf, {
              'document': {
                'url': _0x4ecfd5
              },
              'caption': "> ꜰᴏᴡᴇʀᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ",
              'mimetype': "audio/mpeg",
              'fileName': _0x11f067.title + ".mp3"
            }, {
              'quoted': _0xcb1ddb
            });
            await _0x31eeeb.sendMessage(_0x52c7bf, {
              'react': {
                'text': '✅',
                'key': _0xcb1ddb.key
              }
            });
            break;
          default:
            _0x4d28ab("Invalid option. Please select a valid option🔴");
        }
      }
    });
  } catch (_0x8109e4) {
    console.error(_0x8109e4);
    await _0x31eeeb.sendMessage(_0x52c7bf, {
      'react': {
        'text': '❌',
        'key': _0xcb1ddb.key
      }
    });
    _0x4d28ab("An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "video8",
  'react': "📽️",
  'desc': "Download videos",
  'category': "download",
  'filename': __filename
}, async (_0x24db40, _0x197e3a, _0x3a9a1d, {
  from: _0x28dba3,
  quoted: _0xe6fd63,
  body: _0x52a185,
  isCmd: _0x27edde,
  command: _0x30818b,
  args: _0xfcf20a,
  q: _0x27f277,
  reply: _0x248ea5
}) => {
  try {
    if (!_0x27f277) {
      return _0x248ea5("Please provide a URL or title to download the video.");
    }
    const _0x2f4ffc = await yts(_0x27f277);
    const _0x22a2ba = _0x2f4ffc.videos[0x0];
    if (!_0x22a2ba) {
      return _0x248ea5("No results found for your query. Please try again.");
    }
    const _0x354fb5 = _0x22a2ba.url;
    let _0x3d329c = "\n ╭─────────────────────❖\n │SUPUN-MD SONG DOWNLOADING \n ╰─────────────────────❖\n ──────────────────❖\n╭────────────────❖\n│ ℹ️ *SUPUN-MD* \n│\n│☍ ⦁ *Title:* " + _0x22a2ba.title + " \n│☍ ⦁ *Duration:* " + _0x22a2ba.timestamp + "\n│☍ ⦁ *Views:* " + _0x22a2ba.views + " \n│☍ ⦁ *Uploaded On:* " + _0x22a2ba.ago + " \n╰────────────────❖\n❖──────────────────❖\n╭──────────────────❖\n│ © 𝙏𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙚𝙣𝙙: 🔢\n│\n│ *➀*  ᴀᴜᴅɪᴏ ꜰɪʟᴇ 🎶\n│──────────────────❖\n│ *➁*  ᴅᴏᴄᴜᴍᴇɴᴛ ꜰɪʟᴇ 📂\n⁠╰──────────────────❖\n\n> ᴘᴀᴡᴇʀᴇᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ        \n";
    const _0x272dc6 = await _0x24db40.sendMessage(_0x28dba3, {
      'image': {
        'url': _0x22a2ba.thumbnail
      },
      'caption': _0x3d329c
    }, {
      'quoted': _0x197e3a
    });
    _0x24db40.ev.on("messages.upsert", async _0x3383fb => {
      const _0x4a2b74 = _0x3383fb.messages[0x0];
      if (!_0x4a2b74.message || !_0x4a2b74.message.extendedTextMessage) {
        return;
      }
      const _0x3a074c = _0x4a2b74.message.extendedTextMessage.text.trim();
      if (_0x4a2b74.message.extendedTextMessage.contextInfo && _0x4a2b74.message.extendedTextMessage.contextInfo.stanzaId === _0x272dc6.key.id) {
        switch (_0x3a074c) {
          case '1':
            {
              const _0x4a51e1 = await fg.ytv(_0x354fb5);
              const _0x48d7a3 = _0x4a51e1.dl_url;
              if (!_0x48d7a3) {
                return _0x248ea5("Failed to fetch the video file. Please try again.");
              }
              await _0x24db40.sendMessage(_0x28dba3, {
                'video': {
                  'url': _0x48d7a3
                },
                'mimetype': "video/mp4",
                'caption': "> ꜰᴏᴡᴇʀᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
              }, {
                'quoted': _0x197e3a
              });
              break;
            }
          case '2':
            {
              const _0x5dd39c = await fg.ytv(_0x354fb5);
              const _0x35d8bd = _0x5dd39c.dl_url;
              if (!_0x35d8bd) {
                return _0x248ea5("Failed to fetch the video document. Please try again.");
              }
              await _0x24db40.sendMessage(_0x28dba3, {
                'document': {
                  'url': _0x35d8bd
                },
                'mimetype': 'video/mp4',
                'fileName': _0x22a2ba.title + ".mp4",
                'caption': "> ꜰᴏᴡᴇʀᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ"
              }, {
                'quoted': _0x197e3a
              });
              await _0x24db40.sendMessage(_0x28dba3, {
                'react': {
                  'text': '✅',
                  'key': _0x197e3a.key
                }
              });
              break;
            }
          default:
            _0x248ea5("Invalid option. Please select a valid option 🔴");
        }
      }
    });
  } catch (_0x4e7aba) {
    console.error(_0x4e7aba);
    await _0x24db40.sendMessage(_0x28dba3, {
      'react': {
        'text': '❌',
        'key': _0x197e3a.key
      }
    });
    _0x248ea5("An error occurred while processing your request.");
  }
});
cmd({
  'pattern': "pindl",
  'alias': ["pinterest", 'image', "searchpin"],
  'react': '🔍',
  'desc': "Search and download Pinterest images using the API.",
  'category': "fun",
  'use': ".pin <keywords>",
  'filename': __filename
}, async (_0x32921e, _0x235c89, _0x189782, {
  reply: _0x3135d3,
  args: _0x49c186,
  from: _0xf351bc
}) => {
  try {
    const _0x4eaad0 = _0x49c186.join(" ");
    if (!_0x4eaad0) {
      return _0x3135d3("*Please provide a search query.*");
    }
    await _0x3135d3("*🔎 Downloading Images For " + _0x4eaad0 + "...*");
    const _0x1d43c0 = "https://api.diioffc.web.id/api/search/pinterest?query=" + encodeURIComponent(_0x4eaad0);
    const _0x52a4fc = await axios.get(_0x1d43c0);
    if (!_0x52a4fc.data || !_0x52a4fc.data.result || _0x52a4fc.data.result.length === 0x0) {
      return _0x3135d3("*No results found. Please try another keyword.*");
    }
    const _0x24972b = _0x52a4fc.data.result;
    const _0x91318c = _0x24972b.sort(() => 0.5 - Math.random()).slice(0x0, 0x5);
    for (let _0x170333 = 0x0; _0x170333 < _0x91318c.length; _0x170333++) {
      const _0x549caf = _0x91318c[_0x170333];
      await _0x32921e.sendMessage(_0xf351bc, {
        'image': {
          'url': _0x549caf.src
        },
        'caption': "*Results For:* " + _0x4eaad0 + "\n\n> ꜰᴏᴡᴇʀᴅ ʙʏ ꜱᴜᴘᴜɴ ᴍᴅ*"
      }, {
        'quoted': _0x235c89
      });
    }
  } catch (_0x262c7a) {
    console.error(_0x262c7a);
    _0x3135d3("*❌ An error occurred while processing your request. Please try again later.*");
  }
});
