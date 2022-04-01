import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
