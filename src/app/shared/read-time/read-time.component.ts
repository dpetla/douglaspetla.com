import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-read-time',
  templateUrl: './read-time.component.html',
  styleUrls: ['./read-time.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadTimeComponent implements OnInit {
  @Input() minutes: number;

  constructor() {}

  ngOnInit() {}
}
