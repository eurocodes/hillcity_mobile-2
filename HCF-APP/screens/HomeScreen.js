import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Button, StyledText, StyledView } from '../styles/globalStyle';
import * as Google from 'expo-google-app-auth';
import Feather from '@expo/vector-icons/Feather';
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '../ApiKeys';
import { UserContext } from '../helpers/userContext';
import {
    AppointmentInner, AppointText,
    AppointmentView, AppointTextView, BodyContent,
    BodyHeaderText, HomeContainer, HomeLowerView, HomeTopView,
    HomeView, IconsContainer, LowerScrollView, SearchContainer,
    SearchInner, TopText, AppointActions
} from '../styles/home.element';
import { TextInput } from 'react-native';

// const config = {
//     iosClientId: IOS_CLIENT_ID,
//     androidClientId: ANDROID_CLIENT_ID,
//     // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
//     // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
// };

export default function HomeScreen({ route, navigation }) {

    // const googleSignout = async () => {
    //     const { type, accessToken } = await Google.logInAsync(config);

    //     if (type === 'success') {
    //         /* Log-Out */
    //         await Google.logOutAsync({ accessToken, ...config });
    //         /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
    //         navigation.navigate("Login Screen")
    //     }
    // }

    const { userData } = useContext(UserContext)

    const appointments = [
        {
            title: "Loren Ipsum",
            icon: "award",
            theme: "#008b8b",
            date: "Today, 8:30pm",
        },
        {
            title: "Loren Ipsum",
            icon: "book",
            theme: "#37003c",
            date: "Wed, 24 Mar, 4:50pm",
        },
        {
            title: "Loren Ipsum",
            icon: "send",
            theme: "#fed137",
            date: "Today, 8:30pm",
        },
        {
            title: "Loren Ipsum",
            icon: "calendar",
            theme: "#008b8b",
            date: "Saturday, 8:30pm",
        },
    ]

    const Appointments = ({ title, icon, theme, date }) => {
        return (
            <AppointmentView>
                <AppointmentInner>
                    <Feather name={icon} size={30} style={{ color: theme }} />
                    <AppointTextView>
                        <AppointText color="#000">{title}</AppointText>
                        <AppointText color="grey">{date}</AppointText>
                    </AppointTextView>
                </AppointmentInner>
                <AppointActions>
                    <Feather name="check" size={30} style={{ color: theme, marginRight: 5 }} />
                    <Feather name="edit" size={30} style={{ color: theme }} />
                </AppointActions>
            </AppointmentView>
        )
    }

    return (
        <HomeContainer>
            <StatusBar style="light" />
            <HomeView>
                <HomeTopView>
                    <Feather name="menu" size={25} style={{ color: "#fff", }} />
                    <IconsContainer>
                        <Feather name="bell" size={25} style={{ color: "#fff", marginRight: 10 }} />
                        <Feather name="user" size={25} style={{ color: "#fff", }} />
                    </IconsContainer>
                </HomeTopView>
                <HomeLowerView>
                    <TopText>Hello,{"\n"}{userData.name}</TopText>
                    <SearchContainer>
                        <Feather name="search" size={25} color="#fff" />
                        <SearchInner>
                            <TextInput
                                numberOfLines={1}
                                // value={labelValue}
                                placeholder="Search"
                                placeholderTextColor="#fff"
                                style={{ width: "90%", marginLeft: 5, fontSize: 16 }}
                            />
                        </SearchInner>
                    </SearchContainer>
                </HomeLowerView>
            </HomeView>
            <BodyContent>
                <BodyHeaderText>Recent Appointments</BodyHeaderText>
                <Feather name="plus" size={25} style={{
                    color: "#4263ec",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    marginHorizontal: 8,
                }} />
            </BodyContent>
            <LowerScrollView>
                {appointments.map(item => <Appointments
                    title={item.title}
                    icon={item.icon}
                    theme={item.theme}
                    date={item.date}
                />)}
            </LowerScrollView>
        </HomeContainer>
    )
}
