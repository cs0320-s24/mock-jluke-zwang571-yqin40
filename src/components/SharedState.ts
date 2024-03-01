import { useState } from "react";


export class SharedState {
    private displayMode: string;
    private loadedData: string | string[][];
    private filepaths: string[];

    constructor(displayMode: string) {
        this.displayMode = displayMode;
        this.loadedData = "";
        this.filepaths = []; 
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
}


