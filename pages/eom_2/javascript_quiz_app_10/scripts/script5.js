const anwserArr = [['во время разработки и после нее создается документация и руководства пользователя'], ['процесс включает работу с компонентами программного обеспечения и управление их версиями'], ['необходим для проверки соответствия программного продукта требованиям разработки и стандартам'], ['позволяет независимо оценить проект, документацию и различные отчеты, сравнивая их с договором и требованиями'], ['устраняются ошибки, которые были обнаружены в процессе контроля и оценки']]; //Ответы в правильном порядке
const text = ["Документирование", "Управление конфигурацией", "Обеспечение качества", "Аудит", "Разрешение проблем"]

const list = document.getElementById('list');
let listItems = [];
let dragStartIndex;

function reloadWindow(){
    window.location.reload();
}

let numberOfQuestion = 10; 
let numberOfQuestionSum = 10;
let numberOfEOM = 2;

let textOfQuestionPlace = document.querySelector('#question_number_1')

textOfQuestionPlace.innerHTML = '<p>' + '<span>' + numberOfQuestion +  '. ' + '</span>'  + 'Соотнесите название вспомогательного этапа разработки ПО и его описание:' + '</p>'

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


createList2()

function createList2() {
    let iii = 0;
    [...anwserArr]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "number");
        div.innerHTML = `${text[index]}<img src="./content/marker_blue.png" alt="1">`;
        document.getElementsByClassName("numbers")[0].appendChild(div)

        const listItem = document.createElement('div');
        listItem.setAttribute("id", `${index}`)

        // <div class="number">${text[index]} <img src="./content/marker_blue.png" alt="1"></div>
        listItem.innerHTML = ` <div class="item">${item} </div> `;
        listItems.push(listItem);
        list.appendChild(listItem);
        iii++;
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('id');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('id');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.item');
    const itemTwo = listItems[toIndex].querySelector('.item');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}


function checkAnwser5() {

    let nxt = document.getElementById('check_button_3')
    nxt.removeAttribute('disabled')
    nxt.classList.remove('blocked')
    
    if (numberOfQuestion !== numberOfQuestionSum){
        nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
    } else {
        nxt.setAttribute('onclick',`location.href='../javascript_result_page/index.html'`)
    }

    let rightcheck = 1
    listItems.forEach((item, index) => {

        const itemName = item.querySelector('.item').innerText.trim()
        
        if (itemName !== anwserArr[index].join(',')) {
            item.classList.add('incorrect')
            if(numberOfEOM !== 3){
                reloadButton.classList.remove('disabled_button')
            }
            checkAnwserButton.classList.add('disabled_button')
            rightcheck=0
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
            let nxt = document.getElementById('check_button_3')
            nxt.removeAttribute('disabled')
            nxt.classList.remove('blocked')
            nextButton.classList.remove('disabled_button')

        } else {
            checkAnwserButton.classList.add('disabled_button')
            nextButton.classList.remove('disabled_button')
            item.classList.add('correct')
        }
        
    });
    if (rightcheck == 1){
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
        let nxt = document.getElementById('check_button_3')
        nxt.removeAttribute('disabled')
        nxt.classList.remove('blocked')
        if (numberOfQuestion !== numberOfQuestionSum){
            nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
        } else {
            nxt.setAttribute('onclick',`location.href='../javascript_result_page/index.html'`)
        }
        document.getElementById('checkAns').setAttribute('disabled',true)
        document.getElementById('checkAns').classList.add('blocked')
    }
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.item');
    const dragListItems = document.querySelectorAll('.list li');

    draggables.forEach((draggable) => {
        // draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach((item) => {
        // item.addEventListener('dragover', dragOver);
        // item.addEventListener('drop', dragDrop);
        // item.addEventListener('dragenter', dragEnter);
        // item.addEventListener('dragleave', dragLeave);
    });
}

let checkAnwserButton = document.querySelector('#check_button_1')
let reloadButton = document.querySelector('#check_button_2')
let nextButton = document.querySelector('#check_button_3')
let backwardButton = document.querySelector('#check_button_0')
checkAnwserButton.classList.remove('disabled_button')
reloadButton.classList.add('disabled_button')
nextButton.classList.add('disabled_button')

let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

backwardButton.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`)
