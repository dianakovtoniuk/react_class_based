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

  constructor(props: object) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  get usersContext() {
    return this.context as ContextType<typeof UsersContext>;
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.usersContext.users });
  }

  componentDidUpdate(_prevProps: object, prevState: UserFinderState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.usersContext.users.filter((user) =>
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