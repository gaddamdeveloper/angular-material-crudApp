import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

public saveUser(user:any){
  return this.http.post("http://localhost:3000/posts",user)
}
public getAllUsers(){
  return this.http.get("http://localhost:3000/posts")
}
 public deleteId(id:any){
   return this.http.delete(`http://localhost:3000/posts/${id}`)
 }

 public update(id:any,user:any){
  return this.http.put(`http://localhost:3000/posts/${id}`,user)
 }

 public getUserById(id:any){
  return this.http.get(`http://localhost:3000/posts/${id}`)

}

}
