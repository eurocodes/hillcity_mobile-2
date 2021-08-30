import React, { useContext, useEffect } from 'react'
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
    SearchInner, TopText, AppointActions, FloatingActionBtn, AddIcon
} from '../styles/home.element';
import { Alert, TextInput } from 'react-native';
import { getAllEngagement } from '../httpRequests/socialApi';
import { TouchableOpacity } from 'react-native';

const config = {
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    // iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
    // androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
};

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

    const { userData, setUserData } = useContext(UserContext)

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

    useEffect(() => {
        (async function() {
            console.log(userData.email)
            const result = await getAllEngagement(userData.email);
            //console.log(result);
            if(!result.exception) {
                if(!userData.engagements){
                    setUserData({
                        ... userData,
                        engagements: result.all_engagements,
                        userdata: result.user_data,
                        goals: result.all_goals,
        
                    })
            } 
            } else {
                Alert.alert("Error Occurred", `We could not find any user with email: ${userData.email} \nPlease try agian with a different email or contact support.`)
                navigation.navigate("Login Screen"); // Direct back to Login
            }
        })()
        console.log("Data I need: ", userData.engagements);
        //getEngagements();
        
    }, []);

    const Appointments = ({ id, title, icon, theme, createdDate,
        proposedDate, status, details, goalType, modeOfEng,
    reasonForEngagement, goalChallenges, goalStatus, createdBy, goalTargetDate
    }) => {
        return (
            <AppointmentView>
                
            <TouchableOpacity
            onPress={() => navigation.navigate("Single Engagement", {
                data: {
                    id, 
                    title, 
                    createdDate: createdDate.toDateString(),
                    proposedDate: proposedDate.toDateString(),
                    details,
                    goalType,
                    goalTargetDate: goalTargetDate.toDateString(),
                    modeOfEng,
                    reasonForEngagement,
                    goalChallenges,
                    goalStatus,
                    status,
                    createdBy
                }})}
            >
                <AppointmentInner>
                    <Feather name={icon} size={30} style={{ color: theme }} />
                    <AppointTextView>
                        <AppointText color="#000">{title}</AppointText>
                        <AppointText color="grey">{proposedDate.toDateString()}</AppointText>
                    </AppointTextView>
                </AppointmentInner>
                </TouchableOpacity>
                <AppointActions>
                    <Feather onPress={() => {}} 
                    name={status.toLowerCase() == "pending" ? "cloud" : "check"} size={30} style={{ color: theme, marginRight: 5 }} />
                    <Feather onPress={() => {}} name="edit" size={30} style={{ color: theme }} />
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
                {/* <Feather name="plus" size={25} style={{
                    color: "#4263ec",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    marginHorizontal: 8,
                }} /> */}
            </BodyContent>
            <LowerScrollView>
                {userData.engagements && userData.engagements.map(item => <Appointments
                    key={item.engagement_id}
                    id={item.engagement_id}
                    title={item.goal_details}
                    icon="calendar"
                    theme={item.status.toLowerCase() == "pending" ? "#d96f7c" 
                    : item.status.toLowerCase() == "completed" ? "#008b8b"
                    : "#327bf7"}
                    goalType={item.goal_type}
                    goalChallenges={item.goal_challenges}
                    goalTargetDate={new Date(item.target_date.split(" ")[0].toString())}
                    goalStatus={item.goal_status}
                    privacy={item.goal_privacy}
                    createdDate={new Date(item.created_at.split(" ")[0].toString())}
                    proposedDate={new Date(item.proposed_date.toString())}
                    proposedTime={item.proposed_time}
                    status={item.status}
                    createdBy={item.created_by}
                    details={item.mentees_reason_for_engagement}
                    modeOfEng={item.mode_of_engagement}
                    reasonForEngagement={item.mentees_reason_for_engagement}
                />)}
                
            </LowerScrollView>
            <FloatingActionBtn 
                onPress={() => navigation.navigate("Create Engagement")}
            >
                    <AddIcon>+</AddIcon>
            </FloatingActionBtn>
        </HomeContainer>
    )
}
