import { createContext } from "react";
import logo_head from "./img/logo_head.png";

const LogoHeadContext = createContext(null);

const LogoHeadCont = ({ children }) => {
  return (
    <LogoHeadContext.Provider value={logo_head}>
      {children}
    </LogoHeadContext.Provider>
  );
};

export { LogoHeadContext, LogoHeadCont };
