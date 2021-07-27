import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import useStyles from '../web-styles/web-styles.style';

const HomePage = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper className={classes.paper1} elevation={0}>
                <Typography className={classes.typo1}>We look forward to welcoming you to our stores. Whether you <a href= "https://www.apple.com/retail/">shop in a store</a> or <a href= "https://www.apple.com/shop">shop online</a>, our Specialists can help you buy the products you love.</Typography>
            </Paper>
            <Paper className={classes.paper2} elevation={0}>
                <Typography className={classes.typo2}>iPhone 12</Typography>
                <Typography className={classes.typo3}>Blast past fast</Typography>
                <Typography className={classes.typo4}>From $29.12/mo. for 24 mo. or $699 before trade-in
                    <br/>&nbsp;Buy directly from Apple with special carrier offers</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/iphone-12/" color="primary">Learn more &gt;</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12" color="primary">Buy &gt;</Link>
                </Typography>
                <img
                    alt='iphone12'
                    src={`https://www.apple.com/v/iphone/home/az/images/overview/hero/iphone_12_non_ar__exn70uq91eeu_large.jpg`}
                />
            </Paper>
            <Paper className={classes.paper3} elevation={0}>
                <Typography className={classes.typo5}>iPhone 12 Pro</Typography>
                <Typography className={classes.typo6}>It's a leap year.</Typography>
                <Typography className={classes.typo7}>From $41.62/mo. for 24 mo. or $999 before trade-in
                    <br/>&nbsp;Buy directly from Apple with special carrier offers</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/iphone-12-pro/" color="primary">Learn more &gt;</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12_pro" color="primary">Buy &gt;</Link>
                </Typography>
                <img
                    alt='iphone12-pro'
                    src={`https://www.apple.com/v/iphone/home/az/images/overview/hero/iphone_12_pro__f7wokw1n4lm6_medium.jpg`}
                />
            </Paper>
            <Paper className={classes.paper4} elevation={0}> 
                <Typography className={classes.typo9}>International Collection</Typography>
                <Typography className={classes.typo3}>There's a brand for every fan</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/us/shop/goto/product/MJ583" color="primary">Shop the collection &gt;</Link>
                </Typography>
                <img
                    alt='apple-watch'
                    src={`https://www.apple.com/v/watch/home/am/images/overview/watchos8/tile_watchos__fo0tafi6nn6u_medium.jpg`}
                    height='600px'
                    width='1500px'
                />
            </Paper>
        </div>
    )
}

export default HomePage;