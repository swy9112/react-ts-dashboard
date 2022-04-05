import { createContext, useState } from "react";
import { useQuery } from "react-query";

type TodosState = {};
const GitUserContext = createContext<TodosState>({});

interface IGitUser {
  children:JSX.Element;
}

interface IUser {
  gitUser:any;
}

const GitUserProvider = ({ children }:IGitUser) => {
  const [gitUser, setGitUser] = useState<IUser>();
  const { data } = useQuery<IUser>("user", fetchUser);
  setGitUser(data);
  console.log(gitUser);
  // return (
  //   <GitUserContext.Provider value={gitUser}>{children}</GitUserContext.Provider>
  // );
};

export function fetchUser() {
  return fetch(`https://api.github.com/users/swy9112`).then((response) => response.json());
}

export { GitUserProvider };