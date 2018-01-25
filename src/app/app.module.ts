import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HttpDispatcherService} from "./services/http-dispatcher.service";
import {LogoutBarComponent} from "./components/header/logout/logout-bar.component";
import {UsersComponent} from "./components/users/users.component";
import {StatusBarComponent} from "./components/footer/status-bar.component";
import {AppMetaDataService} from "./services/app/app-metadata.service";
import {AppRoutingModule} from "./app-routing.module";
import {BootstrapGridModule} from "ng2-bootstrap-grid";
import {NgxPaginationModule} from "ngx-pagination";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ModalUserComponent} from "./components/users/modal/modal-user.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule,} from '@angular/forms';
import {UserTransactionComponent} from "./components/users/transactions/user-transactions.component";
import {HeaderComponent} from "./components/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    LogoutBarComponent,
    UsersComponent,
    StatusBarComponent,
    ModalUserComponent,
    UserTransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BootstrapGridModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [HttpDispatcherService, AppMetaDataService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUserComponent
  ],
})
export class AppModule { }
