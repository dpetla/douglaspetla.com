import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsMetadata, postsMetadata } from '../../../assets/blog/blog';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {
  meta$: Observable<PostsMetadata>;
  post$: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.post$ = this.route.params.pipe(
      map(params => `./assets/blog/post/${params['id']}.md`)
    );
    this.meta$ = this.route.params.pipe(
      map(params =>
        postsMetadata
          .filter(meta => meta.id.includes(params['id']))
          .map(meta => meta)
          .shift()
      )
    );
  }
}
