import { mockedData, csvMap } from '../../data/mocked_data/mocked_data';
import { REPLFunction } from './REPL';
export const LoadFileCommand: REPLFunction = (args: Array<string>): string|string[][] => {
  const data = csvMap.get(args[0]);
  if (data) {
    return args[0];
  } else {
    return `Error: No data found for ${args[0]}`; 
  }
}

