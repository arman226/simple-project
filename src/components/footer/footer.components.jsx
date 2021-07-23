import React from 'react';
import { Container, Grid, Box, Link, Paper, Typography, Divider } from '@material-ui/core';
import useStyles from '../web-styles/web-styles.style';

const Footer = () => {
    const classes = useStyles();
    return(
        <Paper className={classes.paper5} elevation={0}>
            <Box className={classes.box}>
                <Container maxWidth="lg">
                    <Grid container spacing={10} justifyContent='center'>
                        <Grid item xs={2.1}>
                            <Box className={classes.box1} marginBottom={1}>Shop and Learn</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Mac
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Ipad
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Iphone
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Watch
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    TV
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Music
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Airpods
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Homepod
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    iPod touch
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Airtag
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Accessories
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Gift cards
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2.1}>
                            <Box className={classes.box1} marginBottom={1}>Services</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Music
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple TV+
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Fitness+
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple News+
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Arcade
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    iCloud
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple One
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Card
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Books
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Podcasts
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={4}>
                                <Link href="/" color="inherit">
                                    App Store
                                </Link>
                            </Box>
                            <Box className={classes.box1} marginBottom={1}>Account</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Manage Your Apple ID
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Store Account
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    iCloud.com
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2.1}>
                            <Box className={classes.box1} marginBottom={1}>Apple Store</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Find a store
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Shop Online
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Genius Bar
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Today at Apple
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Camp
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Store APp
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Refurbished and Clearance
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Financing
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Trade In
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Order Status
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Shopping Help
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2.1}>
                            <Box className={classes.box1} marginBottom={1}>For Business</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple and Business
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={4}>
                                <Link href="/" color="inherit">
                                    Shop for Business
                                </Link>
                            </Box>
                            <Box className={classes.box1} marginBottom={1}>For Education</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple and Education
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Shop for K-12
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={4}>
                                <Link href="/" color="inherit">
                                    Shop for College
                                </Link>
                            </Box>
                            <Box className={classes.box1} marginBottom={1}>For Healthcare</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple in Healthcare
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Health on Apply Watch
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={4}>
                                <Link href="/" color="inherit">
                                    Health Records on iPhone
                                </Link>
                            </Box>
                            <Box className={classes.box1} marginBottom={1}>For Government</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Shop for Government
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Shop for Veterans and Military
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2.1}>
                            <Box className={classes.box1} marginBottom={1}>Apple Values</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Accessibility
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Education
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Environment
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Inclusion and Diversity
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Racial Equity and Justice
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={4}>
                                <Link href="/" color="inherit">
                                    Supplier Responisibility
                                </Link>
                            </Box>
                            <Box className={classes.box1} marginBottom={1}>About Apple</Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Newsroom
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Apple Leadership
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Career Opportunities
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Investors
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Ethics & Compliance
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Events
                                </Link>
                            </Box>
                            <Box className={classes.box} marginBottom={.5}>
                                <Link href="/" color="inherit">
                                    Contact Apple
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>   
            <Typography className={classes.typo10}>More ways to shop: <Link href= "https://www.apple.com/retail/" color="primary">Find an apple store</Link> or <Link href="https://locate.apple.com/" color="primary">other retailer</Link> near you. Or call 1-800-MY-APPLE.</Typography>
            <Divider className={classes.divider}/>
            <Typography className={classes.typo11}>Copyright © 2021 Apple Inc. All rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href="https://www.apple.com/legal/privacy/" color="inherit">Privacy Policy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link href="https://www.apple.com/legal/internet-services/terms/site.html" color="inherit">Terms of Use</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link href="https://www.apple.com/us/shop/goto/help/sales_refunds" color="inherit">Sales and Refunds</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link href="https://www.apple.com/legal/" color="inherit">Legal</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link href="https://www.apple.com/sitemap/" color="inherit">Site Map</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href="https://www.apple.com/choose-country-region/" color="inherit">United States</Link>
            </Typography>
        </Paper>
    )
}

export default Footer;