import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
