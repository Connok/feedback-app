
import { useState } from "react"
import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"


const App = () => {

    const [feedBack, setFeedBack] = useState(FeedbackData)

const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
        setFeedBack(feedBack.filter((item) => item.id !== id ))
    }
    
} 

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedBack} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App