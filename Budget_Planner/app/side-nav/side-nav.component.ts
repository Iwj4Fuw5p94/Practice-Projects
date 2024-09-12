import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  issidebar = false;
  // Income
  lastmonthincomne=['janury:$1200','february:$1500','march:$1200'];
  currentmonthincome:string='$1200';

  // Expense
  lastmonthexpense=['janury:$100','february:$600','march:$1200'];
  currentmonthexpense:string='$1500';
  // To Do Transaction
  todotransaction=['pay electricity bill','submit monthly report', 'buy groceries','Call insurance company']
// totalamount
totalcurrentmonthincome=1500;
totalcurrentmonthexpense=900;
  constructor(private router:Router){}

  onincome(){
    this.router.navigate(["/income"]);
    alert("you will be redirected to income page!")
  }
  onexpense(){
    this.router.navigate(["/expense"]);
    alert("you will be redirected to expense page!")
  }
  ontodolist(){
    this.router.navigate(['/todo']);
    alert('You are going to Todo List Page');
  }
  get totalincome():number{
    let totalamount=this.totalcurrentmonthincome-this.totalcurrentmonthexpense;
   
    return totalamount;
  }
  togglemenu() {
    this.issidebar = !this.issidebar;
  }
  hidesidebar() {
    this.issidebar = false;
  }
}
