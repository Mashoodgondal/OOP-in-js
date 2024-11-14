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


  class Fish{
    constructor(name,weight){
      this.name=name
      this.weight=weight
    }
    displayinfo(){
      alert("Fish name is: "+this.name+"  and weight is: "+this.weight+"kg")
    }
  }

  class Type extends Fish{
    constructor( name,weight,type){
super(name,weight)
this.type=type
    }
    fulliformation(){
      alert("Fish name is: "+this.name+"  and weight is: "+this.weight+"kg Type is "+this.type)
    }
  }

let Rahu= new Fish("Rahu","2")
let Bam = new Type("bam","3","fry")
let finger = new Type("finger","1","grilled")
Rahu.displayinfo()
Bam.fulliformation()
finger.fulliformation()