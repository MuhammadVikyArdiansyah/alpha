const fs = require('fs')
const chalk = require('chalk')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'PVHNXrE8', // ISI APIKEY LU
}
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.namabot = "Patrick" // UBAH JADI NAMA LU
global.namaowner = "Rasya" // NAMA OWNER
global.footer_text = "© PatrickBot MD" + namabot // NAMA BOT

global.owner = ['6285735980188'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// PEMISAH \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['!', '.', '#'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.donasi = ("JANGAN LUPA DONASI BANG") // QRIS SAMA FOTO DONASI UDAH CONNECT TINGGAL GANTI FOTO QRIS AJA
global.script = ("https://youtu.be/GyHK5BVyBeQ NO ENC ? BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "-" // bebas asal jan hapus
global.grubbot = (`-`) // GANTI LINK GRUB BOT LU \\

global.wait = '_*Loading . . .*_'
// FALSE OR TRUE \\
global.premium = false // UBAH JADI TRUE AGAR SEMUA FITUR KHUSUS PREMIUM
global.autoTyping = true // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

// PEMISAH \\
global.packname = '' //sticker wm ubah
global.author = 'Whatsapp Bot' //sticker wm ganti nama kalian

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

global.kodebahasa = `

• af : Afrikaans
• sq : Albanian
• ar : Arab
• hy : Armenian
• ca : Catalan
• zh : Chinese
• zh-cn : Chinese (Mandarin/China)
• zh-tw : Chinese (Mandarin/Taiwan)
• zh-yue : Chinese (Cantonese)
• hr : Croatian
• cs : Czech
• da : Danish
• nl : Dutch
• en : English
• en-au : English (Australia)
• en-uk : English (United Kingdom)
• en-us : English (United States)
• eo : Esperanto
• fi : Finnish
• fr : French
• de : German
• el : Greek
• ht : Haitian Creole
• hi : Hindi
• hu : Hungarian
• is : Icelandic
• id : Indonesian
• it : Italian
• ja : Japanese
• ko : Korean
• la : Latin
• lv : Latvian
• mk : Macedonian
• no : Norwegian
• pl : Polish
• pt : Portuguese
• pt-br : Portuguese (Brazil)
• ro : Romanian
• ru : Russian
• sr : Serbian
• sk : Slovak
• es : Spanish
• es-es : Spanish (Spain)
• es-us : Spanish (United States)
• sw : Swahili
• sv : Swedish
• ta : Tamil
• th : Thai
• tr : Turkish
• vi : Vietnamese
• cy : Welsh
`
// UBAH AJA NAMA NYA \\
global.motivasi = [
"Jangan bicara, bertindak saja. Jangan katakan, tunjukkan saja. Jangan janji, buktikan saja.",
"Jangan pernah berhenti melakukan yang terbaik hanya karena seseorang tidak memberi Anda penghargaan.",
"Bekerja saat mereka tidur. Belajar saat mereka berpesta. Hemat sementara mereka menghabiskan. Hiduplah seperti mimpi mereka.",
"Kunci sukses adalah memusatkan pikiran sadar kita pada hal-hal yang kita inginkan, bukan hal-hal yang kita takuti.",
"Jangan takut gagal. Ketakutan berada di tempat yang sama tahun depan seperti Anda saat ini.",
"Jika kita terus melakukan apa yang kita lakukan, kita akan terus mendapatkan apa yang kita dapatkan.",
"Jika Anda tidak dapat mengatasi stres, Anda tidak akan mengelola kesuksesan.",
"Bersikap keras kepala tentang tujuan Anda dan fleksibel tentang metode Anda.",
"Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
"Ingatlah bahwa pelajaran terbesar dalam hidup biasanya dipelajari dari saat-saat terburuk dan dari kesalahan terburuk.",
"Hidup bukan tentang menunggu badai berlalu, tetapi belajar menari di tengah hujan.",
"Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya.",
"Jangan takut kalau hidupmu akan berakhir; takutlah kalau hidupmu tak pernah dimulai.",
"Orang yang benar-benar hebat adalah orang yang membuat setiap orang merasa hebat.",
"Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya.",
"Mengetahui seberapa banyak yang perlu diketahui adalah awal dari belajar untuk hidup.",
"Sukses bukanlah akhir, kegagalan tidak fatal. Yang terpenting adalah keberanian untuk melanjutkan.",
"Lebih baik gagal dalam orisinalitas daripada berhasil meniru.",
"Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.",
"Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya.",
"Kembangkan kesuksesan dari kegagalan. Keputusasaan dan kegagalan adalah dua batu loncatan paling pasti menuju sukses.",
"Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat.",
"Sukses adalah tempat persiapan dan kesempatan bertemu.",
"Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20.",
"Jalan menuju sukses dan jalan menuju kegagalan hampir persis sama.",
"Sukses biasanya datang kepada mereka yang terlalu sibuk mencarinya.",
"Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.",
"20 tahun dari sekarang, kau mungkin lebih kecewa dengan hal-hal yang tidak sempat kau lakukan alih-alih yang sudah.",
"Jangan habiskan waktumu memukuli tembok dan berharap bisa mengubahnya menjadi pintu.",
"Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya.",
"Hidup ini terdiri dari 10 persen apa yang terjadi padamu dan 90 persen bagaimana caramu menyikapinya.",
"Ada tiga cara untuk mencapai kesuksesan tertinggi: Cara pertama adalah bersikap baik. Cara kedua adalah bersikap baik. Cara ketiga adalah menjadi baik.",
"Alasan nomor satu orang gagal dalam hidup adalah karena mereka mendengarkan teman, keluarga, dan tetangga mereka.",
"Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu.",
"Penetapan tujuan adalah rahasia masa depan yang menarik.",
"Saat kita berusaha untuk menjadi lebih baik dari kita, segala sesuatu di sekitar kita juga menjadi lebih baik.",
"Pertumbuhan dimulai ketika kita mulai menerima kelemahan kita sendiri.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Janganlah pernah menyerah ketika Anda masih mampu berusaha lagi. Tidak ada kata berakhir sampai Anda berhenti mencoba.",
"Kemauan adalah kunci sukses. Orang-orang sukses, berusaha keras apa pun yang mereka rasakan dengan menerapkan keinginan mereka untuk mengatasi sikap apatis, keraguan atau ketakutan.",
"Hal pertama yang dilakukan orang sukses adalah memandang kegagalan sebagai sinyal positif untuk sukses.",
"Ciri khas orang sukses adalah mereka selalu berusaha keras untuk mempelajari hal-hal baru.",
"Sukses adalah mendapatkan apa yang kamu inginkan, kebahagiaan menginginkan apa yang kamu dapatkan.",
"Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan.",
"Keraguan membunuh lebih banyak mimpi daripada kegagalan.",
"Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan.",
"Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain.",
"Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu.",
"Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan.",
"Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat.",
 "Keberhasilan dimulai dengan keputusan untuk mencoba.",
  "Kegagalan adalah kesempatan untuk memulai lagi dengan cerdas.",
  "Setiap langkah kecil membawa Anda lebih dekat pada tujuan besar Anda.",
  "Hidup adalah apa yang terjadi ketika Anda sibuk membuat rencana lain.",
  "Jangan menyerah. Biasanya yang terbaik terjadi ketika Anda paling tidak menyerah.",
  "Tantangan adalah kesempatan untuk menunjukkan seberapa hebat Anda.",
  "Jangan biarkan kegagalan hari ini menghalangi keberhasilan besok.",
  "Masa depan tergantung pada apa yang Anda lakukan hari ini.",
  "Keberhasilan tidak terjadi begitu saja. Anda harus bekerja untuk itu.",
  "Jadilah yang terbaik dalam apa yang Anda lakukan.",
  "Ketika Anda merasa ingin menyerah, ingatlah mengapa Anda memulainya.",
  "Kesuksesan adalah pengejaran yang berkelanjutan, bukan tujuan akhir.",
  "Anda adalah pembuat keberuntungan Anda sendiri.",
  "Setiap hari adalah kesempatan baru untuk menjadi lebih baik dari sebelumnya.",
  "Keyakinan adalah kunci untuk mencapai apa pun yang Anda inginkan dalam hidup.",
  "Jangan takut gagal. Takutlah tidak pernah mencoba.",
  "Kesuksesan adalah hasil dari kegigihan yang tak pernah padam.",
  "Anda tidak pernah terlalu tua untuk menetapkan tujuan baru atau bermimpi.",
  "Rahasia untuk maju adalah memulai.",
  "Ketika Anda berpikir Anda mencapai batas Anda, itu hanya sebatas pikiran.",
  "Jika Anda bisa memimpikannya, Anda bisa mencapainya.",
  "Kebahagiaan adalah kuncinya. Jika Anda mencintai apa yang Anda lakukan, Anda akan sukses.",
  "Hidup adalah petualangan yang indah. Nikmatilah setiap momennya.",
  "Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan.",
  "Jadilah yang berbeda. Dunia tidak pernah menginginkan yang sama.",
  "Ketika Anda merasa lelah, beristirahatlah, jangan berhenti.",
  "Rahasia kesuksesan terletak pada persiapan yang matang dan kerja keras yang konsisten.",
  "Setiap kali Anda gagal, Anda sedang mendekat keberhasilan.",
  "Ketika Anda bekerja dengan dedikasi, impian dan keberhasilan saling bertemu.",
  "Tantang diri Anda sendiri setiap hari untuk menjadi versi yang lebih baik dari diri Anda yang kemarin.",
  "Jangan biarkan keraguan membatasi potensi Anda. Percaya pada diri sendiri dan lakukan itu.",
  "Ketika Anda menyerah, Anda melepaskan kesempatan untuk berhasil.",
  "Pikirkan positif dan hal positif akan terjadi.",
  "Kesuksesan adalah hasil dari kegigihan yang tak pernah padam dan ketekunan yang tidak pernah puas.",
  "Jangan takut gagal. Gagal adalah pelajaran berharga dalam perjalanan menuju keberhasilan.",
  "Jangan tunggu kesempurnaan untuk memulai. Mulailah, maka kesempurnaan akan datang dengan sendirinya.",
  "Anda adalah penulis cerita hidup Anda sendiri. Tulislah cerita yang luar biasa.",
  "Mimpi besar menghasilkan pencapaian besar. Jangan pernah berhenti bermimpi.",
  "Keberhasilan adalah kombinasi antara keberanian untuk bermimpi besar dan kerja keras yang tak kenal lelah.",
  "Hidup adalah pilihan. Pilihlah dengan bijaksana dan kehidupan akan merespons dengan indah.",
  "Tujuan besar tercapai dengan langkah-langkah kecil yang konsisten.",
  "Jangan biarkan keraguan orang lain meragukan impian Anda. Percaya pada diri sendiri dan lakukan itu.",
  "Jadilah seseorang yang membuat perbedaan di dunia ini. Anda memiliki kekuatan untuk merubahnya.",
  "Tidak ada batasan bagi apa yang dapat Anda capai kecuali batasan yang Anda ciptakan dalam pikiran Anda sendiri.",
  "Pekerjaan besar tidak pernah dilakukan oleh satu orang, tetapi oleh tim yang solid.",
  "Ketika Anda memiliki visi, tekad, dan tindakan yang kuat, tidak ada yang tidak mungkin.",
  "Jangan fokus pada kesalahan masa lalu. Alihkan fokus Anda pada pelajaran yang didapat dan langkah-langkah menuju ke depan.",
  "Kesuksesan adalah tentang konsistensi dalam melakukan tindakan yang tepat, bukan tentang keberuntungan semata.",
  "Kemajuan yang signifikan selalu dimulai dengan langkah pertama.",
  "Jadilah pribadi yang mampu menginspirasi orang lain dan mendorong mereka untuk mencapai potensi terbaik mereka.",
  "Percayalah pada diri sendiri, karena jika Anda tidak melakukannya, maka siapa lagi yang akan mempercayai Anda?",
  "Hidup adalah perjalanan yang singkat. Manfaatkan setiap momen untuk membuatnya berarti.",
  "Tantang diri Anda untuk berani keluar dari zona nyaman Anda. Itulah di mana pertumbuhan terjadi.",
  "Ketika Anda menghadapi hambatan, jangan menyerah. Gunakan hambatan itu sebagai batu loncatan menuju kesuksesan.",
  "Ketika Anda berbagi pengetahuan dan memberikan bantuan kepada orang lain, Anda menciptakan keberkahan yang melimpah.",
  "Jangan pernah meremehkan kekuatan kata-kata. Satu kata positif dapat mengubah seluruh hari seseorang.",
  "Ketika Anda memiliki tujuan yang jelas, keputusan menjadi lebih mudah dan tindakan menjadi lebih terarah.",
  "Kesuksesan bukan tentang seberapa tinggi Anda naik, tetapi tentang seberapa banyak orang yang Anda bantu naik bersama Anda."
]

// BUY NO ENC 60K CHAT ME
https://wa.me/6281315252010

module.exports.helpMenu = (pushname) =>{
	return `Halo Kak 👋 ${pushname}
Saya ${namabot}, Saya Adalah Bot WhatsApp .

╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${namaowner}
┆❐ Bot Name : ${namabot}
╰──────────◇
___________________________

╭─❒ 「 *FREE MENU* 」
│
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
│○ .openai
│○ .ai
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

╭─❒ 「  *STORE MENU*  」
│
│○ .setwelcome  
│○ .changewelcome  
│○ .delsetwelcome  
│○ .setleft  
│○ .changeleft  
│○ .delsetleft  
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
│○ .igvideo  
│○ .instavid
│○ .igreels
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
│○ .toimage  
│○ .pinterest  
│○ .ttp  
│○ .smeme  
│○ .attp  
│○ .emojimix  
│○ .wm  
│
╰❒

╭─❒ 「 *Anonymous MENU* 」 
│
│○ .menfess 62xxxxx|nama|pesan
│
╰❒

╭─❒ 「 *GAMES MENU* 」 
│
│○ .tebakkata  
│○ .tebakgambar  
│○ .tebakbendera  
│○ .caklontong  
│○ .susunkata  
│○ .tebakkalimat  
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
`

// NOTE JIKA MAU KASIH NAMA LU DI TQTO SILAHAKAN
// TAPI TOLONG JANGAN HAPUS SALAH SATU NAMA ITU
// AP LAGI NGAKU² KALO INI BASE LU WOWKWOWK
//awokwok
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
