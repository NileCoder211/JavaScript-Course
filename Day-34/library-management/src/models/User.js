export class User{
    constructor(name, email){
      this.id = crypto.randomUUID(); // this will generate random ids
      this.name = name;
      this.email = email;
    }

    getRole(){
        return "User"
    }
}