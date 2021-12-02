import React from "react";
import { IAppContext } from "./interfaces";

export const AppContext = React.createContext<IAppContext>({ IsTamil: true });

AppContext.displayName = "Thirukkural App Context";