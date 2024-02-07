import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedBack] = useState([])

    const [feedbackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback();
    }, [])

    // fetch feedback
const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id`)
    const data = await response.json()

    setFeedBack(data)
    setIsLoading(false)
}

// delete feedback item
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            setFeedBack(feedback.filter((item) => item.id !== id ))
        }
        
    } 
//add new feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
    setFeedBack([newFeedback,...feedback])
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedBack(
            feedback.map((item) => (item.id === id ? {...item, ...updItem } : item))
        )
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,

        updateFeedback,
    }}>
        {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext