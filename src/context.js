import axios from 'axios'
import React, { useState, useContext } from 'react';

const table = {
   gk:9,
  books:10,
  film:11,
  music:12,
  musicaltheatres:13,
  television:14
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [correct, setCorrect] = useState(0)
  const [modal, setModal] = useState(false)
  const [error, setError] = useState(false)
  const [index, setIndex] = useState(0)
  const [isActive, setIsActive] = useState(false);
  const [toggleModal,setToggleModal]=useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'gk',
    difficulty: 'easy',
    type:'multiple',
    minute:0,
    second:5,
  })
 
  const fetchQuestions = async (url) => {
   
   
      setLoading(true)
      setWaiting(false)
   
    
    try {
      const response = await axios.get(url)
      if (response) {
        const data = response.data.results
        if (data.length > 0) {
          setQuestions(data)
          setWaiting(false)
          setLoading(false)
          setError(false)
        }
        
      } else {
        setWaiting(true)
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  //const sec=quiz.hour+quiz.minute+quiz.second;
  
  const nextQuestion = () => {
    if (index >= questions.length - 1) {
      setToggleModal(false);
      openModal()
      
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const backQuestion = () => {
    if (index-1 <= -1) {
      setIndex(questions.length-2)
    } else {
      setIndex(index - 1)
    }
  }
  const checkAnswer = value => {
    if (value) setCorrect(correct + 1)
    nextQuestion()
  }

  const openModal = () => {
    setModal(true)
  }
  const openError = () => {
    setLoading(false);
      setWaiting(false)
      setModal(false);
      setError(true);
  }
  const closeModal = () => {
    setModal(false)
    setLoading(false);
    setWaiting(true)
    setCorrect(0)
  }


  const HandleSubmit = e => {
    e.preventDefault()
    if(quiz.amount>50)
    { 
      openError();
    }
    const url = `${API_ENDPOINT}amount=${quiz.amount}&difficulty=${quiz.difficulty}&category=${table[quiz.category]}&type=${quiz.type}`
    fetchQuestions(url)
    setIsActive(!isActive)
  }

  return <AppContext.Provider value={{
    loading,
    waiting,
    error,
    modal,
    index,
    questions,
    correct,
    setModal,
    setWaiting,
    setError,
    setLoading,
    nextQuestion,
    backQuestion,
    checkAnswer,
    closeModal,
    openModal,
    openError,
    isActive,
    setIsActive,
    quiz,
    setQuiz,
    toggleModal,
    setToggleModal,

    HandleSubmit
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
