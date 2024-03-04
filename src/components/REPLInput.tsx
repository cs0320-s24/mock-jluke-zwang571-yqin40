/**
 * Represents the REPL input component.
 * 
 * @component
 * @example
 
 **/
import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { REPLResult } from './REPL';
import { SharedState } from './SharedState';


  // Directly compose the StateMap with the initialized state entries


const sharedStateInstance = new SharedState();

export interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  loadFileName: string;  
  setLoadFileName: Dispatch<SetStateAction<string>>;  
  commandString: string;
  setCommandString: Dispatch<SetStateAction<string>>
  index: number;
  setIndex: Dispatch<SetStateAction<number>>
  displayMode: string;
  setDisplayMode: Dispatch<SetStateAction<string>>;
  listOfREPLResults: REPLResult[];
  setListOfREPLResults: Dispatch<SetStateAction<REPLResult[]>>;
}

export function REPLInput(props : REPLInputProps) {
    function handleSubmit() { 
      const keyword = props.commandString.split(' ')[0];
      const args = props.commandString.split(' ').slice(1);
      let output;
      const functionMap = sharedStateInstance.getFunctionMap();
      // console.log("Loaded File Name:",stateMap['loadFileName'].value);
      if (functionMap.has(keyword)) {
        output = functionMap.get(keyword)(args);
        props.setDisplayMode(sharedStateInstance.getDisplayMode());
      } else {
        output = 'ERROR: Unknown command';
      }
      const newREPLResult = { 
        commandString: props.commandString, 
        output: output, // Use the output obtained from executing the command
        index: props.index
      };
      props.setListOfREPLResults([...props.listOfREPLResults, newREPLResult])
    }
    return (
      <div className="repl-input">
          <fieldset>
            <legend>Enter a command:</legend>
            <ControlledInput value={props.commandString} setValue={props.setCommandString} ariaLabel={"Command input"}/>
          </fieldset>
          <button onClick = {handleSubmit} aria-label="Submit">
          Submit  </button>
      </div>
    );
  }   