import { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialState) => {
    const [state, setState] = useState(initialState);

    const toggleFlip = () => {
        setState(state => !state)
    }


    return [ state, toggleFlip ]
}

// JMT: useAxios can accept a param 
const useAxios = (baseURL) => {
    console.log(baseURL)
    const [state, setState] = useState([]);

    /**
     * JMT: 
     * in PlayingCardList, handleClick => addCard
     * in PokeDex, handleClick -> addPokemon
     * 
     * handleClick will take an optional param
     */
    const handleClick = async (additionalArg) => {
        /**
         * JMT: our final url will be our base URL plus any params added (if any)
         * 
         * param = PokeDex -> a pokemon, PlayingCardList -> the evt object (since no param is passed)
         * 
         * if we get passed a string, we add it to our baseURL, if we get the evt object, we just use the baseURL
         */
        const url = typeof(additionalArg) === "string" ? baseURL + additionalArg : baseURL
        console.log(url)
        const response = await axios.get(url);
        setState(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    return [ state, handleClick ]
}


export { useFlip, useAxios };