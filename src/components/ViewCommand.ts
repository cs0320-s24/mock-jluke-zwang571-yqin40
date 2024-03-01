/**
 * Retrieves data from the csvMap based on the provided argument.
 * 
 * @param args - An array of strings representing the command arguments.
 * @returns The data associated with the provided argument if found, otherwise an error message.
 */
import {is_loaded, csvMap} from '../../data/mocked_data/mocked_data';
import { REPLFunction } from './REPL';  


export const ViewCommand: REPLFunction = (args: Array<string>): string|string[][] => {
    if (csvMap.has(args[0])) {
      return csvMap.get(args[0]);
    } else {
      return "Error: No data loaded";
    }
  }