
export type StartTimerActionType = {
    type: 'START-TIMER'
}

export type AddThirtySecondsActionType = {
    type: 'ADD-THIRTY-SECONDS'
}
export type AddOneMinuteActionType = {
    type: 'ADD-ONE-MINUTE'
}
export type AddTwoMinutesActionType = {
    type: 'ADD-TWO-MINUTES'
}
export type TimerActionType =
    StartTimerActionType |
    AddOneMinuteActionType |
    AddThirtySecondsActionType |
    AddTwoMinutesActionType


const initialState =  10





export const timerReducer = (state: number = initialState, action: TimerActionType) => {
    switch (action.type) {
        case 'START-TIMER': {
            if(state > 0) {
                return state - 1
            }
            return state
        }
        case 'ADD-ONE-MINUTE': {
            return state + 60
        }
        case 'ADD-TWO-MINUTES': {
            return state + 120
        }
        case 'ADD-THIRTY-SECONDS': {
            return state + 30
        }
        default: return state
    }
}


export const startTimerAC = (): StartTimerActionType => {
    return {type: 'START-TIMER'}
}
export const addOneMinuteAC = (): AddOneMinuteActionType => {
    return {type: 'ADD-ONE-MINUTE'}
}
export const addTwoMinutesAC = (): AddTwoMinutesActionType => {
    return {type: 'ADD-TWO-MINUTES'}
}
export const addThirtySecondsAC = (): AddThirtySecondsActionType => {
    return {type: 'ADD-THIRTY-SECONDS'}
}