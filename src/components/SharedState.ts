import { useState } from "react";
import { REPLFunction } from "./REPL";
import { mockedData, csvMap } from '../../data/mocked_data/mocked_data';


export class SharedState {
    private displayMode: string;
    private loadedData: string | string[][];
    private filepath: string;
    private functionMap: Map<string, any>;

   
    constructor() {
            this.displayMode = "brief";
            this.loadedData = "";
            this.filepath ="" ;
            this.functionMap = new Map<string, any>(); // Initialize functionMap with an empty Map object
            this.functionMap.set("mode", this.modeCommand);
            this.functionMap.set("load", this.LoadFileCommand);
            this.functionMap.set("view", this.ViewCommand);
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

    private registerFunction = (command: string, func: any) => {
        this.functionMap.set(command, func);
    }

}


