import { MetaDefinition } from '@angular/platform-browser';

export interface PostMetadata {
  id: string;
  title: string;
  subtitle: string;
  subheading: string;
  tags: MetaDefinition[];
  author: Author;
  date: string;
  readTime: number;
  img: string;
}

interface Tag {
  name: string;
  content: string;
}

interface Author {
  name: string;
  url: string;
}

const authors = {
  DOUGLAS_PETLA: {
    name: 'Douglas Petla',
    url: 'https://twitter.com/douglaspetla'
  }
};

export const postsMetadata: Array<PostMetadata> = [
  // {
  //   id: 'cdk-drag-and-drop',
  //   title: 'Angular CDK Drag & Drop',
  //   subtitle: 'Angular Material version 7 Drag & Drop Available',
  //   subheading: `This is a custom description for SEO and Open Graph purposes,
  //   rather than the default generated excerpt.`,
  //   tags: [
  //     { name: 'angular', content: '' },
  //     { name: 'cdk', content: 'cdk' },
  //     { name: 'drag-and-drop', content: 'drag-and-drop' }
  //   ],
  //   author: authors.DOUGLAS_PETLA,
  //   date: '2019-03-02T22:40:32.169Z',
  //   readTime: 5,
  //   img: 'assets/media/blue-blue-water-bubble-932320.jpg'
  // },
  {
    id: 'angular-compiler',
    title: 'Compiling...',
    subtitle: 'An Overview of the Angular Compiler',
    subheading: `A brief explantion about how the angular compiler works.`,
    tags: [
      { name: 'angular', content: 'angular' },
      { name: 'compiler', content: 'compiler' }
    ],
    author: authors.DOUGLAS_PETLA,
    date: 'Sep 2, 2019',
    readTime: 2,
    img: 'assets/media/angular-compiler-transformation-banner.jpg'
  },
  {
    id: 'hello-world',
    title: 'Hello World!',
    subtitle: 'Welcome to my blog',
    subheading: `A very brief introduction about me, and what I hope to achieve with my writing.`,
    tags: [
      { name: 'blog', content: 'blog' },
      { name: 'hello world', content: 'hello world' }
    ],
    author: authors.DOUGLAS_PETLA,
    date: 'May 25, 2019',
    readTime: 1,
    img: 'assets/media/dock-feet-footwear-128299.jpg'
  }
];
