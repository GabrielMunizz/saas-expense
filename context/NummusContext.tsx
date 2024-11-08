import { createContext, ReactNode, useState } from "react";

interface NummusContextType {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}

export const NummusContext = createContext({} as NummusContextType);

interface NummusProviderProps {
  children: ReactNode;
}

export function NummusProvider({ children }: NummusProviderProps) {
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <NummusContext.Provider value={{ userName, setUserName }}>
      {children}
    </NummusContext.Provider>
  );
}
