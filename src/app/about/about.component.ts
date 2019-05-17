import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  heading = 'About me';
  subheading = 'Hello, I am Douglas';
  imgUrl = 'assets/media/architecture-buildings-canada-374870.jpg';

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('About ∙ Douglas Petla');
  }
}
