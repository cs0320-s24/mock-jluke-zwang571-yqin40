import {is_loaded, csvMap} from '../../data/mocked_data/mocked_data';
import { REPLFunction } from './REPL';  

export const ViewCommand: REPLFunction = (args: Array<string>): string|string[][] => {
    if (csvMap.has(args[0])) {
      return csvMap.get(args[0]);
    } else {
      return "Error: No data loaded";
    }
  }