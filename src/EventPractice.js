import React, { useState } from 'react';

/*class EventPractice extends Component {

   state = {
      message : '',
      username: ''
   };

   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   handleClick = () => {
      alert(this.state.username + ': ' + this.state.message);
      this.setState({
         message : '',
         username: ''
      });
   };

   handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         this.handleClick();
      }
   };

   render() {
      return (
         <div>
            <h1>이벤트 연습</h1>
            <input type='text'
                   name='username'
                   placeholder='사용자명'
                   value={this.state.username}
                   onChange={this.handleChange}
            />

            <input type='text'
                   name='message'
                   placeholder='입력'
                   value={this.state.message}
                   onChange={
                      /!*(e) => {
                         this.setState({
                            message: e.target.value
                         });
                      }*!/
                      this.handleChange
                   }
                   onKeyPress={this.handleKeyPress}
            />
            <button onClick={
               /!*() => {
                  alert(this.state.message);
                  this.setState({
                     message: ''
                  });
               }*!/
               this.handleClick
            }>확인
            </button>
         </div>
      );
   }

}*/

const EventPractice = () => {

   const [form, setForm] = useState({
      username: '',
      message : ''
   });
   const { username, message } = form;

   // const [username, setUsername] = useState('');
   // const [message, setMessage] = useState('');

   // const onChangeUsername = e => setUsername(e.target.value);
   // const onChangeMessage = e => setMessage(e.target.value);

   const onChange = e => {
      const nextForm = {
         ...form, //기존의 form 내용을 이 자리에 복사한뒤
         [e.target.name]: e.target.value // 원하는 값을 덮어 씌움
      };
      setForm(nextForm);
   };

   const onClick = () => {
      alert(username + ': ' + message);
      setForm({
         username: '',
         message : ''
      });
      // setUsername('');
      // setMessage('');
   };

   const onKeyPress = e => {
      if (e.key === 'Enter') {
         onClick();
      }
   };

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type='text'
                name='username'
                placeholder='사용자명'
                value={username}
                onChange={onChange}
         />
         <input type='text'
                name='message'
                placeholder='입력'
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
         />
         <button onClick={onClick}>확인</button>
      </div>
   );
};

export default EventPractice;