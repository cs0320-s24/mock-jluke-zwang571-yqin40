> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details


# Design Choices

The top level component App contains the REPL component and the LoginButton component. The LoginButton controls whether the REPL component is available to the user. The REPL component contains the REPLInput and REPLHistory components.REPLInput contains the HTML elements that allow the user to input and submit text.

REPLInput contains the following states:
  * loadedData: string| string[][];  
  * commandString: string; --this is the user input 
  * index: number; -- this is an id for the order of the commmand/output pairs
  * displayMode: string; -- brief or verbose
  * listOfREPLResults: REPLResult[]; -- list of interface REPLResult, which holds the commandString, output, and index of a submitted user input. 

REPLInput also contains a map to the available commands by keyword, which is the first word in the commandString. If a developer wanted to add more commands, they would add their function and its given keyword to this map. All functions must follow the interface REPLFunction, which takes in an input of an array of strings args[] and outputs either a string or a 2D array of strings (string[][]). For example, EchoCommand is a sample function that simply echoes back the command and can be used as a template for other functions.  

const commands: { [key: string]: REPLFunction } = {
  // some tester functions
  'echo': EchoCommand, //echoes the command
  'exit': exitCommand, //exits the program
  'help': helpCommand, //shows a help menu

  // required commands for mock
  'mode': ModeCommand, //switches between brief and verbose display modes
  'search': SearchCommand, //performs a search in a loaded csv file for a given  value or query (if file is loaded)
  'view': ViewCommand, //returns the loaded csv file (if file is loaded)
  'load': LoadFileCommand //loads a csv file from a given filepath
};

After the REPLFunction is called from the map, a new REPLResult is created with the new commandString, output, and index and appended onto the ListOfREPLResult. ListOfREPLResult is then updated in REPLHistory, which displays the contents according to the given displayMode (brief/verbose). 

# Errors/Bugs

# Tests

## Unit Testing
There are tests for the basic functionality of the load, search, and view commands, which are implemented using the mock data. Additionally, there are some basic tests for the mode command, although these unit tests do not test the visual output change in the REPL history. 

## End to End Testing

# How to
To run Mock, make sure you have the following packaging 
`npm install` — Installs node_modules folder for dependencies
`npx playwright install` — Installs everything needed to run PlayWright

Then, run 'npm start' to start the local server at a given port, and follow the link provided. A successful launch should look like:
    > vite
    VITE v4.5.2  ready in 181 ms

    ➜  Local:   http://localhost:8000/
    ➜  Network: use --host to expose
    ➜  press h to show help


# Collaboration
*(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)*

ChatGPT was used to provide examples and explanations of certian blocks of code. However, all code was reviewed and modified by us before integrating it into this project. 
