import React, {Component} from 'react';
import '../body.css';
import './CreditCard.css'

export default class CreditCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            interest: 0,
            cardNickname: '',
            cardBalance: 0,
            interestRate: 0,
            monthlyPayment: 0,
            cards: [{cardNickname: "Apple Test Card", balance: 10000, interestRate: 15.99, monthlyPayment: 500, months: 0, totalInterest: 0}]
        }
    }

    caluclation(data){
        data.map(card =>{
            while(card.balance > 0){
                card.balance -= card.monthlyPayment;
                card.months += 1;
                let tempInterest = (card.balance * (card.interestRate / 1200));
                card.totalInterest += (tempInterest)
                card.balance += tempInterest;
            }
            this.state.interest += card.totalInterest;
        })
        return data;
    }
    removeCard(id){
        for(let i=0; i <= this.state.cards.length; i++){
            if(this.state.cards[i].cardNickname === id){
                this.state.cards.splice(i, 1)
                this.setState({cards: [...this.state.cards]})
                return;
            }
        }
    }

    renderCalculations = () =>{
        const calc = this.caluclation(this.state.cards);
        return calc.map(card =>{
            return(
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card-panel teal">
                            <span className="white-text">
                                <h5>{card.cardNickname}</h5>
                                <div>Months to pay off: {card.months}</div>
                                <div>Interest paid: ${Math.round(card.totalInterest)}</div>
                                <button onClick={()=>this.removeCard(card.cardNickname)} className="waves-effect waves-light btn-small red lighten-3"><i className="material-icons">delete</i></button>
                            </span>                         
                        </div>
                    </div>
                </div>
            )
        })
    }
    addCard(e){
        e.preventDefault();
        this.setState({
            cards: [...this.state.cards, {cardNickname: this.state.cardNickname, balance: Number(this.state.cardBalance), interestRate: Number(this.state.interestRate), monthlyPayment: Number(this.state.monthlyPayment), months: 0, totalInterest: 0}]
        })
        document.getElementById('creditCardForm').reset();
    }
     render(){
        return(
            <div className="container row body-size cc-body">
                <h3>Payoff Calculator</h3>
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
                    <button onClick={(e)=> this.addCard(e)} className="waves-effect waves-light btn"><i className="material-icons left">add</i>Add card</button>
                </form>
                <div>{this.renderCalculations()}</div>
            </div>
        )
    }
}

