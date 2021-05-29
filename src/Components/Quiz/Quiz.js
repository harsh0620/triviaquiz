import React from 'react'
import { useGlobalContext } from '../../context'
import Timer from '../../Timer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Quiz.css';
function Quiz() {
    const {questions, index, correct, nextQuestion,backQuestion, checkAnswer } = useGlobalContext()
    const { question, incorrect_answers, correct_answer } = questions[index]
    const answers = [...incorrect_answers]
    let tempIndex = Math.floor(Math.random() * 4)

    if (tempIndex === 3) answers.push(correct_answer)
    else {
        answers.push(answers[tempIndex])
        answers[tempIndex] = correct_answer
    }
    return (
<div className="AppQuiz">
    <div className="header">
        <div className="row container">
            <div className="col-4"> 
            <img src="/board.png" alt="board" className="board"></img>
                <h3  className="timer">Correct answers:<br/> {correct}/{index+1}</h3>
            </div>
            <div className="col-4"> 
                <h1 className="welcome">Welcome to the Quiz Arena</h1>
            </div>      
            <div className="col-4"> 
            <img src="/board.png" alt="board" className="board"></img><h3 className="timer">Time Remaining <Timer/></h3>
                
            </div>
        </div>
    </div>


      
        <div className="QuizDiv">
            <div className="container">
                <div className="row">
                <div className="col arrow" onClick={backQuestion}><ArrowBackIosIcon  style={{ fontSize: 70 }}/></div>
                   
                    <div className="col-4 Quiz"> <h2 className="Quizh">{question}</h2></div>
                    <div className="col-4">
                        
                        
                        <div className="btn-container">
                    {answers.map((answer, index) => {
                        return (  
                            <>
                            <button className="answer-btn" key={index} dangerouslySetInnerHTML={{ __html: answer }} onClick={() => checkAnswer(correct_answer === answer)} />
                        <br/>
                            </>
                        
                        )
                        
                    })}
                    </div>  
                    </div>
                <div className="col arrow" onClick={nextQuestion}><ArrowForwardIosIcon  style={{ fontSize: 70 }} /></div>
                </div>
                   
                  
                
                   
            </div>
           
           
        </div>
         </div>
    )
}

export default Quiz
