import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
    navigation: {
        position:'static',
        alignItems: 'center',
        backgroundColor: '#2d302f',
    },
    
    toolbar: {
        variant: 'dense',
        alignItems: 'center',
    },
    
    button: {
        color: '#d1cdcd',
    },
    
    chip: {
        color: '#d1cdcd',
        backgroundColor: '#2d302f',
        marginRight: theme.spacing(5),
    },
    
    navOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
}));
