import { DataInterface as Data } from '../interfaces/DataInterface';

export default function sortingAlgorithm(data: Data[]): any {
  let sortedData;

  // Sort by time applied for the job
  sortedData = data.sort((a: any, b: any) => {
    return a.timestamp - b.timestamp;
  });

  return sortedData
}
