//Variables ================================================

//Input Box & Results
const submit = document.querySelector('#submit-button');
const inputBox = document.querySelector('#translator-input')
const resultsH1 = document.querySelector('#results');

//Radio Buttons Query & Value
const encodeRadio = document.querySelector('#encode');
const translateRadio = document.querySelector('#translate');
const madlibRadio = document.querySelector('#madlib');
const searchRadio = document.querySelector('#search')
const randomRadio = document.querySelector('#random')

//Translation section value
const translationSection = document.querySelectorAll('input[type = radio]');

//Random Number Function

const getRandomNumber = function (max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
};

// Submit Button Function ======================================

submit.addEventListener('click', function () { 
 
    let radioValue =  null;
    
    for (const rV of translationSection) {
        
        if (rV.checked) {
            radioValue = rV.value;
        }
    }

    console.log("translation section value:", radioValue);

    if (radioValue === encodeRadio.value) { 
        
        resultsH1.innerText = encode(inputBox.value);

    } if (radioValue === translateRadio.value) {
        
        resultsH1.innerText = translate(inputBox.value);
    
    } if (radioValue === madlibRadio.value) { 
        
        resultsH1.innerText = madlib(inputBox.value);
    
    } if (radioValue === searchRadio.value) {
        
        resultsH1.innerText = '';
        const emojiObjects = search(inputBox.value);
        const para = document.createElement('p');
        resultsH1.appendChild(para);

        if (emojiObjects.length > 0) {

            let emojiObjectsarr = [];

            for (i = 0; i < emojiObjects.length; i++) {

                emojiObjectsarr.push(emojiObjects[i].symbol);

            }

            para.innerText = emojiObjectsarr;

        } else {

            para.innerText = 'No Emojis Were Found';

        };
    
    } if (radioValue === randomRadio.value) {

        let rand = getRandomNumber(4);

        if (rand === 1) { 

            resultsH1.innerText = encode(inputBox.value);

        } if (rand === 2) {

            resultsH1.innerText = translate(inputBox.value);

        } if (rand === 3) {

            resultsH1.innerText = madlib(inputBox.value);

        } if (rand === 4) {

            resultsH1.innerText = '';
            const emojiObjects = search(inputBox.value);
            const para = document.createElement('p');
            resultsH1.appendChild(para);

            if (emojiObjects.length > 0) {

                let emojiObjectsarr = [];

                for (i = 0; i < emojiObjects.length; i++) {

                    emojiObjectsarr.push(emojiObjects[i].symbol);

                }

                para.innerText = emojiObjectsarr;

            } else {

                para.innerText = 'No Emojis Were Found';

            };

        }
        
    }

});
