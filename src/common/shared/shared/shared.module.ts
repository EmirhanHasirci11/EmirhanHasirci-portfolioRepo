import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink

  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    RouterLink
  ]
})
export class SharedModule { }
