import { Fragment, Component, type ChangeEvent, type ContextType } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';
import type { UserData } from '../types';

type UserFinderState = {
  filteredUsers: UserData[];
  searchTerm: string;
};

class UserFinder extends Component<object, UserFinderState> {
  static contextType = UsersContext;
  declare context: ContextType<typeof UsersContext>;

  constructor(props: object) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(_prevProps: object, prevState: UserFinderState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
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
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}


export default UserFinder;