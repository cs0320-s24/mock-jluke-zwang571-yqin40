export var is_loaded: boolean;
declare var filePath: string;
export var loaded_data: string[][] | string;

export const mockedData = {
  stars: [
    ["0", "Sol", "0", "0", "0"],
    ["1", "Mars", "282.43485", "0.00449", "5.36884"],
    ["2", "Earth", "43.04329", "0.00285", "-15.24144"],
    ["87666", "Barnard's Star", "-0.01729", "-1.81533", "0.14824"]
  ] as const,

  census: [
    ["RhodeIsland", "74,489.00", "95,198.00", "39,603.00"],
    ["SouthCarolina", "1,290,684.00", "1,390,524.00", "1,190,844.00"],
    ["SouthDakota", "196,730.00", "206,580.00", "186,880.00"],
    ["Tennessee", "1,186,166.00", "1,286,006.00", "1,086,326.00"]
  ] as const
};

export const csvMap = new Map<string, any>([
  ["stars.csv", mockedData.stars],
  ["census.csv", mockedData.census]
]);



export const mockSearchStar = new Map<string, any>([
  ["Sol", [mockedData.stars[0]]],
  ["Mars", [mockedData.census[1]]], 
  ["Earth", [mockedData.stars[2]]],


]);

export const mockQueryStar = new Map<string, any>([
  ["or(Sol,Mars)", [mockedData.stars[0], mockedData.stars[1]]],
  ["and(Sol,Mars)", [mockedData.stars[0]]]

]);

export const mockSearchCensus = new Map<string, any>([
  ["RhodeIsland", [mockedData.census[0]]],
  ["SouthCarolina", [mockedData.census[1]]], 
  ["SouthDakota", [mockedData.census[2]]],
  ["Tennessee", [mockedData.census[3]]],


]);

export const mockQueryCensus = new Map<string, any>([
  ["or(RhodeIsland,SouthCarolina)", [mockedData.census[0], mockedData.census[1]]],
  ["and(RhodeIsland,SouthCarolina)", [mockedData.census[0]]]

]);

export const mockQueryMap = new Map<string, any>([
  ["stars.csv", mockQueryStar],
  ["census.csv", mockQueryCensus]
]);

export const mockSearchMap = new Map<string, any>([
  ["stars.csv", mockSearchStar],
  ["census.csv", mockSearchCensus]
]);












