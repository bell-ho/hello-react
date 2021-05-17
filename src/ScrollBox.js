import React, { Component } from 'react';

class ScrollBox extends Component {

   scrollToBottom = () => {
      const { scrollHeight, clientHeight } = this.box;
      /*위의 코드는 아래와 같다 (비 구조화 문법)
      const scrollHeight = this.box.scrollHeight;
      const clientHeight = this.box.clientHeight;*/

      this.box.scrollTop = scrollHeight - clientHeight;
   };

   render() {
      const style = {
         border  : '1px solid black',
         height  : '300px',
         width   : '300px',
         overflow: 'auto',
         position: 'relative'
      };


      const innerStyle = {
         width     : '100%',
         height    : '650px',
         background: 'linear-gradient(white, black)'
      };

      return (
         <div
            style={style}
            ref={(ref) => {
               this.box = ref;
            }}>
            <div style={innerStyle} />
         </div>
      );
   }


}

export default ScrollBox;