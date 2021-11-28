import {combineReducers, createStore} from "redux";
import {auctionReducer} from "./auction-reducer";
import {timerReducer} from "./timer-reducer";


const rootReducer = combineReducers({
    lots: auctionReducer,
    timer: timerReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>
