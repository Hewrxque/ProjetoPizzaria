import React, {useState, createContext, ReactNode} from "react";
import { api } from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    Login: (credentials: LoginProps) => Promise<void>;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string
}

type AuthProviderProps = {
    children: ReactNode;
}

type LoginProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children} : AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: ''
    })

    const [loadingAuth, setLoadingAuth] = useState(false)

    const isAuthenticated = !!user.name;

    async function Login({email, password}: LoginProps){
        console.log(email)
        console.log(password)
        setLoadingAuth(true);

        try{
            

        }catch(err){
            console.log('Erro ao acessar', err)
            setLoadingAuth(false)
        }
    }
    
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, Login }}>
            {children}
        </AuthContext.Provider>
    )
}
