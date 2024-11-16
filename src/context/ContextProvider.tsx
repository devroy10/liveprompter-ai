import { createContext, useState } from "react";
import PropTypes from "prop-types";

export type StateContextType = {
  serverData: { html: string },
  setServerData: React.Dispatch<React.SetStateAction<{ html: string }>>,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  error: any,
  setError: React.Dispatch<React.SetStateAction<any>>,
};

export const StateContext = createContext<StateContextType>({
  serverData: { html: "" },
  setServerData: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [serverData, setServerData] = useState({ html: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <StateContext.Provider
      value={{
        serverData,
        setServerData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

