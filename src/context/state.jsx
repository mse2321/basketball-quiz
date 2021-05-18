
import React, { useState, useContext, createContext } from "react";
import quizQuestions from '../data/questions.json';

const StateContext = createContext();

const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(quizQuestions.questions[0]);
    const [questions] = useState(quizQuestions);

    const defaultContext = {
        questions,
        currentQuestion,
        setCurrentQuestion
    };

    return (
        <StateContext.Provider value={defaultContext}>
            { children }
        </StateContext.Provider>
    )
};

export { StateProvider, useStateContext };
