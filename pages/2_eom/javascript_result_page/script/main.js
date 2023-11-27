let resultPlaceTrue = document.querySelector('#result_place_1');
let resultPlaceFalse = document.querySelector('#result_place_2');
let questionNumberPlace = document.querySelector('#place_question_number');
let questionPercentPlace = document.querySelector('#place_question_percent');
let answerDiagram = document.querySelector('#answer_diagram_1');
let trueAnswers = 0;
let falseAnswers = 0;
// localStorage.setItem('answer_3', JSON.stringify({questionPlace: false}));

let resultData = [
    JSON.parse(localStorage.getItem('answer_3')),
    JSON.parse(localStorage.getItem('answer_4')),
    JSON.parse(localStorage.getItem('answer_5')),
    JSON.parse(localStorage.getItem('answer_6')),
    JSON.parse(localStorage.getItem('answer_7')),
    JSON.parse(localStorage.getItem('answer_9')),
    JSON.parse(localStorage.getItem('answer_10')),
];



questionNumberPlace.innerHTML = resultData.length;


for (let i = 0; i < resultData.length; i++){
    
    if (resultData[i].questionPlace === true){
        trueAnswers++;

    } else {
        falseAnswers++;
        
    }
    
} 

resultPlaceTrue.innerHTML = trueAnswers;
resultPlaceFalse.innerHTML = falseAnswers;

let percentOfAnswers =  Math.floor((trueAnswers/resultData.length)*100)

questionPercentPlace.innerHTML = percentOfAnswers + '<strong>%</strong>';
// answerDiagram.innerHTML = percentOfAnswers + '%';
answerDiagram.setAttribute('style', '--p:' + percentOfAnswers + ';' + '--c:rgb(0, 114, 192);');
