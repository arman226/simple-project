import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        flexGrow: 1,
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

    typo1: {
        fontSize: 14,
        color: '#302f2d',
    },

    typo2: {
        fontSize: 50,
        marginTop: '30px',
        fontWeight: 'bold',
        color: '#000000',
    },

    typo3: {
        fontSize: 30,
        fontWeight: 100,
        color: '#000000',
    },

    typo4: {
        fontSize: 16,
        color: '#9e9898',
    },

    typo5: {
        marginTop: '30px',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    typo6: {
        fontSize: 30,
        fontWeight: 100,
        color: '#ffffff',
    },

    typo7: {
        fontSize: 16,
        color: '#9e9898',
    },

    typo8: {
        fontSize: 20,
        fontWeight: 100,
        marginBottom: '20px',
    },

    typo9: {
        fontSize: 50,
        marginTop: '30px',
        fontWeight: 'bold',
        color: '#000000',
    },

    typo10: {
        fontSize: 12,
        marginTop: '30px',
        marginBottom: '10px',
        marginLeft: '210px',
        fontWeight: 100,
    },

    typo11: {
        fontSize: 12,
        marginTop: '10px',
        marginLeft: '210px',
        fontWeight: 100,
    },

    paper1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5px 10px',
        margin: '5px auto',
        backgroundColor: '#e6eaf0',
    },

    paper2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'auto auto',
        margin: '5px auto',
        backgroundColor: '#f2f2f2',
    },

    paper3: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'auto auto',
        margin: '5px auto',
        backgroundColor: '#000000',
    },

    paper4: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'auto auto',
        margin: '5px auto',
        backgroundColor: '#fff',
    },

    paper5: {
        display: 'flex',
        flexDirection: 'column',
        padding: 'auto auto',
        margin: '5px auto',
        backgroundColor: '#f2f2f2',
    },

    box: {
        marginTop: '10px',
        fontSize: 12,
        fontWeight: 100,
    },

    box1: {
        fontWeight: 700,
        fontSize: 12,
    },

    divider: {
        marginLeft: '210px',
        marginRight: '210px',
    },
}));

