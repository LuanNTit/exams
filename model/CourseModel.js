// model data course
const course = {
    code: "",
    date: "",
    time: "",
    room: "",
    proctor1: "",
    proctor2: ""
};
function getDataCourseFromDataExam() {
    const courses = [];
    // Go through each element in the data array
    data.forEach(row => {
        // Get the values of the necessary columns from the data array
        const maHP = row["Mã HP"];
        const gioThi = row["Giờ thi"];
        const ngayThi = row["Ngày thi"];
        const phongThi = row["Phòng thi"];
        const ct1 = row["CT 1"];
        const ct2 = row["CT 2"];

        // Create a new object with the properties code, date, time, room, proctor1, proctor2 and assign the corresponding values
        course.code = maHP;
        course.date = ngayThi;
        course.time = gioThi;
        course.room = phongThi;
        course.proctor1 = ct1,
        course.proctor2 = ct2;
        // Add the class object to the courses array
        courses.push(course);
    });
    return courses;
}