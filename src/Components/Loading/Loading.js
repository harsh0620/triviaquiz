import React from 'react'
import "./Loading.css";
import { useGlobalContext } from '../../context'
const Loading = () => {
  const {closeModal } = useGlobalContext()
  return (
    <main>
      <div className='loading'></div>
      <div  className="loading-content">
        <h1>If it takes longer time than click here</h1>
        <div onClick={closeModal} className="click"><h1>Click</h1></div>
      </div>
    </main>
  )
}

export default Loading
