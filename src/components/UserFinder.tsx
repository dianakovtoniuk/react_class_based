import { Fragment, Component, type ChangeEvent } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import type { UserData } from '../types';

const DUMMY_USERS: UserData[] = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

type UserFinderState = {
  filteredUsers: UserData[];
  searchTerm: string;
};

class UserFinder extends Component<object, UserFinderState> {
  constructor(props: object) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(_prevProps: object, prevState: UserFinderState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// закоментований функціональний варіант без змін

export default UserFinder;