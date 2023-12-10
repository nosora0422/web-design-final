const apiKey = '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';
const submitBtn = document.querySelector('#submit');
const outputContent = document.querySelector('#output');
const inputContent = document.querySelector('input');
const historyEl = document.querySelector('.history');
const newChatbtn = document.querySelector('#new-chat');

function changeInput(value){
    const newInput = document.querySelector('input');
    newInput.value = value;
}

async function getMessage() {
    console.log('clicked');
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                  {
                    role: "system",
                    content: "The topic is mental health. Can you reply with in maximum 5sentences?" + inputContent.value
                  }
                ],
                max_tokens: 300
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        outputContent.textContent = data.choices[0].message.content;
        if (data.choices[0].message.content && inputContent.value){
            const pElement = document.createElement('p');
            pElement.textContent = inputContent.value;
            pElement.addEventListener('click', () => changeInput(pElement.textContent));
            pElement.classList.add('hstr-item','card-item');
            historyEl.appendChild(pElement);

            msnry.destroy();
            msnry = new Masonry(container,{
            itemSelector: '.card-item',
            });
        }
    } catch(error){
        console.error(error);

    }
}

submitBtn.addEventListener('click', getMessage);

function clearInput(){
    inputContent.value = '';
    outputContent.textContent = '';
}

newChatbtn.addEventListener('click', clearInput);

// var arrow = document.querySelector('#chat-btn');
// var chatBox = document.querySelector('#chat-card-item');
// var chatTitle = document.querySelector('#chat-title');
// var cancBtn = document.querySelector('.cancel')

// arrow.addEventListener('click', moveBox);
// cancBtn.addEventListener('click', reverseMove);


// function moveBox(){
//     chatBox.style.transform = 'translateX(-1rem)';
//     chatBox.style.transition = 'transform 1s ease-in-out';
//     chatTitle.style.transition = 'transform 1s ease-in-out';
//     chatTitle.style.transform = 'translateX(-110%)';
// }

// function reverseMove(){
//     chatBox.style.transform = ''; 
//     chatBox.style.transition = 'transform 1s ease-in-out';
//     chatTitle.style.transition = 'transform 1s ease-in-out';
//     chatTitle.style.transform = ''; 
// }