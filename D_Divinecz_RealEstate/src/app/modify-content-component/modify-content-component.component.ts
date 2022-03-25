import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { HouseService } from '../services/house.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() addContentEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newContent?: Content;

  constructor(private houseService: HouseService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addContent(title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newContent = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };
    this.addContentEvent.emit(this.newContent);
  }

}
