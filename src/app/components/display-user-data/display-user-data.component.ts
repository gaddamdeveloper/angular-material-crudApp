import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {
  public selectedId: any;
  public signupForm: any;
  public userArry:any=[];

  constructor(private activate:ActivatedRoute,private us:UserService) { }
  ngOnInit(): void {
this.selectedId=this.activate.snapshot.params['id'];
console.log(this.selectedId);
this.onUpdate();
  }
  public onUpdate(){
    this.us.getUserById(this.selectedId).subscribe(
      (response) => {
       this.userArry=response;
        console.log(response)
        // this.signupForm.setValue(response)
      }, (error) => {
        console.log(error)
      }
    )
  }


}
