// Model element
const elementID = 'scheduleBody';
export function getElementDisplayByElementID() {
    return document.getElementById(elementID);;
}
export function setElementID(elementID) {
    elementID = element;
}
// remove content in element
export function removeContent() {
    getElementDisplayByElementID().innerHTML = ''; // remove all content in the element
}