import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styleUrls: ['./user-detailes.component.scss']
})
export class UserDetailesComponent implements OnInit {
  public ELEMENT_DATA: User[] = [];
  constructor(private us: UserService,private router:Router) { }

  ngOnInit(): void {
    this.displayAllUsers();
  }
  displayedColumns: string[] = ['id', 'userName', 'password', 'email', 'firstName', 'lastName', 'Delete', 'update'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);


  public displayAllUsers() {
    this.us.getAllUsers().subscribe(
      (response) => {
        this.dataSource.data = response as User[];
        console.log(this.dataSource)
        console.log(response)
      }, (error) => {
        console.log(error)
      }
    )
  }

  public onDelete(id: any) {

    this.us.deleteId(id).subscribe(
      (response) => {
        console.log(response)
        this.displayAllUsers();
      }, (error) => {
        console.log(error)
      }
    )
  }

 public onUpdate(id:any)
 {
this.router.navigate(['/signup',id]);
  }
}




