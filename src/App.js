import React from 'react'
import { useGlobalContext } from './context'
import Layout from './Layout';
import Main from './Main'
import Loading from './Components/Loading/Loading'
import Modal from './Components/Modal/Modal'
import Quiz from "./Components/Quiz/Quiz";
import Error from './Components/Error/Error';
import "./App.css"
function App() {

  //using globalcontext
  const { waiting, loading,modal,error } = useGlobalContext()
  
  if (waiting) return <Main />
  if (loading) return <Loading />
  if(error) return <Error/>

  return (
  <Layout className="App">
    {loading && <Loading />}
    {waiting && (
      <Main />
    )}
    {modal &&  (
      <Modal/>
    )}
    {error && <Error/>}
    {!loading && !waiting && !modal && !error &&(
      <Quiz/>
    )}
  </Layout> 
)
}
export default App
