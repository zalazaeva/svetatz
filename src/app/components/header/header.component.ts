import {Component, OnInit} from "@angular/core";
import {AppMetaDataService} from "../../services/app/app-metadata.service";
import {HttpDispatcherService} from "../../services/http-dispatcher.service";


/** Компонент для реализации пункта меню **/
@Component({
  selector: 'header-menu-item',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  private _metadata: any;
  private _logoutIcon: string;
  private _logoutButtonTitle: string;

  public constructor(private _metaDataService: AppMetaDataService,
                      private _http: HttpDispatcherService) { }


  ngOnInit() {
   this._metadata = this._metaDataService.getDefaultMenuItems();
    this._logoutIcon = "/assets/design/icons/logout.png";
    this._logoutButtonTitle = "Выйти";
  }

  public onClick(selection) : void {
      this._http.url = selection.url;
  }

  public onLogout() {
    /*Выход из системы*/
  }
  
}
