import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
