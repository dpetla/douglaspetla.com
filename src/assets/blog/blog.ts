export interface PostsMetadata {
  id: string;
  title: string;
  subtitle: string;
  subheading: string;
  tags: Array<string>;
  author: Author;
  data: string;
  readTime: number;
  img: string;
}

interface Author {
  name: string;
  url: string;
}

export const postsMetadata: Array<PostsMetadata> = [
  {
    id: 'cdk-drag-and-drop',
    title: 'Angular CDK Drag & Drop',
    subtitle: 'Angular Material version 7 Drag & Drop Available',
    subheading: `This is a custom description for SEO and Open Graph purposes,
    rather than the default generated excerpt.`,
    tags: ['angular', 'cdk', 'drag-and-drop'],
    author: {
      name: 'Douglas Petla',
      url: 'https://twitter.com/douglaspetla'
    },
    data: '2019-03-02T22:40:32.169Z',
    readTime: 5,
    img: 'assets/media/blue-blue-water-bubble-932320.jpg'
  },
  {
    id: 'hello-world',
    title: 'Hello World',
    subtitle: 'my first blog post',
    subheading: `This is a custom description for SEO and Open Graph purposes,
    rather than the default generated excerpt. Simply add a description field to the frontmatter.`,
    tags: ['blog', 'hello world'],
    author: {
      name: 'Douglas Petla',
      url: 'https://twitter.com/douglaspetla'
    },
    data: 'March 20, 2019',
    readTime: 4,
    img: 'assets/media/dock-feet-footwear-128299.jpg'
  }
];
