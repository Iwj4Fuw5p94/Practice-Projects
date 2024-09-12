import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators,FormGroup, FormControlName, FormControl } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  show:string="";

  selectedOption: string= "";
    isactivate: boolean = false;
showB:string="";

    onshowA(option:string){
      this.show=option;
      this.selectedOption=option;
    }

  ontoggle(){
    this.isactivate=!this.isactivate;
  }


}
