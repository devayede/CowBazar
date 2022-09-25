import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CowsService } from './cows.service';
import { CowComponent } from './cow/cow.component';
import { CowsComponent } from './cows.component';



@NgModule({
  declarations: [CowsComponent, CowComponent],
  providers: [CowsService],
  imports: [ CommonModule],
  exports: [CowsComponent],
})
export class CowsModule { }
