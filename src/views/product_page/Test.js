class Test {

    constructor() {
        this.app = document.querySelector('.app')
        this.content;
    }
    build() {
        return this
    }
    fillContent(content) {
        this.app.insertAdjacentHTML('beforeend', content)
        return this;
    }
}
const leftContent = ()=>{
    return `<div>left content data</div>`
}
const rightContent = ()=>{
    return `<div>right content data</div>`
}

const testPage = new Test().fillContent(rightContent()).fillContent(rightContent())
export default testPage;
