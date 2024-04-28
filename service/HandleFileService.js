import '../repository/BaseRepository.js';
// Handle arrange courses with instructors
export function arrangeCoursesWithInstructors() {
    debugger
    // Initialize an empty calendar
    // get courses, instructors
    const courses = getDataCourseFromDataExam();
    const instructors = getInstructorDatas();

    // Assign instructors to each course
    courses.forEach(course => {
        instructors.some(instructor => {
            if (course.time.split("-").some(time => instructor.availableTimes.toString().includes(time.toString().trim()))) {
                course.proctor1 = instructor.name;
                instructors.splice(instructors.indexOf(instructor), 1); // Remove assigned instructor
                return true;
            }
            return false;
        });
    });
    return courses;
}
// Read excel files
export function readFileExcel(input) {
    debugger
    const file = input.target.files[0];
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Get data from the first sheet
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            // Convert data to array of objects
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, range: 1, defval: '' });
            // Display data in the browser
            resolve(jsonData);
        };
        reader.onerror = function (error) {
            reject(`Error reading file: ${error}`);
        };

        reader.readAsArrayBuffer(file);
    });
}
// Handle page reload
export function reloadPage() {
    sessionStorage.removeItem('savedContent');
    location.reload();
}
export function exportToExcel() {
    /* Get table element */
    const table = document.getElementById('excel-data');

    /* Convert table to workbook */
    const wb = XLSX.utils.table_to_book(table);

    /* Generate Excel file */
    XLSX.writeFile(wb, 'data.xlsx');
}
// Print data
export function printSchedule() {
    // Open the browser print dialog box
    window.print();
}