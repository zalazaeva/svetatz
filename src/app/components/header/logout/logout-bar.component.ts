import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'logout-bar',
  templateUrl: './logout-bar.component.html',
  styleUrls: ['./logout-bar.component.css']
})
export class LogoutBarComponent implements OnInit {

  private _logoutButtonTitle: string;
  private _logoutIcon: string;

  public constructor() {
  };

  ngOnInit() {
      this._logoutIcon = "/assets/design/icons/logout.png";
      this._logoutButtonTitle = "Выйти";
  }

  public onLogout() {
    /*Выход из системы*/
  }
}
