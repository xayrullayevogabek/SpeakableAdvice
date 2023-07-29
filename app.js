const btn = document.querySelector("#btn"),
    advice = document.querySelector('#advice'),
    title = document.querySelector('#title'),
    parents = new SpeechSynthesisUtterance(),
    syntaxis = window.speechSynthesis
const getData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => updateUi(data));
};

const updateUi = (data) => {
  advice.textContent = `"${data.slip.advice}"`
  title.textContent = `Advice #${data.slip.id}`
  getVoice()
};

const getVoice = () => {
    parents.lang = 'en'
    parents.text = advice.textContent
    syntaxis.speak(parents)
}



btn.addEventListener("click", getData);
