const input = document.querySelector('#input');
const btn = document.querySelector('#translateBtn');
const output = document.querySelector('#output');

async function translateText() {
    const text = input.value;
    const safeText = encodeURIComponent(text);
    const email = 'kirillchep580pc@gmail.com';
    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;
    const response = await fetch(url);
    const data = await response.json();
    output.textContent = data.responseData.translatedText;
}

btn.addEventListener('click', translateText);
