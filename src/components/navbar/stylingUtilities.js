export const toggleClassName = (domElements, action) => {
    domElements.forEach(link => link.classList[`${action}`]('active'))
}
export const getLinkType = (attribute) => {
   
    return attribute ?? 'navLink'
};
export class handleLinksStylesClass {
    static navLink(target) {

        if (target.getAttribute("role") === "button") {

            return
        }
        window.location.hash.toString().includes(target.innerText.toLowerCase()) ? toggleClassName([target], 'add') : null;

    }
    static navbarDropdown(target) {
        
        toggleClassName(document.body.querySelector('header').querySelectorAll('.dropdown-item'), 'remove')
        target.classList.add('active')
        target.parentElement.parentElement.parentElement.querySelector('button').classList.add('active')

    }
}