

export class Book {
    id:number;
    name:string;
    dob:number;
    address: string;
    phonenum:number;
    degree:string;
    marks:number;
    stream:string;
    college:string;
   
    

constructor(id:number, name:string,dob:number,address:string, phonenum:number,degree:string,marks:number,stream:string,college:string){
    this.id = id;
    this.name = name;
    this.dob=dob;
    this.address= address;
    this.phonenum = phonenum;
    this.degree=degree;
    this.marks=marks;
    this.stream=stream;
    this.college=college;
}
}