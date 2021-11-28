import { v1 } from "uuid"

export type LotType = {
    id: string
    title: string
    score: number
    changeScoreValue: number
}
export type RemoveLotActionType = {
    type: 'REMOVE-LOT'
    id: string
}
export type AddLotActionType = {
    type: 'ADD-LOT'
    title: string
}
export type IncreaseScoreActionType = {
    type: 'INCREASE-SCORE'
    id: string
}
export type DecreaseScoreActionType = {
    type: 'DECREASE-SCORE'
    id: string
}
export type ChangeScoreValueActionType = {
    type: 'CHANGE-SCORE-VALUE'
    id: string
    value: number
}

export type AuctionReducerActionType =
    RemoveLotActionType |
    AddLotActionType |
    IncreaseScoreActionType |
    ChangeScoreValueActionType |
    DecreaseScoreActionType




let initialState: Array<LotType> = []


export const auctionReducer = (state: Array<LotType> = initialState, action: AuctionReducerActionType) => {
    switch (action.type) {
        case 'REMOVE-LOT': {
            return state.filter(l => l.id !== action.id).sort((a, b) =>  a.score < b.score ? 1 : -1)
        }
        case 'ADD-LOT': {
            const stateCopy = [...state]
            const newLot: LotType = {id: v1(), title: action.title, score: 0, changeScoreValue: 0}
            return [newLot, ...stateCopy].sort((a, b) =>  a.score < b.score ? 1 : -1)
        }
        case 'INCREASE-SCORE': {
            const stateCopy = [...state]
            const lot = stateCopy.find(l => l.id === action.id)
                if(lot) {
                    lot.score = lot.score + lot.changeScoreValue
                }
            return stateCopy.sort((a, b) =>  a.score < b.score ? 1 : -1)
        }
        case 'DECREASE-SCORE': {
            const stateCopy = [...state]
            const lot = stateCopy.find(l => l.id === action.id)
            if(lot) {
                lot.score = lot.score - lot.changeScoreValue
            }
            return stateCopy.sort((a, b) =>  a.score < b.score ? 1 : -1)
        }
        case 'CHANGE-SCORE-VALUE': {
            const stateCopy = [...state]
            const lot = stateCopy.find(l => l.id === action.id)
            if(lot) {
                lot.changeScoreValue = action.value
            }
            return stateCopy
        }
        default: return state
    }
}




export const removeLotAC = (id: string): RemoveLotActionType => {
    return {type: 'REMOVE-LOT', id}
}
export const addLotAC = (title: string): AddLotActionType => {
    return {type: 'ADD-LOT', title}
}
export const increaseScoreAC = (id: string): IncreaseScoreActionType => {
    return {type: 'INCREASE-SCORE', id}
}
export const decreaseScoreAC = (id: string): DecreaseScoreActionType => {
    return {type: 'DECREASE-SCORE', id}
}
export const changeScoreValueAC = (id: string, value: number): ChangeScoreValueActionType => {
    return {type: 'CHANGE-SCORE-VALUE', id, value}
}