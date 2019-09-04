import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadTimeComponent } from './read-time/read-time.component';

@NgModule({
  declarations: [ReadTimeComponent],
  imports: [CommonModule],
  exports: [ReadTimeComponent]
})
export class SharedModule {}
