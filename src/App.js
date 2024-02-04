import { v4 as uuidv4} from 'uuid'
import { useState } from "react"
import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats.jsx"
import FeedbackForm from "./components/FeedbackForm.jsx";


const App = () => {

const [feedBack, setFeedBack] = useState(FeedbackData)

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
setFeedBack([newFeedback,...feedBack])
}

const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
        setFeedBack(feedBack.filter((item) => item.id !== id ))
    }
    
} 

    return (
        <>
            <Header />
            
            <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedBack} />
                <FeedbackList feedback={feedBack} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App