import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To The Angular';
  parentData:String="Hi this is Parent Data ";
  TestGroup:FormGroup | undefined;



  // name:string='';
  // id:any;


  // counter=0;
  // data:any;


  // onsubmit(){
  //   console.log(this.name + " " + this.id);
  //   alert("your data is successfully submitted")
  // }
// counter
  // counterf(type:string){
  //   // this.counter++;
  //   type==="increament"?this.counter++:this.counter--;
  // }

  // template driven form
  // getformdata(data:any){
  //   console.log(JSON.stringify(data))
  //   alert("succesfully submitted")
  // }

profileForm=new FormGroup({
  firstName:new FormControl(''),
 lastName : new FormControl('')

});


onsubmit(){
  console.log(this.profileForm.value)
  alert("data successfully submitted")
}
f(){
  return this.profileForm.controls;
}

}

