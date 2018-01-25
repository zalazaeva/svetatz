import {Injectable} from "@angular/core";

@Injectable()
export class AppMetaDataService {

  private _appMetadata: any;

  constructor() {

  }

  //Тестовые значения для пунктов меню. Реализован только список пользователей
  public getDefaultMenuItems(): any{
    this._appMetadata = [];
    this._appMetadata.push(
      {
        menuItemTitle: "Список пользователей",
        routing: "/users",
        url: "https://livedemo.xsolla.com/fe/test-task/baev/users"
      });
    return this._appMetadata;
  }
}
