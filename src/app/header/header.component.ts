import {Component, Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
@Injectable()
export class HeaderComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  onToggleLogin() {
    if (this.isAuthenticated()) {
      this.authenticationService.logout();
    } else {
      this.authenticationService.login();
    }
  }
}
