
const getFbVideoInfo = require("fb-downloader-scrapper");
const {
  cmd,
  commands
} = require("../command");
const _0x4454d7 = {
  pattern: 'fb8',
  desc: "Download FB videos",
  category: "download"
};
function _0x2c18de(_0x19756b, _0xb068a1, _0x295360, _0x1fa6fd, _0x5ab292) {
  return _0x143a(_0xb068a1 + 0x2a2, _0x19756b);
}
_0x4454d7.react = '🔎';
function _0x216641(_0xbd5285, _0x189f06, _0x19a889, _0x17b0e6, _0x4d468a) {
  return _0x143a(_0xbd5285 + 0x103, _0x4d468a);
}
function _0x1c2d8d(_0x473750, _0x5b699d, _0x376df0, _0x2428c5, _0x8664cd) {
  return _0x143a(_0x8664cd - 0x307, _0x5b699d);
}
_0x4454d7.filename = __filename;
cmd(_0x4454d7, async (_0x5a4d0a, _0x128b7f, _0xd386e6, {
  from: _0x2f073a,
  q: _0x526bef,
  reply: _0x56d0e2
}) => {
  try {
    if (!_0x526bef || !_0x526bef.includes("facebook.com")) {
      return await _0x56d0e2("*Please enter a valid Facebook URL!*");
    }
    const _0x980162 = _0x526bef.replace(/\?mibextid=[^&]*/, '');
    const _0x16af63 = await getFbVideoInfo(_0x980162);
    if (!_0x16af63 || !_0x16af63.hd && !_0x16af63.sd) {
      return _0x56d0e2("❌ Unable to retrieve video information. Please try a different link.");
    }
    if (_0x555bcb.button === "true") {
      const _0x457030 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Watch on Facebook",
          'url': _0x526bef,
          'merchant_url': _0x526bef
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "SD Quality",
          'id': ".downfb " + _0x16af63.sd
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "HD Quality",
          'id': ".downfb " + _0x16af63.hd
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Follow Our WhatsApp Channel",
          'url': "https://whatsapp.com/channel/0029VajvrA2ATRSkEnZwMQ0p",
          'merchant_url': "https://whatsapp.com/channel/0029VajvrA2ATRSkEnZwMQ0p"
        })
      }];
      const _0x31910d = {
        image: "https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Spriky%20Md%20Logo.jpg?raw=true",
        header: '',
        footer: "> Developed By Udavin Wijesundara",
        body: "*Queen Spriky MD Downloader*"
      };
      await _0x5a4d0a.sendButtonMessage(_0x2f073a, _0x457030, _0xd386e6, _0x31910d);
    } else {
      const _0x4f8f55 = {
        url: "https://github.com/uwtechshow-official/Spriky-Database/blob/main/Logo/Spriky%20Md%20Logo.jpg?raw=true"
      };
      const _0x2542ad = {
        image: _0x4f8f55,
        caption: "*Queen Spriky MD Downloader*\n\n🔢 Reply to this message with an option:\n\n1️⃣ Download FB Video in HD\n2️⃣ Download FB Video in SD\n\n> Developed By Udavin Wijesundara"
      };
      const _0x27c2e3 = {
        quoted: _0x128b7f
      };
      const _0x39f053 = await _0x5a4d0a.sendMessage(_0x2f073a, _0x2542ad, _0x27c2e3);
      _0x5a4d0a.ev.on("messages.upsert", async _0x36735b => {
        const _0xf0497b = _0x36735b.messages[0];
        if (!_0xf0497b.message || !_0xf0497b.message.extendedTextMessage) {
          return;
        }
        const _0x2a5677 = _0xf0497b.message.extendedTextMessage.text.trim();
        if (_0xf0497b.message.extendedTextMessage.contextInfo && _0xf0497b.message.extendedTextMessage.contextInfo.stanzaId === _0x39f053.key.id) {
          switch (_0x2a5677) {
            case '1':
              if (_0x16af63.hd) {
                const _0x4eeb51 = {
                  url: _0x16af63.hd
                };
                const _0x48bc63 = {
                  video: _0x4eeb51,
                  mimetype: "video/mp4",
                  caption: "*© 𝚀𝚄𝙴𝙴𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃*"
                };
                const _0x1e1996 = {
                  quoted: _0x128b7f
                };
                await _0x5a4d0a.sendMessage(_0x2f073a, _0x48bc63, _0x1e1996);
              } else {
                _0x56d0e2("HD version is not available for this video.");
              }
              break;
            case '2':
              if (_0x16af63.sd) {
                const _0x1dcc2d = {
                  url: _0x16af63.sd
                };
                const _0x318dc5 = {
                  video: _0x1dcc2d,
                  mimetype: "video/mp4",
                  caption: "*© 𝚀𝚄𝙴𝙴𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃*"
                };
                const _0x2c0a5e = {
                  quoted: _0x128b7f
                };
                await _0x5a4d0a.sendMessage(_0x2f073a, _0x318dc5, _0x2c0a5e);
              } else {
                _0x56d0e2("SD version is not available for this video.");
              }
              break;
            default:
              _0x56d0e2("Invalid option selected.");
          }
        }
      });
    }
  } catch (_0xd383c9) {
    console.error(_0xd383c9);
    await _0x56d0e2("*Error occurred while processing your request!*");
  }
});
const _0x1d513f = {
  pattern: "downfb",
  react: '🎥',
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1d513f, async (_0x3f3bd2, _0x4b8f81, _0x556603, {
  from: _0x48fa7d,
  q: _0x72a7a6,
  reply: _0x987156
}) => {
  try {
    if (!_0x72a7a6) {
      return await _0x987156("*Not Found!*");
    }
    const _0x310059 = {
      url: _0x72a7a6
    };
    const _0x5203ba = {
      video: _0x310059
    };
    const _0x2c74c = {
      quoted: _0x4b8f81
    };
    await _0x3f3bd2.sendMessage(_0x48fa7d, _0x5203ba, _0x2c74c);
    const _0x1fdf5b = {
      text: '✅',
      key: _0x4b8f81.key
    };
    const _0x38d7b1 = {
      react: _0x1fdf5b
    };
    await _0x3f3bd2.sendMessage(_0x48fa7d, _0x38d7b1);
  } catch (_0x48cb7f) {
    _0x987156("*Error !!*");
    console.error(_0x48cb7f);
  }
});
