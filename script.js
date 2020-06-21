let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const response = [
   'response.rive'
];

bot.loadFile(response).then(botReady).catch(botNotReady);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    selfReply(input_box.value);
    input_box.value = '';
});

function botReply(message) {
    message_container.innerHTML += `<div class="bot">${message}</div>`;
    location.href = '#edge';
}

function selfReply(message) {
    message_container.innerHTML += `<div class="self">${message}</div>`;
    location.href = '#edge';

    bot.reply("local-user", message).then(function (reply) {
        botReply(reply);
    });
}

function botReady() {
    bot.sortReplies();
    botReply('<img src="bot.jpg"> Hello I am Fruity. Your go to chatbot at FruitStore. How can I help you?');
}

function botNotReady(err) {
    console.log("an error has occurred.", err);
}
