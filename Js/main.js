let talk = new SpeechSynthesisUtterance();
const TextArea__input = document.querySelector(".TextArea__input");

const TextArea__Button = document.querySelector(".TextArea__Button");
TextArea__Button.addEventListener('click', () => {
    talk.text = TextArea__input.value;
    window.speechSynthesis.speak(talk);
});