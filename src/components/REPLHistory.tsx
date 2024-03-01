import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';
import { REPLResult } from "./REPL";

/**
 * Represents the props for the REPLHistory component.
 */
interface REPLHistoryProps {
  /**
   * An array of REPLResult objects representing the list of REPL results.
   */
  listOfREPLResults: REPLResult[];
  /**
   * The display mode for the REPL history.
   */
  displayMode: string;
}

/**
 * A component that displays the REPL history.
 * @param props The REPLHistoryProps object containing the component's props.
 * @returns The REPLHistory component.
 */
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.listOfREPLResults.map((result, index) => {
        const commandDisplay = (
          <p key={`${index}-command`}><strong>Command:</strong> {result.commandString}</p>
        );
        let outputDisplay;
        if (Array.isArray(result.output)) {
          outputDisplay = (
            <table key={`${index}-output`}>
              <tbody>
                {result.output.map((subResult, subIndex) => (
                  <tr key={`row-${subIndex}`}>
                    {subResult.map((subSubResult, subSubIndex) => (
                      <td key={`cell-${subIndex}-${subSubIndex}`}>
                        {subSubResult}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        } else {
          outputDisplay = <p key={`${index}-output`}><strong>Output:</strong> {result.output}</p>;
        }
        return (
          <div key={index}>
            {props.displayMode === 'verbose' && commandDisplay}
            {outputDisplay}
          </div>
        );
      })}
    </div>
  );
}