import React from 'react'
import { useState } from 'react' 

function FeedbackItem() {

    const [rating, setRating] = useState(7) 
    const [text, setText] = useState('Example of a feedback item') 

    const handleClick = () => {
        setRating(10)
    }

    return (
        <div className='card'>
            <div className="num-display">{rating}</div>
            <div className="text-display">Example of a feedback item</div>
            <button onClick={handleClick}></button>
        </div>
  )
}

export default FeedbackItem
