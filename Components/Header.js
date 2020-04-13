import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';


const myCustomStyle = makeStyles(theme => (
    {
        mystyle: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

        },

        myIconStyle: {
            fontSize: 45,


        },

        mytypostyle: {
            color: 'white',
            padding: 18,
            fontSize: 30,
            flex: 1
        },

        search: {

            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            // backgroundColor: fade(theme.palette.common.white, 0.15),
            // '&:hover': {
            //   backgroundColor: fade(theme.palette.common.white, 0.25),
            // },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },

        searchIcon: {
            color: "black",
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        inputRoot: {
            color: "#FE6B8B",
        },
        inputInput: {

            borderRadius: 5,
            backgroundColor: "white",
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },

    }));


const Header = () => {
    const classes = myCustomStyle();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" >
                <Toolbar className={classes.mystyle}>
                    <AcUnitIcon className={classes.myIconStyle} />
                    <Typography variant="p" className={classes.mytypostyle}>
                        Data Application
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <Typography style={{ display: "inline-block" }}>
                            total number of pages
    
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>

    )
}
export default Header;