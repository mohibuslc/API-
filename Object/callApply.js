

const personProfile = {


    firstName : ' Mohammed',

    MiddleName : ' Kamal',

    lastName : ' Uddin',

    salary : 19000 ,

    getfullname: function(){


        console.log(this.firstName , this.MiddleName)
    },
 

    chargeBill: function(amount){

        this.salary = this.salary - amount ;


        return this.salary;
    }
    
}

//personProfile.callExpance(1000)

//console.log(personProfile.salary)

const friendlyPerson={

    firstName : 'Jamal',

    secondName: 'Hero',

    salary : 2000
}

// bind metod apply 

const bill = personProfile.chargeBill.bind(friendlyPerson)

bill(2000)
bill(3000)


console.log(friendlyPerson)
