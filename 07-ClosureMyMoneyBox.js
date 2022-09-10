function moneyBox(){
    let saveCoins=0;
    function countCoins(coins){
        saveCoins+=coins;
        console.log(`MoneyBox:$${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox=moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxana=moneyBox();
moneyBoxana(3);
moneyBoxana(3);
moneyBoxana(7);

