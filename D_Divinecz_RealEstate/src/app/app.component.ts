import { Component, Input } from '@angular/core';

import { Content } from './helper-files/content-interface';
import { HouseService } from './services/house.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D_Divinecz_RealEstate';
  houseId = 0;
  content: Content[] = [];
  contentList: Content[] = [];

  constructor(private houseService: HouseService) { }

  findHouse(id: string) {
    this.houseId = parseInt(id);
    this.contentList = this.houseService.getContentList();
    if (this.houseId >= 0 && this.houseId < this.contentList.length) {
      this.houseService.getContentByID(this.houseId).subscribe(content => {
        this.content = content;
      });
    } else {
      return
    }
  }
}
