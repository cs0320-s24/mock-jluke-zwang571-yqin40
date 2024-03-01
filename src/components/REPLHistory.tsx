import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';
import { REPLResult } from "./REPL";

interface REPLHistoryProps{
    listOfREPLResults: REPLResult[]
    displayMode: string
    
}
export function REPLHistory(props : REPLHistoryProps) {


    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {props.listOfREPLResults.map((result, index) => {
                const commandDisplay = (
                    <p key={`${index}-command`}><strong>Command:</strong> {result.commandString}</p>
                  );
                let outputDisplay;
                if(Array.isArray(result.output)){
                    outputDisplay = (
                        <table key={`${index}-output`}>
                          <tbody>
                          {result.output.map((subResult, subIndex) => (
                            // For each sub-array in the output, we create a row
                            <tr key={`row-${subIndex}`}>
                              {subResult.map((subSubResult, subSubIndex) => (
                                // For each element in the sub-array, we create a cell
                                <td key={`cell-${subIndex}-${subSubIndex}`}>
                                  {subSubResult}
                                </td>
                              ))}
                            </tr>
                          ))}
                          </tbody>
                        </table>
                      );
                }
                else{
                    outputDisplay = <p key={`${index}-output`}><strong>Output:</strong> {result.output}</p>;
                }
                return (
                    <div key={index}>
                      {props.displayMode === 'verbose' && commandDisplay}
                      {outputDisplay}
                    </div>
                  );
            }
            )}
        </div>
    );
}