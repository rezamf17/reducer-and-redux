import React from 'react';
import { Card, Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";


const ReactReduxComponent = () => {
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
        </Card>
        </>
    )
}

export default ReactReduxComponent