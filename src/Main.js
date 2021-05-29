import React from 'react'
import { useGlobalContext } from './context'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';
import "./App.css";

//Material UI Styles

const ColorButton = withStyles((theme) => ({
  root: {
    color: grey[50],
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 320,
    color: grey[50],
  },
  inputControl: {
    color: grey[900],
    fontSize: "20px",
    fontWeight: 'bolder',
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  menuControl:{
    fontWeight: 'bolder',
  }
}));
//Material UI Styles Ends



//Main Function Starts
const Main = () => {
  const { quiz, HandleSubmit,setQuiz} = useGlobalContext()
  const classes = useStyles();
 
 //handlechange function
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setQuiz({
      ...quiz,
      [name]: value,
    });
  };
  return <main >
            <h1 className="topic">Trivia Quiz by <a href="https://opentdb.com/api_config.php">OpentDB</a></h1>
            <div className="App">
                <h2 className="header">Setup quiz</h2>
              <FormControl className={classes.formControl}>
                <InputLabel id="amount-native-helper" className={classes.inputControl}>No. of Questions</InputLabel>
                  <Input
                      inputProps={{
                        name: 'amount',
                        id: 'amount-native-helper',
                      }}
                      type="number"
                      value={quiz.amount}
                      onChange={handleChange}
                      className={classes.inputControl}
                  />
                <FormHelperText>If amount is greater than 50 it will reset to 50</FormHelperText>
              </FormControl>
            
              <FormControl className={classes.formControl}>
                <InputLabel id="category-native-helper" className={classes.inputControl}>Category</InputLabel>
                  <Select
                    className={classes.inputControl}
                      value={quiz.category}
                      onChange={handleChange}
                      inputProps={{
                        name: 'category',
                        id: 'category-native-helper',
                      }}
                  >
                    <MenuItem value="gk" className={classes.menuControl}>General Knoweledge</MenuItem>
                    <MenuItem value="books" className={classes.menuControl}>Entertainment: Books</MenuItem>
                    <MenuItem value="film" className={classes.menuControl}>Entertainment: Film</MenuItem>
                    <MenuItem value="music" className={classes.menuControl}>Entertainment: Music</MenuItem>
                    <MenuItem value="musicaltheatres" className={classes.menuControl}>Entertainment: Musicals And Theatres</MenuItem>
                    <MenuItem value="television" className={classes.menuControl}>Entertainment: Television</MenuItem>
                  </Select>
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
                <InputLabel id="difficulty-native-helper" className={classes.inputControl}>Difficulty</InputLabel>
                  <Select
                    className={classes.inputControl}
                    inputProps={{
                      name: 'difficulty',
                      id: 'difficulty-native-helper',
                    }}
                      value={quiz.difficulty}
                      onChange={handleChange}
                  >
                      <MenuItem value="easy" className={classes.menuControl}>Easy</MenuItem>
                      <MenuItem value="medium" className={classes.menuControl}>Medium</MenuItem>
                      <MenuItem value="hard" className={classes.menuControl}>Hard</MenuItem>
                  </Select>
              </FormControl>
            
              <FormControl className={classes.formControl}>
                <InputLabel id="type-native-helper" className={classes.inputControl}>Type</InputLabel>
                <Select
                  className={classes.inputControl}
                    inputProps={{
                      name: 'type',
                      id: 'type-native-helper',
                    }}
                    value={quiz.type}
                    onChange={handleChange}
                >
                    <MenuItem value="multiple" className={classes.menuControl}>Multiple</MenuItem>
                    <MenuItem value="boolean" className={classes.menuControl}>True/False</MenuItem>
                </Select>
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
                <InputLabel id="minute-native-helper" className={classes.inputControl}>Minute</InputLabel>
                    <Input
                    className={classes.inputControl}
                  inputProps={{
                    name: 'minute',
                    id: 'minute-native-helper',
                  }}
                  type="number"
                  value={quiz.minute}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="second-native-helper" className={classes.inputControl}>Second</InputLabel>
                    <Input
                    className={classes.inputControl}
                  inputProps={{
                    name: 'second',
                    id: 'second-native-helper',
                  }}
                  type="number"
                  value={quiz.second}
                  onChange={handleChange}
                />
              </FormControl>
              <br/>
              <ColorButton variant="contained" color="primary" className={classes.margin} onClick={HandleSubmit}>
                Start Quiz
              </ColorButton>
            
            </div>
            
      </main>
}

export default Main
