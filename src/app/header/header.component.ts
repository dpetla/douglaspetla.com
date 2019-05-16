import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() heading: string;
  @Input() subheading: string;
  @Input() imgUrl: string;

  constructor() {}

  ngOnInit() {}
}
