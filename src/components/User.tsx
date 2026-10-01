import { Component } from 'react';

import classes from './User.module.css';

type UserProps = {
  name: string;
};

class User extends Component<UserProps> {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;