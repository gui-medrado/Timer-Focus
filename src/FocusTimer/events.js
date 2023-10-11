import {controls, buttonsSounds} from './elements.js '
import * as actions from './actions.js'
import state from './state.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function' || action == undefined) return

        actions[action]() 
    })

    buttonsSounds.addEventListener('click', (e) => {
        const typeOfSound = e.target.dataset.sound
        const parent =  e.target.closest('.button-item')
        
        document.querySelectorAll('.button-item').forEach((e, i) => e.classList.remove('active'))
        
        if(typeOfSound == state.currentSound) parent.classList.remove('active')
        else parent.classList.add('active')
        actions.startMusic(typeOfSound)
    })
}
