import React from "react";
import { IAppContext } from "./interfaces";

export const AppContext = React.createContext<IAppContext>({ language: "tamil" });

AppContext.displayName = "Thirukkural App Context";