import React, {Component} from 'react';
import '../body.css';

export default class CreditCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            interest: 0,
            cardNickname: '',
            cardBalance: 0,
            interestRate: 0,
            monthlyPayment: 0,
            cards: []
        }
    }

    caluclation(data){
        console.log(data)
        data.map(card =>{
            while(card.balance > 0){
                card.balance -= card.monthlyPayment;
                card.months += 1;
                let tempInterest = (card.balance * (card.interestRate / 1200));
                card.totalInterest += (tempInterest)
                card.balance += tempInterest;
            }
           
        })
        data.map(card =>{
            this.state.interest += card.totalInterest;
        })
        return data;
    }

    renderCalculations = () =>{
        const calc = this.caluclation(this.state.cards);
        return calc.map(card =>{
            return(
                <div>
                    <div>{card.cardNickname}</div>
                    <div>Months to pay off: {card.months}</div>
                    <div>Interest paid: ${Math.round(card.totalInterest)}</div>
                    <br/>
                    
                    <div>---------</div>
                </div>
            )
        })
    }
    addCard(e){
        console.log("saving cards")
        e.preventDefault();
        this.setState({
            cards: [...this.state.cards, {cardNickname: this.state.cardNickname, balance: Number(this.state.cardBalance), interestRate: Number(this.state.interestRate), monthlyPayment: Number(this.state.monthlyPayment), months: 0, totalInterest: 0}]
        })
        document.getElementById('creditCardForm').reset();
    }
    renderCards(){
        console.log("rendering cards", this.state.cards)
        return this.state.cards.map(card => {
            return (
                <div key={card.cardNickname}>
                    <div>{card.cardNickname}</div>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="container row body-size">
                <h3>Contact Us</h3>
                <form id="creditCardForm" className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <label>Card Nickname</label>
                            <input type="text" onChange={(e)=>this.setState({cardNickname: e.target.value})}></input>
                        </div>
                        <div className="input-field col s4">
                            <label>Card Balance</label>
                            <input type="text" onChange={(e)=>this.setState({cardBalance: e.target.value})}></input>
                        </div>
                        <div className="input-field col s4">
                            <label>Interest Rate</label>
                            <input type="text" onChange={(e)=>this.setState({interestRate: e.target.value})}></input>
                        </div>
                        <div className="input-field col s4">
                            <label>Monthly Payment</label>
                            <input type="text" onChange={(e)=>this.setState({monthlyPayment: e.target.value})}></input>
                        </div>
                    </div>
                    <button onClick={(e)=> this.addCard(e)}>Add card</button>
                </form>
                <div>{this.renderCalculations()}</div>
            </div>
        )
    }
}

