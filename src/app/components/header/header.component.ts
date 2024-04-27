import { Component } from '@angular/core';
import { TimeComponent } from './time/time.component';
import { UserComponent } from './user/user.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, TimeComponent, UserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
