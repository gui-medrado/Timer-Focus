import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function startRunning () {
    document.documentElement.classList.add('running')
    state.isRunning = true
    sounds.buttonPressAudio.play()
    timer.countdown()
}
export function stopRunning () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    sounds.buttonPressAudio.play()
}
export function addMoreFive () {
    timer.addFive()
}
export function removeMoreFive () {
    timer.removeFive()
}
export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function startMusic (type) {

    if(state.currentSound == type){
        sounds[state.currentSound].pause()
        state.currentSound = null
        return
    } else if (state.currentSound) {
        sounds[state.currentSound].pause()
        sounds[state.currentSound].currentTime = 0
    }

    state.currentSound = type
    sounds[type].play()

}