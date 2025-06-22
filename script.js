let currentChat = '';

function openChat(emoji, type) {
  let popupHTML = `
    <div class='popup'>
      <h3>${type}</h3>
      <input id='chatName' placeholder='Nome do Chat'>
      <br>
      <button onclick='confirmChat("${emoji}", "${type}")'>Confirmar</button>
    </div>`;
  document.getElementById('popupContainer').innerHTML = popupHTML;
  document.getElementById('popupContainer').style.display = 'flex';
}

function confirmChat(emoji, type) {
  let name = document.getElementById('chatName').value;
  if (name.trim() !== '') {
    let tab = document.createElement('div');
    tab.innerText = emoji + " " + name;
    tab.onclick = () => loadChat(name);
    document.getElementById('chatTabs').appendChild(tab);

    localStorage.setItem(name, '');
    currentChat = name;
    document.getElementById('chatMessages').innerHTML = '';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('popupContainer').style.display = 'none';

    document.getElementById('clickSound').play();
  }
}

function loadChat(name) {
  currentChat = name;
  document.getElementById('chatMessages').innerHTML = localStorage.getItem(name) || '';
}

function sendMessage() {
  let input = document.getElementById('chatInput');
  if (input.value.trim() !== '' && currentChat !== '') {
    let msg = document.createElement('div');
    msg.innerText = input.value;
    document.getElementById('chatMessages').appendChild(msg);
    localStorage.setItem(currentChat, document.getElementById('chatMessages').innerHTML);
    input.value = '';
    document.getElementById('clickSound').play();
  }
}

function linkChat() {
  alert('Linkar Chat ainda em desenvolvimento');
}

function renameChat() {
  alert('Renomear Chat ainda em desenvolvimento');
}

function clearChat() {
  if (confirm("Tem certeza que deseja limpar o chat?")) {
    document.getElementById('chatMessages').innerHTML = '';
    localStorage.setItem(currentChat, '');
  }
}

function restoreChat() {
  alert('Restaurar chats ainda em desenvolvimento');
}

function openConfig() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  document.getElementById('chatMessages').innerHTML = '<h2>Configurações IA MIREXP</h2>';
}
