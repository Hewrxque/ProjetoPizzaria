import React, { useContext} from "react";
import { View, TouchableOpacity, Text} from "react-native";

import { AuthContext } from '../../context/AuthContext'
export default function DashBoard(){
    const {signOut } = useContext(AuthContext);

    return(
        <View>
            <TouchableOpacity onPress={signOut}>
                <Text>
                    Sair do app
                </Text>
            </TouchableOpacity>
        </View>
    )
}