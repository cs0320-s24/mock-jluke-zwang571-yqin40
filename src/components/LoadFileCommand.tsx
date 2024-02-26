import Papa from 'papaparse';
export const loadCSVFile = (filePath: string, updateHistory: (newEntry: string) => void) => {
    fetch(filePath)
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          complete: (results) => {
            const formattedData = JSON.stringify(results.data);
            updateHistory(formattedData);
          }
        });
      })
      .catch(error => {
        console.error('Error loading or parsing CSV file:', error);
        updateHistory(`Error loading file from path: ${filePath}`);
      });
  };