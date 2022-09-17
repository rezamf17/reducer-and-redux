import React from 'react'
import { Card, Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField';

const ReactReducerComponent = () => {
    return(
        <>
        <Card>
            <h2>React Reducer</h2>
            <TextField id="counter" label="Counter Value" variant="outlined" 
            defaultValue='0'/>
            <Box sx={{display : 'flex', gap: '1em', marginTop : '1em', marginBottom: '1em'}} justifyContent="center" alignItems="center">
                <Button variant="outlined">
                    -1
                </Button>
                <Button variant="outlined">
                    0
                </Button>
                <Button variant="outlined">
                    +1
                </Button>
            </Box>
        </Card>
        
        </>
    )
}

export default ReactReducerComponent