'use strict'

function onInit() {
    setTimeout(function () {
        const h1Element = document.querySelector('h1');
        if (h1Element) {
            h1Element.textContent = "I Love JS";
        }

        console.log('hello')
    }
        , 3000);
}

let gIsMark = "Mark";
function onMark(elBtn) {
    const spansInBox = document.querySelectorAll('.box span');
    spansInBox.forEach(function (span) {
        if (span.classList.contains('mark')) {
            span.classList.remove('mark');
        }
        else {
            span.classList.add('mark');
        }
    }
    )
    if (gIsMark === "Mark") {
        gIsMark = "UnMark";
    } else {
        gIsMark = "Mark";
    }
    elBtn.textContent = gIsMark;

}


function onMouseOver(elImg) {
    // TODO: change the image
    elImg.src = "img/ca.png"
}

function onMouseOut(elImg) {
    // TODO: change the image
    elImg.src ="img/ninja.png"
}
function onImgClicked(){
    const modalElement = document.querySelector('.modal');
    if (modalElement) {
        // modalElement.style.backgroundColor = getRandomColor();
        onOpenModal(modalElement)
    }
}
function onChangeSubHeader(elSpan) {
    // alert('hi')
    if (gIsMark === "UnMark") {
        const h2Element = document.querySelector('h2');
        if (h2Element) {
            h2Element.textContent += " " + elSpan.textContent;
        }
    }
    // elSpan.classlist
    // TODO: change the text in the span inside the h2
}

function onHandleKey(ev) {
    // TODO: close the modal if escape is pressed
    console.log('ev:', ev);

}

function onOpenModal(modalElement) {
    // Todo: show the modal and schedule its closing
    modalElement.classList.add('show')
    setTimeout(function () {
        onCloseModal(modalElement)
    }, 5000);
}
function onCloseModal(modalElement) {
    // Todo: hide the modal
    modalElement.classList.remove('show')

}


function onBless() {
    const modalTextElement = document.getElementById('modalText');
    if (modalTextElement){
        modalTextElement.textContent = "You were blessed at " + getTime();
    }
    const modalElement = document.querySelector('.modal');
    if (modalElement) {
        modalElement.style.backgroundColor = getRandomColor();
        onOpenModal(modalElement)
    }

}


function getTime() {
    return new Date().toString().split(' ')[4];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        const modalElement = document.querySelector('.modal');
        if (modalElement) {
            modalElement.style.backgroundColor = getRandomColor();
            onCloseModal(modalElement)
        }
      console.log('Escape key pressed');
      // Call your function or execute your code here
    }
  });
