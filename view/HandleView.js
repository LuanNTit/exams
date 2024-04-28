// The code displays the list in the browser
export function displayData(data, element) {

    // Create and populate tables with data
    data.forEach(row => {
        const tr = document.createElement('tr');
        for (const key in row) {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
        }
        element.appendChild(tr);
    });
}
// Print exam schedule
export function printExamSchedule(schedule) {
    schedule.forEach(entry => {
        console.log(`Course ${entry.course} will be lecturers ${entry.proctor1} monitor the exam.`);
    });
}
// Format the list to display
export function formatDataDisplay() {
    // Get all cells containing an ellipsis
    var cells = document.querySelectorAll('.container th, .container td');
    cells.forEach(function (cell) {
        // Check if the content exceeds max-width
        if (cell.scrollWidth > cell.offsetWidth) {
            // Reduce the font size until the content does not exceed max-width
            while (cell.scrollWidth > cell.offsetWidth) {
                var fontSize = window.getComputedStyle(cell).fontSize;
                cell.style.fontSize = (parseFloat(fontSize) - 1) + 'px';
            }
        }
    });
    console.log('The page has been completely formated.');
}

// Print data
export function printSchedule() {
    // Open the browser print dialog box
    window.print();
}

// Handle page reload
export function reloadPage() {
    sessionStorage.removeItem('savedContent');
    location.reload();
}