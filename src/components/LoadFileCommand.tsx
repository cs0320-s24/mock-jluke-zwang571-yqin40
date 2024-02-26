import Papa from 'papaparse';
import { Dispatch, SetStateAction } from 'react';

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
            setHistory((prevHistory: string[]) => [...prevHistory, `Command: load_file ${filePath}`, 'Output: Load successful']);

          }
        });
      })
      .catch(error => {
        console.error('Error loading or parsing CSV file:', error);
        // 如果加载或解析失败，也添加一条历史记录
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