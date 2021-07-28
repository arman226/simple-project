import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    pics:{
        backgroundImage: `url('https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/hero-banner-baker-homepage.image.large_2x.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
        }
        },
        margin: {
          margin: theme.spacing(2),
        color: '#000000',
       // width:30%
        },
        root: {
            flexGrow: 1,
            justifyContent: "center"
          },
          paper: {
            padding: theme.spacing(7),
          },
          sides:{
            justifyContent: "flex-start",
            alignItems:"flex-start"
          },
          contains:{
            padding: theme.spacing(3),
          },
          down:{
              marginTop: theme.spacing(0)
          },
          roots:{
            '& .MuiTextField-root': {
              margin: theme.spacing(7),
              padding: theme.spacing(3),
              
            },
          }

}))