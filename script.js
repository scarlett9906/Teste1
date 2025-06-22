let currentChat = '';

window.onload = function() {
    setTimeout(() => document.getElementById('splash').style.display = 'none', 3000);
};

function createChat(emoji, name) {
    let chatName = prompt("Nome para o novo chat em " + name + ":");
    if (chatName) {
        let tab = document.createElement('div');
        tab.innerText = emoji + " " + chatName;
        tab.onclick = () => switchChat(chatName);
        document.getElementById('chatTabs').appendChild(tab);
        localStorage.setItem(chatName, '');
        currentChat = chatName;
        document.getElementById('chatMessages').innerHTML = '';
    }
}

function switchChat(name) {
    currentChat = name;
    document.getElementById('chatMessages').innerHTML = localStorage.getItem(name);
}

function sendMessage() {
    let input = document.getElementById('chatInput');
    if (input.value.trim() !== '' && currentChat !== '') {
        let msg = document.createElement('div');
        msg.innerText = input.value;
        document.getElementById('chatMessages').appendChild(msg);
        localStorage.setItem(currentChat, document.getElementById('chatMessages').innerHTML);
        document.getElementById('clickSound').play();
        input.value = '';
    }
}

function linkChat() {
    alert('Popup de Linkar Chat: (em desenvolvimento)');
}

function renameChat() {
    let newName = prompt("Novo nome para o chat:");
    if (newName && currentChat !== '') {
        currentChat = newName;
        alert("Chat renomeado para: " + newName);
    }
}

function clearChat() {
    if (confirm("Tem certeza que quer limpar o chat?")) {
        document.getElementById('chatMessages').innerHTML = '';
        localStorage.setItem(currentChat, '');
    }
}

function restoreChat() {
    alert("Função de restaurar chats ainda em desenvolvimento!");
}

function openConfig() {
    alert("Abrindo configurações IA MIREXP!");
}
