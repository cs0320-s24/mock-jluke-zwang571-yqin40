/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/
import { Dispatch, SetStateAction } from 'react';

export const viewLoadedData = (loadedData: string, setHistory: Dispatch<SetStateAction<string[]>>) => {
    // 直接将之前加载的 HTML 表格添加到历史记录中
    setHistory(prevHistory => [...prevHistory, `Command: view`, `Output: ${loadedData}`]);
  };