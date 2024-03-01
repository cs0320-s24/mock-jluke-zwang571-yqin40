import Papa from 'papaparse';
import { Dispatch, SetStateAction } from 'react';


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

  
  