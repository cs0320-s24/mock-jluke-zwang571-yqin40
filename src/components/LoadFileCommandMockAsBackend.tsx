import Papa from 'papaparse';
import { Dispatch, SetStateAction } from 'react';

/**
 * Loads a CSV file from the specified file path and processes it using PapaParse library.
 * @param filePath - The path to the CSV file.
 * @param setLoadedData - A state setter function to update the loaded data.
 * @param setHistory - A state setter function to update the command history.
 */
export const loadCSVFileMockAsBackend = (
  filePath: string,
  setLoadedData: Dispatch<SetStateAction<string>>,
  setHistory: Dispatch<SetStateAction<string[]>>
) => {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(csvData => {
      Papa.parse(csvData, {
        complete: (results) => {
          const data = results.data as any[][];
          const htmlTable = convertToHTMLTable(data);
          setLoadedData(htmlTable);
          setHistory((prevHistory: string[]) => [...prevHistory, `Command: load_file ${filePath}`, 'Output: Load successful']);
        }
      });
    })
    .catch(error => {
      console.error('Error loading or parsing CSV file:', error);
      setHistory((prevHistory: string[]) => [...prevHistory, `Command: load_file ${filePath}`, `Output: Error - ${error.message}`]);
    });
};

/**
 * Converts a 2D array of data into an HTML table.
 * @param data - The 2D array of data to convert.
 * @returns The HTML representation of the data as a table.
 */
const convertToHTMLTable = (data: (string | number)[][]): string => {
  let html = '<table>';
  data.forEach((row: (string | number)[]) => {
    html += '<tr>';
    row.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });
  html += '</table>';
  return html;
};

  
  