import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { HeaderModule } from '../../header/header.module';
import { BlogPostViewComponent } from './blog-post-view.component';

@NgModule({
  declarations: [BlogPostViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogPostViewComponent },
      { path: ':id', component: BlogPostViewComponent, pathMatch: 'full' }
    ]),
    MarkdownModule.forChild(),
    HeaderModule
  ]
})
export class BlogPostViewModule {}
