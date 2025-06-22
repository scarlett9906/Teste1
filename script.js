let chats = {}; let activeChat = "";

function playClick() {
  document.getElementById('clickSound').play();
}

function newChat(category) {
  playClick();
  let name = prompt(`Nome do chat em ${category}:`);
  if (!name) return;
  let id = category + ':' + name;
  chats[id] = [];
  let btn = document.createElement('button');
  btn.textContent = '📝 ' + name;
  btn.onclick = () => openChat(id);
  document.getElementById('chatList').appendChild(btn);
  openChat(id);
}

function openChat(id) {
  playClick();
  activeChat = id;
  renderMessages();
}

function renderMessages() {
  let container = document.getElementById('messages');
  container.innerHTML = '';
  (chats[activeChat] || []).forEach(msg => {
    let div = document.createElement('div');
    div.textContent = msg;
    div.onclick = () => navigator.clipboard.writeText(msg);
    container.appendChild(div);
  });
}

function sendMessage() {
  if (!activeChat) return alert('Selecione um chat!');
  let input = document.getElementById('userInput');
  if (!input.value.trim()) return;
  chats[activeChat].push(input.value);
  input.value = '';
  renderMessages();
  playClick();
}

function linkChat() { playClick(); alert('Linkar em desenvolvimento'); }
function deleteChat() {
  playClick();
  if (confirm('Excluir chat?')) {
    delete chats[activeChat];
    activeChat = '';
    renderMessages();
  }
}
function renameChat() {
  playClick();
  let newName = prompt('Novo nome:', activeChat);
  if (!newName || chats[newName]) return;
  chats[newName] = chats[activeChat];
  delete chats[activeChat];
  activeChat = newName;
  renderMessages();
}
function clearChat() {
  playClick();
  if (confirm('Limpar chat?')) {
    chats[activeChat] = [];
    renderMessages();
  }
}
function restoreChat() { playClick(); alert('Restaurar em desenvolvimento'); }

function openConfig() {
  playClick();
  activeChat = 'CONFIG';
  document.getElementById('messages').innerHTML = '<h2>Configurações do Painel IA MIREXP</h2>';
}

function openRobloxAI() {
  playClick();
  activeChat = 'ROBLOX_AI';
  document.getElementById('messages').innerHTML = `
    <h2>Roblox Intelligence</h2>
    <p>Pergunte como usar som, mapear terreno, criar scripts, etc.</p>`;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
