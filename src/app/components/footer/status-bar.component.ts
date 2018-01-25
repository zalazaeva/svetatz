import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  private _statusBarTitle: string;

  public constructor() {
  };

  ngOnInit() {
      this._statusBarTitle = "Система в разработке";
  }
}
