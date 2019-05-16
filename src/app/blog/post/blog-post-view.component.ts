import { isPlatformBrowser, PlatformLocation } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PostMetadata, postsMetadata } from '../../../assets/blog/blog';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit {
  post$: Observable<PostMetadata>;
  postUrl$: Observable<string>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private title: Title,
    private meta: Meta,
    private platformLocation: PlatformLocation,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const titleSufix = ` ∙ Dougals Petla's Blog`;
    this.post$ = this.route.params.pipe(
      map(params =>
        postsMetadata
          .filter(meta => meta.id.includes(params['id']))
          .map(meta => meta)
          .shift()
      ),
      tap(post => this.title.setTitle(`${post.title}${titleSufix}`)),
      tap(post => this.setSocialTags(post))
    );
    this.postUrl$ = this.route.params.pipe(
      map(params => `./assets/blog/post/${params['id']}.md`)
    );
  }

  setSocialTags(post: PostMetadata) {
    const baseUrl = (this.platformLocation as any).location.origin;
    const socialTags: MetaDefinition[] = [
      { name: 'twitter:site', content: '@douglaspetla' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:title', content: post.title },
      { property: 'og:site_name', content: 'douglaspetla.com' },
      {
        property: 'og:description',
        content: post.subtitle
      },
      {
        property: 'og:image',
        content: `${baseUrl}/${post.img}`
      },
      {
        property: 'og:url',
        content: `${baseUrl}/${post.id}`
      }
    ];

    if (isPlatformBrowser(this.platformId)) {
      socialTags.forEach(tag => this.meta.updateTag(tag));
    }
  }
}
