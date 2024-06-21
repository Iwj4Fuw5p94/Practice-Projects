import { Component } from '@angular/core';
import { player } from '../player.model';
import { PlayerService } from '../player.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-getplayer',
  templateUrl: './getplayer.component.html',
  styleUrls: ['./getplayer.component.css']
})
export class GetplayerComponent {
  totalMatches: number | null = null;
  searchform!:FormGroup;
  country:string='';
  total:number=0;


  constructor(private formBuilder:FormBuilder,private playerservice:PlayerService){}

  // ngOnInit(){
  //   this.creatForm();
  // }

  // creatForm(){
  //   this.searchform=this.formgroup.group({
  //     country:['',Validators.required]
  //   })
  //   }

  //   onSubmit(){
  //     if(this.searchform.valid){
  //       alert("value is right")
  //       console.log(this.fetchTotalMatches);
  //     }
  //   }
  ngOnInit(): void {
    this.searchform = this.formBuilder.group({
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
    });
  }

  fetchTotalMatches(): void {
    if (this.searchform.valid) {
      const countryControl = this.searchform.get('country');
      if (countryControl) {
        const country = countryControl.value ;  // Ensure the value is a string
        this.playerservice.getplayer(country).subscribe(
          (totalMatches: number) => {
            this.totalMatches = totalMatches;
            console.log('Total matches for ' + country + ': ' + totalMatches);
          },
          (error) => {
            console.error('Error fetching total matches', error);
          }
        );
      } else {
        console.warn('Country control is not found in the form');
      }
    } else {
      console.warn('Form is invalid');
    }
  }

}
