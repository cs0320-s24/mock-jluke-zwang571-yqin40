import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { loadCSVFile } from './LoadFileCommand';
import { viewLoadedData } from './ViewCommand';

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  history: string[]
  setHistory: Dispatch<SetStateAction<string[]>>
  loadedData: string;  
  setLoadedData: Dispatch<SetStateAction<string>>;  
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // TODO WITH TA : add a count state
    const [count, setCount] = useState<number>(0);

    // TODO WITH TA: build a handleSubmit function called in button onClick
    const handleClick = () => {
      setCount(count + 1);
    };
  
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.

    function handleSubmit() {
      const commandParts = commandString.split(' ');
      if (commandParts[0] === 'load_file') {
        const filePath = commandParts.slice(1).join(' ');
        loadCSVFile(filePath, props.setLoadedData, props.setHistory);
        // 将 load_file 命令和文件路径添加到历史记录中
        // props.setHistory([...props.history, `Command: ${commandString}`]);
      } else if (commandParts[0] === 'view') {
        viewLoadedData(props.loadedData, props.setHistory);
      } else {
        props.setHistory([...props.history, commandString]);
      }
      setCommandString(''); // 重置命令字符串
    }
    
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button onClick = {handleSubmit}>
            Submit {count} </button>
        </div>
    );
  }