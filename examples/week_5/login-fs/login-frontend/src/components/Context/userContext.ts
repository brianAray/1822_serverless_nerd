import { createContext } from "react";

export interface User {
    id: string;
    username: string;
    name: string;
}

export const UserContext = createContext<User | undefined>(undefined);