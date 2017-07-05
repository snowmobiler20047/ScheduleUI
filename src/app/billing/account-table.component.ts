import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import{Account} from './account';

@Component({
    selector: 'AccountTable',
    templateUrl: './account-table.component.html'
})
export class AccountTableComponent implements OnInit{
    constructor(private accountService: AccountService){}

    account: Account;
    errorMessage;

    ngOnInit() { 
        this.getAccounts();
    }


     getAccounts() {
        this.accountService.getAccounts()
        .subscribe(
            account => this.account = account, 
            error => this.errorMessage = <any>error);
        
    }


}