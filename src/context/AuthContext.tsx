import React, {useState, createContext, ReactNode, useEffect} from 'react';
import {api} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  login: (credentials: LoginProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type LoginProps = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      //Pegas os dados salvos do user
      const userInfo = await AsyncStorage.getItem('@userPizzaria');
      let hasUser: UserProps = JSON.parse(userInfo || '{}');

      //Verificar se recebemos as informaçoes dele
      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        });
      }
      setLoading(false);
    }

    getUser();
  }, []);

  async function login({email, password}: LoginProps) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      // console.log(response.data)

      const {id, name, token} = response.data;

      const data = {
        ...response.data,
      };

      await AsyncStorage.setItem('@userPizzaria', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
        token,
      });

      setLoadingAuth(false);
    } catch (err) {
      console.log('Erro ao acessar', err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: '',
      });
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        loading,
        loadingAuth,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
