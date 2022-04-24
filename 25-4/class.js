
class person {

    constructor(firstName, secondName , salary ){


        this .firstName = firstName ;
        this.secondName = secondName; 
        this.salary = salary ;


    }
}

const information = new person('Kamal', 'Uddin', 20000);

console.log(information)

const heroPerson = new person('uddin', 'Rahman', 5000)

console.log(heroPerson);


function person1(Name){


    this.Name = Name ;


}

const info = new person1('Rahman');

console.log(info)