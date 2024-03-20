import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddNewRecipe from './screens/AddNewRecipe';
import Tips from './screens/Tips';
import Discover from './screens/Discover';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { View, SafeAreaView, Image} from 'react-native';
import Settings from './screens/Settings';
import { createStackNavigator } from '@react-navigation/stack';

// alkuperäinen navigaatio, joka toimii mutta välkkyy headerin latautuessa aina sivun latauksen yhteydessä...
// välkkymistä havaittu applen puhelimella, androidilla ei ongelmia?

export default function BottomNavigation() {
    const Tab = createBottomTabNavigator()
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        header: () => <Header />,
                        tabBarStyle: {
                            backgroundColor: '#78B29C',
                            height: 100,
                            paddingTop: 5,
                        },
                        tabBarLabelStyle: {
                            fontSize: 13,
                            fontFamily: 'Exo',
                            paddingBottom: 25,
                        },
                        tabBarActiveTintColor: '#D2575C',   // aktiivinen tekstiväri
                        tabBarInactiveTintColor: '#fff',    // inaktiivinen tekstiväri
                    }}
                >
                    <Tab.Screen
                        name="Home&Stack"
                        component={HomeStackScreen}
                        options={{
                            tabBarLabel: 'Reseptit',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name="book" size={24} color="white" />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="AddNewRecipe"
                        component={AddNewRecipe}
                        options={{
                            tabBarLabel: 'Lisää uusi',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name="plus" size={24} color="white" />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Tips"
                        component={Tips}
                        options={{
                            tabBarLabel: 'Inspiroidu',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name="info-circle" size={24} color="white" />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Discover"
                        component={Discover}
                        options={{
                            tabBarLabel: 'Kokeile',
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome5 name="list" size={24} color="white" />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

// Tähän listataan kaikki screenit, jotka eivät näy alavalikossa
function HomeStackScreen() {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}>
            <HomeStack.Screen
                name='Home'
                component={HomeScreen}
            />
            <HomeStack.Screen
                name="Settings"
                component={Settings}
            />
        </HomeStack.Navigator>
    )
}

// yläpalkki
function Header() {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View style={{
                height: 120,
                paddingHorizontal: 20,
                paddingTop: 15,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#FAF5F1',
            }}>
                <Image
                    source={require('./components/logo_junnukokki_web.png')}
                    style={{ width: '60%', height: '100%', resizeMode: 'contain' }}/>
                <MaterialIcons
                    name="settings"
                    size={28}
                    color="#78B29C"
                    onPress={() => navigation.navigate('Settings')}
                />
            </View>
        </SafeAreaView>
        )
}