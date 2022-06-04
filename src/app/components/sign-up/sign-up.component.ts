import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  public selectedId: any;
  constructor(private us: UserService, private fb: FormBuilder, public activate: ActivatedRoute,
   private  router: Router) { }
  ngOnInit(): void {
    this.login();
    this.selectedId = this.activate.snapshot.params['id'];
    console.log(this.selectedId)
  }
  public login() {
    this.signupForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],

    })
  }


  public onSubmit() {
    this.us.saveUser(this.signupForm.value).subscribe(
      (response) => {
        alert("registered succefully.....!")
        this.signupForm.reset();
        console.log(response);
      }, (error) => {
        console.log(error)
      }
    )
  }
  public onUpdate(){
    this.us.getUserById(this.selectedId).subscribe(
      (response) => {
        console.log(response)
        this.signupForm.setValue(response)
      }, (error) => {
        console.log(error)
      }
    )
  }
public  onSave(){
  this.us.update(this.selectedId,this.signupForm.value).subscribe(
    (response) => {
      console.log(response)
      this.router.navigate(['user'])
      alert("updated successfully")
    }, (error) => {
      console.log(error)
    }
  )

  }

}


