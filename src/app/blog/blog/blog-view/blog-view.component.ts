import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostMetadata, postsMetadata } from './../../../../assets/blog/blog';

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
  postsMeta: Array<PostMetadata>;

  constructor(private title: Title) {}

  ngOnInit() {
    this.postsMeta = postsMetadata;
    this.title.setTitle(`Blog ∙ Douglas Petla`);
  }
}
