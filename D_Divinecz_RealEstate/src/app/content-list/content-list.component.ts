import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'

import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  title: string = '';
  searchTerm: string = '';
  foundTitle: boolean = false;
  message: string = '';
  contentList: Content[] = []

  constructor(private houseService: HouseService) {

  }

  ngOnInit(): void {
    this.houseService.getContentObservable().subscribe(content =>
      this.contentList = content);
  }

  // filterContent(title: string) {
  //   for (let i = 0; i < this.contentList.length; i++) {
  //     if (this.contentList[i].title === title) {
  //       this.foundTitle = true;
  //       this.title = title;
  //       this.message = 'Property Found';
  //       return;
  //     } else {
  //       this.message = 'Property Not Found';
  //     }
  //   }
  // }

}
