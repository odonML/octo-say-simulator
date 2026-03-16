const input = document.getElementById('message-input');
const consoleDiv = document.getElementById('print-octocat');
const button = document.getElementById('play');
const abueloDetails = consoleDiv.parentElement.parentElement;

button.addEventListener('click', async () => {
    const text = input.value || 'Hello World';
    const cleanText = text.replace(/\s+/g, '+');

    try {
        const response = await fetch(`https://api.github.com/octocat?s=${cleanText}`);
        const ascii = await response.text();
        abueloDetails.open = true;
        consoleDiv.textContent = ascii;
    } catch (error) {
        consoleDiv.textContent = "Error loading Octocat...";
    }
});