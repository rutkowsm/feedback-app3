import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Feedback should contain at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    return (
        <div>
        <Card>
            <form>
                <h2>How would you rate our service?</h2>
                {/*rating select component*/}
                <div className='input-group'>
                    <input onChange={handleTextChange} type='text' placeholder='Write a review...'
                    value={text}/>
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
        </div>
  )
}

export default FeedbackForm
