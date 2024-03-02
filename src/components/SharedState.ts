import { useState } from "react";
import { REPLFunction } from "./REPL";
import { mockedData, csvMap, mockSearchMap, mockQueryMap } from '../../data/mocked_data/mocked_data';
import { EchoCommand } from "./EchoCommand";


export class SharedState {
    private displayMode: string;
    private loadedData: string[][];
    private filepath: string;
    private functionMap: Map<string, any>;

   
    constructor() {
            this.displayMode = "brief";
            this.loadedData = [[]];
            this.filepath ="" ;
            this.functionMap = new Map<string, any>(); // Initialize functionMap with an empty Map object
            //funcitons
            this.functionMap.set("mode", this.modeCommand);
            this.functionMap.set("load", this.LoadFileCommand);
            this.functionMap.set("view", this.ViewCommand);
            this.functionMap.set("search", this.SearchCommand);
            this.functionMap.set("echo", EchoCommand)
    }

    public getFunctionMap = () => {
        return this.functionMap;
    }
    public getDisplayMode = () => {
        return this.displayMode;
    }
    public modeCommand = (args: Array<string>): string => {
        if (this.displayMode==="brief"){
            this.displayMode = "verbose";
            return "Switched to verbose mode";
        }else{
            this.displayMode = "brief";
            return "Switched to brief mode";
        }
    }

    public LoadFileCommand: REPLFunction = (args: Array<string>): string|string[][] => {
        const data = csvMap.get(args[0]);
        if (data) {
            this.filepath = args[0];
            this.loadedData = data;
            return `File <${args[0]}> loaded Successfully`;
        } else {
            this.filepath = "";
            return `Error: No data found for ${args[0]}`; 
        }
    }

    public ViewCommand: REPLFunction = (args: Array<string>): string|string[][] => {
        if (this.filepath!=="") {
            return this.loadedData;
        } else {
            return "Error: No data loaded";
        }
    }

    public SearchCommand: REPLFunction = (args: Array<string>): string|string[][] => {
        const data = mockSearchMap.get(this.filepath);
        
        if (this.filepath=="") {
            return "Error: No data loaded";
        } else {

            if (args.includes('-q')) {
                const argsNoFlags: string[] = args.filter((element) => !("-q"));
                const queryString = argsNoFlags[0];
                if (argsNoFlags.length > 1) {
                    return "Error: bad query";
                } 
                const queryMap = mockQueryMap.get(args[0]);
                const output = queryMap.get(argsNoFlags[0]);
                if (output) {
                    return output
                } else {
                    return "No rows found for query <${args[0]}> "
                }
            } else {
                if (args.length < 1) {
                    return "Error: no search value specified "
                }
                if (args.length > 2) {
                    return "Error: too many args"
                }

                const searchMap = mockSearchMap.get(args[0]);
                const output = searchMap.get(args[0]);
                if (output) {
                    return output
                } else {
                    return "No rows found for search <${args[0]}> "
                }   
            }         
        }
    }
    private registerFunction = (command: string, func: any) => {
        this.functionMap.set(command, func);
    }

}


