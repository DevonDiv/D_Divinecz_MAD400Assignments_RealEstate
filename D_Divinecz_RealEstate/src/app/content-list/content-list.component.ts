import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[] = [
    {
      id: 1,
      title: 'House 1',
      description: 'House 1 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    },
    {
      id: 2,
      title: 'House 2',
      description: 'House 2 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    },
    {
      id: 3,
      title: 'House 3',
      description: 'House 3 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    },
    {
      id: 4,
      title: 'House 4',
      description: 'House 4 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    },
    {
      id: 5,
      title: 'House 5',
      description: 'House 5 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    },
    {
      id: 6,
      title: 'House 6',
      description: 'House 6 Description',
      creator: 'Devon Divinecz',
      imgURL: '',
      type: '',
      tags: []
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
