const stars = [
    { StarID: 0, ProperName: "Sol", X: 0, Y: 0, Z: 0 },
    { StarID: 1, ProperName: "Mars", X: 282.43485, Y: 0.00449, Z: 5.36884 },
    { StarID: 2, ProperName: "Earth", X: 43.04329, Y: 0.00285, Z: -15.24144 },
    { StarID: 87666, ProperName: "Barnard's Star", X: -0.01729, Y: -1.81533, Z: 0.14824 }
  ] as const;

  export const loadCSVFile = (
    filePath: string,
    setLoadedData

  ) 
