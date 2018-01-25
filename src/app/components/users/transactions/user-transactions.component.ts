import {Component, OnInit, ViewChild} from "@angular/core";
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {HttpDispatcherService} from "../../../services/http-dispatcher.service";

@Component({
  selector: 'user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.css']
})
export class UserTransactionComponent implements OnInit {

  private _transactions:any;
  private dataSource:any;
  private displayedColumns: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http: HttpDispatcherService) {

    this.displayedColumns = ['coupon_code', 'transaction_type', 'comment', 'date', 'amount', 'sum', 'currency', 'status'];
  }

  ngOnInit() {
    this._http.get().subscribe(
      data => {
        this._transactions = data.json();
        this.dataSource = new MatTableDataSource<Transaction>(this._transactions);
        this.paginator._intl.itemsPerPageLabel = "Кол-во записей на странице";
        this.paginator._intl.nextPageLabel = "Следующая";
        this.paginator._intl.previousPageLabel = "Предыдущая";
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }
}

export interface Transaction {
  coupon_code: string;
  transaction_type: string;
  comment: string;
  date: string;
  amount: any;
  sum: any;
  currency: string;
  status: string;
}
