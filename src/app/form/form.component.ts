import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import{DataService} from '../data.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    id:number=0;
    name:string;
    dob:number;
    address: string;
    phonenum:number;
    degree:string;
    marks:number;
    stream:string;
    college:string;
    newBook:Book;
    constructor(private svc:DataService){}
  
    ngOnInit() {}
    createBook(){
      ++this.id;
      this.newBook = new Book(this.id, this.name, this.dob,this.address, this.phonenum,this.degree,this.marks,this.stream,this.college);
      console.log(this.newBook);
      this.svc.create(this.newBook);   
    }

reset(){
  this.name="";
  this.dob=0;
  this.address="";
  this.phonenum=0;
 
}
}