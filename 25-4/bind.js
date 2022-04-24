
const newPerson = {

    firstName: ' Kamal ',
    secondName: 'Hussian',

    salary: 53000,

    phone: '01312432',

    Address: 'Tillaghore',


    getInfo: function () {


        console.log(this.Address, this.phone, this.phone);

    },

    callCharge: function (amount) {

        this.salary = this.salary - amount;
    }
}

// bind method 
const abcIno = {

    employeName: 'Kamal',

    salary: 10000,

}

//console.log(newPerson.firstName)
const abcInfo = newPerson.callCharge.bind(abcIno);
abcInfo(5000);
console.log(abcIno.salary)
newPerson.callCharge(10000)

console.log(newPerson.salary);