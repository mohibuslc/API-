

const personProfile = {


    firstName : ' Mohammed',

    MiddleName : ' Kamal',

    lastName : ' Uddin',

    salary : 19000 ,

    getfullname: function(){


        console.log(this.firstName , this.MiddleName)
    },
 

    callExpance: function(amount){

        this.salary = this.salary - amount ;


        return this.salary;
    }
    
}

personProfile.callExpance(1000)

console.log(personProfile.salary)