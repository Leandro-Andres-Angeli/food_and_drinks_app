export const innerCard = (
  title,
  subtitle,
  classLists = 'mt-4 p-5 text-center background-yellow-100 ',
  tags = { titleTag: 'h1', contentTag: 'p' },
  dataAttr = undefined,
  pTagFs = undefined
) => {
  return `<div class="${classLists}"  ${
    dataAttr && `data-index="${dataAttr}"`
  }  >
    <${tags.titleTag} >${title}</${tags.titleTag}>
    <${tags.contentTag}  ${pTagFs && `class="${pTagFs}"`}>${subtitle}</${
    tags.contentTag
  }>
  </div>`;
};
