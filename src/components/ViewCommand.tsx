/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/
import { Dispatch, SetStateAction } from 'react';
import { REPLFunction } from './REPL';


export const viewLoadedData = (loadedData: string, setHistory: Dispatch<SetStateAction<string[]>>) => {
    // 直接将之前加载的 HTML 表格添加到历史记录中
    setHistory(prevHistory => [...prevHistory, `Command: view`, `Output: ${loadedData}`]);
  };

export const ViewCommand: REPLFunction = (args: Array<string>): string => {

  return (

    // 1) search for loaded file (using backend)
  
      // return error if no file is preloaded

    // 2) return loaded file as string [][]
  
      "Welcome to the help menu. These are the following commands:"
      //write help menu here
  )
}