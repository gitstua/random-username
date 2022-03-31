document.querySelector("#upload-button").addEventListener('click', async function() {
    const textArray = await getTextArray('words/words.txt')
    const randomSuffixNumber = Math.floor(Math.random() * 10 + 1);

    const word1 = getRandom(textArray);
    const word2 = getRandom(textArray);

    document.querySelector("#outputDiv").innerHTML = `<font color="blue">${word1}</font><font color="green">${word2}</font>${randomSuffixNumber}`;
});

function getRandom(randArray){
    var cryptoObj = window.crypto || window.msCrypto; // for IE 11
    var array = new Uint32Array(1);
    cryptoObj.getRandomValues(array);

    return randArray[array[0]%randArray.length];
}

async function getTextArray(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    console.log(myText);

    const splitLines = myText.split(/\r?\n/);
    console.log(splitLines[0]);
    return splitLines;
  }