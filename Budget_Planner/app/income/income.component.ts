import { LocalizedString } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {

  income!: FormGroup;
  selectedmonth: string = '';
  monthselect:boolean=false;

  januaryIncome: any[] = [
    { source: 'Salary', amount: 9000, Investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' }
  ];
  februaryIncome: any[] = [
    { source: 'Salary', amount: 5500, Investments: '401(k)' },
    { source: 'Rental Income', amount: 700, investments: 'Real State' }
  ];
  marchIncome: any[] = [
    { source: 'Salary', amount: 5500, Investments: '401(k)' },
    { source: 'Extrasource', amount: 700, investments: 'Extra' }
  ];


  constructor(private fb: FormBuilder,private Route:Router) {
    const date = new Date();
    this.selectedmonth = date.toLocaleDateString('default', { month: 'long' });
  }
  ngOnInit() {
    this.createIncomeForm();
  }
  createIncomeForm(): void {
    this.income = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investment: ['', Validators.required]

    });
  }
  onsubmit() {
    console.log(this.income.value);
  }
  onchange(event: any) {
    this.selectedmonth = event.target.value;
    // alert(this.selectedmonth + "is the selected Month");
    console.log(this.selectedmonth);
    this.monthselect=true;
    this.getfilteredIncome();
  }
  calculateTotalIncome(month: string){
    let totalIncome = 0;
    for (let income of this.getIncomeForMonth(month)) {
      totalIncome += income.amount;
    }
    return totalIncome;
  }
  getIncomeForMonth(month: string): any[] {
    switch (month) {
      case ("January"):
        return this.januaryIncome;
      case ("February"):
        return this.februaryIncome;
      case ("March"):
        return this.marchIncome;
      default:
        return [];
    }
  }

  getfilteredIncome() {
    let filteredIncome: any[]=[];
    switch (this.selectedmonth) {
      case 'January':
        filteredIncome = [...this.januaryIncome];
        break;
      case 'February':
        filteredIncome = [...this.februaryIncome];
        break;
      case 'March':
        filteredIncome = [...this.marchIncome];
        break;
      default:
        break;
    }
    return filteredIncome;
  }

  onSubmit() {
    if (this.income.valid) {
      const newIncome = this.income.value;
      switch (this.selectedmonth) {
        case 'January':
          this.januaryIncome.push(newIncome);
          break;
        case 'February':
          this.februaryIncome.push(newIncome);
          break;
        case 'March':
          this.marchIncome.push(newIncome);
          break;
        default:
          break;
      }
      this.income.reset();
      this.income.patchValue({ month: '', source: '', amount: '', investments: '' });
    }
  }

  saveForm() {
    console.log("Form saved!");
  }
  onBack() {
    this.Route.navigate(['/budget-planner/dashboard']);
  }

  adddata() {

  }


}
