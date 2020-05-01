import React from 'react'

const CreditCard = props =>{
    let interest = 0;
    let testData = [
        {
            balance: 1000,
            interest: 14.99,
            monthlyPayment: 50,
            months: 0,
            totalInterest: 0
        },
        {
            balance: 500,
            interest: 7.99,
            monthlyPayment: 50,
            months: 0,
            totalInterest: 0
        },
        {
            balance: 2000,
            interest: 10.99,
            monthlyPayment: 50,
            months: 0,
            totalInterest: 0
        },
        {
            balance: 5000,
            interest: 21.99,
            monthlyPayment: 250,
            months: 0,
            totalInterest: 0
        },
    ]

    function caluclation(testData){
        testData.map(card =>{
            while(card.balance > 0){
                card.balance -= card.monthlyPayment;
                card.months += 1;
                let tempInterest = (card.balance * (card.interest / 1200));
                card.totalInterest += (tempInterest)
                card.balance += tempInterest;
            }
           
        })
        testData.map(card =>{
            interest += card.totalInterest;
        })
        return testData;
    }

    const renderCalculations = () =>{
        const calc = caluclation(testData);
        return calc.map(card =>{
            return(
                <div>
                    Months to pay: {card.months}
                    <br/>
                    Interest paid: ${Math.round(card.totalInterest)}
                    <div>---------</div>
                </div>
            )
        })
    }




    return(
        <div>
            {renderCalculations()}
        </div>
    )
}

export default CreditCard