

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

/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when 
 * the command is done executing.
 * 
 * The arguments passed in the input (which need not be named "args") should 
 * *NOT* contain the command-name prefix.
 */


export interface REPLResult{
  commandString: string
  output: string|string[][];  
  index: number;
} 
export interface REPLFunction {    
  (args: Array<string>): string|string[][]
}

export default function REPL() {

  //states
  const [commandString, setCommandString] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [listOfREPLResults, setListOfREPLResults] = useState<REPLResult[]>([]);
  const [displayMode, setDisplayMode] = useState<string>('brief');
  const [loadedData, setLoadedData] = useState<string>('');

  return (

    <div className="repl">  
      <REPLHistory 
        listOfREPLResults={listOfREPLResults}
        displayMode={displayMode}
      />

      <hr></hr>
      <REPLInput 
        commandString = {commandString} setCommandString = {setCommandString} 
        index = {index} setIndex= {setIndex}
        loadedData={loadedData} setLoadedData={setLoadedData}
        listOfREPLResults={listOfREPLResults} setListOfREPLResults={setListOfREPLResults}
        displayMode={displayMode} setDisplayMode={setDisplayMode}
      />
    </div>
  );
}
