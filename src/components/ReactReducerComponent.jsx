import React,{useReducer} from 'react'
import { Card, Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import {counterInitialValue, counterReducer} from '../reducers/counterReducer'

const ReactReducerComponent = () => {
        const [counter, dispatchCounter] = useReducer(
            counterReducer,
            counterInitialValue
        )
        const plusCounter = () => {
            dispatchCounter({
                tipeAksi : "increment",
            })
        }
        const minusCounter = () => {
            dispatchCounter({
                tipeAksi : "decrement",
            })
        }
        const reset = () => {
            dispatchCounter({
                tipeAksi : "reset",
            })
        }
    return(
        <>
        <Card>
            <h2>React Reducer</h2>
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

export default ReactReducerComponent