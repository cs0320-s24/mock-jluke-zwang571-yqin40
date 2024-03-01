> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

The project is a mock gearup application. It consists of several components, including the App component, REPL component, LoginButton component, REPLInput component, and REPLHistory component.

The REPL component contains the REPLInput and REPLHistory components. The REPLInput component allows the user to input and submit text. It maintains several states, including loadedData, commandString, index, displayMode, and listOfREPLResults. The loadedData state stores the data loaded from a CSV file. The commandString state stores the user input. The index state is used as an ID for the order of the command/output pairs. The displayMode state determines whether the output is displayed in a brief or verbose mode. The listOfREPLResults state stores the submitted user inputs and their corresponding outputs.

After a command is executed, a new REPLResult object is created with the updated commandString, output, and index. The REPLResult is then appended to the listOfREPLResults. The REPLHistory component displays the contents of the listOfREPLResults according to the given displayMode.

The project also includes error handling and bug fixing. Unit tests are implemented for the basic functionality of the load, search, and view commands. End-to-end tests are constructed to ensure the correct display of elements and the generation of correct HTML output for different user commands.

To run the project, make sure to install the required dependencies by running `npm install` and `npx playwright install`. Then, start the local server by running `npm start` and follow the provided link.


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
One test suite is constructed to make sure that the elements are displayed correctly in the page. Another one is to test if different user commands will result in correct HTML output. The second one provide comphrehensive tests towards mode,load, view, search with respects towards error input and different combination of different commands.

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
