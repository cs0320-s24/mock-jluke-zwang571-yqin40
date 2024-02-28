import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';
import { REPLResult } from "./REPL";

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[]
    // newREPLResult: REPLResult;
    listOfREPLResults: REPLResult[];
    // setListOfREPLResults: Dispatch<SetStateAction<REPLResult[]>>
    
}
export function REPLHistory(props : REPLHistoryProps) {


    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {props.history.map((command, index) =>
            <p> evaluated {command} </p>)}

        </div>
    );
}