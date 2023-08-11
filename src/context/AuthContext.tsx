import React, {useState, createContext, ReactNode} from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    login: (credentials: LoginProps) => Promise<void>;
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

    async function login({email, password}: LoginProps){
        console.log(email)
        console.log(password)
        setLoadingAuth(true);

        try{
            const response = await api.post('/session', {
                email, 
                password
            })

            console.log(response.data)

            const {  id, name, token } = response.data;

            setUser({
                id, 
                name,
                email, 
                token
            })
            
            setLoadingAuth(false)

        }catch(err){
            console.log('Erro ao acessar', err)
            setLoadingAuth(false)
        }
    }
    
    return(
        <AuthContext.Provider value={{ user, isAuthenticated, login }}>
            {children}
        </AuthContext.Provider>
    )
}
