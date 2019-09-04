import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HeaderModule } from '../../../header/header.module';
import { SharedModule } from '../../../shared/shared.module';
import { BlogViewComponent } from './blog-view.component';

@NgModule({
  declarations: [BlogViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogViewComponent
      }
    ]),
    MarkdownModule.forChild(),
    HeaderModule,
    SharedModule
  ]
})
export class BlogViewModule {}
