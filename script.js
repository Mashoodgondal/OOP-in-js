
  class StudentForm {
    constructor(name, id, address) {
      this.studentname = name;
      this.identity = id;
      this.address = address;
    }

    submit() {
      alert(
        this.studentname +
        ", your form is submitted with ID " +
        this.identity +
        " and address is " +
        this.address
      );
    }

    cancel() {
      alert(
        this.studentname + ", your form is canceled with ID " + this.identity
      );
    }
  }

  let aliForm = new StudentForm("Ali", "01", "FSD");
  aliForm.submit();
  aliForm.cancel();


