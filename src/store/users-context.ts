import { createContext } from 'react';

import type { UserData } from '../types';

type UsersContextValue = {
  users: UserData[];
};

const UsersContext = createContext<UsersContextValue>({
  users: [],
});

export default UsersContext;