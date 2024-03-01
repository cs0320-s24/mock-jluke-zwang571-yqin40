import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { loadCSVFile } from './LoadFileCommand';
import { viewLoadedData } from './ViewCommand';
import {EchoCommand} from './EchoCommand';
import {ModeCommand} from './ModeCommand';
import {SearchCommand} from './SearchCommand';
import {ViewCommand} from './ViewCommand';
import {LoadCommand} from './LoadFileCommand';
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
  'view': ViewCommand,
  'load': LoadCommand
};
 

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  loadedData: string;  
  setLoadedData: Dispatch<SetStateAction<string>>;  
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
<<<<<<< HEAD
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // TODO WITH TA : add a count state
    const [count, setCount] = useState<number>(0);

    // TODO WITH TA: build a handleSubmit function called in button onClick
    const handleClick = () => {
      setCount(count + 1);
    };
  
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.

    function handleSubmit() {

      const commandParts = commandString.split(' ');
      if (commandParts[0] === 'load_file') {
        const filePath = commandParts.slice(1).join(' ');
        LoadFileCommand(filePath);
        // props.setHistory([...props.history, `Command: ${commandString}`]);
      } else if (commandParts[0] === 'view') {
        ViewCommand();
      } else {
        props.setHistory([...props.history, commandString]);
=======
    function handleSubmit() { 
      const keyword = props.commandString.split(' ')[0];
      const args = props.commandString.split(' ').slice(1);
      let output;
      if (keyword === 'mode') {
        const newMode =props.displayMode === 'brief' ? 'verbose' : 'brief';
        props.setDisplayMode(newMode);
        output = commands[keyword]([newMode]);
>>>>>>> 441dfbe91c29a05cd203b8b0d0346a172f5a787c
      }
      else if (commands.hasOwnProperty(keyword)) {
        output = commands[keyword](args);       
      } else {
        output='ERROR: Unknown command';
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