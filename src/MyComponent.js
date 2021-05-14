import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*const MyComponent = ({ name, children, number }) => {
   return (
      <div>
         새로운 컴포넌트, 이름은 {name}. <br />
         children 값은 {children} 입니다. <br />
         숫자는 {number}
      </div>
   );
};*/

class MyComponent extends Component {
   render() {
      const { name, fnumber, children } = this.props;
      return (
         <div>
            새로운 컴포넌트, 이름은 {name}. <br />
            children 값은 {children} 입니다. <br />
            숫자는 {fnumber}
         </div>
      );
   }
}

MyComponent.defaultProps = {
   name: '기본이름'
};

MyComponent.prototypes = {
   name   : PropTypes.string,
   fnumber: PropTypes.number.isRequired
};

export default MyComponent;

