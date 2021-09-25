import * as React from "react";
import { View, StyleSheet } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFeather from "react-native-vector-icons/Feather";
import StackNavigator from './StackNavigator';
import { UserContext } from "../helpers/userContext";

const DrawerBar = createDrawerNavigator();

const DrawerBarContent = (props) => {
    
    const { userData} = React.useContext(UserContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: "https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png"
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: "column" }}>
                                <Title style={styles.title}>{userData.name}</Title>
                                <Caption style={styles.caption}>Welcome back</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="home-outline" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconFeather name="settings" color={color} size={size} />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate("Settings Screen") }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconFeather name="bell" color={color} size={size} />
                            )}
                            label="Notificatios"
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon name="information-outline" color={color} size={size} />
                            )}
                            label="App Info"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={async () => { }}
                />
            </Drawer.Section>
        </View>
    )
}

export default function DrawerNavigator() {
    return (
        <DrawerBar.Navigator drawerContent={props => <DrawerBarContent {...props} />}>
            <DrawerBar.Screen name="Stack" component={StackNavigator} />
        </DrawerBar.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 15,
        marginTop: 3,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
});