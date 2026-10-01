import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';
import type { UserData } from '../types';

type UsersProps = {
  users: UserData[];
};

type UsersState = {
  showUsers: boolean;
  more: string;
};

class Users extends Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props);
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// закоментований функціональний варіант без змін

export default Users;