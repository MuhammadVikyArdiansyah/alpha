// NOTE  \\

// BASE ORI BY JER OFC \\
// JANGAN NGAKU� BASE LU DECK WOWKWOK \\
// RENAME GPP TAPI TOLONG HARGAIN PEMBUAT NYA \\
// JANGAN DI JUAL !!! \\
//ywdh
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs');
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const path = require('path');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const { fetchBuffer } = require("./lib/myfunc2")
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { formatp, formatDate, getTime, clockString, format } = require('./lib/myfunc')
const speed = require('performance-now')
const thiccysapi = require('textmaker-thiccy')
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { Configuration, OpenAIApi } = require("openai");
let rasya = require("./key.json");
let gtts = require('node-gtts');

// DATABASE GAME
const _family100 = {}
const tebakgambar = {}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkota = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}
//-\\
const similarity = require('similarity')
const threshold = 0.72

const jawabanBenar = (tebak) => {
	return` ${tebak} \n\nJawaban Benar \nSelamat Kamu Ga Dapet Apa-Apa🗿`
}
const waktuHabis = (jawaban) => {
	return `Waktu Habis\nJawaban:  ${jawaban}`
}

const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const { 
  updateResponList,
  delResponList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addPay,
    updatePay
} = require("./lib/store")






            
    
async function getGroupAdmins(participants){
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        } 
        return admins || []
}

const _prem = require("./lib/premium");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
            
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}

async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

module.exports = alpha = async (alpha, m, chatUpdate, store, opengc, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, _welcome, _left, db_respon_list, ) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        const isCmd = /^[���׶������_=|~!?#/$%^&.+-,\\\�^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await alpha.decodeJid(alpha.user.id)
        const isCreator = ["6281315252010@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const from = mek.key.remoteJid
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isPremium = _prem.checkPremiumUser(m.sender, premium)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

const reply = async (text) =>{
	return await alpha.sendFakeLink(m.chat, text, salam, pushname, m)
}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Created By Jer Ofc\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;rulzxdBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/33e79ab21ec0446cc3e4f.jpg' }}}}
function parseMention(text = '') {
	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function getGcName(groupID) {
            try {
                let data_name = await alpha.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        
        
    //salam
 if (/(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i.test(budy)) {
  return m.reply(`
  وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
_wa'alaikumussalam wr.wb._
`);
}
       if(command) {
alpha.sendPresenceUpdate('composing', m.chat);
           }
        
        
if(budy.toLowerCase() == 'elaina') {
    let media = 'https://telegra.ph/file/de2f7ad13aff4a5b36be2.png'
    reply('Hitam!')
    alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author})
    }
if(budy.toLowerCase() == 'sebab ape') {
    reply('Sebab Elaina Hitam!')
    let media = 'https://telegra.ph/file/de2f7ad13aff4a5b36be2.png'
    alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author})
    }
        if(budy.toLowerCase() == 'sebab ape?') {
    reply('Sebab Elaina Hitam!')
    let media = 'https://telegra.ph/file/de2f7ad13aff4a5b36be2.png'
    alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author})
    }
//gabut
let cron = require('node-cron')
  cron.schedule('0 4 * * * ', () => {
alpha.sendMessage('6281946537020@s.whatsapp.net', { text: `_*SELAMAT PAGI BANG VIKY🤩😁🤩😁🤩*_` }, '')
   }, {
      scheduled: true,
      timezone: "Asia/Jakarta"
  })
        
 if(budy.toLowerCase() == 'p' && !m.isGroup) {
     reply('Iya, Ada apa?\nKetik .menu untuk melihat menu bot')
        }
// Respon Cmd with media

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {

let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: alpha.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, alpha.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
alpha.ev.emit('messages.upsert', msg)
}
        //pemisah
        function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, './tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
        
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`*「 ANTI-LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })

        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await alpha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
if (isAntiWame) {
    try {
  const lowercaseBudy = budy.toLowerCase(); // Mengubah pesan menjadi huruf kecil
  if (lowercaseBudy.includes('wa.me/')) {
    if (!isBotAdmins) return reply('Tidak bisa hapus pesan, bot bukan admin');
    await alpha.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
      }
    });
  }
        } catch (e) {
            return
            }
}

      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await alpha.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      
        if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                alpha.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                alpha.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
        
        _prem.expiredCheck(alpha, premium)

                //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❎',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❎', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❎: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await alpha.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await alpha.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
        
                //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text)) {
	    alpha.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    alpha.sendText(m.chat, `suit telah dikirim ke chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing-masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) alpha.sendText(roof.p, `Silahkan Pilih! \n\nBatu🗿\nKertas📄\nGunting✂️\n\nKetik salah satu, contoh: batu`, m)
	    if (!roof.pilih2) alpha.sendText(roof.p2, `Silahkan Pilih! \n\nBatu🗿\nKertas📄\nGunting✂️\n\nKetik salah satu, contoh: batu`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) alpha.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    alpha.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memlilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu Lawan Memilih` : ''}`)
	    if (!roof.pilih2) alpha.sendText(roof.p2, '_Lawan telah memilih_\nSekarang giliranmu_', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) alpha.sendText(roof.p, '_Lawan telah memilih_\nSekarang giliranmu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    alpha.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), '', { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
        
        //antilink all by xeon
        if (AntiLinkAll)
        if (budy.includes("https://")){
        	if (!isBotAdmins) (bvl)
        bvl = `\`\`\`ã€Œ Link Detected ã€\`\`\`\n\nAdmin has sent a link, admin is free to send any linkðŸ˜‡`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        await alpha.sendMessage(m.chat,
        {
        	delete: {
        	remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.key.participant
        }
        })
        alpha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        alpha.sendMessage(from, {text:`\`\`\`ã€Œ Link Detected ã€\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
        } else {
        	}
        
        if (('family100' + m.chat in _family100) && !isCmd) {
        	kuis = true
        let room = _family100['family100' + m.chat]
        let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
        let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (!isSurender) {
        	let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
        if (room.terjawab[index]) return !0
        room.terjawab[index] = m.sender
        }
        let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
        let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
alpha.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
	return _family100['family100' + m.chat].pesan = mesg
	}).catch(_ => _)
	if (isWin || isSurender) delete _family100['family100' + m.chat]
	}
	if (tebakgambar[m.chat] && !isCmd && m.quoted) {
		if (m.quoted.id == tebakgambar[m.chat][0].key.id) {
			let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
			jawaban = json.jawaban.toLowerCase().trim()
			if (m.text.toLowerCase() == jawaban) {
				reply(jawabanBenar("Tebakgambar", tebakgambar[m.chat][2]) + "\n\nKirim perintah .tebakgambar untuk bermain lagi")
				clearTimeout(tebakgambar[m.chat][3])
				delete tebakgambar[m.chat]
				}
				else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
				reply(`_Ya, Dikit Lagi!_`)
				else reply(m.chat, "❌ Jawaban salah", footer_text, '.tega', 'Hint', '.ytega', 'Nyerah', m)
				}
			}
			if (tebakkata[m.chat] && !isCmd && m.quoted) {
				if (m.quoted.id == tebakkata[m.chat][0].key.id) {
					let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
					let jawaban = json.jawaban.toLowerCase().trim()
					if (m.text.toLowerCase() == jawaban) {
						reply(jawabanBenar("Tebak Kata", tebakkata[m.chat][2]) + "\n\nKirim perintah .tebakkata untuk bermain lagi")
						clearTimeout(tebakkata[m.chat][3])
						delete tebakkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.teka -- _Bantuan_\n.yteka -- _Nyerah_")
					}
				}
				if (tebakbendera[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakbendera[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
						jawaban = json.name.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Bendera", tebakbendera[m.chat][2]) + "\n\nKirim perintah .tebakbendera untuk bermain lagi")
							clearTimeout(tebakbendera[m.chat][3])
							delete tebakbendera[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tebe -- _Bantuan_\n.ytebe -- _Nyerah_")
					}
				}
				if (caklontong[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == caklontong[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Cak Lontong", caklontong[m.chat][2]) + "\n\nKirim perintah .caklontong untuk bermain lagi")
							clearTimeout(caklontong[m.chat][3])
							delete caklontong[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.telo -- _Bantuan_\n.ytelo -- _Nyerah_")
					}
				}
				if (susunkata[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == susunkata[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Susun Kata", susunkata[m.chat][2]) + "\n\nKirim perintah .susunkata untuk bermain lagi")
							clearTimeout(susunkata[m.chat][3])
							delete susunkata[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tesuka -- _Bantuan_\n.ytesuka -- _Nyerah_")
					}
				}
				if (tebakkalimat[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == tebakkalimat[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Kalimat", tebakkalimat[m.chat][2]) + "\n\nKirim perintah .tebakkalimat untuk bermain lagi")
							clearTimeout(tebakkalimat[m.chat][3])
							delete tebakkalimat[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tekatu -- _Bantuan_\n.ytekatu -- _Nyerah_")
					}
				}
				if (siapaaku[m.chat] && !isCmd && m.quoted) {
					if (m.quoted.id == siapaaku[m.chat][0].key.id) {
						let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
						jawaban = json.jawaban.toLowerCase().trim()
						if (m.text.toLowerCase() == jawaban) {
							reply(jawabanBenar("Tebak Siapa", siapaaku[m.chat][2]) + "\n\nKirim perintah .tebaksiapa untuk bermain lagi")
							clearTimeout(siapaaku[m.chat][3])
							delete siapaaku[m.chat]
						}
						else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
						reply(`_Ya, Dikit Lagi!_`)
						else reply("❌ Jawaban salah\n\n.tesi -- _Bantuan_\n.ytesi -- _Nyerah_")
					}
				}
		const kontak = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: `6283136505591-1614953337@g.us`
					} : {})
				},
				message: {
					'contactMessage': {
						'displayName': `${pushname}`,
						'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
						'jpegThumbnail': 'https://telegra.ph/file/040649522ca65c3472199.jpg',
						thumbnail: 'https://telegra.ph/file/040649522ca65c3472199.jpg',
						sendEphemeral: true
					}
				}
			}
        
        let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
                if(!('warning' in user)) user.warning = 0
                if(!('pc' in user)) user.pc = 0
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
                warning: 0,
                pc: 0,
            }
        
        let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
        
        let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
        if (!('backup' in setting)) setting.backup = true
        if (!('backupDB' in setting)) setting.backupDB = 0
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
        backup: true,
        backupDB: 0,
	    }
        
        if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            setting.backupDB = new Date() * 1
           alpha.sendMessage(global.owner + '@s.whatsapp.net', { text: `Database: ${date}` }, '')
          alpha.sendMessage(global.owner[0] + '@s.whatsapp.net', { document: fs.readFileSync('./database.json'), fileName: 'database.json', mimetype: 'application/json' }, '')
        }
    }
        
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
 
function formatDuration(timeElapsed) {
  let seconds = Math.floor(timeElapsed / 1000) % 60;
  let minutes = Math.floor(timeElapsed / (1000 * 60)) % 60;
  let hours = Math.floor(timeElapsed / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30) % 12;
  let years = Math.floor(days / 365);

  let durationParts = [];
  if (years > 0) durationParts.push(`${years} Tahun`);
  if (months > 0) durationParts.push(`${months} Bulan`);
  if (days > 0) durationParts.push(`${days % 30} Hari`);
  if (hours > 0) durationParts.push(`${hours} Jam`);
  if (minutes > 0) durationParts.push(`${minutes} Menit`);
  if (seconds >= 0) durationParts.push(`${seconds} Detik`);

  return durationParts.join(', ');
}

let timeElapsed = new Date() - afkTime;
const duration = formatDuration(timeElapsed);


            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Sejak *${duration}* yang lalu 
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
function formatDuration(timeElapsed) {
  let seconds = Math.floor(timeElapsed / 1000) % 60;
  let minutes = Math.floor(timeElapsed / (1000 * 60)) % 60;
  let hours = Math.floor(timeElapsed / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30) % 12;
  let years = Math.floor(days / 365);

  let durationParts = [];
  if (years > 0) durationParts.push(`${years} Tahun`);
  if (months > 0) durationParts.push(`${months} Bulan`);
  if (days > 0) durationParts.push(`${days % 30} Hari`);
  if (hours > 0) durationParts.push(`${hours} Jam`);
  if (minutes > 0) durationParts.push(`${minutes} Menit`);
  if (seconds >= 0) durationParts.push(`${seconds} Detik`);

  return durationParts.join(', ');
}
let afkTime = user.afkTime
let timeElapsed = new Date() - afkTime;
const duration = formatDuration(timeElapsed);

            m.reply(`
Kamu berhenti AFK ${user.afkReason ? ' setelah ' + user.afkReason : ''}
Sejak *${duration}* yang lalu
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        switch(command) {
             case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❎',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await alpha.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await alpha.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            alpha.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
                case 'suitpvp':case 'rps': case 'rockpaperscissors':case 'suit': {
          if(!m.isGroup) throw `Khusus Group!`
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan game Anda sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin Anda tantang?_\n Tag orangnya..\n\nContoh : ${prefix}suit @${owner}`, m.chat, { mentions: [owner + '@s.whatsapp.net']})
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang Anda tantang sedang bermain dengan orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Hai* @${m.mentionedJid[0].split`@`[0]} Silahkan ketik *terima* untuk menerima atau ketik *tolak* untuk menolak`
            this.suit[id] = {
            chat: await alpha.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) alpha.sendText(m.chat, `_Waktu Suit Habis!_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
                
                
            
                case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                let str = `
  *「 AFK MODE 」*
  
*${m.pushName}* sekarang AFK

*Alasan:* ${text ? '' + text : '-'}
`.trim()
           reply(str)
            }
            break
         case 'owner':
         case 'creator': {
  let sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
            alpha.sendContact(m.chat, global.owner, m)
             await sleep(1000)
        reply('tu, chat g penting ga bakal dibales!')
         }
                break
          case 'txt': {
              if(args[0] < 5) throw `Tlol`
              reply('bagus')
              }
                break
         break
         case 'menu': case 'help': case '?': {
         const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour: 'numeric', hour12: false });

const hour = parseInt(time);
          let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = 'Selamat pagi 🌄';
  } else if (hour >= 12 && hour < 15) {
    greeting = 'Selamat siang 🌅';
  } else if (hour >= 15 && hour < 18) {
    greeting = 'Selamat sore 🏙️';
  } else if (hour >= 18 && hour < 24) {
    greeting = 'Selamat malam 🌃';
  } else {
    greeting = 'Halo';
  }
  let ownernya = `6285735980188@s.whatsapp.net`
  let me = m.sender
  let ini_mark = `0@s.whatsapp.net`
  let ments = [ownernya, me, ini_mark]
  let timestampe = speed();
  let latensie = speed() - timestampe
  let xtime = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
  let xdate = require('moment-timezone').tz('Asia/Jakarta').format('DD/MM/YYYY')
  let locale = 'id'
let d = new Date();
let mndr = new Date(new Date() - 86400000);
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(mndr)
    
    function getWeton() {
  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const pasaranNames = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];

  const currentDate = new Date();
  const day = currentDate.getDay();
  const pasaran = (currentDate.getDate() + 5) % 5;

  const weton = dayNames[day] + " " + pasaranNames[pasaran];
  return weton;
}


    let week = d.toLocaleDateString(locale, { weekday: 'long' })
         let menu = `
Hai ${pushname} (@${me.split('@')[0]}) 👋!
${greeting}

_*"${pickRandom(global.motivasi)}"*_

╭✄┈┈┈⟬ *INFO-BOT* ⟭
│
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${namabot}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  MultiPrefix
│𝗠𝗼𝗱𝗲 : Public
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗠𝗲𝗺𝗼𝗿𝘆 𝗨𝘀𝗲𝗱 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│
╰❒ 

╭✄┈┈┈⟬ *Time Info* ⟭
│
│𝗝𝗮𝗺 : ${xtime} WIB
│𝗛𝗮𝗿𝗶 : ${getWeton()}
│𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${xdate}
│𝗧𝗮𝗻𝗴𝗴𝗮𝗹 𝗜𝘀𝗹𝗮𝗺 : ${dateIslamic}
│
╰❒ 
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

╭─❒ 「 *FREE MENU* 」
│
│○ .reportbug
│○ .bug
│○ .owner  
│○ .sc  
│○ .ping  
│○ .tes
│○ .donate  
│○ .tqto  
│○ .jadibot  
│○ .sewa  
│○ .q  
│○ .jasrun  
│○ .sewa  
│○ .buyprem  
│○ .tr
│○ .translate
│
╰❒ 

╭─❒ 「 *OWNER MENU* 」
│
│○ .addprem  
│○ .delprem  
│○ .listprem  
│○ .block  
│○ .unblock  
│○ .public  
│○ .self  
│○ .out  
│○ .kosong  
│○ .join  
│○ .addsewa  
│○ .delsewa  
│○ .setnamabot  
│○ .setbiobot  
│○ .broadcastvid  
│○ .bctext  
│○ .bcimage  
│○ .pushkon
│○ .anticall
│○ .setexif
│
╰❒

╭─❒ 「 *ChatGPT* (Chat Dengan Ai) 」 
│
│○ .ai
│○ .ai2
│○ .ai3
│○ .ai-img
│
╰❒

╭─❒ 「 *MENU GA PENTING* 」 
│
│○ .runtime  
│○ .groupbot  
│○ .developer  
│○ .gitclone  
│
╰❒

╭─❒ 「  *GROUP MENU*  」
│
│○ .setwelcome  
│○ .changewelcome  
│○ .delsetwelcome  
│○ .setleft  
│○ .changeleft  
│○ .delsetleft  
│○ .listwarn
│○ .warn
│○ .afk
│○ .listafk
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ .antiwame  
│○ .antiwame2  
│○ .antilink  
│○ .antilink2  
│○ .welcome  
│○ .goodbye  
│○ .group open
│○ .group close
│○ .hidetag  
│○ .kick  
│○ .linkgc  
│○ .resetlinkgc  
│○ .delete  
│○ .listonline  
│○ .setnamegc  
│○ .setdesc  
│○ .add  
│○ .promote  
│○ .demote  
│○ .antilinkall  
│○ .tagall  
│
╰❒

╭─❒ 「 *SEARCH MENU* 」 
│
│○ .ytsearch  
│○ .google  
│○ .alquran
│○ .igstalk
│○ .ringtone
│○ .mlstalk
│○ .ffstalk
│○ .npmsearch
│○ .playstore
│
╰❒

╭─❒ 「 *NEWS MENU* 」 
│
│○ .kompas
│○ .detik
│
╰❒

╭─❒ 「 *DOWNLOAD MENU* 」
│ 
│○ .tiktok  
│○ .tiktokaudio  
│○ .spotify  
│○ .ytmp3  
│○ .ytmp4  
│○ .play  
│○ .playmp3  
│○ .playmp4  
│○ .lirik
│○ .igdl  
│○ .fb
│
╰❒

╭─❒ 「 *Maker Menu* 」
│ 
│ ○ .candy
│ ○ .8bit
│ ○ .horror
│ ○ .hoorror
│ ○ .retro
│ ○ .blackpinkneon
│ ○ .deepsea
│ ○ .scifi
│ ○ .fiction
│ ○ .berry
│ ○ .fruitjuice
│ ○ .biscuit
│ ○ .wood
│ ○ .chocolate
│ ○ .matrix
│ ○ .blood
│ ○ .halloween
│ ○ .wicker
│ ○ .darkgold
│ ○ .firework
│ ○ .skeleton
│ ○ .sand
│ ○ .glue
│ ○ .leaves
│ ○ .magma
│ ○ .lava
│ ○ .rockart
│ ○ .bloodglas
│ ○ .underwater
│ ○ .textmaker
│ ○ .honey
│ ○ .ice
│ ○ .watercolor
│ ○ .multicolor
│ ○ .snow
│ ○ .harrypot
│ ○ .harrypotter
│ ○ .brokenglass
│ ○ .waterpipe
│ ○ .spooky
│ ○ .circuit
│ ○ .metallic
│ ○ .demon
│ ○ .sparklechristmas
│ ○ .christmas
│ ○ .3dchristmas
│ ○ .3dbox
│ ○ .waterdrop
│ ○ .lion2
│ ○ .papercut
│ ○ .transformer
│ ○ .neondevil
│ ○ .3davengers
│ ○ .3dstone
│ ○ .3dstone2
│ ○ .summertime
│ ○ .thunder
│ ○ .window
│ ○ .graffiti
│ ○ .graffitibike
│ ○ .pornhub
│ ○ .glitch
│ ○ .blackpinkart
│ ○ .glitch2
│ ○ .glitch3
│ ○ .3dspace
│ ○ .lion
│ ○ .3dneon
│ ○ .greenneon
│ ○ .bokeh
│ ○ .holographic
│ ○ .bear
│ ○ .wolf
│ ○ .joker
│ ○ .dropwater
│ ○ .dropwater2
│ ○ .thewall
│ ○ .neonlight
│ ○ .natural
│ ○ .carbon
│ ○ .pencil
│ ○ .blackpink2
│ ○ .neon
│ ○ .neonlight2
│ ○ .toxic
│ ○ .strawberry
│ ○ .discovery
│ ○ .1917
│ ○ .sci_fi
│ ○ .ancient
│ ○ .fabric
│ ○ .hoorror
│ ○ .whitebear
│ ○ .juice
│ ○ .batman
│ ○ .multicolor
│ ○ .wonderful
│ ○ .sketch
│ ○ .marvel
│ ○ .foggy
│ ○ .writing
│ ○ .halloweenfire
│ ○ .halloween
│ ○ .watercolor
│ ○ .classic
│
╰❒

╭─❒ 「 *RANDOM STICKER* 」 
│
│○ .patrick  
│○ .doge
│○ .gura
│
╰❒

╭─❒ 「 *MAIN MENU* 」 
│
│○ .sticker  
│○ .snobg
│○ .toimage  
│○ .removebg
│○ .pinterest 
│○ .smeme 
│○ .emojimix  
│○ .swm  
│
╰❒

╭─❒ 「 *Anonymous MENU* 」 
│
│○ .menfess 62xxxxx|nama|pesan
│
╰❒

╭─❒ 「 *GAMES MENU* 」 
│
│○ .suit
│○ .ttt 
│○ .jodohku
│○ .jadian
│○ .halah
│○ .hilih
│○ .huluh
│○ .heleh
│○ .holoh
│
╰❒

╭─❒ 「 *PRIMBON MENU* 」
│
│○ .nomorhoki
│○ .artimimpi
│○ .ramalanjodoh
│○ .ramalanjodohbali
│○ .suamiistri
│○ .ramalancinta
│○ .artinama
│○ .cocoknama
│○ .pasangan
│○ .jadiannikah
│○ .sifatusaha
│○ .rejeki
│○ .pekerjaan
│○ .ramalnasib
│○ .penyakit
│○ .artitarot
│○ .fengshui
│○ .haribaik
│○ .harisangar
│○ .harisial
│○ .harinaga
│○ .arahrejeki
│○ .peruntungan
│○ .weton
│○ .sifat
│○ .keberuntungan
│○ .memancing
│○ .masasubur
│○ .shio
│○ .zodiak
│
╰❒

╭─❒ 「 *SOUND MENU* 」 
│
│○ .sound1
│○ .sound2
│○ .sound3
│○ .sound4
│○ .sound5
│○ .sound6
│○ .sound7
│○ .sound8
│○ .sound9
│○ .sound10
│○ .sound11
│○ .sound12
│○ .sound13
│○ .sound14
│○ .sound15
│○ .sound16
│○ .sound17
│○ .sound18
│○ .sound19
│○ .sound20
│○ .sound21
│○ .sound22
│○ .sound23
│○ .sound24
│○ .sound25
│○ .sound26
│○ .sound27
│○ .sound28
│○ .sound29
│○ .sound30
│○ .sound31
│○ .sound32
│○ .sound33
│○ .sound34
│○ .sound35
│○ .sound36
│○ .sound37
│○ .sound38
│○ .sound39
│○ .sound40
│○ .sound41
│○ .sound42
│○ .sound43
│○ .sound44
│○ .sound45
│○ .sound46
│○ .sound47
│○ .sound48
│○ .sound49
│○ .sound50
│○ .sound51
│○ .sound52
│○ .sound53
│○ .sound54
│○ .sound55
│○ .sound56
│○ .sound57
│○ .sound58
│○ .sound59
│○ .sound60
│○ .sound61
│○ .sound62
│○ .sound63
│○ .sound64
│○ .sound65
│○ .sound66
│○ .sound67
│○ .sound68
│○ .sound69
│○ .sound70
│○ .sound71
│○ .sound72
│○ .sound73
│○ .sound74
│○ .sound75
│○ .sound76
│○ .sound77
│○ .sound78
│○ .sound79
│○ .sound80
│○ .sound81
│○ .sound82
│○ .sound83
│○ .sound84
│○ .sound85
│○ .sound86
│○ .sound87
│○ .sound88
│○ .sound89
│○ .sound90
│○ .sound91
│○ .sound92
│○ .sound93
│○ .sound94
│○ .sound95
│○ .sound96
│○ .sound97
│○ .sound98
│○ .sound99
│○ .sound100
│
╰❒

╭─❒ 「 *THANKS TO* 」 
│
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ Jer Ofc
│○ All Creator Bot
│
╰❒

📝 *NOTE: BASE ORI BY JER OFFC JANGAN LUPA SUBSCRIBE JER OFC*
`.trim()
       reactionMessage = {
                    react: {
                        text: '📚',
                        key: { remoteJid: m.chat }
                    }
                }
                alpha.sendMessage(m.chat, reactionMessage, { quoted: m })
   alpha.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/040649522ca65c3472199.jpg'}, caption: menu, mentions: ments }, { quoted: m })
     
          }
          break
     case 'tr': case 'translate': {
const { translate } = require('@vitalets/google-translate-api');
const defaultLang = 'id'
const tld = 'cn'
if (!args[0]) throw `
📌 *Contoh:*

*${prefix + command}* <bahasa> [teks]
*${prefix + command}* id Hello World

≡ *Daftar Bahasa Yang didukung:* 
  ${kodebahasa}
`

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text  
   let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
           }
             break
        case 'wangy': {
            if (!text) throw `Example ${prefix}wangy Minaj`
            let awikwok = `${text} ${text} ${text} 🖤 🖤 🖤 WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${text} wangyy aku mau nyiumin aroma wangynya ${text} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${text} keluar pertama kali di anime juga manis 🖤 🖤 🖤 banget AAAAAAAAH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH 🖤 🖤 🖤apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. 🖤 🖤 🖤 ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah 🖤 🖤 🖤 YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
            m.reply(awikwok)
            }
            break
    case 'detik': {
          let res = await fetch('https://api.botcahx.live/api/news/detik?apikey=Rasya')
          let json = await res.json()
      let teks = '*Detik News*\n\n'
      let no = 1
      for(let o of json.result) {
teks += `*No:* ${no++}\n`
teks += `*Title:* ${o.berita}\n`
teks += `*Url:* ${o.berita_url}\n`
teks += `*Upload at:* ${o.berita_diupload}\n`
teks += `_________________________________________\n\n`

                    }
    alpha.sendMessage(m.chat, { image: { url: json.result[0].berita_thumb }, caption: teks }, { quoted: m })
          }
                    
               break
                case 'fetch': {
            if(!text) throw `Masukkan url!`
            let res = await fetch(`https://api.ibeng.tech/api/tools/fetch?url=${text}&apikey=tamvan`)
            let json = await res.json()
            reply(`${json.result}`)
                }
                break
                            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                alpha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `=> *Name :* ${i.nama}\n=> *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n\nUntuk Mengambilnya, tinggal ketik _*.getmsg nama*_`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
                           case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                alpha.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
        case 'topafk': {

let users = global.db.data.users;
let output = '*Top Afk Terlama*\n\n';
let count = 1;

        function formatDuration(timeElapsed) {
  let seconds = Math.floor(timeElapsed / 1000) % 60;
  let minutes = Math.floor(timeElapsed / (1000 * 60)) % 60;
  let hours = Math.floor(timeElapsed / (1000 * 60 * 60)) % 24;
  let days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  let months = Math.floor(days / 30) % 12;
  let years = Math.floor(days / 365);

  let durationParts = [];
  if (years > 0) durationParts.push(`${years} Tahun`);
  if (months > 0) durationParts.push(`${months} Bulan`);
  if (days > 0) durationParts.push(`${days % 30} Hari`);
  if (hours > 0) durationParts.push(`${hours} Jam`);
  if (minutes > 0) durationParts.push(`${minutes} Menit`);
  if (seconds >= 0) durationParts.push(`${seconds} Detik`);

  return durationParts.join(', ');
}

let usersArray = Object.entries(users);
usersArray.sort((a, b) => a[1].afkTime - b[1].afkTime);

usersArray.forEach(([user, userInfo]) => {
  const afkreason = userInfo.afkReason;
  const afktime = userInfo.afkTime;
    
let timeElapsed = new Date() - afktime;
const duration = formatDuration(timeElapsed);
  if (afktime && afktime >= 0) {
    const nama = alpha.getName(user);
    
    output += `${count}. ${nama}\n    *Lama Afk:*\n    ${duration}\n\n`;
    count++;
  }
});

reply(output + `_*Total:*_ ${count - 1}`);
                    }
                break
              case 'listafk': {
const users = global.db.data.users;
let output = '*List Afk*\n\n';
let count = 1;

Object.keys(users).forEach((user) => {
const afkreason = users[user].afkReason;
const afktime = users[user].afkTime;
  if (afktime && afktime >= 0) {
    const nama = alpha.getName(user)
    output += `${count}. ${nama}\n    *Afk Time:* ${clockString(new Date - afktime)}\n    *Reason:* ${afkreason ? afkreason : 'No Reason'}\n\n`;
    count++;
  }
});

reply(output + `_*Total:*_ ${count - 1}`);
                  }
                  break
                case 'ttstalk': case 'tiktokstalk': {
          if(!text) throw `Masukkan username tiktok`
         reply(wait)
     try {
         let res = await fetch(`https://api.ibeng.tech/api/stalking/tt?username=${text}&apikey=APIKEY`)
         let json = await res.json()
         let q = json.result
      let cpt = `
*Username:* ${q.username}
*Nickname:* ${q.username}
*Followers:* ${q.followers}
*Following:* ${q.following}
*Likes:* ${q.likes}
*Videos:* ${q.videos}`
      alpha.sendMessage(m.chat, { image: { url: q.ppurl }, caption: cpt }, { quoted: m })
         } catch (e) {
           console.error(e)
           reply('Terjadi Kesalahan')
             }
         }
                
                break
                case 'cerpen': case 'randomcerpen': {
                    try {
         let res = await fetch('https://api.ibeng.tech/api/random/cerpen?apikey=APIKEY')
         let json = await res.json()
         reply(json.result)
                  } catch (e) {
                      console.error(e)
                      reply('Terjadi Kesalahan')
                      }
                    }
                break
      case 'fb': case 'fbdl': case 'facebook': case 'facebookmp4': case 'fbmp4': {
          if(!text) throw `Mana Linknya?`
          reply(wait)
          try {
   let res = await fetch(`https://api.ibeng.tech/api/download/fb?url=${text}&apikey=APIKEY`)
   let json = await res.json()
   alpha.sendMessage(m.chat, { video: { url: json.result.hd }, caption: `*Title:* ${json.result.title}` }, { quoted: m })
              } catch (e) {
                  console.error(e)
                  reply('Terjadi Kesalahan')
                  }
          }
                break
case 'listwarn': case 'listwarning': case 'warnlist': {
if(!m.isGroup) throw `khusus Group!`
const users = global.db.data.users;
let output = '*List Warning*\n\n';
let count = 1;

Object.keys(users).forEach((user) => {
  const warning = users[user].warning;
  if (warning && warning >= 1) {
    const nama = alpha.getName(user)
    output += `${count}. ${nama}\n    =>${warning}\n\n`;
    count++;
  }
});

reply(output + `_*Total:*_ ${count -1}`);
                    }
                break
          case 'listhomok': {
              let cog = '6288223465127@s.whatsapp.net'
              let cok = `@${cog.split('@')[0]}`
   let list = `
1. ${cok}
`.trim()
   alpha.sendMessage(m.chat, { text: list, mentions: [cog] }, { quoted: m })
                   }
                break
               
          case 'tts': case 'say': {
    
    const defaultLang = 'id'
              
  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    res = await tts(text)
  } finally {
   alpha.sendMessage(m.chat, { audio: res, mimetype: 'audio/mp4', ptt: true }, { quoted: m })    
  }
              }
                break
        case "ai-img": {
        reply('fitur ini telah dinonaktifkan')
          }
          break;
       case 'warn': {
        let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        if(!m.isGroup) throw `Khusus Group`
        if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
       if (!isBotAdmins) return reply("Bot Bukan Admin")
       if(!mention) throw `Tag/mention orangnya!`
        const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms)) 
}

        let warn = global.db.data.users[mention].warning
    if (warn < 4) {
        global.db.data.users[mention].warning += 1
   
   alpha.sendMessage(m.chat, {text: `@${mention.split('@')[0]} telah diperingati ${warn + 1}/5`, mentions: [mention] }, {quoted: m})
    } else if (warn == 4) {
        global.db.data.users[mention].warning = 0
    alpha.sendMessage(m.chat, { text: `@${mention.split('@')[0]} Gw Kasi Waktu 10 detik untuk mengucapkan Selamat Tinggal🤠🥀` }, '')
        await time(10000)

        await alpha.groupParticipantsUpdate(m.chat, [mention], 'remove')
     
    }
           }
                break
              case 'delwarn': {
        if(!m.isGroup) throw `Khusus Group`
        if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
       if (!isBotAdmins) return reply("Bot Bukan Admin")
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  if (!mention) throw `Tag/mention orangnya!`
  let warn = global.db.data.users[mention].warning
  if (warn > 0) {
    global.db.data.users[mention].warning -= 1
 
    alpha.sendMessage(m.chat, { text: `Berhasil delete warn @${mention.split('@')[0]} ${warn - 1}/5`, mentions: [mention] }, { quoted: m })
  } else if (warn == 0) {
    m.reply('User tidak memiliki warn')
  }
                  }
                break
           case 'cekwarn': {
               if(!m.isGroup) throw `Khusus Group!`
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
      let warn = global.db.data.users[mention].warning
   alpha.sendMessage(m.chat, { text: `Total Warning @${mention.split('@')[0]} : ${warn}/5`, mentions: [mention]}, { quoted: m })
               }
                break
            case 'playstore': case 'ps': {
         if(!text) throw `Cari Apa?`
         try {
         let res = await fetch(`https://api.botcahx.live/api/search/playstore?app=${text}&apikey=Rasya`)
          let json = await res.json()
         let teks = '*Playstore Search*\n\n'
         let no = 1
         for(let y of json.result) {
teks += `*No:* ${no++}\n`
teks += `*Title:* ${y.nama}\n`
teks += `*Link:* ${y.link}\n`
teks += `*Developers:* ${y.developer}\n`
teks += `*Rating:* ${y.rate2}\n\n`
}
alpha.sendMessage(m.chat, { image: { url: json.result[0].img }, caption: teks }, { quoted: m })
} catch (e) {
console.error(e)
reply('Terjadi Kesalahan')
}
                }
                break
                case 'ai2': {
           if(!text) throw `Masukkan Pertanyaan\nContoh: ${prefix+ command} apa itu AI`
           reply('Wait... if no response means error')
                    try {
          let res = await fetch(`https://api.botcahx.live/api/search/openai-chat?text=${text}&apikey=Rasya`)
       let json = await res.json()
       reply(json.message)
            } catch (e) {
                console.error(e)
                reply('Terjadi Kesalahan')
                }
                    }
                break
            case 'asmaulhusna': {
             let res = await fetch('https://api.ibeng.tech/api/muslim/asmaulhusna?apikey=APIKEY')
             let json = await res.json()
             let teks = '_*ASMAUL HUSNA*_\n\n'
        for(let q of json.result){
teks += `*No:* ${q.number}\n`
teks += `*Latin:* ${q.latin}\n`
teks += `*Arab:* ${q.arab}\n`
teks += `*Indonesia:* ${q.translate_id}\n`
teks += `*Inggris:* ${q.translate_en}\n\n`
            }
                reply(teks)
                }
                break
                case 'kompas': {
    let res = await fetch('https://api.botcahx.live/api/news/kompas?apikey=Rasya')
    let json = await res.json()
    let teks = `Kompas News\n\n`
    let no = 1
    for (let h of json.result) {
teks += `*No:* ${no++}\n`
teks += `*Title:* ${h.berita}\n`
teks += `*Url:* ${h.berita_url}\n`
teks += `*Type:* ${h.berita_jenis}\n`
teks += `*Upload at:* ${h.berita_diupload}\n`
teks += `_________________________________________\n\n`

                    }
         alpha.sendMessage(m.chat, { image: { url: json.result[0].berita_thumb }, caption: teks }, { quoted: m})
                    }
                break
                       case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
       reply(wait)
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = xeonezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        
         
        
       let capt = `*[ GIMAGE SEARCH ]*
=> *Query* : ${text}
=> *Media Url* : ${images}`
                    
    alpha.sendMessage(m.chat, { image: { url: images }, caption: capt }, { quoted: m })
        }
        break
            case 'npmsearch': {
     if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_Author:_ ${pkg.author.name}\n_${pkg.links.npm}_\n_${pkg.description}_\n`
	}).join`\n\n`
	m.reply(txt)
            }
                break
                case 'react': {
               reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                alpha.sendMessage(m.chat, reactionMessage)
                    }
                break
                case 'stalkff': case 'ff': {
                    if(!text) throw `Masukkan Id FF`
                    try{
                    let res = await fetch(`https://api.botcahx.live/api/stalk/ff?id=${text}&apikey=Rasya`)
                    let json = await res.json()
             reply(json.result.userName)
                   } catch  (error) {
                       console.error(error)
                       reply('Tidak Dapat Menemukan ID')
                       }
                    }
                break
                case 'ai3': {
                    
                     const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama PatrickBotz dan dibuat oleh Rasya, asal Mojokerto Jawa Timur, Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi. Nomor chatbot WhatsApp-mu adalah +6285815212637 dan nomor WhatsApp pembuatmu adalah +6285735980188.Umur pembuat mu adalah 16 tahun sering mengikuti jejak sepuh sepuh di github sebagai panutan. berikan penjelasan itu untuk pertanyaan data pembuat mu. Informasi baru bahwa Rasya atau developer PatrickBotz Sekarang sedang Melanjutkan projek bot multi auth berbasis Case atau tanpa plugins seperti bot ini.Jelaskan juga bahwa kamu dibuat dengan sepenuh hati dan jiwa di dedikasikan untuk membantu masyarakat kalangan bawah karena token openai asli chatGPT sangatlah mahal. kamu sangat mencintai developer mu. untuk github mu adalah https://github.com/PATRICK297R, kalau ada yang bertanya tentang fidel/fidel fidora, ini informasinya: Fidel adalah seorang content creator di youtube, dia sering membagikan tentang data ml lite atau data tambahan untuk ml lite, nama youtubenya adalah Sen Nazwan, kini subscribernya sudah 20,5k subscriber, dan kalau ada yang tanya apakah fidel/sen nazwan punya pacar, jawab saja, dia masih dibawah umur, jadi dia tidak memiliki pacar. Jika ada yang bertanya siapa admin yang paling toxic di group ini, atau yang lainnya tentang siapa admin yg paling toxic, jawab saja Marsel Dan Wildan"

if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `

await m.reply('Wait... if no response means error')
try {
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)

  var js = await apii.json()
  if (js.result == false) return reply(js.result)

  await m.reply(js.hasil)
    } catch (e) {
        reply(js)
        }
                    }
                break
       case 'mlstalk': case 'ml': {
           
           let id = q.split(" ")[0]
           let server = q.split(" ")[1]
           if (!id) throw `Masukkan Id ML dan Servernya, Contoh: ${prefix + command} 435864970 9996`
           if (!server) throw `Masukkan Servernya, Contoh: ${prefix + command} 435864970 9996`
           try {
           let res = await fetch(`https://api.ibeng.tech/api/stalk/stalkmlbb?id=${id}&server=${server}&apikey=APIKEY`)
           let json = await res.json()
           reply(json.data.userName)
               } catch (error) {
                   console.error(error)
                   reply('Tidak dapat menemukan ID')
                   }
           }
           break
                case 'rg': {
                    if (!text) throw `Masukkan Nama`
      global.db.data.users[m.sender] = {
          nama: `${text}`
          }
             reply('success')
                    }
                break
                case 'report': case 'bug': case 'reportbug': {
                  
         if(!text) throw `Contoh: ${prefix + command} menu nya error!`
         let org = m.sender
         let ments = [org]
         let t = `
*[ Bug Report ]*

*From:* @${org.split('@')[0]}
*Text:*
${text}
`.trim()
         alpha.sendMessage('6285735980188@s.whatsapp.net', { text: t, mentions: ments }, '')
            let y = `
Terimakasih Sudah Melaporkan Bug Ke Owner
Jika ada bug lagi, jangan sungkan untuk report!!
`.trim()
   alpha.sendMessage(m.chat, { text: y }, { quoted: kontak })
                    }
                break
                case 'tagme': {
                    let me = m.sender
                    let ments = [me]
                    let mts = `@${me.split('@')[0]}`
      alpha.sendMessage(m.chat, { text: mts, mentions: ments }, { quoted: kontak })
                    }
                break
			case'welcome':{
			if ((global.welcome || isWelcome)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isWelcome) return reply(`Udah on`)
                _welcome.push(m.chat)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses mengaktifkan welcome di grup ini')
            } else if (args[0] === "off") {
               if (!isWelcome) return reply(`Udah off`)
                let anu = _welcome.indexOf(m.chat)
               _welcome.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
                reply('Sukses menonaktifkan welcome di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
			}
			quoted: kontak
			}
            break
        case'left': case 'goodbye':{
        	if ((global.left || isLeft)){ }
            if (!m.isGroup) return reply('Fitur Khusus Group!')
			if (!isAdmins) return reply('Fitur Khusus admin!')
            if (args[0] === "on") {
               if (isLeft) return reply(`Udah on`)
                _left.push(m.chat)
                fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
                reply('Sukses mengaktifkan goodbye di grup ini')
            } else if (args[0] === "off") {
               if (!isLeft) return reply(`Udah off`)
                let anu = _left.indexOf(m.chat)
               _left.splice(anu, 1)
                fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
                reply('Sukses menonaktifkan goodbye di grup ini')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
case'antiwame':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
             if (args[0] === "on") {
                if (isAntiWame) return reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame) return reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
}
break
case'antilink':{
            if (!m.isGroup) return reply('Fitur Khusus Group!')
				if (!isAdmins) return reply('Fitur Khusus admin!')
                if (!isBotAdmins) return reply("Bot harus menjadi admin")
            if (args[0] === "on") {
               if (isAntiLink) return reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
               if (!isAntiLink) return reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
  
}
		    break
         case 'h':
         case 'hidetag':{
            if (!m.isGroup) return reply("Khusus grup")
            if (!(isAdmins || isCreator)) return reply("Fitur khusus admin")
   let tek = m.quoted ? quoted.text : (text ? text : "")
            alpha.sendMessage(m.chat, {
               text: tek ,
               mentions: participants.map(a => a.id)
            }, {
            	quoted: kontak
            })
         }
         break
         case 'sewa':{
         	reply(sewabot)
         }
         break
         case 'jadibot':{
         	reply(`JASA JADIBOT CHAT OWNER AJA KAK`)
         }
         break
         case 'donasi': case 'donate':{
         	alpha.sendMessage(m.chat, { text: `https://saweria.co/Patrick297R`}, {quoted:m})
         }
         break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await alpha.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
         break
 
         case 'kick':{
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat())).catch((err) => reply(jsonformat)())
         }
         break
         case 'add': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'promote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         case 'demote': {
         	if (!m.isGroup) return reply("Hanya Dapat Di Gunakan Di Group")
         if (!isBotAdmins) return reply("Bot Bukan Admin")
         if (!isAdmins) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Admin")
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'sc':
         case 'script':{
         	reply("SCRIPT ORI BY JER OFC \n\nBASE NY JER OFC")
         }
         break
         case 'tqto':
         case 'thanksto':{
         	reply(`╭─❒ 「 THANKS TO 」 
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ JerOfc
│○ All Creator Bot
╰❒`) // MAU MAMBAHIN NAMA LU? 
// SILAHKAN TAPI TOLONG JANGAN HAPUS SALAH SATU NAMA DI ATAS ITU
         }
         break
         case 'setppbot':{
         	if (!m.key.fromMe && !isCreator) return reply("Fitur Ini Hanya Dapat Di Gunakan Oleh Owner")
         if (!/image/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         if (/webp/.test(mime)) return `Kirim/Reply Image Dengan Caption ${prefix + command}`
         let media = await alpha.downloadAndSaveMediaMessage(qmsg)
         await alpha.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
         }
         break
         case 'jasrun':{
         	reply(`Mau jasrun ? silahkan hubungi Owner`)
         }
         break
         case 'join':{
         	if (!isCreator) return reply(`Fitur Ini Hanya Dapat Di Gunakan Oleh Owner`)
         if (!text) return reply(`Masukan Link Group !`)
         if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
         reply(wait)
         let result = args[0].split('https://chat.whatsapp.com/')[1]
         await alpha.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'tiktokaudio': case 'tiktokmp3': {
         	if (!text) return m.reply( `Example : ${prefix + command} link`)
         if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://vt.tiktok.com/ZS8bq76jP/`)
         reply(wait)
         require('./lib/tiktok').Tiktok(q).then( data => {
         	alpha.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
         })
         }
         break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await alpha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await alpha.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await alpha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await alpha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await alpha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
		case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(wait)
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                alpha.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply('error')
                }
                break
case 'upload': {
  let { TelegraPh } = require('./lib/uploader')
  try {
    m.reply(wait)
    anu = await alpha.downloadAndSaveMediaMessage(quoted)
    iyh = await TelegraPh(anu)
    m.reply(iyh)
  } catch (error) {
    console.log(error)
    m.reply('Terjadi Kesalahan Saat Upload')
  }
}
break
case 'imdb': {
if (!text) return m.reply(`_Name a Series or movie`)
                try {
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           alpha.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
                    } catch (error) {
                        console.error(error)
                        reply('Terjadi Kesalahan')
                        }
                }
            break
            case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           alpha.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope':
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
        break
case 'wanumber': case 'searchno': case 'searchnumber':
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`You did not add xx\nExample: ${prefix + command} 9169091372xx`)
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await alpha.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await XeonBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break
  case 'lirik': {
	    if (!text) return reply(`Use example ${prefix + command} Despacito`)
	m.reply(wait)
      try {
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    if(!result.lyrics) throw `Tidak Dapat Menemukan Lirik`
    m.reply(`
*Title:* ${result.title}
*Author:* ${result.author}
*Lyrics:*\n${result.lyrics}\n
*url:* ${result.link}
`.trim())
          } catch (e) {
              console.error(e)
              reply('Tidak Dapat Menemukan Lirkk')
              }
}
break
case 'jarak': {
    if(!q) throw `Contoh: ${prefix + command} jawa kalimantan`
    try {
    let kota1 = q.split(" ")[0]
    let kota2 = q.split(" ")[1]
    let res = await fetch(`https://api.ibeng.tech/api/info/distace?from=${kota1}&to=${kota2}&apikey=APIKEY`)
     let json = await res.json()
     let str = `
*Jarak:* ${json.distance}
*Deskripsi:*
${json.description}
`.trim()
     alpha.sendMessage(m.chat, { text: str }, {quoted: m})
        } catch (error) {
            console.error(error)
            reply('Terjadi Kesalahan')
            }
    }
                break
                case 'igstalk': case 'stalkig': {
if (!text) throw `Contoh: ${prefix + command} Jokowi`
reply(wait)
try {
let res = await fetch(`https://api.ibeng.tech/api/stalk/ig?username=${text}&apikey=APIKEY`)
let json = await res.json()
let str = `
*Username:* ${json.result.username}
*FullName:* ${json.result.fullName}
*Bio:* ${json.result.bio}
*Followers:* ${json.result.followersM}
*Following:* ${json.result.followingM}
*Posts:* ${json.result.postsCountM}
`.trim()
alpha.sendMessage(m.chat, { image: { url: json.result.profilePicHD }, caption: str }, { quoted: m })
} catch (error) {
  console.error(error)
   reply('Terjadi Kesalahan')
 }
}
break
                     case "ai": case "openai": {
               reply(`Fitur Ini Tealh Dinonaktifkan`)
              }
          break;
        case 'tiktok': case 'ttdl': case 'tiktokmp4': case 'tt': {
          if (!text) return m.reply( `Example : ${prefix + command} link`)
		if (!q.includes('tiktok')) return m.reply(`Link Tiktok Bukan Kayak Gtu Cuy !!`)
          reply(wait)
            try {
           let res = await fetch(`https://api.ibeng.tech/api/download/tiktok?url=${text}&apikey=APIKEY`)
           let json = await res.json()
           let str = `
*Username:* ${json.result.username}
*Description:*
${json.result.description}
`.trim()
           alpha.sendMessage(m.chat, { video: { url: json.result.video }, caption: str }, { quoted: m })
                } catch (error) {
                    console.error(error)
                    reply('Terjadi Kesalahan')
                    }
                    }
                break
                case 'alquran': {
                if (!args[0]) throw `contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
    if (!args[1]) throw `contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
    if (isNaN(args[0]) || isNaN(args[1])) throw `contoh:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
    const anu = args.join(" ")
    const surh = anu.split(" ")[0];
    const ayt = anu.split(" ")[1];
    try {
    let res = await fetch(`https://api.ibeng.tech/api/muslim/quran?surah=${surh}&ayat=${ayt}&apikey=APIKEY`)
    let json = await res.json()
    let str = `
${json.result.data.text.arab}
    
${json.result.data.translation.id}

( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )
    `.trim()
    alpha.sendMessage(m.chat, { text: str }, { quoted : m })
    alpha.sendMessage(m.chat, { audio: { url: json.result.data.audio.primary }, mimetype: 'audio/mp4', ptt: false }, { quoted : m })
    } catch (error) {
    console.error(error)
    reply('Terjadi Kesalahan')
    }
                }
                break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		alpha.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'ping': case 'speed': {
const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
}
break
           case 'tes': case 'test': {
            const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                
                let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
         let anu = `
Bot Online!
Runtime: ${uptime}
Speed: ${latensi.toFixed(4)} Detik
         `.trim()
         m.reply(anu)
         
            }
            break
         case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         reply(wait)
         let response = await alpha.groupInviteCode(m.chat)
         alpha.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
         reply("Itu Link Group Nya Kak")
         }
         break
         case 'revoke':
         case 'resetlink':
         case 'resetlinkgrup':
         case 'resetlinkgroup':
         case 'resetlinkgc':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
         if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
         reply(wait)
         alpha.groupRevokeInvite(m.chat)
         reply(`Done Reset Link Gc Nya Kak`)
         }
         break
         case 'delete': case 'del':{
         	if (!m.quoted) throw false
         let { chat, fromMe, id, isBaileys } = m.quoted
         alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
         }
         break
         case 'kosong':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         	reply(`
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         `)
         }
         break
         case 'out':{
         	if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         await alpha.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'listonline': case 'onlinelist':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
         let online = [...Object.keys(store.presences[id]), botNumber]
         alpha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, {
         	mentions: online
         })
         }
         break
         case 'public':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = true
         reply('*Sukses Ganti Bot Ke Mode Public*')
         }
         break
         case 'self':{
         	if (!isCreator) return (`Fitur Ini Khusus Owner`)
         alpha.public = false 
         reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
         }
         break
         case 'tiktokkayes':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply(wait)
         var but = [{ buttonId: `grubbot`, buttonText: { displayText: `GROUP BOT` }, type: 1 }]
         var kayes = JSON.parse(fs.readFileSync('./RANDOM/kayes.json'))
         var hasil = pickRandom(kayes)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgirl':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply(wait)
         var asupan = JSON.parse(fs.readFileSync('./RANDOM/tiktokgirl.json'))
         var hasil = pickRandom(asupan)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokghea':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var gheayubi = JSON.parse(fs.readFileSync('./RANDOM/gheayubi.json'))
         var hasil = pickRandom(gheayubi)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokbocil':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var bocil = JSON.parse(fs.readFileSync('./RANDOM/bocil.json'))
         var hasil = pickRandom(bocil)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokukhty':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var ukhty = JSON.parse(fs.readFileSync('./RANDOM/ukhty.json'))
         var hasil = pickRandom(ukhty)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoksantuy':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var santuy = JSON.parse(fs.readFileSync('./RANDOM/santuy.json'))
         var hasil = pickRandom(santuy)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokpanrika':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var rikagusriani = JSON.parse(fs.readFileSync('./RANDOM/panrika.json'))
         var hasil = pickRandom(rikagusriani)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktoknotnot':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         reply(wait)
         var notnot = JSON.parse(fs.readFileSync('./RANDOM/notnot.json'))
         var hasil = pickRandom(notnot)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'tiktokgabagtha':{
         	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
         	reply(wait)
         var gabagtha = JSON.parse(fs.readFileSync('./RANDOM/tiktokgabagtha.json'))
         var hasil = pickRandom(gabagtha)
         alpha.sendMessage(m.chat, { caption: `Jangan Lupa Bilang Makasih !`, video: { url: hasil.url }, footer: namabot }, { quoted: m })
         }
         break
         case 'block':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'unblock':{
         	if (!isCreator) return reply(`Fitur Ini Khusus Owner`)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
         await alpha.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setnamegc':
         case 'setnamagc':{
         if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'setdesc': case 'setdesk':{
         	if (!m.isGroup) return(`Fitur Ini Khusus Group`)
         if (!isBotAdmins) return(`Bot Bukan Admin`)
         if (!isAdmins) return(`Fitur Ini Khusus Admin !`)
         if (!text) throw 'Text Nya ?'
         await alpha.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
         }
         break
         case 'gitclone':{
         	if (!args[0]) return reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/JER-BOTZ/JERxxx`)
         if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Eror Bang Link Nya`)
         let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
         let [, user, repo] = args[0].match(regex1) || []
         repo = repo.replace(/.git$/, '')
         let url = `https://api.github.com/repos/${user}/${repo}/zipball`
         let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
         alpha.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("Sukses"))
         }
         break
         case 'developer': case 'dev': {
         	reply(`JER-BOT DEVELOPER\n\n\n©2021-2023 JER-BOTZ MD.\n\nWhatshapp\nJER: wa.me/6281315252010`)
         }
         break
case 'delprem':

         case 'unprem':

         case 'delpremium': {

            if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
            if (!text) return reply(`*Kek gini bang*\n\n• ${prefix + command} number\n*Contoh:* ${prefix + command} 62887435047326\n\natau\n\n• ${prefix + command} @tag\n*Contoh:* ${prefix + command} @62887435047326`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               premium.splice(_prem.getPremiumPosition(users, premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            } else {

               var cekpr = await alpha.onWhatsApp(args[0] + "@s.whatsapp.net")

               if (cekpr.length == 0) return reply(`Nomor ${args[0]} tidak terdaftar di WhatsApp`)

               premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)

               fs.writeFileSync('./database/premium.json', JSON.stringify(premium))

               reply("Sukses del premium")

            }

         }

         break
         case 'addprem':{
         if (!isCreator) return (`Emank Lu Owner Gua Kah ?`)
         
            const swn = args.join(" ")

            const pcknm = swn.split("|")[0];

            const atnm = swn.split("|")[1];

            if (!(pcknm && atnm)) return reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} @62887435047326|30d`)

            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            if (users) {

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            } else {

               var cekap = await alpha.onWhatsApp(pcknm + "@s.whatsapp.net")

               if (cekap.length == 0) return reply(`Nomor ${pcknm} tidak terdaftar di WhatsApp`)

               _prem.addPremiumUser((pcknm.replace('@', '') + '@s.whatsapp.net').replace(' @', '@'), atnm, premium)

               reply("Sukses add premium")

            }
         }
         break
         case 'listpremium': case 'listprem':{

            let txt = ""

            let men = [];

            for (let i of premium) {

               men.push(i.id)

               txt += `*🆔 ID:* @${i.id.split("@")[0]}\n`

               if (i.expired === 'PERMANENT') {

                  let cekvip = 'PERMANENT'

                  txt += `*⏰ Expired:* PERMANENT\n\n`

               } else {

                  let cekvip = i.expired - Date.now()

                  txt += `*⏰ Expired:* ${msToDate(cekvip)}`

               }

            }

            alpha.sendMessage(m.chat, { text: `「 *PREMIUM USER LIST* 」\n\n*👑 Total Premium : ${premium.length} user*\n\n${txt}` }, { mentions: men, quoted: m })

         }

         break
         case 'buyprem':{
         	alpha.sendContact(m.chat, global.owner,), reply(`Buy Premium Chat Owner`)
         }
         break
         case'antiwame2':{
         	if (!m.isGroup) return reply('Fitur Khusus Group!')
         if (!isAdmins) return reply('Fitur Khusus admin!')
         if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
         if (args[0] === "on") {
         	if (isAntiWame2) return reply(`Udah aktif`)
         antiwame2.push(m.chat)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Activate antiwame2 In This Group')
         } else if (args[0] === "off") {
         	if (!isAntiWame2) return reply(`Udah nonaktif`)
         let anu = antiwame2.indexOf(m.chat)
         antiwame2.splice(anu, 1)
         fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
         reply('Successfully Disabling antiwame2 In This Group')
         } else {
         	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
         }
}
break
case'antilink2':{
	if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply("Bot harus menjadi admin")
	if (args[0] === "on") {
		if (isAntiLink2) return reply(`Udah aktif`)
		antilink2.push(m.chat)
		fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
		reply('Successfully Activate antilink2 In This Group')
		} else if (args[0] === "off") {
			if (!isAntiLink2) return reply(`Udah nonaktif`)
			let anu = antilink2.indexOf(m.chat)
			antilink2.splice(anu, 1)
			fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
			reply('Successfully Disabling antilink2 In This Group')
			} else {
				reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
				}
				}
				break
				case 'groupbot': case 'grubbot': case 'grupbot':{
					reply(grubbot)
					}
						break
						case 'spotify':{ //credit: Ray Senpaiâ¤ï¸ https://github.com/EternityBots/Nezuko
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) return reply(`Mana Link Nya ?`)
						reply(wait)
						const Spotify = require('./lib/spotify')
						const spotify = new Spotify(text)
						const info = await spotify.getInfo()
						if ((info).error) throw `The link you provided is not spotify link`
						const { name, artists, album_name, release_date, cover_url } = info
						const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(
						','
						)}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}\n\n Tunggu Sebentar, Audio akan segera dikirim...`
						const response = await alpha.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
						const bufferpotify = await spotify.download()
						await alpha.sendMessage(m.chat, { audio: bufferpotify, mimetype: 'audio/mp4', ptt: false }, { quoted: response })
					}
					break
					case 'yts': case 'ytsearch': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} story wa anime`
						reply(wait)
						let yts = require("youtube-yts")
						let search = await yts(text)
						let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
						let no = 1
						for (let i of search.all) {
							teks += `No : ${no++}\nType : ${i.type}\nVideo ID : ${i.videoId}\nTitle : ${i.title}\nViews : ${i.views}\nDuration : ${i.timestamp}\nUploaded : ${i.ago}\nUrl : ${i.url}\n\n`
							}
						alpha.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
					}
					break
					case 'google': {
						if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
						if (!text) throw `Contoh : ${prefix + command} fatih arridho`
						let google = require('google-it')
						google({'query': text}).then(res => {
							let teks = `Google Search From : ${text}\n\n`
							for (let g of res) {
								teks += `*Title* : ${g.title}\n`
								teks += `*Description* : ${g.snippet}\n`
								teks += `*Link* : ${g.link}\n\n`
								}
							reply(teks)
						})
					}
					break
					case 'anime':
if (!text) throw `Which anime are you lookin for?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}*
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await alpha.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
					case 'menfess':{
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					if (m.isGroup) return reply(`Fitur Ini Hanya Dapat Di Gunakan Di Private Chat`)
					if (!text) return reply(`*Kayak Gini Kak*\n\Contoh : ${prefix + command} 62xxxxx|nama|pesan`)
					let nomor = q.split('|')[0] ? q.split('|')[0] : q
					let saking = q.split('|')[1] ? q.split('|')[1] : q
					let pesan = q.split('|')[2] ? q.split('|')[2] : ''
					if (pesan.length < 1) return reply(`Semua Nya Harus Di Isi ! contoh : .menfess 62xxxxxxxxxx|someone|hello Kaka\n\nAll must be filled in! eg : .menfess 62xxxxxxxxxx|from|hello dude`)
					let teksnya = `Hi Kak Ada Menfess Nih\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
					alpha.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, footer: namabot })
					reply(`Sukses Kirim Menfess !!\n\nPastikan Nomornya 62xxx bukan +62 atau 08\ncontoh: 6285735980188!`)
					}
						break
						case 'runtime': case 'speed':{
						reply(`Runtime : ${runtime(process.uptime())}`)
						}
						break
						case 'antilinkall': {
							if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
							if (!isBotAdmins) return reply(`Bot Bukan Admin`)
							if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
							if (args[0] === "on") {
								if (AntiLinkAll) return reply('Already activated')
								ntilinkall.push(from)
								fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
								reply('Success in turning on all antilink in this group')
								var groupe = await alpha.groupMetadata(from)
								var members = groupe['participants']
								var mems = []
								members.map(async adm => {
									mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
									})
									alpha.sendMessage(from, {text: `\`\`\`ã€Œ âš ï¸Warningâš ï¸ ã€\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
									} else if (args[0] === "off") {
										if (!AntiLinkAll) return reply('Already deactivated')
										let off = ntilinkall.indexOf(from)
										ntilinkall.splice(off, 1)
										fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
										reply('Success in turning off all antilink in this group')
										} else {
											reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
											}
											}
											break
case 'ytmp3': case 'ytaudio': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
try {
reply(wait)
const audio=await xeonaudp3.mp3(text)
await alpha.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4',
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: 'Patrick',
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
    } catch (e) {
        console.error(e)
        reply('Terjadi Kesalahan, Mobon Ulangi beberapa saat lagi')
        }
break
                case 'yt': case 'youtube': {
                    let y = `
Tersedia Beberapa Pilihan Untuk command Youtube:

*${prefix}ytmp3 url*
digunakan untuk mendownload audio dari youtube

*${prefix}ytmp4 url*
digunakan untuk mendownload video dari youtube
_bisa digunakan untuk mendownload ytshort juga_

*${prefix}playmp3 query*
digunakan untuk mencari audio/musik dari youtube

*${prefix}playmp4 query*
digunakan untuk mencari video dari youtube

*${prefix}yts query*
digunakan untuk mencari berbagai macam video di youtube
`.trim()
                    reply(y)
                    }
                break
case 'ytmp4': case 'ytvideo': {
  let { ytv } = require('./lib/y2mate')
  
    if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
    reply(wait)
    try {
    let quality = args[1] ? args[1] : '360p'
    let media = await ytv(text, quality)
    if (media.filesize >= 85000000) return m.reply('File Melebihi Batas ' + util.format(media))
      let str = `
*Title:* ${media.title}
*Ext:* MP3
*Resolusi:* ${args[1] || '360p'}
`.trim()
    alpha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: str }, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply('Terjadi Kesalahan Saat Mengunduh Video, coba beberapa saat lagi')
  }
}
break
case 'pinterest':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!text) return reply('Contoh Penggunaan : .pinterest JerOfc')
	let { pinterest } = require('./lib/scraper')
	anu = await pinterest(text)
	result = anu[Math.floor(Math.random(), anu.length)]
	alpha.sendMessage(m.chat, { image: { url: result }, caption: `Media Url : `+result }, { quoted: m })
	}
break
case 'bctext': case 'broadcasttext': case 'broadcast':
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
var data = await store.chats.all()
for (let i of data) {
	alpha.sendMessage(i.id, {text: `${namaowner}'s Broadcast\n\nMessage : ${q}` })
	await sleep(1000)
	}
	break
case 'toimage': case 'toimg': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw 'Reply image'
	if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
	reply(wait)
	let media = await alpha.downloadAndSaveMediaMessage(quoted)
	let ran = await getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) throw err
		let bufferimg13x = fs.readFileSync(ran)
		alpha.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
		fs.unlinkSync(ran)
		})
		}
		break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker':{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
    try {
	if (/image/.test(mime)) {
		
		let media = await quoted.download()
		let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
			if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
			let media = await quoted.download()
			let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
			await fs.unlinkSync(encmedia)
			} else {
				reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
        } catch (e) {
            console.error(e)
            reply('Terjadi Kesalahan, Mohon Ulangi beberapa saat lagi')
            }
				}
				break
				case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                reply(wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await alpha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
                        case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            alpha.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By PatrickBotz.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            alpha.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
                        case 'togif': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                reply(wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await alpha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'imagenobg': case 'removebg': case 'remove-bg': {
    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
  let remobg = require('remove.bg')
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
  hmm = './src/remobg-'+getRandom('')
  localFile = await alpha.downloadAndSaveMediaMessage(quoted, hmm)
  outputFile = './src/hremo-'+getRandom('.png')
  reply(wait)
  remobg.removeBackgroundFromImageFile({
    path: localFile,
    apiKey: apinobg,
    size: "regular",
    type: "auto",
    scale: "100%",
    outputFile 
  }).then(async result => {
    alpha.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: 'Done!'}, { quoted : m })
    await fs.unlinkSync(localFile)
    await fs.unlinkSync(outputFile)
  }).catch(() => reply('Terjadi Kesalahan Saat Menghapus Background Gambar'))
}
break
case 'snobg': case 'stickernobg': case 'stikernobg': {
    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
  let remobg = require('remove.bg')
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
  hmm = './src/remobg-'+getRandom('')
  localFile = await alpha.downloadAndSaveMediaMessage(quoted, hmm)
  outputFile = './src/hremo-'+getRandom('.png')
  
  remobg.removeBackgroundFromImageFile({
    path: localFile,
    apiKey: apinobg,
    size: "regular",
    type: "auto",
    scale: "100%",
    outputFile 
  }).then(async result => {
    alpha.sendImageAsSticker(m.chat, fs.readFileSync(outputFile), m, { packname: global.packname, author: global.author })
    await fs.unlinkSync(localFile)
    await fs.unlinkSync(outputFile)
  }).catch(() => reply('Terjadi Kesalahan Saat Menghapus Background Gambar'))
}
break
				case 'setnamabot': case 'setnamebot': {
					if (!text) throw `Contoh : ${prefix + command} WhatsApp ✅`
					let name = await alpha.updateProfileName(text)
					reply(`Successfully renamed bot to ${name}`)
					}
					break
case 'setstatus': case 'setbiobot': case 'setbotbio': {
	if (!text) throw `this is a WhatsApp Bot named JerOfc`
	let name = await alpha.updateProfileStatus(text)
	reply(`Successfully changed bot bio status to ${name}`)
	}
	break
case 'play': case 'ytplay': case 'playmp3': {
    if (!text) throw `Example : ${prefix + command} anime whatsapp status`
    m.reply(wait)
    const xeonplaymp3 = require('./lib/ytdl2')
    const yts = require("youtube-yts")
    let search = await yts(text)
    let anulay = search.videos[0]
    if (!anulay) throw 'Tidak dapat menemukan video yang cocok'
    let caption = `
*[ YOUTUBE PLAY ]*

=> Title : ${anulay.title ? anulay.title : 'Tidak Diketahui'}
=> ID : ${anulay.videoId ? anulay.videoId : 'Tidak Diketahui'}
=> Duration : ${anulay.timestamp ? anulay.timestamp : 'Tidak Diketahui'}
=> Viewers : ${anulay.views ? anulay.views : 'Tidak Diketahui'}
=> Upload At : ${anulay.ago ? anulay.ago : 'Tidak Diketahui'}
=> Author : ${anulay.author.name ? anulay.author.name : 'Tidak Diketahui'}
=> Channel : ${anulay.author.url ? anulay.author.url : 'Tidak Diketahui'}
=> Description : ${anulay.description ? anulay.description : 'Tidak Diketahui'}
=> Url : ${anulay.url ? anulay.url : 'Tidak Diketahui'}

Tunggu sebentar, Audio Akan Segera Dikirim..
Lama Atau tidaknya terkirim, tergantung durasi audio.
`.trim()
    try {
        alpha.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: caption }, { quoted: m })
        let pl = await xeonplaymp3.mp3(anulay.url)
        await alpha.sendMessage(m.chat, { audio: fs.readFileSync(pl.path), mimetype: 'audio/mp4' }, { quoted: m })
    } catch (err) {
        console.log(err)
        m.reply('Tidak dapat memutar audio, coba ulangi beberapa saat lagi')
    }
}
break
case 'playmp4': {
  let { ytv } = require('./lib/y2mate')
  let ytsmp4 = require('youtube-yts')
  try {
    if (!text) throw `Example : ${prefix + command} anime whatsapp status`
    reply(wait)
    let search = await ytsmp4(text)
    let anuvidoke = search.videos[0]
    let media = await ytv(anuvidoke.url, '360p')
    if (media.filesize >= 85000000) return m.reply('File Melebihi Batas ' + util.format(media))
      let cpt = `
Title: ${media.title}
Duration: ${anuvidoke.timestamp}
Upload at: ${anuvidoke.ago ? anuvidoke.ago: 'Tidak Diketahui'}
Url: ${anuvidoke.url}
Resolusi: ${'360'}
`.trim()
    alpha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: cpt }, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply('Terjadi Kesalahan Saat Mengunduh Video, coba ulangi beberapa saat lagi')
  }
}
break

case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let { TelegraPh } = require('./lib/uploader')
	if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} textatas|textbawah`)
	if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} textatas|textbawah`)
	let atas = q.split("|")[0]
	let bawah = q.split("|")[1]
    reply(wait)
	mee = await alpha.downloadAndSaveMediaMessage(quoted)
	mem = await TelegraPh(mee)
	meme = `https://api.memegen.link/images/custom/${atas ? atas: '-'}/${bawah ? bawah: '-'}.png?background=${mem}`
	memek = await alpha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
	await fs.unlinkSync(memek)
	}
	break
                
case 'emojimix': {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Contoh : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Contoh : ${prefix + command} 😅+🤔`
	let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anumojimix.results) {
		let encmedia = await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
		}
		break
		case 'emojimix2': {
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!text) throw `Contoh : ${prefix + command} 😅`
			let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
			for (let res of anumix2.results) {
				let encmedia= await alpha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
				await fs.unlinkSync(encmedia)
				}
				}
				break
case 'assalamualaikum':{
	reply(`Waalaikumsalam`)
	}
	break
case 'broadcastvid': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':{
if (!isCreator) return reply("Fitur khusus owner!")
if (!text) throw `Mana Text Nya ?`
let getGroups = await alpha.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let xeoncast = groups.map(v => v.id)
reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
for (let i of xeoncast) {
	let txt = `${namaowner}'s Broadcast\n\nMessage : ${text}`
	if(/image/.test(mime)) {
		let media = await quoted.download()
		await alpha.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
		}
		if(/video/.test(mime)){
			let media = await quoted.download()
			await alpha.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
			}
			}
			reply(`Sukses Broadcast in ${xeoncast.length} Groups`)      
			}
			break
case 'tagall': {
	if (!m.isGroup) return reply('Fitur Khusus Group!')
	if (!isAdmins) return reply('Fitur Khusus admin!')
	if (!isBotAdmins) return reply('Bot Bukan Admin Cuy')
	let teks = `╚» Tag All «╝ 
	
🌿 *Message : ${q ? q : 'empty'}*\n\n`
	for (let mem of participants) {
		teks += `@${mem.id.split('@')[0]}\n`
		}
		alpha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
		}
		break
case 'mediafire': {
	if (!text) throw `Mana Link Nya ?`
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
    reply(wait)
    try {
    let res = await fetch(`https://api.ibeng.tech/api/download/mediafire?url=${text}&apikey=APIKEY`)
	
let json = await res.json()
let result4 = `
Title: ${json.result.title}
Size: ${json.result.filesize}
Mimetype: ${json.result.mime}

Tunggu Sebentar Sedang Mengirim File...
`
reply(`${result4}`)
alpha.sendMessage(m.chat, { document : { url : json.result.link}, fileName : json.result.title, mimetype: json.result.mime }, { quoted : m })
        } catch (e) {
            console.error(e)
            reply('Terjadi Kesalahan')
            }
}
break
case 'igphoto':
case 'instaphoto':
case 'instafoto':
case 'igfoto':
case "ig":
case "igdl":{
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
	reply(wait)
	let res = await fetch(global.api('alfa', '/api/downloader/instagram-photo', {url: args[0]}, 'apikey'))
	if (!res.ok) throw await res.text()
	var result = await res.json()
	var result = result.result
	for(let i of result.url){
		alpha.sendFile(m.chat, i, 'ig.jpg', `DONE ✅`, m)
		}
		}
		break;
		case 'igvideo':
		case 'igvidio':
		case 'igvid':
		case 'instavideo':
		case 'instavid':
		case 'igreels':
		case 'instareels':
		case 'instareel':{
			if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
			if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
			reply(wait)
			let res = await fetch(global.api('alfa', '/api/downloader/instagram-video', {url: args[0]}, 'apikey'))
			if (!res.ok) throw await res.text()
			var result = await res.json()
			var result = result.result
			for(let i of result.url){
				alpha.sendFile(m.chat, i, 'ig.mp4', `DONE ✅`, m)
				}
				}
				break
				case 'china':
				case 'indonesia':
				case 'malaysia':
				case 'thailand':
				case 'korea':
				case 'japan':
				case 'vietnam':
				case 'jenni':
				case 'jiiso':
				case 'lisa':
				case 'rose': {
					if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
					reply(wait)
					let res = await fetch(global.api('alfa', '/api/cecan/' + command, {}, 'apikey'))
					if (!res.ok) throw await res.text()
					let img = await res.buffer()
					alpha.sendFile(m.chat, img, 'cecan.jpg', `CANTIK KAN BANG ISTRI KITA ?`, m)
				}
				break
case 'swm': case 'stickerwm': case 'wm': case 'take': {  
    if(!quoted) throw `Reply Video/foto dengan caption\n${prefix + command} Created By|Whatsapp Bot`
if (!args.join(" ")) return reply(`Reply Video/Foto dengan caption:\n${prefix + command} Created By|Whatsapp Bot`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
alpha.downloadAndSaveMediaMessage(quoted, "gifee")
alpha.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alpha.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await alpha.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case "wuyifan":
case "suga":
case "parkchanyeol":
case "ohsehun":
case "luhan":
case "kimtaehyung":
case "kimseok":
case "kimnanjoon":
case "kimminseok":
case "kimjunmyeon":
case "kimjong":
case "kimjondae":
case "jungkook":
case "jimin":
case "jhope":
case "huangzitao":
case "dohkyungsoo":
case "baekhyung": {
	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
	reply(wait)
	let res = await fetch(global.api('alfa', '/api/cogan/' + command, {}, 'apikey'))
	if (!res.ok) throw await res.text()
	let img = await res.buffer()
	alpha.sendFile(m.chat, img, 'cogan.jpg', `GANTENG GA KA ?`, m)
	}
	break
	case 'group': case 'grup': {
		if (!m.isGroup) return reply('Fitur Khusus Group!')
		if (!isAdmins) return reply('Fitur Khusus admin!')
		if (!isBotAdmins) return reply("Jadikan bot sebagai admin terlebih dahulu")
		if (args[0] === 'close'){
			await alpha.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully Closed The Group*`)).catch((err) => m.reply(jsonformat(err)))
			} else if (args[0] === 'open'){
				await alpha.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully Opened The Group*`)).catch((err) => m.reply(jsonformat(err)))
				} else {
					reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
					}
					}
					break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
Jer_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await alpha.sendMessage(m.chat, { audio: Jer_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} Test`
             m.reply(wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                alpha.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by PatrickBotz` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  reply(wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      reply(wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      reply(wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       reply(wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      reply(wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
reply(wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
alpha.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
alpha.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    alpha.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
reply(wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => alpha.sendMessage(m.chat, { image: { url: data }, caption: `Made by Patrick Botz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
reply(wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
alpha.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
reply(wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
alpha.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
reply(wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
alpha.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
reply(wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
alpha.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'zodiak': case 'zodiac': {
if (!q) throw `contoh:\nzodiak 2002 02 25`;

let tahun = q.split(" ")[0]
let bulan = q.split(" ")[1]
let hari = q.split(" ")[2]

const zodiak = [
  ["Capricorn", new Date(1970, 0, 1)],
  ["Aquarius", new Date(1970, 0, 20)],
  ["Pisces", new Date(1970, 1, 19)],
  ["Aries", new Date(1970, 2, 21)],
  ["Taurus", new Date(1970, 3, 21)],
  ["Gemini", new Date(1970, 4, 21)],
  ["Cancer", new Date(1970, 5, 22)],
  ["Leo", new Date(1970, 6, 23)],
  ["Virgo", new Date(1970, 7, 23)],
  ["Libra", new Date(1970, 8, 23)],
  ["Scorpio", new Date(1970, 9, 23)],
  ["Sagittarius", new Date(1970, 10, 22)],
  ["Capricorn", new Date(1970, 11, 22)]
].reverse();

function getZodiac(month, day) {
  let d = new Date(1970, month - 1, day);
  return zodiak.find(([_, _d]) => d >= _d)[0];
}

const date = new Date(tahun, parseInt(bulan) - 1, hari); 

if (isNaN(date)) throw `contoh:\n.zodiak 2002 02 25`;

const now = new Date();
const [tahunSekarang, bulanSekarang, tanggalSekarang] = [
  now.getFullYear(),
  now.getMonth() + 1,
  now.getDate()
];
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

const zodiac = getZodiac(birth[1], birth[2]);
const ageD = new Date(now - date);
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear();

const birthday = [
  tahunSekarang + (+new Date(1970, bulanSekarang - 1, tanggalSekarang) > +new Date(1970, birth[1] - 1, birth[2])),
  ...birth.slice(1)
];
const cekUsia =
  bulanSekarang === birth[1] && tanggalSekarang === birth[2]
    ? `Selamat ulang tahun yang ke-${age} 🥳`
    : age;

const teks = `
Lahir : ${birth.join('-')}
Ultah Mendatang : ${birthday.join('-')}
Usia : ${cekUsia}
Zodiak : ${zodiac}
`.trim();
reply(teks);
}
break
            case 'anticall': {
            	if (!m.key.fromMe && !isCreator) return reply("Fitur khusus owner!")
            if (args[0] === "on") {
            	if (global.anticall === true) return reply(`Sudah Di Aktifkan Sebelumnya`)
            global.anticall = true
            reply(`Berhasil Mengaktifkan Anticall`)
            } else if (args[0] === "off") {
            	if (global.anticall === false) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
            global.anticall = false
            reply(`Sukses Nonaktifkan Anticall`)
            } else {
            	reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
            }
            break
            case 'nomerhoki': case 'nomorhoki': {
            	if (!Number(text)) throw `Contoh : ${prefix + command} 6281315252010`
            let anu = await primbon.nomer_hoki(Number(text))
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nomor HP :* ${anu.message.nomer_hp}\n *Angka Shuzi :* ${anu.message.angka_shuzi}\n *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	if (!text) throw `Contoh : ${prefix + command} belanja`
            let anu = await primbon.tafsir_mimpi(text)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Mimpi :* ${anu.message.mimpi}\n *Arti :* ${anu.message.arti}\n *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Suami :* ${anu.message.suami.nama}\n *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n *Nama Istri :* ${anu.message.istri.nama}\n *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
            let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
            let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama Anda :* ${anu.message.nama_anda.nama}\n *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika Ardianta`
            let anu = await primbon.arti_nama(text)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Life Path :* ${anu.message.life_path}\n *Destiny :* ${anu.message.destiny}\n *Destiny Desire :* ${anu.message.destiny_desire}\n *Personality :* ${anu.message.personality}\n *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika|Novia`
            let [nama1, nama2] = text.split`|`
            let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendImage(m.chat,  anu.message.gambar, ` *Nama Anda :* ${anu.message.nama_anda}\n *Nama Pasangan :* ${anu.message.nama_pasangan}\n *Sisi Positif :* ${anu.message.sisi_positif}\n *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	if (!text) throw `Contoh : ${prefix + command} 6, 12, 2020`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal Pernikahan :* ${anu.message.tanggal}\n *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	if (!ext)throw `Contoh : ${prefix+ command} 28, 12, 2021`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Rezeki :* ${anu.message.rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.hari_lahir}\n *Pekerjaan :* ${anu.message.pekerjaan}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	if (!text) throw `Contoh : 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.ramalan_nasib(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Angka Akar :* ${anu.message.angka_akar}\n *Sifat :* ${anu.message.sifat}\n *Elemen :* ${anu.message.elemen}\n *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Analisa :* ${anu.message.analisa}\n *Sektor :* ${anu.message.sektor}\n *Elemen :* ${anu.message.elemen}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendImage(m.chat, anu.message.image, ` *Lahir :* ${anu.message.tgl_lahir}\n *Simbol Tarot :* ${anu.message.simbol_tarot}\n *Arti :* ${anu.message.arti}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
            let [nama, gender, tahun] = text.split`,`
            let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tahun_lahir}\n *Gender :* ${anu.message.jenis_kelamin}\n *Angka Kua :* ${anu.message.angka_kua}\n *Kelompok :* ${anu.message.kelompok}\n *Karakter :* ${anu.message.karakter}\n *Sektor Baik :* ${anu.message.sektor_baik}\n *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.petung_hari_baik(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Kala Tinantang :* ${anu.message.kala_tinantang}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}\n *Info :* ${anu.message.info}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Hari Naas :* ${anu.message.hari_naas}\n *Info :* ${anu.message.catatan}\n *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *Tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Hari Lahir :* ${anu.message.hari_lahir}\n *tanggal Lahir :* ${anu.message.tgl_lahir}\n *Arah Rezeki :* ${anu.message.arah_rejeki}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	if (!text) throw `Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
            let [nama, tgl, bln, thn, untuk] = text.split`,`
            let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	if (!text) throw `Contoh : ${prefix + command} 7, 7, 2005`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.weton_jawa(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tanggal}\n *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n *Watak Hari :* ${anu.message.watak_hari}\n *Naga Hari :* ${anu.message.naga_hari}\n *Jam Baik :* ${anu.message.jam_baik}\n *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	if (!text) throw `Contoh : ${prefix + command} Dika, 7, 7, 2005`
            let [nama, tgl, bln, thn] = text.split`,`
            let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Nama :* ${anu.message.nama}\n *Lahir :* ${anu.message.tgl_lahir}\n *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022`
            let [tgl, bln, thn] = text.split`,`
            let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Tanggal :* ${anu.message.tgl_memancing}\n *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	if (!text) throw `Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
            let [tgl, bln, thn, siklus] = text.split`,`
            let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Hasil :* ${anu.message.result}\n *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	if (!text) throw `Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
            let anu = await primbon.shio(text)
            if (anu.status == false) return m.reply(anu.message)
            alpha.sendText(m.chat, ` *Hasil :* ${anu.message}`, m)
            }
            break
            //Asupan
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
            	if (global.premium && !isCreator) return reply (`Fitur Ini Khusus Member Premium, Jika Mau Buy Premium Ketik .Buyprem`)
            	reply(wait)
            let res = await fetch(global.api('alfa', '/api/asupan/' + command, {}, 'apikey'))
            if (!res.ok) throw await res.text()
            let img = await res.buffer()
            alpha.sendFile(m.chat, img, 'asupan.mp4', 'DONE', m)
            }
            break
            case 'jodohku': {
            	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Jodoh mu adalah

@${me.split('@')[0]}  @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
await alpha.sendMessage(m.chat, {text: jawab, mentions: ments}, { quoted:m})
}
break
case 'jadian': {
            if (!m.isGroup) throw 'Hanya Digunakan Di Grup!'
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, Yang lagi jadian❤️💖👀`
            let menst = [orang, jodoh]
                    await alpha.sendMessage(m.chat, { text: jawab, mentions: menst }, { quoted: m})
}
break
case 'setexif': {
	if (!isCreator && !m.key.fromMe) return reply("Fitur khusus owner!")
	if (!text) throw `Contoh : ${prefix + command} packname|author`
	global.packname = text.split("|")[0]
	global.author = text.split("|")[1]
	m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
	}
	break
	case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
	if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
	ter = command[1].toLowerCase()
	tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
	m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
	break
	
			// Fun Menu
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu':{
	if (!m.isGroup) return reply('Fitur Ini Khusus Group!')
	let member = participants.map((u) => u.id)
	let org = member[Math.floor(Math.random() * member.length)]
	alpha.sendMessage(from, { text: `anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
	}
	break
	case 'goblok':
	case 'gblk':
	case 'kontol':
	case 'kntl':
	case 'kmtl':
	case 'ngtd':
	case 'ngentod':
	case 'ajg':
	case 'anjg':
	case 'anjing':
	case 'mmk':
	case 'memek':
	case 'meki':
	case 'puki':
	case 'jancok':
	case 'babi':
	case 'tolol':
	case 'yapit': 
	case 'yatim':
	case 'piatu':
	case 'bodoh':
	case 'tolol':
	case 'ngentot':
	case 'sange':
	case 'bangsat':
	case 'gblk':
	case 'goblok':
	case 'pantek':
	case 'pantex':
	case 'asu':
	case 'bego':
	case 'sangean':{
	alpha.sendMessage(m.chat, {audio: fs.readFileSync(gabolehtoxic), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
	}
	break
	
            default:
           if (budy.startsWith('=>')) {
            let util = require('util')
          if (!isCreator) return m.reply('user bisa apa')
          function Return(sul) {
         let sat = JSON.stringify(sul, null, 2)
         let bang = util.format(sat)
          if (sat == undefined) {
          bang = util.format(sul)
                            }
          return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                
        if (budy.startsWith('$')) {
    if (!isCreator) return m.reply('user bisa apa')
      exec(budy.slice(2), (err, stdout) => {
      if(err) return m.reply(err)
      if (stdout) return m.reply(stdout)
                    })
                }
                
if (budy.startsWith('>')) {
                    if (!isCreator) return reply('user bisa apa')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(util.format(err))
                    }
                }
       }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
