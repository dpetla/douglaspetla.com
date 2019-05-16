import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './blog/blog-view/blog-view.module#BlogViewModule'
      },
      {
        path: 'post',
        loadChildren: './post/blog-post-view.module#BlogPostViewModule'
      }
    ]),
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ]
})
export class BlogModule {}
