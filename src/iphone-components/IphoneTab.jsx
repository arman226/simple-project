import React from 'react';
import Button from '@material-ui/core/Button' ;
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import './IphoneTab.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(6),
    },
    divider: {
        marginTop: 50,
        marginLeft: 45,
        
    },
    divider1: {
        marginTop: 110,
        marginLeft: 45,
    
    },
    link: {
        color: '#06c',
    },

    link1: {
        color: '#06c',
        marginLeft: 45,
    },
}));

const IphoneTab = () => {
const classes = useStyles();

    return (
        <div className="main">
            <div className="wrapper">
                <div className="section-content">
                    <div className="copy-wrapper large-7 large-centered">
                        <h2 className="eyebrow"> iPhone 12 and iPhone 12 mini</h2>
                        <p className="headline"> Blast past fast.</p>
                        <p className="copy"> From $29.12/mo. for 24 mo. or $699 before trade-in
                            <sup className="footnote footnote-number">
                                1
                            </sup>
                        </p>
                        <Button variant="contained" size="small" color="primary"> Buy </Button> 
                        <Typography className="">
                        <Link href="#" className={classes.link}>
                            Learn More
                        </Link>
                        </Typography>
                    </div>
                </div>
                    <div className="large-12">
                        <figure class="hero"></figure>
                    </div>
            </div>
            <div className="wrapper theme-dark">
                <div className="section-content">
                    <div className="copy-wrapper large-7 large-centered"> 
                        <h2 className="eyebrow"> iPhone 12 Pro and iPhone 12 Pro Max</h2>
                        <p className="headline"> It's a leap year.</p>
                        <p className="copy"> From $41.62/mo. for 24 mo. or $999 before trade-in
                            <sup className="footnote footnote-number">
                                2
                            </sup>
                        </p>
                        <Button variant="contained" size="small" color="primary"> Buy </Button> 
                        <Typography className="">
                        <Link href="#" className={classes.link}>
                            Learn More
                        </Link>
                        </Typography>
                    </div>
                </div>
                    <div className="large-12">
                        <figure class="hero-dark"></figure>
                    </div>
            </div>
            <div className="section-compare">
                <div className="section-content">
                    <h2 className="headline"> Which iPhone is right for you?</h2>
                    <Link href="#" className={classes.link}>
                            Compare all iPhone models
                    </Link>
                    <Grid container className={classes.root} spacing={7}>
                        <Grid item xs={12} sm={6} md={3}>
                            <figure className="iPhone-12-pro"></figure>
                            <h3 className="violator violator-frameless violator-frameless-reduced">New</h3>
                            <figure className="iPhone-12-pro-text"></figure>
                            <p className="typography-body-reduced">From $999</p>
                            <figure className="iPhone-12-pro-color"></figure>
                            <p className="typography-tout">The ultimate iPhone.</p>
                            <button className="button button-reduced">Buy</button>
                            <Divider className={classes.divider}></Divider>
                            <h4>6.1" or 6.7"</h4>
                            <p className="typography-body-reduced-1">all-screen OLED display
                                <sup className="footnote footnote-number">
                                    3
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-5g"></figure>
                            <p className="typography-body-reduced-1">5G cellular
                                <sup className="footnote footnote-number">
                                    4
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-a14"></figure>
                            <p className="typography-body-reduced-1">A14 Bionic chip</p>
                            <p className="typography-body-reduced-1 feature-note">Fastest chip in a smartphone</p>
                            <figure className="image-icon camera-12-pro"></figure>
                            <p className="typography-body-reduced-1">Pro camera system</p>
                            <p className="typography-body-reduced-1 feature-note">Ultra wide, Wide, Telephoto</p>
                            <figure className="image-icon scanner"></figure>
                            <p className="typography-body-reduced-1">LiDAR Scanner</p>
                            <p className="typography-body-reduced-1 feature-note-1">For Night mode portraits and next-level AR</p>
                            <figure className="image-icon magsafe-12-pro"></figure>
                            <p className="typography-body-reduced-1">Compatible with MagSafe accessories</p>
                            <Divider className={classes.divider}></Divider>
                            <Link href="#" className={classes.link1}>
                                Learn More
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <figure className="iPhone-12"></figure>
                            <h3 className="violator violator-frameless violator-frameless-reduced">New</h3>
                            <figure className="iPhone-12-text"></figure>
                            <p className="typography-body-reduced">From $699**</p>
                            <figure className="iPhone-12-color"></figure>
                            <p className="typography-tout">A total powerhouse.</p>
                            <button className="button button-reduced">Buy</button>
                            <Divider className={classes.divider}></Divider>
                            <h4>5.4" or 6.1"</h4>
                            <p className="typography-body-reduced-1">all-screen OLED display
                                <sup className="footnote footnote-number">
                                    3
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-5g"></figure>
                            <p className="typography-body-reduced-1">5G cellular
                                <sup className="footnote footnote-number">
                                    4
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-a14"></figure>
                            <p className="typography-body-reduced-1">A14 Bionic chip</p>
                            <p className="typography-body-reduced-1 feature-note">Fastest chip in a smartphone</p>
                            <figure className="image-icon camera-12"></figure>
                            <p className="typography-body-reduced-1">Advanced dual-camera system</p>
                            <p className="typography-body-reduced-1 feature-note">Ultra wide, Wide</p>
                            <p className="typography-body-reduced-1-underscore">__</p>
                            <figure className="image-icon magsafe-12"></figure>
                            <p className="typography-body-reduced-1">Compatible with MagSafe accessories</p>
                            <Divider className={classes.divider}></Divider>
                            <Link href="#" className={classes.link1}>
                                Learn More
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <figure className="iPhone-se"></figure>
                            <figure className="iPhone-se-text"></figure>
                            <p className="typography-body-reduced-1">From $399</p>
                            <figure className="iPhone-se-color"></figure>
                            <p className="typography-tout">Lots to love. Less to spend</p>
                            <button className="button button-reduced">Buy</button>
                            <Divider className={classes.divider}></Divider>
                            <h4>4.7"</h4>
                            <p className="typography-body-reduced">LCD display</p>
                            <figure className="image-icon image-icon-4g"></figure>
                            <p className="typography-body-reduced">4G LTE cellular
                                <sup className="footnote footnote-number">
                                    4
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-a13"></figure>
                            <p className="typography-body-reduced">A13 Bionic chip</p>
                            <figure className="image-icon camera-se"></figure>
                            <p className="typography-body-reduced-1">Single-camera system</p>
                            <p className="typography-body-reduced-1 feature-note">Wide</p>
                            <p className="typography-body-reduced-1-underscore-1">__</p>
                            <p className="typography-body-reduced-1-underscore-2">__</p>
                            <Divider className={classes.divider1}></Divider>
                            <Link href="#" className={classes.link1}>
                                Learn More
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <figure className="iPhone-11"></figure>
                            <figure className="iPhone-11-text"></figure>
                            <p className="typography-body-reduced-1">From $599</p>
                            <figure className="iPhone-11-color"></figure>
                            <p className="typography-tout">As amazing as ever.</p>
                            <button className="button button-reduced">Buy</button>
                            <Divider className={classes.divider}></Divider>
                            <h4>6.1"</h4>
                            <p className="typography-body-reduced-1">All-screen LCD display
                                <sup className="footnote footnote-number">
                                    3
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-4g"></figure>
                            <p className="typography-body-reduced">4G LTE cellular
                                <sup className="footnote footnote-number">
                                    4
                                </sup>
                            </p>
                            <figure className="image-icon image-icon-a13"></figure>
                            <p className="typography-body-reduced">A13 Bionic chip</p>
                            <figure className="image-icon camera-11"></figure>
                            <p className="typography-body-reduced-1">Dual-camera system</p>
                            <p className="typography-body-reduced-1 feature-note">Ultra wide, Wide </p>
                            <p className="typography-body-reduced-1-underscore-1">__</p>
                            <p className="typography-body-reduced-1-underscore-2">__</p>
                            <Divider className={classes.divider1}></Divider>
                            <Link href="#" className={classes.link1}>
                                Learn More
                            </Link>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
            
    )
}

export default IphoneTab
