import React from 'react';
import {AppBar, Button, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import {Outlet, useNavigate} from "react-router-dom";


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    function goToLink(link: string) {
        return function () {
            navigate(link);
            handleClose()
        };
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1,}}>
                        Computer workshop
                    </Typography>
                    <Button color="inherit" onClick={handleClick}>
                        Лабораторные работы
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={goToLink("lr-8")}>
                            Лабораторная работа №8
                        </MenuItem>
                    </Menu>
                    <Button color="inherit" onClick={goToLink("author")}>
                        Об авторе
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    );
}
