import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";
import { Content } from "../helper-files/content-interface";
import { contentList } from "../helper-files/contentDb";



@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private messageService: MessageService) { }

  getContentList(): Content[] {
    return contentList;
  }

  getContentObservable(): Observable<Content[]> {
    const content = of(contentList);
    this.messageService.add("Content array loaded!");
    return content;
  }

  getContentByID(id: number): Observable<Content[]> {
    const content = of(contentList.filter(content => content.id === id));
    this.messageService.add(`Content Item at id: ${id}`);
    return content;
  }

}
