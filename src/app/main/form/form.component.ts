import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() public inputBill;
  @Output() private submitForm: EventEmitter<any>;

  public billForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    this.submitForm = new EventEmitter();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.inputBill.isEdit) {
      this.billForm.setValue(this.inputBill.bill);
    }
  }

  createForm() {
    this.billForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: [null, Validators.required],
      address2: [null, Validators.required],
      zipCode: [null, Validators.required],
      nameOnCard: [null, Validators.required],
      cardNumber: [null, Validators.required],
      expiration: [null, Validators.required],
      cvvNumber: [null, Validators.required],
    });
  }

  onSubmitForm() {
    this.submitForm.emit(this.billForm.value);
    this.billForm.reset();
  }

  get firstName() {
    return this.billForm.get('firstName');
  }

  get lastName() {
    return this.billForm.get('lastName');
  }

  get username() {
    return this.billForm.get('username');
  }

  get email() {
    return this.billForm.get('email');
  }

  get address() {
    return this.billForm.get('address');
  }

  get address2() {
    return this.billForm.get('address2');
  }

  get zipCode() {
    return this.billForm.get('zipCode');
  }

  get nameOnCard() {
    return this.billForm.get('nameOnCard');
  }

  get cardNumber() {
    return this.billForm.get('cardNumber');
  }

  get expiration() {
    return this.billForm.get('expiration');
  }

  get cvvNumber() {
    return this.billForm.get('cvvNumber');
  }

}
