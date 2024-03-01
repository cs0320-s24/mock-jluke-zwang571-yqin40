import { mockedData, csvMap } from '../../data/mocked_data/mocked_data';
import { Dispatch, SetStateAction } from 'react';

export const LoadFileCommand = (filePath: string
  ): string[][] | string => {
  const data = csvMap.get(filePath); 
  if (data) {
    return data;
  } else {
    return `Error: No data found for ${filePath}`; 
  }
};

