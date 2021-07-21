import React from 'react';

import useStyles from '../web-styles/web-styles.style';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppleIcon from '@material-ui/icons/Apple';
import { Chip } from '@material-ui/core';

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.navigation}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.navOptions}>
                        <Chip className={classes.chip} avatar= {<AppleIcon/>}clickable='true'/>
                        <Chip className={classes.chip} clickable='true' label='Mac'/>
                        <Chip className={classes.chip} clickable='true' label='Ipad'/>
                        <Chip className={classes.chip} clickable='true' label='Iphone'/>
                        <Chip className={classes.chip} clickable='true' label='Watch'/>
                        <Chip className={classes.chip} clickable='true' label='TV'/>
                        <Chip className={classes.chip} clickable='true' label='Music'/>
                        <Chip className={classes.chip} clickable='true' label='Support'/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;