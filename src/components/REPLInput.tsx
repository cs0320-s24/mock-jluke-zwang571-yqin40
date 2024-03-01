import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { LoadFileCommand } from './LoadFileCommand';
import { ViewCommand } from './ViewCommand';
import {EchoCommand} from './EchoCommand';
import {ModeCommand} from './ModeCommand';
import {SearchCommand} from './SearchCommand';
import { REPLResult } from './REPL';
import { REPLFunction } from './REPL';
const exitCommand: REPLFunction = (args: Array<string>): string => {
  process.exit(0);
}

const helpCommand: REPLFunction = (args: Array<string>): string => {
  return (
      "Welcome to the help menu. These are the following commands:"
      //write help menu here
  )
}


// List of command keywords and their functions
const commands: { [key: string]: REPLFunction } = {
  // some tester functions
  'echo': EchoCommand,
  'exit': exitCommand,
  'help': helpCommand,

  // required commands for mock
  'mode': ModeCommand,
  'search': SearchCommand, 
  'view': ViewCommand,// Fix: Update the type of 'view' command
  'load': LoadFileCommand
};
 

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  loadedData: string| string[][];  
  setLoadedData: Dispatch<SetStateAction<string|string[][]>>;  
  commandString: string;
  setCommandString: Dispatch<SetStateAction<string>>
  index: number;
  setIndex: Dispatch<SetStateAction<number>>
  displayMode: string;
  setDisplayMode: Dispatch<SetStateAction<string>>;
  listOfREPLResults: REPLResult[];
  setListOfREPLResults: Dispatch<SetStateAction<REPLResult[]>>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    function handleSubmit() { 
      const keyword = props.commandString.split(' ')[0];
      const args = props.commandString.split(' ').slice(1);
      let output;
      if (keyword === 'mode') {
        const newMode =props.displayMode === 'brief' ? 'verbose' : 'brief';
        props.setDisplayMode(newMode);
        output = commands[keyword]([newMode]);
      } else if (keyword === 'load') {
        const newLoadedData = commands[keyword](args);
        props.setLoadedData(newLoadedData);
        output = newLoadedData;
      } else if (keyword === 'view') {
        output = commands[keyword]([props.loadedData.toString()]);
      } else if (commands.hasOwnProperty(keyword)) {
        output = commands[keyword](args);
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
    
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={props.commandString} setValue={props.setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            <button onClick = {handleSubmit}>
            Submit  </button>
        </div>
    );
  }