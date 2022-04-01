import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';

import { HouseService } from '../services/house.service';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() addContentEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newContent?: Content;

  constructor(private houseService: HouseService, private messageService: MessageService,
     private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddFormDialogComponent, {
      data: this.newContent
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed');
    })
  }

}

@Component({
  selector: 'app-add-form-dialog',
  templateUrl: 'add-form-dialog.component.html',
})
export class AddFormDialogComponent implements OnInit {

  @Output() addContentEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newContent?: Content;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Content) { }

  ngOnInit(): void {

  }

  addContent(title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.data = {
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
