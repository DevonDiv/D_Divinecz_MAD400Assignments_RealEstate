import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  houseOne: Content = {
    id: 1,
    title: 'House One',
    description: 'This is the description for House One',
    creator: 'Devon Divinecz',
    imgURL: '',
    type: 'House',
    tags: ['House']
  };

  houseTwo: Content = {
    id: 2,
    title: 'House Two',
    description: 'This is the description for House Two',
    creator: 'Devon Divinecz',
    imgURL: '',
    type: 'House',
    tags: ['House']
  };

  houseThree: Content = {
    id: 3,
    title: 'House Three',
    description: 'This is the description for House Three',
    creator: 'Devon Divinecz',
    imgURL: '',
    type: 'House',
    tags: ['House']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
