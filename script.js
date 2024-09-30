function sendMessage(user) {
    const chatBox = document.getElementById('chat-box');
    const emojiInput = document.getElementById(`emoji-input-${user}`);
    const imageInput = document.getElementById(`image-input-${user}`);

    if (emojiInput.value.trim() !== '') {
        const message = document.createElement('div');
        message.className = `message ${user}`;
        message.textContent = emojiInput.value;
        chatBox.appendChild(message);
        emojiInput.value = '';
    }

    if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'chat-image';
            chatBox.appendChild(img);
        };
        reader.readAsDataURL(file);
        imageInput.value = '';
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}

function checkEnter(event, user) {
    if (event.key === 'Enter') {
        sendMessage(user);
    }
}
