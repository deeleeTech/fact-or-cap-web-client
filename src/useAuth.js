import * as React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { log_in, log_out, set_user } from "./__actions/loginActions";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const dispatch = useDispatch();

  return {
    authed,
    login(loginInfo) {
      return new Promise((res) => {
        dispatch(log_in());
        dispatch(set_user(loginInfo));
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        dispatch(log_out());
        dispatch(set_user([]));
        setAuthed(false);
        res();
      });
    }
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}