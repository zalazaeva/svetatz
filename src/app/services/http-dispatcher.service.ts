import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class HttpDispatcherService{

  private _url : string;

  get url():string{
    return this._url;
  }

  set url(value:string){
    this._url=value;
  }

  constructor (private _httpService:Http){
  }

  public get() {
      return this._httpService.get(this._url);
  }

  public put(body: any) {
    return this._httpService.put(this._url, body);
  }

  public post(body: any) {
    return this._httpService.post(this._url, body);
  }
}
