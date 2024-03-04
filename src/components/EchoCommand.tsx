import { REPLFunction } from "./REPL";

/**
 * test function for practice, to be used as a stencil for other classes
 * 
 * 
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.
*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/

// Implement the echo function
// export function EchoCommand(args: string[]): string|string[][] {
   
//     return args.join(" ");; //  return the input array of strings
// }

export const EchoCommand: REPLFunction = (args: Array<string>): string => {
    return (
        args.join(" ")
    );
}


