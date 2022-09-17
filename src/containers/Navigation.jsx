import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/react-reducer">
                        <Button sx={{ my: 2, color: "white", display: "block" }}>React Reducer</Button>
                    </Link>
                    <Link to="/react-redux">
                        <Button sx={{ my: 2, color: "white", display: "block" }}>React Redux</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation
