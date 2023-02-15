class ButtonSearch {
    constructor() {
        this.root = (function () {
            const btn = document.createElement('button');
            ["btn", "btn-outline-primary"].forEach(cssClasList => {

                btn.classList.add(cssClasList);
                btn.type = 'submit';

            });
            btn.textContent = 'Search'
            return btn
        }
        )()
       
    }
    
   build(){
    return this.root.outerHTML
   } 
}
export default ButtonSearch