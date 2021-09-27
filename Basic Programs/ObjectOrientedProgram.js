 class Student{
    constructor(name,rollno){
        this.name = name;
        this.rollno=rollno;
    }   
 }
 class Person extends Student{
     constructor(name,rollno,clgname){
         super(name,rollno);
         this.clgName = clgname;
     }
 }

 const person = new Person("gopi" ,101 ,"ggj");
 console.log(person);
