/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/
import { Dispatch, SetStateAction } from 'react';

export const viewLoadedDataAsBackend = (loadedData: string, setHistory: Dispatch<SetStateAction<string[]>>) => {
    setHistory(prevHistory => [...prevHistory, `Command: view`, `Output: ${loadedData}`]);
  };