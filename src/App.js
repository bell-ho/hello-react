import React, { Component } from 'react';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

/*const App = () => {
   return (
      <MyComponent name='react' fnumber={3}>
         리액트
      </MyComponent>
   );
};*/

/*const App = () => {
   return (
      <Counter></Counter>
   );
};*/

/*const App = () => {
   return (
      <Say></Say>
   );
};*/

/*
const App = () => {
   return(
      <EventPractice></EventPractice>
   )
}
*/

/*class App extends Component{
   render() {
      return (
         <div>
            <ScrollBox ref={(ref) => this.scrollBox = ref} />
            <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑</button>
         </div>
      );
   }
}*/

/*
class App extends Component {
   render() {
      return (
         <div>
            <IterationSample />
         </div>
      );
   }
}
*/

function getRandomColor() {
   return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
   state = {
      color: '#000000'
   };

   handleClick = () => {
      this.setState({
         color: getRandomColor()
      });
   };

   render() {
      return (
         <div>
            <button onClick={this.handleClick}>랜덤색상</button>
            <ErrorBoundary>
               <LifeCycleSample color={this.state.color} />
            </ErrorBoundary>
         </div>
      );
   }
}

export default App;