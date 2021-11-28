import React from "react";
import {IconButton} from "@material-ui/core";
import {changeScoreValueAC} from "./auction-reducer";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";

export type LotPropsType = {
    id: string
    title: string
    score: number
    changeScoreValue: number
    decreaseScore: () => void
    increaseScore: () => void
    removeLot: () => void
}





function Lot(props: LotPropsType) {

    const dispatch = useDispatch()



    return(
        <div className={'lot-item'}>
            <span className={'lot-title'}>{props.title}</span>
            <span className={'lot-score'}>{props.score}</span>
            <div className={'change-score-form'}>
                <IconButton onClick={props.decreaseScore} size={"small"} className={'decrease-score-button'}>-</IconButton>
                <input
                    onChange={(e) => {
                        dispatch(changeScoreValueAC(props.id, Number(e.currentTarget.value)))
                    }
                    }
                    value={props.changeScoreValue}
                    className={'change-score-input'}/>
                <IconButton onClick={props.increaseScore} size={"small"} className={'increase-score-button'}>+</IconButton>
            </div>

            <IconButton size={"small"} className={'remove-lot-button'} onClick={props.removeLot}>
                <Delete/>
            </IconButton>
        </div>
    )
}

export default Lot