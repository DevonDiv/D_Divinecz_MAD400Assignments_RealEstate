import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  fail = false;
  message: any = '';

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addNewHouse = new EventEmitter<Content>();

  addHouse(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: [string]) {
    let newHouse = new Promise((success, fail) => {
      if(id && title && description && creator) {
        this.addNewHouse.emit({
          id: parseInt(id),
          title: title,
          description: description,
          creator: creator,
          imgURL: imgURL,
          type: type,
          tags: tags
        });
        success("Successfully added new house!");
      } else {
        fail(this.fail = true);
      }
    });

    newHouse.then(success => {
      this.message = success;
    }
    ).catch(fail => {
      return;
    });

  }

}
