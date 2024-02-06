import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedBack] = useState([
        {
            id:1,
            text: 'This is from context',
            rating: 4,

        }
    ])

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedBack(feedback.filter((item) => item.id !== id ))
        }
        
    } 

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
    setFeedBack([newFeedback,...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext