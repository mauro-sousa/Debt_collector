import React from "react";
import { makeStyles } from "@material-ui/core";
import { AppBar, IconButton } from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
      },
}));
export default function Header(){
    const classes = useStyles();
    return <div>
        <AppBar className={classes.appbar} elevation={0}>
            <h1>Dept Collectors
            </h1>
        </AppBar>

        
    </div>
}