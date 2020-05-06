import React, { Component } from 'react';
import '../body.css'
import './facts.css'
import factImage from '../../images/statistic.jpg'

export default class Facts extends Component{
    constructor(props){
        super(props);
        this.state = {
            factsList: [
                {category: '', fact: `Nearly one in 10 workers making $100,000+ live paycheck to paycheck`, image: ''},
                {category: '', fact: 'More than 1 in 4 workers do not set aside any savings each month', image: ''},
                {category: '', fact: 'Nearly 3 in 4 workers say they are in debt - and more than half think they always will be', image: ''},
                {category: '', fact: '28% of workers making $50,000-$99,999 usually or always live paycheck to paycheck, and 70% are in debt', image: ''},
                {category: '', fact: 'The survey also found that 32% of the nearly 3,500 full-time workers surveyed use a budget and only 56% save $100 or less a month.', image: ''},
                {category: '', fact: '78% of U.S. workers are living paycheck to paycheck.', image: ''},
                {category: '', fact: 'Americans hold over $1 trillion in credit card debt ($1,096,100,000,000)', image: ''},
                {category: '', fact: 'Non-revolving debt (loans) total over $3.1 trillion ($3,129,400,000,000)', image: ''},
                {category: '', fact: 'Credit card balances carried from one month to the next hit $466.2 billion in December 2019', image: ''},
                {category: '', fact: 'Credit card debt has increased more than 7% in the past year and almost 37% in the past five years', image: ''},
                {category: '', fact: 'Credit card interest adds up. U.S. households carrying credit card debt from month to month will pay interest of $1,162, on average, this year. A couple with children will pay an average of $1,382 in annual credit card interest charges.', image: ''},
                {category: '', fact: 'As of August 2019, the average APR on credit card accounts accruing interest was 16.97%, according to the Federal Reserve Bank of St. Louis.', image: ''},
                {category: '', fact: 'Over 40% of Americans have less than $10,000 saved for when they retire', image: ''},
                {category: '', fact: '56% of millennials don’t have any money saved in a retirement account. The numbers were only a little less bleak for older generations: 39% of both Baby Boomers and Gen-Xers have nothing put away for their golden years', image: ''},
                {category: '', fact: 'Only 24% of millennials demonstrate basic financial literacy', image: ''},
                {category: '', fact: 'A Gallup poll found only about 1/3 of Americans (32%) maintain a household budget', image: ''},
                {category: '', fact: 'About 77 million Americans, or 35% of adults with a credit file, have debt in collections reported in their credit files, according to the Urban Institute', image: ''},
                {category: '', fact: 'Nearly one-third of Americans pay the minimum due on their credit card each month', image: ''},
                {category: '', fact: 'Americans paid banks $104 billion in credit card interest and fees in 2018, up 11% from the prior year, and up 35% over the last five years', image: ''},
                {category: '', fact: '43% of Americans spend more than they receive each month borrow and use credit cards to finance the shortfall', image: ''},
                {category: '', fact: 'Fico scores range from 300-850 with the average score in 2019 at 703', image: ''},
                {category: '', fact: 'Odds of winning the lottery 1 in 13,983,816', image: ''},
                
            ]
        }
    }

    renderFacts(){
        let count = 1;
        return this.state.factsList.map(fact =>{
            switch(count){
                case 1: 
                    count = 2;
                    return (
                        <div className="col s12 m7">
                            {/* <h5 className="header">Title</h5> */}
                            <div className="card small horizontal">
                                <div className="card-image">
                                    <img src={factImage}></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        {fact.fact}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                case 2: 
                    count = 1;
                    return (
                        <div className="col s12 m7">
                            {/* <h5 className="header">Title</h5> */}
                            <div className="card small horizontal">
                            <div className="card-stacked">
                                    <div className="card-content">
                                        {fact.fact}
                                    </div>
                                </div>
                                <div className="card-image">
                                    <img src={factImage}></img>
                                </div>
                                

                            </div>
                        </div>
                    )
                default:
                    count = 1;
                    return (
                        <ul className="collection">
                            <li className="collection-item teal lighten-5">{fact.fact}</li>
                        </ul>
                        )
            }
        })
    }
    
    
    render(){
        return (
            <div className="container facts-background">
                <div className="page-title">Facts</div>
                <div className="body-size ">
                    {this.renderFacts()}
                </div>
            </div>
            
        )
    }
}