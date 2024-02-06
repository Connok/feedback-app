import { v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import FeedbackData from "./data/FeedbackData.js";
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats.jsx"
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from './components/pages/AboutPage.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';
import AboutIconLink from './components/AboutIconLink.jsx';


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
        <FeedbackProvider>
        <Router>
            <Header />
            
            <div className='container'>
                <Routes>
                <Route exact path='/' element= {
                    <>
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats  />
                    <FeedbackList  handleDelete={deleteFeedback} />
                    </>
                }>
                 
                </Route>
               
                <Route path='/about' element={<AboutPage />} />
                 </Routes>
                 <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App