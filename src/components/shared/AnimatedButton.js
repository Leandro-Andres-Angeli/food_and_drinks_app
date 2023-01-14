class AnimatedButton {
  constructor(textContent) {
    this.cssClasses = ['btn', ' btn-primary'];
    this.tag = ` <button class="${this.cssClasses.join(
      ' '
    )}">${textContent}</button>
   `;
  }
  addClassLists(cssClassesAdded) {
    let btnAsStr = [...this.tag];
    const indexToInsert = btnAsStr.indexOf('=');
    btnAsStr.splice(
      indexToInsert + 2,
      0,
      ' ' + cssClassesAdded.join(' ') + ' '
    );
    this.tag = btnAsStr.join('');
    return this;
  }
  build() {
    return this.tag;
  }
}
export default AnimatedButton;
