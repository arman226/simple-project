import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from '../web-styles/web-styles.style';

const HomePage = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper className={classes.paper1} elevation={1}>
                <Typography className={classes.typo1}>We look forward to welcoming you to our stores. Whether you <a href= "https://www.apple.com/retail/">shop in a store</a> or <a href= "https://www.apple.com/shop">shop online</a>, our Specialists can help you buy the products you love.</Typography>
            </Paper>
            <Paper className={classes.paper2} elevation={0}>
                <Typography className={classes.typo2}>iPhone 12</Typography>
                <Typography className={classes.typo3}>Blast past fast</Typography>
                <Typography className={classes.typo4}>
                    From $29.12/mo. for 24 mo. or $699 before trade-in 
                </Typography>
                <img
                    alt='iphone'
                    src={`https://images.macrumors.com/t/jiIRguBAWDObtAWJ1gBs-5wCi_o=/800x0/smart/https://images.macrumors.com/article-new/2019/10/iphone12-lineup-wide.jpg?lossy`}
                />
            </Paper>
            
        </div>
    )
};

export default HomePage;