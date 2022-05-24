var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) {

    console.log(event);

    var content= event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML = content;

    speak();
}


function speak ()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

   var UtterThis = SpeechSynthesisUtterance(speak_data);

   synth.speak(UtterThis);
   Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({

    width: 360,

    height: 250,

    image_format: 'png',

    png_quality: 90
    

});



