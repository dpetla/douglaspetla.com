import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { postsMetadata, PostsMetadata } from './../../../../assets/blog/blog';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogViewComponent implements OnInit {
  heading = 'Blog';
  subheading = 'Things I talk about the web';
  imgUrl = 'assets/media/computer-hands-laptop-2115217.jpg';
  postsMeta: Array<PostsMetadata>;

  constructor() {}

  ngOnInit() {
    this.postsMeta = postsMetadata;
  }
}
