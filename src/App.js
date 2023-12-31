import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import React, { createElement } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from './pages/About'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete the feedback? ')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback}
                            handleDelete={deleteFeedback}/>
                        </>
                    }>
                        
                    </Route>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App

