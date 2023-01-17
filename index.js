const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonForest = document.querySelector('.forest')
const cardForest = document.querySelector('.card-forest')
const page = document.querySelector('body')
const buttonRain = document.querySelector('.rain')
const cardRain = document.querySelector('.card-rain')
const buttonCoffee = document.querySelector('.cafeteria')
const cardCoffee = document.querySelector('.card-cafeteria')
const buttonFire = document.querySelector('.fireplace')
const cardFireplace = document.querySelector('.card-fireplace')
const minutesDisplay = document.querySelector('.minutes')
const forestAudio = new Audio('./audios/Floresta.wav')
const rainAudio = new Audio('./audios/Chuva.wav')
const cafeteriaAudio = new Audio('./audios/Cafeteria.wav')
const fireplaceAudio = new Audio('./audios/Lareira.wav')
const secondsDisplay = document.querySelector('.seconds')
const lightButton = document.querySelector('.light-mode')
const darkButton = document.querySelector('.dark-mode')
const timerColor = document.querySelector('#timer')
const bgtimerControls = document.querySelector('#timer-controls')
const bgSoundControls = document.querySelector('#sound-controls')
const forestBar = document.querySelector('#forest-volume')
const rainBar = document.querySelector('#rain-volume')
const fireplaceBar = document.querySelector('#fireplace-volume')
const coffeeBar = document.querySelector('#cafeteria-volume')
let clickbuttonPlay = 0
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
forestAudio.loop = true
rainAudio.loop = true
cafeteriaAudio.loop = true
fireplaceAudio.loop = true

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    clickbuttonPlay = 0
  }

  function pause(){
    clearTimeout(timerTimeOut)
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if (minutes <= 0 && seconds <=0) {
        clearTimeout
        clickbuttonPlay = 0
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }
  
  function clearClick() {
    if  (clickbuttonPlay == 0) {
     countdown()
     ++clickbuttonPlay
     return
 }
  }

  function plus () {
    minutes += 5
    resetTimer()
  }

  function minus () {
    minutes >= 5 ? minutes -= 5 : minutes = 0
    resetTimer()
  }

  function forestSoundOn() {
    buttonForest.classList.toggle('active')
    cardForest.classList.toggle('active')
    forestBar.classList.toggle('active')
    bgSoundControls.classList.add('active')
  }

  function rainSoundOn() {
    buttonRain.classList.toggle('active')
    cardRain.classList.toggle('active')
    rainBar.classList.toggle('active')
    bgSoundControls.classList.add('active')

  }

  function cafeteriaSoundOn() {
    buttonCoffee.classList.toggle('active')
    cardCoffee.classList.toggle('active')
    coffeeBar.classList.toggle('active')
    bgSoundControls.classList.add('active')
  }

  function fireplaceSoundOn() {
    buttonFire.classList.toggle('active')
    cardFireplace.classList.toggle('active')
    fireplaceBar.classList.toggle('active')
    bgSoundControls.classList.add('active')

  }

  function forestAudioPlaying() {
    if (forestAudio.currenTime != 0 && !forestAudio.paused) {
      forestAudio.pause()
    } else {
      forestAudio.play()
    }
  }

  function rainAudioPlaying() {
    if (rainAudio.currenTime != 0 && !rainAudio.paused) {
      rainAudio.pause()
    } else {
      rainAudio.play()
    }
  }

  function cafeteriaAudioPlaying() {
    if (cafeteriaAudio.currenTime != 0 && !cafeteriaAudio.paused) {
      cafeteriaAudio.pause()
    } else {
      cafeteriaAudio.play()
    }
  }

  function fireplaceAudioPlaying() {
    if (fireplaceAudio.currenTime != 0 && !fireplaceAudio.paused) {
      fireplaceAudio.pause()
    } else {
      fireplaceAudio.play()
    }
  }

  buttonPlay.addEventListener('click', () => {
    clearClick()
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    })

    buttonPause.addEventListener('click', () => {
    clearTimeout(timerTimeOut)
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clickbuttonPlay = 0
    })

    buttonStop.addEventListener('click', () => {
      resetTimer()
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    })

    buttonPlus.addEventListener('click', function() {
      updateTimerDisplay (minutes, (secondsDisplay.textContent))
      plus()
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
    })

    buttonMinus.addEventListener('click', function() {
      if (minutes <=0) {
        return
      }
      updateTimerDisplay(minutes, Number(secondsDisplay.textContent))
      minus()
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
    })

    buttonForest.addEventListener('click', function(){
      forestAudioPlaying()
      forestSoundOn()
      resetForestVolume()
    })
    
    buttonRain.addEventListener('click', function(){
      rainAudioPlaying()
      rainSoundOn()
      resetRainVolume()
    })

    buttonCoffee.addEventListener('click', function(){
      cafeteriaAudioPlaying()
      cafeteriaSoundOn()
      resetCafeteriaVolume()
    })

    buttonFire.addEventListener('click', function(){
      fireplaceAudioPlaying()
      fireplaceSoundOn()
      resetFireplaceVolume()
    })
    
    lightButton.addEventListener('click', () => {
      lightButton.classList.add('hide')
      darkButton.classList.remove('hide')
      page.classList.toggle('dark-modeOn')
      timerColor.classList.toggle('dark-modeTimer')
      bgtimerControls.classList.toggle('darkOn')
      forestBar.classList.toggle('darkmode')
      rainBar.classList.toggle('darkmode')
      coffeeBar.classList.toggle('darkmode')
      fireplaceBar.classList.toggle('darkmode')
      cardCoffee.classList.toggle('dark-modeOn')
      cardFireplace.classList.toggle('dark-modeOn')
      cardForest.classList.toggle('dark-modeOn')
      cardRain.classList.toggle('dark-modeOn')
      buttonFire.classList.toggle('darkmode')
      buttonCoffee.classList.toggle('darkmode')
      buttonForest.classList.toggle('darkmode')
      buttonRain.classList.toggle('darkmode')
      bgSoundControls.classList.toggle('darkmode')
    } )
    
    darkButton.addEventListener('click', () => {
     darkButton.classList.add('hide')
     lightButton.classList.remove('hide')
     page.classList.toggle('dark-modeOn')
     timerColor.classList.toggle('dark-modeTimer')
     bgtimerControls.classList.toggle('darkOn')
     forestBar.classList.toggle('darkmode')
     rainBar.classList.toggle('darkmode')
     coffeeBar.classList.toggle('darkmode')
     fireplaceBar.classList.toggle('darkmode')
     cardCoffee.classList.toggle('dark-modeOn')
     cardFireplace.classList.toggle('dark-modeOn')
     cardForest.classList.toggle('dark-modeOn')
     cardRain.classList.toggle('dark-modeOn')
     buttonFire.classList.toggle('darkmode')
     buttonCoffee.classList.toggle('darkmode')
     buttonForest.classList.toggle('darkmode')
     buttonRain.classList.toggle('darkmode')
     bgSoundControls.classList.toggle('darkmode')
   } )

   function setAudioVolume() {
    forestAudio.volume = forestBar.value
    rainAudio.volume = rainBar.value
    cafeteriaAudio.volume = coffeeBar.value
    fireplaceAudio.volume = fireplaceBar.value
}

function resetForestVolume() {
  forestBar.value = 0.5
}

function resetRainVolume() {
  rainBar.value = 0.5
}

function resetCafeteriaVolume() {
  coffeeBar.value = 0.5
}

function resetFireplaceVolume() {
  fireplaceBar.value = 0.5
}

forestBar.addEventListener('input', setAudioVolume)

rainBar.addEventListener('input', setAudioVolume)

coffeeBar.addEventListener('input', setAudioVolume)

fireplaceBar.addEventListener('input', setAudioVolume)