import React, {useState} from 'react';
import { Card, Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";


const ReactReduxComponent = () => {
    const [currentAmount, setCurrentAmount] = useState(50)
    const username = useSelector((state) => state.user);
    const counter = useSelector((state) => state.counter);
  
    // Untuk menggunakan dispatch (action) nya, kita gunakan dispatcher dari hooks useDispatch
    const dispatcher = useDispatch();
    const plusCounter = () => {
        dispatcher({
            type : 'increment'
        })
    }
    const minusCounter = () => {
        dispatcher({
            type : 'decrement'
        })
    }
    const reset = () => {
        dispatcher({
            type : 'reset'
        })
    }
    const amountOnchange = (event) => {
        const amountInField = parseInt(event.target.value)

        setCurrentAmount(amountInField)
    }
    const decrease = () => {
        dispatcher({
            type : 'decrementSpec',
            payload : currentAmount
        })
    }
    const increase = () => {
        dispatcher({
            type : 'incrementSpec',
            payload : currentAmount
        })
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