import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public bills;
  public inputBill;

  constructor() { }

  ngOnInit() {
    this.bills = [];
    this.inputBill = {
      isEdit: false,
      bill: {},
      index: -1
    };
  }

  onSubmitForm(bill) {
    if (this.inputBill.isEdit) {
      console.log(this.inputBill.index)
      this.bills[this.inputBill.index] = bill;
      this.inputBill = {
        isEdit: false,
        bill: {},
        index: -1
      };
      return;
    }

    this.bills.push(bill);
  }

  removeBill(index) {
    this.bills.splice(index, 1);
  }

  editBill(bill, i) {
    this.inputBill = {
      bill,
      isEdit: true,
      index: i
    };
  }

}
