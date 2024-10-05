import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from './Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { SignedIn } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/hooks/warmUpBrowser';



WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser( );

    const { startOAuthFlow } =useOAuth({ strategy: "Oauth_google" });
    const onPress=async()=>{
        try{
            const { createSessionId, SignIn, signUp, setActive } =
            await startOAuthFlow();

            if (createSessionId) {
                setActive({ session: createSessionId });
            } else {
                //
            }
        } catch (err) {
            console.error("OAuth error", err);
        }

    }
return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    }}>
        <Image source={require('/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/assets/images/ev name logo.png')}
        style={styles.logoImage}
        />
        <Image source={require('/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/assets/images/Ev charging logo.png')}
        style={styles.bgImage}
        />
        < View style={{padding:20}}>
        <Text style={styles.heading}>Your Ultimate EV charging Station Finder App</Text>
        <Text style={styles.desc}>Find EV charging station near you, plan trip and so much more in just one click</Text>
        <TouchableOpacity style={styles.button}
        onPress={onPress}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit',
                fontSize:17
            }}>Login with Google</Text>
        </TouchableOpacity>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    logoImage:{
        width:240,
        height:110,
        objectFit:'contain'
    },
    bgImage: {
        height:210,
        maxWidth:390,
        objectFit:'cover',
    },
    heading:{
        fontSize: 25,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:10
    },
    desc:{
        fontSize:17,
        fontFamily:'outfit',
        marginTop:15,
        textAlign:'center',
        color:'#000',
        color:Colors.GRAY
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:20
    }
})

