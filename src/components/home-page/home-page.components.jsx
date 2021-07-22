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
                <Typography className={classes.typo4}>From $29.12/mo. for 24 mo. or $699 before trade-in</Typography>
                <Typography className={classes.typo7}>Buy directly from Apple with special carrier offers</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/iphone-12/" underline="none">Learn more &gt; &nbsp;</Link>
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12" underline="none">&nbsp; Buy &gt;</Link>
                </Typography>
                <img
                    alt='iphone12'
                    src={`https://www.apple.com/v/iphone/home/az/images/overview/hero/iphone_12_non_ar__exn70uq91eeu_large.jpg`}
                    
                />
            </Paper>
            <Paper className={classes.paper3} elevation={0}>
                <Typography className={classes.typo5}>iPhone 12 Pro</Typography>
                <Typography className={classes.typo6}>It's a leap year.</Typography>
                <Typography className={classes.typo7}>From $41.62/mo. for 24 mo. or $999 before trade-in</Typography>
                <Typography className={classes.typo7}>Buy directly from Apple with special carrier offers</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/iphone-12-pro/" underline="none">Learn more &gt; &nbsp;</Link>
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12_pro" underline="none">&nbsp; Buy &gt;</Link>
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
                    <Link href="https://www.apple.com/us/shop/goto/product/MJ583" underline="none">Shop the collection &gt;</Link>
                </Typography>
                <img
                    alt='apple-watch'
                    src={`https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/221528847_833052724252586_568901311487163218_n.png?_nc_cat=111&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeHyZvBaRTSDjMY-LchN07jIC3-rY3VlOmQLf6tjdWU6ZCwzH_5rPYPwd9F_swVCih9_ANlpAt5pyq5lBnhl24q_&_nc_ohc=kOVrzOzHr_0AX-nmZsl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b2161f3b60a81f66d0c4df04de28d2c0&oe=60FDB520`}
                    width= '1349px'
                />
            </Paper>
        </div>
    )
};

export default HomePage;