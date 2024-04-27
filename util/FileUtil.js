function getDataFromCells(data, cells) {
    // Initialize array to store data
    const result = [];

    // Loop through each object in the data array
    for (let i = 0; i < data.length; i++) {
        const object = data[i];
        const rowData = {};

        // Loop through each cell in the cells array
        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];

            // Check if cell exists in the object
            if (cell in object) {
                // If exists, get the value of the cell from the object and add it to rowData
                const cellValue = object[cell];
                rowData[cell] = cellValue;
            }
        }

        // Add row Data to the result array
        result.push(rowData);
    }

    // Returns the result array containing data from the cells in the objects
    return result;
}