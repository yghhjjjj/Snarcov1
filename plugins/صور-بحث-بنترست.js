import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❐↞┇هاذا أمر بحث للصور مثال↞ ${usedPrefix + command} انمي┇*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*❐↞┇الـطـلـب↞ ${text}┇*
\n *｢ву 𝚁𝙰𝙸𝙻𝚈┇🤖┇𝙱𝙾𝚃｣*
`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(صوره|صورة)$/i;
export default handler;