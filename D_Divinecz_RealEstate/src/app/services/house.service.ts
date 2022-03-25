import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";
import { Content } from "../helper-files/content-interface";
// import { contentList } from "../helper-files/contentDb";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getContentList(): Content[] {
  //   return contentList;
  // }

  // getContentObservable(): Observable<Content[]> {
  //   const content = of(contentList);
  //   this.messageService.add("Content array loaded!");
  //   return content;
  // }

  getContentList(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  getContentObservable(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  // getContentById(id: number): Observable<Content[]> {
  //   const content = of(contentList.filter(content => content.id === id));
  //   this.messageService.add(`Content Item at id: ${id}`);
  //   return content;
  // }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/content", content, this.httpOptions);
  }

}
