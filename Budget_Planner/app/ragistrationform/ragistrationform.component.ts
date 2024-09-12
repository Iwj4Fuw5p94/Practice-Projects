import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Form, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ragistrationform',
  templateUrl: './ragistrationform.component.html',
  styleUrls: ['./ragistrationform.component.css']
})
export class RagistrationformComponent {

  ragistrationform!: FormGroup;
  loginform!: FormGroup;
  activateform:string='';


  constructor(private  formBuilder: FormBuilder, private router:Router) {}
  ngOnInit() {
    this.createRagistrationFrom();
  }
  
  createRagistrationFrom(){
     this.ragistrationform = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName : ['',Validators.required ],
      password:['',Validators.required],
      email: ['',Validators.required],
     })
  }

  get f() {
     return this.ragistrationform?.controls; }

  onsubmit(){
    // event.preventDefault();
    this.ragistrationform?.value;
    if(this.ragistrationform?.invalid){
       console.log("Form is invalid")
       alert("please enter some value")
    }
    else{
    console.log("Registrations Details",this.ragistrationform.value);
    alert("data successfully inserted");
    }
  }
  navigate(){
    this.router.navigate(['/login']);
  }
  loginnavigate(){
    if(this.ragistrationform.valid){
      alert("you are now go the login page")
      this.router.navigate(['/login'])
    }
  }
  }