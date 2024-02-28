import Papa from 'papaparse';
import { Dispatch, SetStateAction } from 'react';

import { REPLFunction } from './REPL';


export const loadCSVFile = (
    filePath: string,
    setLoadedData: Dispatch<SetStateAction<string>>,
    setHistory: Dispatch<SetStateAction<string[]>>
  ) => {
    fetch(filePath)
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          complete: (results) => {
            const data = results.data as any[][];
            const htmlTable = convertToHTMLTable(data);
            setLoadedData(htmlTable);
            // 在成功加载和解析 CSV 后，添加一条历史记录
            // After successfully loading and parsing CSV, add a historical record
            setHistory((prevHistory: string[]) => [...prevHistory, `Command: load_file ${filePath}`, 'Output: Load successful']);

          }
        });
      })
      .catch(error => {
        console.error('Error loading or parsing CSV file:', error);
        // 如果加载或解析失败，也添加一条历史记录
        // If loading or resolution fails, add a historical record        
        setHistory((prevHistory: string[]) => [...prevHistory, `Command: load_file ${filePath}`, `Output: Error - ${error.message}`]);

      });
  };

const convertToHTMLTable = (data: any[][]): string => {
    let html = '<table>';
    data.forEach(row => {
      html += '<tr>';
      row.forEach(cell => {
        html += `<td>${cell}</td>`;
      });
      html += '</tr>';
    });
    html += '</table>';
    return html;
  };

export const LoadCommand: REPLFunction = (args: Array<string>): string => {
  // 1) send filepath to (mock) backend

  // 2) print message received from (mock) backend
    // success
    // failure


  return (

      "Load command called"
      //write help menu here
  )
}