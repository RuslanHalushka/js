
function wakeUp(woke){
    console.log('8 oclock')

    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            if (woke){
                resolve('what a nice day i will have today')
            }else {
                reject('I want to slip');
            }
        },1000)
    })
}

// console.log('hello')

function buyTickets(sumIcanPay){
    console.log('I Want to fly to the Bali');
    return new Promise((resolve, reject) => {
        let ticketSum = 2500;
        setTimeout(() =>{
            if (sumIcanPay > ticketSum){
                resolve(sumIcanPay)
            }else {
                reject('I dont have a nessesary sum')
            }
        }, 500)
    })
}


function whatPlane(mySumOfMoney){
    return new Promise(resolve => {
        setTimeout(() =>{
            let smallPlane = 2500;
            let boing = 3000;
            if (mySumOfMoney >= boing){
                console.log('I will fly on Boing')
                resolve(mySumOfMoney - boing)
            }else {
                console.log('I will fly on small Plane')
                resolve(mySumOfMoney - smallPlane)
            }
        }, 1500)
    })
}

function onWhatVilla(sumAfterBuyingTickets, sumForVilla){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let soBeautifullVilla = 2500;
            if (sumForVilla < soBeautifullVilla){
                console.log('This money is not enough, ' +
                    'maybe after taking from balance for buying tickets?')
                if (sumForVilla + sumAfterBuyingTickets >= soBeautifullVilla){
                    console.log(sumAfterBuyingTickets + sumForVilla)
                    resolve('So nice, i have nessesary sum ' +
                        'and i will live at very beautifull villa')
                }else {
                    reject('I need to find something cheaper')
                }
            }else {
                resolve('So nice, i have nessesary sum ' +
                    'and i will live at very beautifull villa')
            }
        }, 2000)
    })
}





wakeUp(true)
    .then(value => {
        console.log(value)
        return buyTickets(2700)
    })
    .then(value => {
        console.log(`Yeah I will fly to the Bali because I have ${value} dolars`)
        return(whatPlane(value))
    })
    .then(value => {
        console.log(`${value} dolars is the sum i have after buying the ticket`)
        return onWhatVilla(value, 2300)
    })
    .then(value => {
        console.log(value)
    })
    .catch(reason => {
        console.log('------------')
        console.log(reason)
        console.log('------------')
    })
