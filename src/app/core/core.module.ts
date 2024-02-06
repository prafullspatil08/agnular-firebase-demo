import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterContainerComponent } from './layout/center-container/center-container.component';



@NgModule({
  declarations: [
    CenterContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CenterContainerComponent]
})
export class CoreModule { }
