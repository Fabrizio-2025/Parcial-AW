export class Person {
  id: number;
  name: string;
  birthdate: string;
  gender:string;
  adress:string;
  phone:string;
  email:string;

  constructor(id: number, name: string, birthdate: string,gender:string,adress:string,phone:string,email:string) {
    this.id = id;
    this.name = name;
    this.birthdate = birthdate;
    this.gender = gender;
    this.adress=adress;
    this.phone=phone;
    this.email = email;
  }
}
