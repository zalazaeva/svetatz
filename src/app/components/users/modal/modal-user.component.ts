import {Component, OnInit, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA, MatCheckbox} from "@angular/material";
import {HttpDispatcherService} from "../../../services/http-dispatcher.service";

@Component({
  selector: 'modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})
export class ModalUserComponent implements OnInit {

  public static UPDATE_USER: string = "UPDATE_USER";
  public static CREATE_USER: string = "CREATE_USER";
  public static UPDATE_BALANCE: string = "UPDATE_BALANCE";

  private _amount: number;
  private _comment: string;
  private _isEnabled: boolean = false;
  private _userName: string;
  private _email: string;
  private _userCustom: string;
  private _userId: string;
  private _modalTitle: string;
  private _type: string;

  constructor(private _http:HttpDispatcherService,
              public dialogRef: MatDialogRef<ModalUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this._type = data.type;
      switch (this._type) {
        case ModalUserComponent.UPDATE_USER: {
          this._userId = data.userId;
          this._modalTitle = "Редактирование профиля";
          this._getUserInfo();
          break;
        }
        case ModalUserComponent.UPDATE_BALANCE: {
          this._userId = data.userId;
          this._modalTitle = "Изменить баланс";
          break;
        }
        case ModalUserComponent.CREATE_USER: {
          this._modalTitle = "Создание пользователя";
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    switch (this._type) {
      case ModalUserComponent.UPDATE_USER: {
        this._updateUser();
        break;
      }
      case ModalUserComponent.UPDATE_BALANCE: {
        this._updateBalance();
        break;
      }
      case ModalUserComponent.CREATE_USER: {
        this._createUser();
        break;
      }
      default: {
        break;
      }
    }
  }

  private _updateBalance(): void {
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users" + "/" + this._userId + "/" + "recharge";
    this._http.post(
      {
        user_id: this._userId,
        amount: this._amount,
        comment: this._comment
      }
    ).subscribe(
      data => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
        this.dialogRef.close(error);
      }
    );
  }

  private _createUser(): void {
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users";
    this._http.post(  
      {
        user_name: this._userName,
        email: this._email,
        user_custom: this._userCustom,
        user_id: this._userName + "_" + Math.floor(100000000 + Math.random() * 900000000)
      }
    ).subscribe(
      data => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
        this.dialogRef.close(error);
      }
    );
  }

  private _updateUser(): void {
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users"+ "/" + this._userId;
    this._http.put(
      {
        user_id: this._userId,
        user_name: this._userName,
        user_custom: this._userCustom,
        email: this._email,
        enabled: this._isEnabled
      }
    ).subscribe(
      data => {
        this.dialogRef.close();
      }, error => {
        console.log(error);
        this.dialogRef.close(error);
      }
    );
  }

  private _getUserInfo():void {
    let that = this;
    this._http.url = "https://livedemo.xsolla.com/fe/test-task/baev/users" + "/" + this._userId;
    this._http.get().subscribe(
      data => {
        console.log(data);
        that._userName = data.json().user_name;
        that._email = data.json().email;
        that._userCustom = data.json().user_custom;
        that._isEnabled = data.json().enabled;
      }, error => {
        console.log(error);
      }
    );
  }

}
