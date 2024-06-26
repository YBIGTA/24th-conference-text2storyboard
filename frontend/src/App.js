import React from 'react'; // Import the React library
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the BrowserRouter, Route, and Routes components
import HomePage from './components/HomePage'; // Import the HomePage component
import InputPage from './components/InputPage'; // Import the InputPage component

const App = () => { // Create a functional component named App
    return (
        <Router> 
            <div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} /> 
                    <Route path="/input" element={<InputPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;