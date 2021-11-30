import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {addLotAC, changeScoreValueAC, decreaseScoreAC, increaseScoreAC, LotType, removeLotAC} from "./auction-reducer";
import {addOneMinuteAC, addThirtySecondsAC, addTwoMinutesAC, startTimerAC} from "./timer-reducer";
import AddItemForm from "./AddItemForm";
import Lot from "./Lot";
import {Button} from "@material-ui/core";

function AppWithRedux() {


    let lots = useSelector<RootStateType, Array<LotType>>(state => state.lots)
    let timer = useSelector<RootStateType, number>(state => state.timer)
    const dispatch = useDispatch()

    const addLot = (newLotTitle: string) => {
        dispatch(addLotAC(newLotTitle))
    }

    //timer functions start
    const startTimer = () => {
        const action = startTimerAC()
        dispatch(action)
        if (timer > 0) {
            setTimeout(startTimer, 1000)
        }
    }
    const addThirtySeconds = () => {
        dispatch(addThirtySecondsAC())
    }
    const addOneMinute = () => {
        dispatch(addOneMinuteAC())
    }
    const addTwoMinutes = () => {
        dispatch(addTwoMinutesAC())
    }

    //timer function end

    let minutes = Math.floor(timer / (60));
    timer -= minutes * (60);

    return (
        <div className="App">
            <div className={'header'}>
                <h1>auction</h1>
            </div>

            <div className={'lots-list'}>
                <AddItemForm addItem={addLot}/>
                {lots.map(l => {
                    const removeLot = () => {
                        dispatch(removeLotAC(l.id))
                    }
                    const increaseScore = () => {
                        dispatch(increaseScoreAC(l.id))
                        dispatch(changeScoreValueAC(l.id, 0))
                    }
                    const decreaseScore = () => {
                        dispatch(decreaseScoreAC(l.id))
                        dispatch(changeScoreValueAC(l.id, 0))
                    }

                    return (
                        <Lot
                            key={l.id}
                            id={l.id}
                            title={l.title}
                            score={l.score}
                            removeLot={removeLot}
                            changeScoreValue={l.changeScoreValue}
                            decreaseScore={decreaseScore}
                            increaseScore={increaseScore}
                        />
                    )
                })}
            </div>
            <div className={'timer'}>
                <h2>Timer</h2>
                <div><h2>{`${minutes < 10 ? '0' : ''}${minutes} : ${timer < 10 ? '0' : ''}${timer}`}</h2></div>
                <div>
                    <Button variant={"contained"} onClick={startTimer}>start</Button>
                </div>
                <Button size={"small"} variant={"contained"} onClick={addThirtySeconds}>+ 30 sec</Button>
                <Button size={"small"} variant={"contained"} onClick={addOneMinute}>+ 1 min</Button>
                <Button size={"small"} variant={"contained"} onClick={addTwoMinutes}>+ 2 min</Button>

            </div>
        </div>
    );
}

export default AppWithRedux;
