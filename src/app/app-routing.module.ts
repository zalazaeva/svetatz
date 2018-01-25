import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UsersComponent} from "./components/users/users.component";
import {UserTransactionComponent} from "./components/users/transactions/user-transactions.component";

export const routes : Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/transactions', component: UserTransactionComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
