import { Content } from "./content-interface";

export class ContentList {

  private contentList: Content[];

  constructor() {
    this.contentList = [];

  }

  get content(): Content[] {
    return this.contentList;
  }

  addContent(content: Content) {
    this.contentList.push(content);
  }

  contentCount() {
    return this.contentList.length;
  }

  getContentHTML(index: number) {

    let content = this.contentList[index];

    if(index > this.contentCount() - 1 || index < 0) {
      return '<h1>Error: Index out of Range</h1>';
    } else {
      let contentHTML: string =
      `<h2>${content.title}</h2>
      <p>${content.description}</p>
      <p>${content.creator}</p>
      <img src="${content.imgURL}">
      <p>${content.type}</p>`;

    return contentHTML;
    }
  }

}
