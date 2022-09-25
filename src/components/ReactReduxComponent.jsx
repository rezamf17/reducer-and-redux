import React, {useState} from 'react';
import { Card, Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectCounter } from '../features/counter/counterSlice';
import {
    increment,
    decrement,
    kosong,
    incrementSpec,
    decrementSpec
} from '../features/counter/counterSlice'

const ReactReduxComponent = () => {
    const [currentAmount, setCurrentAmount] = useState(50)
    // const username = useSelector((state) => state.user);
    // const counter = useSelector((state) => state.counter);
    const username = useSelector(selectUser);
    const counter = useSelector(selectCounter);
  
    // Untuk menggunakan dispatch (action) nya, kita gunakan dispatcher dari hooks useDispatch
    const dispatcher = useDispatch();
    const plusCounter = () => {
        dispatcher(increment())
    }
    const minusCounter = () => {
        dispatcher(decrement())
    }
    const reset = () => {
        dispatcher(kosong())
    }
    const amountOnchange = (event) => {
        const amountInField = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)

        setCurrentAmount(amountInField)
    }
    const decrease = () => {
        dispatcher(incrementSpec(currentAmount))
    }
    const increase = () => {
        dispatcher(decrementSpec(currentAmount))
    }
    return(
        <>
         <Card>
            <h2>React Redux</h2>
            <p>Nama User : {username}</p>
            <TextField id="counter" variant="outlined"
            value={counter} />
            <Box sx={{display : 'flex', gap: '1em', marginTop : '1em', marginBottom: '1em'}} justifyContent="center" alignItems="center">
                <Button variant="outlined" onClick={minusCounter}>
                    -1
                </Button>
                <Button variant="outlined" onClick={reset}>
                    0
                </Button>
                <Button variant="outlined" onClick={plusCounter}>
                    +1
                </Button>
            </Box>
            <Box sx={{display : 'flex', gap : '1em'}} justifyContent="center" alignItems="center">
                <TextField variant='outlined'
                defaultValue={currentAmount}
                onChange={amountOnchange}
                ></TextField>
                <Button variant='outlined' onClick={increase}>AMOUNT +</Button>
                <Button variant='outlined' onClick={decrease}>AMOUNT -</Button>
            </Box>
        </Card>
        </>
    )
}

export default ReactReduxComponent