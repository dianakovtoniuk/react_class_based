import { Component } from 'react';

import classes from './User.module.css';

type UserProps = {
  name: string;
};

class User extends Component<UserProps> {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// закоментований функціональний варіант без змін

export default User;