

const personalInformation ={

    first : ' Kamal',

    secondName : ' Rahman',

    salary : 10000 ,


     getName: function (){


        console.log(this.first , this.secondName);

    },

    chargeAmount: function(amount , tips , tax){


        this.salary = this.salary - amount-tips-tax ;

        return this.salary
    }
  
    
}
const friendInfo = {

    first : ' Jamal',

    salary : 2000,

}



// const bill = personalInformation.chargeAmount.bind(friendInfo)

// bill(390)
// console.log(friendInfo.salary)
//   //personalInformation.chargeAmount(1000)

// //console.log(personalInformation.salary)

personalInformation.chargeAmount.call(friendInfo,200,100,10);
personalInformation.chargeAmount.call(friendInfo,3000,300, 500);

console.log(friendInfo.salary);
