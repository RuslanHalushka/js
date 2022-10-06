
function wakeUp(woke, cb){
    console.log('8 oclock');
    setTimeout(() =>{
        if (woke){
            cb(null, 'what a nice day i will have today');
        }else {
            cb('I want to slip', null);
        }

    }, 1000)
}

function buyTickets(sumOfTickets, cb){

    console.log('I Want to fly to the Bali');
    setTimeout(() =>{
        let mySumOfMoneyIcanPay = 4500;
        if (sumOfTickets > mySumOfMoneyIcanPay){
            cb('It is so costly');
        }else {
            cb(null, mySumOfMoneyIcanPay);
        }
    }, 500)

}

function onWhatPlane(mySum, cb){
    setTimeout(() =>{
        let boing = 3000;
        let smallPlane = 2500;
        if (mySum => boing){
            cb(null, mySum - boing);
        }else {
            cb(mySum - smallPlane)
        }
    }, 2000)
}

function bali(balance, priceForVilla, cb){
    console.log('It is so beautiful here');
    setTimeout(()=>{
        let sumOfMoneyForVilla = 2000;
        if (priceForVilla <= balance + sumOfMoneyForVilla){
            cb(null, balance + sumOfMoneyForVilla - priceForVilla);
        }else {
            cb(balance + sumOfMoneyForVilla);
        }
    },1500)
}


wakeUp(true, (err, data) =>{
    if (err){
        console.log('it is so early', err)
    } else{
        console.log(data);

        buyTickets(2500, (err, sum) =>{
            if (err){
                console.log(err)
            }else {
                console.log(`I have a nessesary sum. It is ${sum}`)

                onWhatPlane(sum, (err, balance) =>{
                    if (err){
                        console.log('I will fly on a small plane and my balance is', err);
                    }else {
                        console.log('I have money for boing 750. I will fly on it and my balance after that is ', balance);
                        bali(balance, 3000, (err, sum) =>{
                            if (err){
                                console.log('I want to find another one because i have only', err);
                            }else {
                                console.log(`What a nice villa I bought and I have ${sum} dolars else`)
                            }
                        })
                    }
                })
            }
        })
    }

})
