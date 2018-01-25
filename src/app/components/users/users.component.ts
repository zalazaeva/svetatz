import {Component, OnInit, ViewChild} from "@angular/core";
import {HttpDispatcherService} from "../../services/http-dispatcher.service";
import {MatTableDataSource, MatPaginator, MatDialog} from "@angular/material";
import {ModalUserComponent} from "./modal/modal-user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users:any;
  private _totalRecords:number = 10;
  private dataSource:any;
  private displayedColumns: any;
  private _pageSize: number = 10;
  private _pageIndex: number = 0;
  private _filterValue: string;
  private _createIcon: string = "../../../assets/design/icons/create_user.png";
  private _editIcon: string = "../../../assets/design/icons/edit_user.png";
  private _viewIcon: string = "../../../assets/design/icons/view_user.png";
  private _balanceIcon: string = "../../../assets/design/icons/balance_user.png";

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http:HttpDispatcherService,
              public dialog: MatDialog) {

    this.displayedColumns = ['user_name', 'email', 'balance', 'user_id'];
  }

  ngOnInit() {
    this._users = [];
    this._getAllUsers();
  }

  public pageChanged(event?) {
    if (event)
    {
      this._pageSize = event.pageSize;
      this._pageIndex = event.pageIndex * 10;
    }
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users?offset="+this._pageIndex+"&limit="+this._pageSize;
    this._http.get().subscribe(
      data => {
        this._totalRecords =  data.json().recordsTotal;
        this._users = data.json().data;
        this.dataSource = new MatTableDataSource<User>(this._users);
      },
      error => {
        console.log(error);
      }
    )
  }

  public applyFilter(filterValue: string) {
    if (filterValue=="") {
      this._getAllUsers();
    } else {
      this._filterValue = filterValue.trim(); // Remove whitespace
      this._filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
  }

  public openCreateUserModal(): void {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width:'20%',
      height: '35%',
      data: {
        type: "CREATE_USER"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pageChanged();
    });
  }

  public openUpdateUserModal(userId: string): void {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width:'20%',
      height: '40%',
      data: {
        type: "UPDATE_USER",
        userId: userId
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pageChanged();
    });
  }

  public openUserTransactions(userId: string, datetimeFrom: string): void {
    let now = new Date();
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users" + "/" + userId + "/transactions" + "?" +
    "datetime_from=" + this._ISODateString(new Date(datetimeFrom)) + "&" + "datetime_to=" + this._ISODateString(now);
  }

  public openUpdateUserBalance(userId: string): void {
    let dialogRef = this.dialog.open(ModalUserComponent, {
      width:'20%',
      height: '35%%',
      data: {
        type: "UPDATE_BALANCE",
        userId: userId
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.pageChanged();
    });
  }

  private _ISODateString(d) {
  function pad(n){return n<10 ? '0'+n : n}
  return d.getUTCFullYear()+'-'
    + pad(d.getUTCMonth()+1)+'-'
    + pad(d.getUTCDate())+'T'
    + pad(d.getUTCHours())+':'
    + pad(d.getUTCMinutes())+':'
    + pad(d.getUTCSeconds())+'Z'
  }

  private _getAllUsers(): void {
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users?offset=0&limit=" + this._totalRecords;
    this._http.get().subscribe(
      data => {
        this._totalRecords =  data.json().recordsTotal;
        this._users = data.json().data;
        this.dataSource = new MatTableDataSource<User>(this._users);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }

}

export interface User {
  user_name: string;
  email: string;
  balance: string;
  user_id: string;
}
