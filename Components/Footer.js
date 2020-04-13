import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';



const customStyle = makeStyles(
    {
        footerStyle: {
            padding: 15,

        }
        
    }
);

const Footer = (props) => {
    const classes = customStyle();
   
    return (
        <div>
        <Typography>
       
        </Typography>
{    // <Pagination className={classes.footerStyle} count={5} color="primary" variant="outlined" />
}        
</div>
    );
}

export default Footer;

