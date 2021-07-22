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
                    <Link href="https://www.apple.com/iphone-12/">Learn more &gt; &nbsp;</Link>
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12">&nbsp; Buy &gt;</Link>
                </Typography>
                <img
                    alt='iphone'
                    src={`https://images.macrumors.com/t/jiIRguBAWDObtAWJ1gBs-5wCi_o=/800x0/smart/https://images.macrumors.com/article-new/2019/10/iphone12-lineup-wide.jpg?lossy`}
                />
            </Paper>
            <Paper className={classes.paper3} elevation={0}>
                <Typography className={classes.typo5}>iPhone 12 Pro</Typography>
                <Typography className={classes.typo6}>It's a leap year.</Typography>
                <Typography className={classes.typo7}>From $41.62/mo. for 24 mo. or $999 before trade-in</Typography>
                <Typography className={classes.typo7}>Buy directly from Apple with special carrier offers</Typography>
                <Typography className={classes.typo8}>
                    <Link href="https://www.apple.com/iphone-12-pro/">Learn more &gt; &nbsp;</Link>
                    <Link href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12_pro">&nbsp; Buy &gt;</Link>
                </Typography>
                <img
                    alt='iphone'
                    src={`https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-og-202009?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1601432262000`}
                    width= '700px'
                />
            </Paper>
        </div>
    )
};

export default HomePage;