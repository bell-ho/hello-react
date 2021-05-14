import React, { Component } from 'react';

//state란 컴포넌트 내부에서 바뀔 수 있는 값을 의미
class Counter extends Component {
   constructor(props) {
      super(props);
      // state 초기값 설정
      this.state = {
         number : 0,
         fnumber: 0
      };
   }

   render() {
      const { number, fnumber } = this.state;
      return (
         <div>
            <h1>{number}</h1>
            <h2>2씩올라감 : {fnumber}</h2>
            <button
               onClick={() => {
                  //this.state를 사용하여 state에 새로운 값을 넣을 수 있다
                  this.setState({ number: number + 1 });
                  this.setState({ fnumber: fnumber + 2 },
                     () => {
                        console.log('방금 setState가 호출됨');
                        console.log(this.state);
                     });
               }}>숫자올리기
            </button>
         </div>
      );
   }
}

export default Counter;