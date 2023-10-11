import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start (minutes, seconds) {
    state.minutes = minutes ?? state.minutes
    state.seconds = seconds ?? state.seconds

    timer.updateDisplay()

    events.registerControls()
}