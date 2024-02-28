import { REPLFunction } from "./REPL";


/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/


export const ModeCommand: REPLFunction = (args: Array<string>): string => {
  return (
      "mode command called."
      //write help menu here
  )
}