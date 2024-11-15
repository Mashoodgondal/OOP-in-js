// -----------constructore---------

  // class StudentForm {
  //   constructor(name, id, address) {
  //     this.studentname = name;
  //     this.identity = id;
  //     this.address = address;
  //   }

  //   submit() {
  //     alert(
  //       this.studentname +
  //       ", your form is submitted with ID " +
  //       this.identity +
  //       " and address is " +
  //       this.address
  //     );
  //   }

  //   cancel() {
  //     alert(
  //       this.studentname + ", your form is canceled with ID " + this.identity
  //     );
  //   }
  // }

  // let aliForm = new StudentForm("Ali", "01", "FSD");
  // aliForm.submit();
  // aliForm.cancel();




  // --------------inheritance------------------


//   class Fish{
//     constructor(name,weight){
//       this.name=name
//       this.weight=weight
//     }
//     displayinfo(){
//       alert("Fish name is: "+this.name+"  and weight is: "+this.weight+"kg")
//     }
//   }

//   class Type extends Fish{
//     constructor( name,weight,type){
// super(name,weight)
// this.type=type
//     }
//     fulliformation(){
//       alert("Fish name is: "+this.name+"  and weight is: "+this.weight+"kg Type is "+this.type)
//     }
//   }

// let Rahu= new Fish("Rahu","2")
// let Bam = new Type("bam","3","fry")
// let finger = new Type("finger","1","grilled")
// Rahu.displayinfo()
// Bam.fulliformation()
// finger.fulliformation()




// -----------Function OverRider-------------

// class Employee{
//   constructor(name,address){
//     this.name=name
//     this.address=address
//   }
//   submit(){
//     alert(this.name+" is from  "+ this.address)
//   }

// }

// class Other extends Employee{
//   constructor(name,address,id){
//     super(name,address , id)
//     this.id=id
//   }
//   total(){
// alert(this.name +"  is from  "+ this.address+"  totals are  "+this.id)
//   }
//   submit(){
//     alert(this.name+" is from  "+ this.address +" and id is"+ this.id)
//   }

// }
// let ahmed = new Employee("ahmed","FSD")
// let ali = new Other("ali","fsd","2")
// ahmed.submit()
// ali.submit()
// ali.total()


// -------------Constructor overriding---------------


// class Student{
//   constructor(name,age){
//     this.name=name
//     this.age=age
//   }
//   submit(){
//     alert("Name is: "+this.name +" and age is: "+this.age)
//   }
// }
// class Cr extends Student{
//   constructor(name,age ,address){
//     super(name,age )
//     this.address=address
//   }
//   submit(){
//     alert("our CR name is: "+this.name+" and age is "+this.age +" and address is "+this.address)
//   }
//  
// }

// let ali = new Student("ali","23")
// let ahmed = new Cr("ahmed","21","MLT")
// ali.submit()
// ahmed.description()



// -------------------Question -------------------

// Suppose you want to add a new method description() in the Animal class that returns a string describing the animal's name.
//  Override this method in the Dog class so that it includes both the name and the breed of the dog
//   in the description. How would you implement this, and how can you use the super keyword to avoid
//    duplicating code?


 class Student{
  constructor(name,age){
    this.name=name
    this.age=age
  }
  submit(){
    alert("Name is: "+this.name +" and age is: "+this.age)
  }
  description(){
    return "our CR name is: "+this.name+" and age is "+this.age
  }
  
}
class Cr extends Student{
  constructor(name,age ,address){
    super(name,age )
    this.address=address
  }
  submit(){
    alert("our CR name is: "+this.name+" and age is "+this.age +" and address is "+this.address)
  }
  description(){
    let patentDescription = super.description()
    alert(patentDescription +" and address is "+this.address)
  }
}

let ali = new Student("ali","23")
let ahmed = new Cr("ahmed","21","MLT")
ali.submit()
ahmed.description()
