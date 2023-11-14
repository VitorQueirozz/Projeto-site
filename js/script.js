const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

const sliderOne = document.querySelectorAll('.sliderOne');
const btnPrevOne = document.getElementById('prev-buttonOne');
const btnNextOne = document.getElementById('next-buttonOne');

const sliderThre = document.querySelectorAll('.sliderThre');
const btnPrevThre = document.getElementById('prev-buttonThre');
const btnNextThre = document.getElementById('next-buttonThre');

const sliderTwo = document.querySelectorAll('.sliderTwo');
const btnPrevTwo = document.getElementById('prev-buttonTwo');
const btnNextTwo = document.getElementById('next-buttonTwo');

const sliderfor = document.querySelectorAll('.sliderfor');
const btnPrevfor = document.getElementById('prev-buttonfor');
const btnNextfor = document.getElementById('next-buttonfor');

let currentSlide = 0;
let currentSlideOne = 0;
let currentSlideThre = 0;
let currentSlideTwo = 0;
let currentSlidefor = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

/*******/

function hideSliderOne() {
    sliderOne.forEach(item => item.classList.remove('on'))
}
  
function showSliderOne() {
    sliderOne[currentSlideOne].classList.add('on')
}

function nextSliderOne() {
    hideSliderOne()
    if(currentSlideOne === sliderOne.length -1) {
        currentSlideOne = 0
    } else {
        currentSlideOne++
    }
    showSliderOne()
}
  
function prevSliderOne() {
    hideSliderOne()
    if(currentSlideOne === 0) {
        currentSlideOne = sliderOne.length -1
    } else {
        currentSlideOne--
    }
    showSliderOne()
}

/***************** */

function hideSliderThre() {
    sliderThre.forEach(item => item.classList.remove('on'))
}
  
function showSliderThre() {
    sliderThre[currentSlideThre].classList.add('on')
}
  
function nextSliderThre() {
    hideSliderThre()
    if(currentSlideThre === sliderThre.length -1) {
      currentSlideThre = 0
    } else {
      currentSlideThre++
    }
    showSliderThre()
}
  
function prevSliderThre() {
    hideSliderThre()
    if(currentSlideThre === 0) {
      currentSlideThre = sliderThre.length -1
    } else {
      currentSlideThre--
    }
    showSliderThre()
}

/***************** */

function hideSliderTwo() {
  sliderTwo.forEach(item => item.classList.remove('on'))
}

function showSliderTwo() {
  sliderTwo[currentSlideTwo].classList.add('on')
}

function nextSliderTwo() {
  hideSliderTwo()
  if(currentSlideTwo === sliderTwo.length -1) {
    currentSlideTwo = 0
  } else {
    currentSlideTwo++
  }
  showSliderTwo()
}

function prevSliderTwo() {
  hideSliderTwo()
  if(currentSlideTwo === 0) {
    currentSlideTwo = sliderTwo.length -1
  } else {
    currentSlideTwo--
  }
  showSliderTwo()
}

/***************** */

function hideSliderfor() {
  sliderfor.forEach(item => item.classList.remove('on'))
}

function showSliderfor() {
  sliderfor[currentSlidefor].classList.add('on')
}

function nextSliderfor() {
  hideSliderfor()
  if(currentSlidefor === sliderfor.length -1) {
    currentSlidefor = 0
  } else {
    currentSlidefor++
  }
  showSliderfor()
}

function prevSliderfor() {
  hideSliderfor()
  if(currentSlidefor === 0) {
    currentSlidefor = sliderfor.length -1
  } else {
    currentSlidefor--
  }
  showSliderfor()
}

setInterval(nextSlider, 4000)
setInterval(nextSliderOne, 4000)
setInterval(nextSliderThre, 4000)
setInterval(nextSliderTwo, 4000)
setInterval(nextSliderfor, 4000)

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

btnNextOne.addEventListener('click', nextSliderOne)
btnPrevOne.addEventListener('click', prevSliderOne)

btnNextThre.addEventListener('click', nextSliderThre)
btnPrevThre.addEventListener('click', prevSliderThre)

btnNextfor.addEventListener('click', nextSliderfor)
btnPrevfor.addEventListener('click', prevSliderfor)

