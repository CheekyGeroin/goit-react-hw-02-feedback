import React,{ Component } from 'react';
import Section from './Section/Section';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 
    goodIncrement = () => {
    this.setState(prevState => ({
        good: prevState.good + 1
    }))
  }
  neutralIncrement = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1
    }))
  }
  badIncrement = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1
    }))
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.ceil(this.state.good * 100 / this.countTotalFeedback())
  }


  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <div>
          <Section title="Leave your feedback" />
          <FeedbackOptions onGoodIncrement={this.goodIncrement} onNeutralIncrement={this.neutralIncrement} onBadIncrement={this.badIncrement} />
        </div>
        <div>
          <Section title="Statistics" />
          <Statistics good={good} neutral={neutral} bad={bad} total={total}  positivePercentage={percentage}/>
        </div>
      </div>
    );
  }
}
export default App;
