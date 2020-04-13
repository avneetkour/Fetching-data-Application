import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        border: 1,
        borderRadius: 3,
        padding: 35
    },
    headingstyles: {
        fontSize: 20,
        fontWeight: 400,
        display: "inline-block",
        alignItems: "left",
        paddingRight: 10,

    },
    headinginfostyle: {
        alignItems: "left",
        display: "inline"
    },
    mainTitle: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: 20,
        paddingTop: 20,
        background:" inherit"
    },
    titleInfo: {
        flexBasis: "45%"
    }

});

const classes = useStyles();

const BooksData = ({books}) => {
    const [localBooks, setLocalBooks] = useState([]);

    useEffect(() => {
        setLocalBooks(books);
    }, []);

    return (
        <div>
        <Container position="relative"  style={{marginTop:100}} >
        {
            localBooks.map(function (book, index) {
                return (
                    <Card key={index}  style={{marginTop:20, marginBottom:20}}>
                        <CardContent key={book.id} xs={12} className={classes.root}>
                            <div className={classes.mainTitle}>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Journal Id :-</Typography>
                                    <Typography className={classes.headinginfostyle} >{book.id} </Typography>
                                </div>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Journal Name :-</Typography>
                                    <Typography className={classes.headinginfostyle} > {book.journal} </Typography>
                                </div>
                            </div>
                            <div className={classes.mainTitle}>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Publication Date :- </Typography>
                                    <Typography className={classes.headinginfostyle} >{book.publication_date}</Typography>
                                </div>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Type of Article :- </Typography>
                                    <Typography className={classes.headinginfostyle} >{book.article_type} </Typography>
                                </div>
                            </div>
                            <div className={classes.mainTitle}>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Authors :- </Typography>
                                    <Typography className={classes.headinginfostyle} >{book.author_display} </Typography>
                                </div>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Title :- </Typography>
                                    <Typography className={classes.headinginfostyle} >{book.title_display}</Typography>
                                </div>
                            </div>

                            <Typography className={classes.headingstyles} > Abstract :- </Typography>
                            <Typography align="center" className={classes.headinginfostyle}>{book.abstract} </Typography>
                            <div className={classes.mainTitle}>
                                <div className={classes.titleInfo}>
                                    <Typography className={classes.headingstyles}> Score :- </Typography>
                                    <Typography className={classes.headinginfostyle} >{book.score}</Typography>
                                </div>
                            </div>

                        </CardContent>

                    </Card>
                );
            })
        }

    </Container>
        </div>
    )
}

export default BooksData;
