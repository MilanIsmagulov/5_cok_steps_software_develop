let test = document.querySelector('#question_number_1');
let testAnswers = document.querySelector('#answers_buttons1');
let Povtor = document.querySelector('#check_button_2');
let Dalee = document.querySelector('#check_button_3')

Povtor.classList = ('disabled_button');
Povtor.addEventListener('click' , function(){
    window.location.reload();
});

Dalee.classList = ('disabled_button');

console.log('Script is Loaded')

let questions = [
    {
        text: 'Принцип работы задвижки основан ',
        right: 2,
        answers: ['на перекрытии проходного сечения трубопровода путем раскрытия и закрытия заслонки', 'на перекрытии проходного сечения трубопровода путем поднятия и опускания запорного органа параллельно направлению движущегося потока жидкости или газа', 'на перекрытии проходного сечения трубопровода путем поднятия и опускания запорного органа перпендикулярно направлению движущегося потока жидкости или газа',],
    },
];

let answerLength = questions[0].answers;
let numberOfQuestion = 9; 
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
    let form = document.createElement('form');
    testAnswers.appendChild(form);
    form.dataset.right = question.right;


let j = 0;
let a = 0;
    for (let answer of question.answers) {
        let divInp = document.createElement('div');
        divInp.classList = ('answer_div');
        divInp.setAttribute('id', 'answer_div');
        form.appendChild(divInp);
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = i;
        input.dataset.answer = j++;
        divInp.appendChild(input);
        let answ = document.createElement('p');
        answ.innerHTML = answer;
        divInp.appendChild(answ);
    };
};

let chekBtn = document.querySelector('#check_button_1');
    chekBtn.addEventListener('click', function(){
        let forms = document.querySelectorAll('#answers_buttons1 form');
        for (let form of forms){
            form.classList.remove('correct');
            form.classList.remove('incorrect');
            let inputs = form.querySelectorAll('input');
            for (let input of inputs){
                if (input.checked){
                    let disButton = document.querySelector('#check_button_1');
                    if (input.dataset.answer == form.dataset.right){
                        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
                        disButton.classList.add('disabled_button');
                        Povtor.classList.remove('disabled_button');
                        Dalee.classList.remove('disabled_button');

                        form.children[input.dataset.answer].classList.add('correct');
                        for (let i = 0; i < answerLength.length; i++){
                            form.children[i].classList.add('incorrect2');
                        }
                        for (let i = 0; i < answerLength.length; i++){
                            form.children[i].children[0].disabled = true;
                        }
                        
                    }else{
                        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                        disButton.classList.add('disabled_button');
                        Povtor.classList.remove('disabled_button');
                        Dalee.classList.remove('disabled_button');
                        let wrAns = input.dataset.answer
                        form.children[wrAns].classList.add('incorrect');
                        for (let i = 0; i <= 3; i++){
                            form.children[i].children[0].disabled = true;
                        }
                    };
                break;
            };
        };
    };
});


let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})
