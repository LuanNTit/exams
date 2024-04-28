// Model element
export function getElementDisplay() {
    return document.getElementById('scheduleBody');
}
export function getElementDisplayById(elementID) {
    return document.getElementById(elementID);
}
// remove content in element
export function removeContentDisplayById(elementID) {
    getElementDisplayById(elementID).innerHTML = ''; // remove all content in the element
}
export function removeContentDisplay() {
    getElementDisplay().innerHTML = ''; // remove all content in the element
}
export function removeContentDisplayByElement(element) {
    element.innerHTML = ''; // remove all content in the element
}