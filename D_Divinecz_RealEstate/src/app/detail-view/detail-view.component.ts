import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  id: number = 0;
  content: any = {};

  constructor(private houseService: HouseService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.houseService.getContentById(this.id).subscribe(data => {
        this.content = data;
      });
    });
  }

}
