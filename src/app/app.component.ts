import { Component, NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule ({
  imports: [
    AppRoutingModule
  ]
})
export class AppComponent {
}
