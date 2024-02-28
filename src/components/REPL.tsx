

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

//imports
import { useState} from 'react';

import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';
//list of commands to import
import {EchoCommand} from './EchoCommand';
import {ModeCommand} from './ModeCommand';
import {SearchCommand} from './SearchCommand';
import {ViewCommand} from './ViewCommand';
import {LoadCommand} from './LoadFileCommand';


/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when 
 * the command is done executing.
 * 
 * The arguments passed in the input (which need not be named "args") should 
 * *NOT* contain the command-name prefix.
 */
export interface REPLFunction {    
  (args: Array<string>): string|string[][]
}


const exitCommand: REPLFunction = (args: Array<string>): string => {
  process.exit(0);
  return "";
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

export interface REPLResult{
  commandString: string
  output: string|string[][];  
  index: number;
  
}  

export default function REPL() {

  //states
  const [commandString, setCommandString] = useState<string>('');
  const [output, setOutput] = useState<string[][]|string>('');
  const [index, setIndex] = useState<number>(0);
  const [listOfREPLResults, setListOfREPLResults] = useState<REPLResult[]>([]);
  const [displayMode, setDisplayMode] = useState<string>('brief');
  // TODO: Add some kind of shared state that holds all the commands submitted.
  // old states
  const [loadedData, setLoadedData] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);


  // commmand 
  const keyword = commandString[0];
  const args = commandString.split(' ').slice(1);
  if (keyword === 'mode') {
    const newMode =displayMode === 'brief' ? 'verbose' : 'brief';
    setDisplayMode(newMode);
    setOutput(commands[keyword]([displayMode]));
    const newREPLResult = {commandString, output, index};
    setListOfREPLResults([...listOfREPLResults, newREPLResult])
  }
  if (commands.hasOwnProperty(keyword)) {
    setOutput(commands[keyword](args));
} else {
    setOutput('ERROR: Unknown command');
}


  // make new REPLResult
  const newREPLResult = {commandString, output, index};
  setListOfREPLResults([...listOfREPLResults, newREPLResult], )


  return (

    <div className="repl">  
      {/*This is where your REPLHistory might go... You also may choose to add it within your REPLInput 
      component or somewhere else depending on your component organization. What are the pros and cons of each? */}
      {/* TODO: Update your REPLHistory and REPLInput to take in new shared state as props */}
      

      <REPLHistory 
        history={history} 
        listOfREPLResults={listOfREPLResults}
        displayMode={displayMode}
      />

      <hr></hr>
      <REPLInput 
        commandString = {commandString} setCommandString = {setCommandString} 
        index = {index} setIndex= {setIndex}
        history={history} setHistory={setHistory} 
        loadedData={loadedData} setLoadedData={setLoadedData} 
      />
    </div>
  );
}
