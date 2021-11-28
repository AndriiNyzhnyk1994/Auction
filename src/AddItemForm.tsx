import React, {ChangeEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import './App.css';

export type AddItemFormPropsType = {
    addItem: (title: string) => void
}



function AddItemForm(props: AddItemFormPropsType) {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<null | string>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if (error) {
            setError(null)
        }
    }


    const addLot = (newLotTitle: string) => {
        if (title.trim()) {
            props.addItem(newLotTitle)
            setTitle('')
        } else {
            setError('Please enter valid title')
        }

    }

    return(
        <div className={'add-item-form'}>
            <TextField
                color={"secondary"}
                helperText={error}
                placeholder={'Write name of a lot here'}
                error={!!error} value={title}
                onChange={onChangeHandler}
            />
            <Button size={"small"} variant={"contained"} onClick={() => {
                addLot(title)
            }}>+
            </Button>
        </div>
    )
}


export default AddItemForm;