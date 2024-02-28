import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';
import { REPLResult } from "./REPL";

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[]
    // newREPLResult: REPLResult;
    listOfREPLResults: REPLResult[]
    displayMode: string
    // setListOfREPLResults: Dispatch<SetStateAction<REPLResult[]>>
    
}
export function REPLHistory(props : REPLHistoryProps) {


    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {props.listOfREPLResults.map((result, index) => {
                if(props.displayMode === 'verbose'){
                    return <p key={index}>{result.commandString}</p>
                }
                if(Array.isArray(result.output)){
                    return (<table key={index}>
                        <tbody>
                            {result.output.map((subResult, subIndex) => {
                                return (
                                    <tr key={subIndex}>
                                        <td>{subResult}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>)
                }
                else{
                    return <p key={index}>{result.output}</p>
                }
            }
            )}
        </div>
    );
}