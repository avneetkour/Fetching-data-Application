import React, { useState, useEffect } from 'react';
// import Pagination from './Pagination';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Pagination from '@material-ui/lab/Pagination';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        border: 1,
        borderRadius: 3,
        padding: 35,
       
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
    mystyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        alignItems:"center",
        bottom:"0"

    },
    titleInfo: {
        flexBasis: "45%"
    }

});



const Section = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [postPerPage] = useState(10); // IMP
    const [numberOfRecordsFound, setNumberOfRecordsFound] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    // get current post

    const indexOfLastPage = Math.ceil(numberOfRecordsFound / postPerPage);
    const indexOfFirstPage = indexOfLastPage - postPerPage;   // IMP
    // const currentPost = books.slice(indexOfFirstPage, indexOfLastPage);
    // change page number
    const fetchData = (pageIndex = 0) => {
        const url = `http://api.plos.org/search?q=title:DNA&start=${pageIndex}&rows=${postPerPage}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setBooks(data &&
                    data.response &&
                    data.response.docs);
                setNumberOfRecordsFound(data &&
                    data.response &&
                    data.response.numFound);
            });

        ;
    }
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        fetchData((pageNumber*postPerPage));
    };

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <Container position="relative"  style={{marginTop:100}} >
                {
                    books.map(function (book, index) {
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
            <AppBar position="relative"  className={classes.mystyle}>
                <Toolbar>
                    <Pagination style={{ paddingTop: 20, paddingBottom: 20}}
                        count={indexOfLastPage}
                        variant="outlined"
                        shape="rounded"
                        size="large"
                        onChange={(event, page) => {
                            paginate(page - 1);
                        }}
                        color="inherit" />
                </Toolbar>
            </AppBar>


        </div>
    )
};


export default Section;








// class Section extends React.Component {

//     // constructor(props) {
//     //     super(props);
//         state = {
//             books: [],
//         };
//     // }
//     // componentDidMount() {

//         // const url = "http://api.plos.org/search?q=title:DNA";
//         // const response = await fetch(url);
//         // const data = await response.json();
//         // console.log('????? ', data);
//         // this.someFunction();
//     // }
//     someFunction() {

//         // this.setBooks({ books: [{}] }); // data.response.docs
//     }
//     classes = useStyles();
//     render() {


//         const { books } = this.state;
//         return (
//             <div>
//                 <CssBaseline />
//                 <Container>
//                     {
//                         books.map(function (book) {
//                             return (
//                             <Card>{/* className={this.classes.root} */}
//                                     <CardContent key={book.id} item xs={12}>

//                                         <Typography> Journal Id :-  {book.id} </Typography>
//                                         <Typography> Journal Name :- {book.journal} </Typography>
//                                         <Typography> Publication Date :- {book.publication_date}</Typography>
//                                         <Typography> Type of Article :- {book.article_type} </Typography>
//                                         <Typography> Authors :- {book.author_display} </Typography>
//                                         <Typography> Title :- {book.title_display}</Typography>
//                                         <Typography> Abstract :- {book.abstract} </Typography>
//                                         <Typography> Score :- {book.score}</Typography>

//                                     </CardContent>

//                                 </Card>
//                             );
//                         })
//                     }

//                 </Container>
//             </div>

//         );
//     }
// }


