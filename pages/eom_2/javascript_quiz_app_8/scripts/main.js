let test = document.querySelector('#question_number_1');
let testAnswers = document.querySelector('#answers_buttons1');

let Dalee = document.querySelector('#check_button_3')





console.log('Script is Loaded')

let questions = [
    {
        text: 'Ознакомьтесь со вспомогательными процессами разработки программного обеспечения',
        right: 0,
        answers: ['для управления потоками рабочих сред путём изменения проходного сечения внутренней части трубопровода', 'для изменения основных параметров транспортируемых жидкостей и газов', 'для измерения основных параметров транспортируемых жидкостей и газов',],
    },
];

let answerLength = questions[0].answers;
let numberOfQuestion = 8; 
let numberOfQuestionSum = 10;

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'


let i = 1;
for (let question of questions){
    let div = document.createElement('div');
    test.appendChild(div);
    let p = document.createElement('p');
    p.innerHTML = '<span>' + numberOfQuestion + '. ' + '</span>' +  question.text;
    div.appendChild(p);

}



let openPopUpButton = document.querySelector('.zoom_popup')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')
let openPopUpButton2 = document.querySelector('#open_popup_button')
let popUpWindow2 = document.querySelector('#popup2')
let closePopUpButton2 = document.querySelector('#close_popup_button_2')

openPopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.remove('close')
})

openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')

})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

closePopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.add('close')
})