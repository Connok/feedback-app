import { useState } from "react"
import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"


const App = () => {

    const [feedBack, setFeedBack] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedBack} />
            </div>
        </>
    )
}

export default App