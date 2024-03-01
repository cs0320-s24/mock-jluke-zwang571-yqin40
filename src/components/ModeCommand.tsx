import { REPLFunction } from "./REPL";


/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/


export const ModeCommand: REPLFunction = (args: Array<string>): string => {
  if (args.length === 0) {
    return "Error: No mode specified";
  }
  if (args[0]==="brief"){
    return "Switched to brief mode";
  }else if (args[0]==="verbose"){
    return "Switched to verbose mode";
  }else{
    return "Error: Invalid mode";
  }
  
}