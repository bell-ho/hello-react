import React, { Component } from 'react';
import IterationSample from './IterationSample';

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

class App extends Component {
   render() {
      return (
         <div>
            <IterationSample />
         </div>
      );
   }
}

export default App;