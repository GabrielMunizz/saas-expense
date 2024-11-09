import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { SessionProvider } from "next-auth/react";

interface NummusContextType {
  setUser: Dispatch<SetStateAction<UserType | null>>;
  user: UserType | null;
}

export const NummusContext = createContext({} as NummusContextType);

interface NummusProviderProps {
  children: ReactNode;
}

type UserType = {
  username: string;
  userID: string;
};

export function NummusProvider({ children }: NummusProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <SessionProvider>
      <NummusContext.Provider value={{ setUser, user }}>
        {children}
      </NummusContext.Provider>
    </SessionProvider>
  );
}
