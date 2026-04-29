import GAME_WORDS from "../constants/gameWords.constant";
import scrambleWord from "../helper/scrambleWordHelper";
import shuffleArray from "../helper/shuffleArrayHelper";



export interface ScrambleWordState {
    words: string[];
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
    totalWords: number;
}



export const getInitialState = (): ScrambleWordState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]);
    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: [...shuffledWords],
        totalWords: shuffledWords.length
    }
}

export type ScrambleWordsAction =
    | { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'SKIP_WORD' }
    | { type: 'START_NEW_GAME', payload: ScrambleWordState };

export const scrambleWordsReducer = (
    state: ScrambleWordState, 
    action: ScrambleWordsAction
) : ScrambleWordState => {
    switch (action.type) {
        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase()
            }
        case 'CHECK_ANSWER': 
            
            if(state.currentWord === state.guess){
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0])
                }
            }
            return {
                ...state,
                guess: '',
                errorCounter: state.errorCounter + 1,
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors  
            }
        case 'SKIP_WORD': 
            if(state.skipCounter === state.maxSkips)return state;
            const updatedWords = state.words.slice(1);
            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
                currentWord: updatedWords[0],
                scrambledWord: scrambleWord(updatedWords[0]),
                guess: ''
            }
        case 'START_NEW_GAME':
            return action.payload;
        default:
            return state;
    }
}