import { REPLFunction } from './REPL';

/**
* A command-processor function for our REPL. The function returns a string, which is the value
to print to history when
* the command is done executing.


*
* The arguments passed in the input (which need not be named "args") should * *NOT* contain the command-name prefix.
*/


/*
Real-estate appraiser: "As a user of your webapp, after I load a 
CSV file's contents (but possibly without ever using the view 
command), I can enter search <column> <value> in the command 
prompt to see the rows of the CSV where <value> is present in 
<column>.”

Acceptance criteria: <column> may be either an index or a column 
name (if one is present). Your app must support both indexes and 
column names, but not both at the same time—unless you are a 1340
student; in which case, see below.

For Mock, you must support and test this functionality 
(with mocks!) in your TypeScript app as well. 
The exact form of the search commands is up to you, but nesting 
‘not’, ‘and’, and ‘or’ should all be supported. 
You do not need to actually perform search queries 
(since that will be handled by your backend Java code in the
next front-end sprint). Rather, focus on making that future 
integration easier by mocking the functionality.

Again, you may display rows in whatever reasonable format you wish,
but ensure readability. An HTML table would be appropriate, and 
might be more structured (and thus easier to test) than a carefully 
formatted raw string.

*/

/**
 * 
 * @param args 
 * @returns 
 */

// this would come from the back end
const tenStarMockData = [
    ["StarID","ProperName","X","Y","Z"],
    ["0","Sol","0","0","0"],
    ["1","","282.43485","0.00449","5.36884"],
    ["2","","43.04329","0.00285","-15.24144"],
    ["3","","277.11358","0.02422","223.27753"]


]

// Implement the search function
// export function SearchCommand(args: string[]): string|string[][] {
//     // Call to backend goes here

//     //backend.search(args)
//     //returns error message or result
    
//     return tenStarMockData; //  return the input array of strings
// }


/**
 * 
 * @param args this is the arguments that would be fed into the command line interface to perform the search
 * it should be the user input with the first word ("search") removed
 * @returns string[][] of successful search data or error message
 */
export const SearchCommand: REPLFunction = (args: Array<string>): string|string[][] => {
    // 1) search for loaded file (in backend)
    
        // return error if no file is preloaded

    // 2) send the args to the (mock) backend, which will parse the args
        // look for query flag and ignoreCase flag


    // 3) print the results <-- received from (mock) backend
        // return error if not enough args

        // error if malformed query

        // message if no results found  
    return (
    
    tenStarMockData //  return the input array of strings
    );
  }
