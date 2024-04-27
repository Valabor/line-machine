import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, timer } from "rxjs";

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent {
  public time = timer(0, 1000)
    .pipe(
      map(() => new Date()),
    );
}
