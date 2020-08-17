const btn = document.querySelector('.speak');
const content = document.querySelector(".content");
const info = document.querySelector(".info");
const card =document.querySelector(".card");

card.style.visibility="hidden";
info.style.color="#E74C3C"

const myself =["I'm your assistant who can respond to your basic questions... Tell me how can I help you?",
"I'm your wonderful companion"]

const greetings = ['Im good you little piece of love',
'Doing good homeiboi',
'Good till now'];

const thank =["You are always Welcome!",
"please Get lost",
"You are always important as an engine in a car",
"no Mention",]

const wish = ["hai dear,..... What's up?",
'get lost! I dont want to talk to you',
'It is nice to hear from u dear',
'busy right now, talk to you later',
'Welcome! how can i help You?',    
'Hi. How can i help you?',]

const morning = ['Good morning my love',
'Very good morning dear',
'good morning!how are u doing ?']

const night = ['Good night my love',
'good night! sweet dreams',
'good night dear']

const bye = ['goodbye! Tackcare!',
'ok!.. See you later!',
'Thank you very much... please get lost']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
 
const recogntion = new SpeechRecognition();

recogntion.onstart = function() {
    console.log("voice is activated to speak");
};

recogntion.onresult =function(event) {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
    document.querySelector(".card").style.visibility="visible"
}

btn.addEventListener('click',()=>{
recogntion.start();
document.querySelector(".card").style.visibility="hidden";
info.style.visibility="hidden";
});


function readOutLoud(message){
    
    setTimeout(function(){
        info.style.visibility = 'visible'; 
     }, 3000);
    const speech = new SpeechSynthesisUtterance();
    speech.text= 'I cannot understand You';

    if(message.includes('hello')){
        const finalText = wish[Math.floor(Math.random() * wish.length)];
        speech.text=finalText;}
        
    if(message.includes('hai')){
        const finalText = wish[Math.floor(Math.random() * wish.length)];
        speech.text=finalText;}

    if(message.includes('hi')){
        const finalText = wish[Math.floor(Math.random() * wish.length)];
        speech.text=finalText;}

    if(message.includes('what is your name')){
        speech.text='My name is Mr.D ,the Chatbot.. Your Companion';}
        
    if(message.includes('thank you')){
        const finalText = thank[Math.floor(Math.random() * thank.length)];
        speech.text=finalText;}
    
    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text=finalText;

    }

    if(message.includes('who are you')){
        const finalText = myself[Math.floor(Math.random() * myself.length)];
        speech.text=finalText;

    }

    if(message.includes('good morning')){
        const finalText = morning[Math.floor(Math.random() * morning.length)];
        speech.text=finalText;

    }

    if(message.includes('good night')){
        const finalText = night[Math.floor(Math.random() * night.length)];
        speech.text=finalText;

    }

    if(message.includes('bye')){
        const finalText = bye[Math.floor(Math.random() * bye.length)];
        speech.text=finalText;

    }

    if(message.includes('dark mode')){
        const finalText =
        speech.text="Changing to Dark Mode";
        document.body.style.background="#333";
        document.body.style.color="aliceblue";
        info.style.color="#F1C40F"
        card.style.background="#333";
        card.style.color="aliceblue";
    }

    if(message.includes('light mode')){
        const finalText =
        speech.text="Changing to Light Mode";
        document.body.style.background="white";
        document.body.style.color="black";
        info.style.color="#E74C3C"
        card.style.background="white";
        card.style.color="black";
    }


    speech.volume=1;
    speech.rate =1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);

}