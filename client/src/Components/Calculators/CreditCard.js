import React, {Component} from 'react'

export default class CreditCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            interest: 0,
            testData: [
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
            ],
            cards: []
        }
    }

    caluclation(testData){
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
            this.state.interest += card.totalInterest;
        })
        return testData;
    }

    renderCalculations = () =>{
        const calc = this.caluclation(this.state.testData);
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
    renderCards(){
        return this.state.cards.map(card =>{
            return(
                <div>
                    <label>Card</label>
                    <input label="Card"></input>
                </div>
            )
        })
    }

    addCard(){
        
        this.setState({
            cards: [...this.state.cards, {card: '', balance: 0, interest: 0, monthlyPayment: 0, months: 0, totalInterest: 0}]
        })
        console.log(this.state.cards)
        
    }
    render(){
        return(
            <div className="container">
                {this.renderCards()}
                
                <button onClick={()=>{this.addCard()}}>Add Card</button>
               
                
                
                {/* {this.renderCalculations()} */}
            </div>
        )
    }
}
