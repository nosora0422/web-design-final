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
                    content: "The topic is mental health." + inputContent.value
                  }
                ],
                max_tokens: 100
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
            historyEl.append(pElement);
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