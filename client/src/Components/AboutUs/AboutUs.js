import React, {Component} from 'react';
import './AboutUs.css';
import '../body.css';

class AboutUs extends Component{
    render(){
        return(
            <div className="container body-size">
                <h2>About Us</h2>
                <p>
                We look to our parents as our first educators. They teach us to wash our hands, eat our vegetables and look both ways before crossing the street. Unfortunately, they also taught us everything we know about finances. Most Americans have not been taught how to build, manage and preserve wealth. And as a result only 57% of Americans are considered financially literate. A 57% literacy places Americans on par with Botswana, a country whose economy is over 1,100% smaller than ours!
                </p>
                <p>
                Here at Finance On Demand, we believe that understanding and implementing the principles of personal finance is one of the most important educational lessons you can undertake. We also believe that financial freedom is the difference between a life of purpose and security, or a life of frustration, pain and unhappiness. Money woes affect almost every aspect of our daily lives and even affect our relationships, as it’s the number one reason for disagreement and divorce. Most people get uncomfortable when the topic of money is brought up as it has unfortunately become a taboo topic in our society. We shy away from conversations about our income, debt and overall ability to manage our finances on our own. We believe the reason for this social custom is the overall lack of understanding of personal finance principles. 
                </p>
                <p>
                Finance On Demand was started to provide financial education and as a result, financial freedom to the 43% of Americans who either skipped out on, or never took Financial Freedom 101 in college (because it wasn’t provided). With almost 18 years of financial industry experience, 3 college degrees and a lifetime dedicated to mastering money, Finance On Demand is well suited to be your “money guy”. 
                </p>
                <p>Studies have shown that people who receive financial consulting demonstrate:</p>
                <ul>
                    <ol>- Increased financial confidence</ol>
                    <ol>- Better money management skills</ol>
                    <ol>- Higher savings</ol>
                    <ol>- Lower debt </ol>
                    <ol>- Higher credit scores</ol>
                    <ol>- Improved goal attainment</ol>
                </ul>
            </div>
        )
    }
}

export default AboutUs