import { Component, Input } from '@angular/core';

import { Content } from './helper-files/content-interface';
import { HouseService } from './services/house.service';
import { UpdateService } from './services/update.service';

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
}
