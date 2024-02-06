import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedBack] = useState([
        {
            id:1,
            text: 'This is feedback item 1',
            rating: 4,

        },
        {
            id:2,
            text: 'This is feedback item 2',
            rating: 2,

        },
        {
            id:3,
            text: 'This is feedback item 3',
            rating: 8,

        },
        {
            id:4,
            text: 'This is feedback item 4',
            rating: 9,

        },
        {
            id:5,
            text: 'This is feedback item 5',
            rating: 1,

        },
        {
            id:6,
            text: 'This is feedback item 6',
            rating: 7,

        },
    ])

    const [feedbackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })
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

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
    }}>
        {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext