// model data instructor
// initialize instructors
const instructorDatas = [
    { name: "Dr. Smith", availableTimes: ["09:00-11:00", "14:00-16:00"] },
    { name: "Prof. Johnson", availableTimes: ["09:00-11:00", "14:00-16:00"] },
    { name: "Dr. Anderson", availableTimes: ["10:00-12:00", "13:00-15:00"] },
    { name: "Prof. Martinez", availableTimes: ["08:00-10:00", "12:00-14:00"] },
    { name: "Dr. Garcia", availableTimes: ["11:00-13:00", "16:00-18:00"] },
    { name: "Prof. Lee", availableTimes: ["08:00-10:00", "14:00-16:00"] }
];
function getInstructorDatas() {
    return instructorDatas;
}

function setInstructorDatas(instructors) {
    instructorDatas = instructors;
}