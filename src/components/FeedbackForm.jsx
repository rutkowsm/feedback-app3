import React, {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
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
                    <Button type='submit'>
                        Send
                    </Button>
                </div>
            </form>
        </Card>
        </div>
  )
}

export default FeedbackForm
