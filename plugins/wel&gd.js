let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./wel.jpg"
let stikerbyegc = "./byee"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, null, { asSticker: true })
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, null, { asSticker: true })
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
