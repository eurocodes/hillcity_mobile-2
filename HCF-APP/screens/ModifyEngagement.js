import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { UserContext } from '../helpers/userContext';
import Feather from '@expo/vector-icons/Feather';
import {Picker} from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BodyHeaderText,  AppointText,
    BodyTitleText, BtnAccept, 
    BtnModify, BtnText, 
    DateTag, EngagementModeText, 
    HeaderView, MidContent, MidContentRight, 
    PageContainer, PageTopView, PageView, 
    TitleContainer, UnderLine, UserImage, UserInfo, 
    UserInfoRight, UserName, AppointTextView, PageContentScroll, FloatingActionBtn, FloatingActionText, GoalSelect, ItemSelectWrapper, FlexViewWrapper, DateTimeText, ViewContainer, TextInputArea, TextAreaContainer, TextInputContainer } from '../styles/engagement.elememts';
import { colors } from '../styles/colors';
import FormButton from '../components/FormButton';
import { modifyEngagement, submitEngagement } from '../httpRequests/engagementApi';
import { Alert } from 'react-native';

const ModifyEngagement = ({navigation}) => {
    const { userData } = useContext(UserContext);
    const [proposedDateTime, setProposedDateTime] = useState({
        date: "Proposed Date",
        time: "Proposed Time",
    });
    // const [engagementSubject, setEngagementSubject] = useState("");
    const [engagementDetails, setEngagementDetails] = useState("");

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    //const [show, setShow] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [showDate, setShowDate] = useState(false);

    

    // useEffect(() => {
    //     console.log(userData);
    //     return () => {
    //         //cleanup
    //     }
    // }, [])

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setShowDate(false);
        setProposedDateTime({
            ...proposedDateTime,
            date: currentDate.toDateString(),
        });

    };

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setShowTime(false);
        setProposedDateTime({
            ...proposedDateTime,
            time: currentDate.toLocaleTimeString()
        });

    };

    const showMode = (currentMode) => {
        console.log(currentMode);
        if(currentMode == "date"){
            setShowDate(true);
        } else {
            setShowTime(true)
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const submit = async () => {
        if(proposedDateTime.date !== "Proposed Date"
            && proposedDateTime.time !== "Proposed Time"
            && engagementDetails !== "") {
                await modifyEngagement(
                    proposedDateTime.time, 
                    proposedDateTime.date, 
                    engagementDetails,
                    userData.userdata.id,
                    // engId
                    );
                // setEngagementSubject("");
                setEngagementDetails("");
            } else {
                Alert.alert("Bad Input", "Some fields have not been filled properly",[{text: "Close"}])
            }
        
    }

    return (
        <PageContainer>
            <StatusBar style="dark" />
            <PageContentScroll>
            <HeaderView>
                <PageTopView>
                    <Feather 
                    onPress={() => navigation.navigate("Home Screen")} 
                    name="arrow-left" size={25} style={{ color: "#1c1c1c", }} 
                    />
                    <Feather name="more-horizontal" size={25} style={{ color: "#1c1c1c", }} />
                </PageTopView>
            
                <MidContent>
                    <UserInfo>
                        {/* <UserImage></UserImage> */}
                        <Feather name="user-check" size={30} style={{color: "#1c1c1c"}} />
                        <UserInfoRight>
                            <UserName>{userData.name}</UserName>
                            <DateTag>Reschedule Engagement</DateTag>
                        </UserInfoRight>
                    </UserInfo>
                    <MidContentRight>
                    </MidContentRight>
                </MidContent>
                <BodyHeaderText>Reschedule Engagement</BodyHeaderText>
            </HeaderView>

            <FlexViewWrapper>
                <ItemSelectWrapper onPress={showDatepicker}>
                    <DateTimeText>{proposedDateTime.date}</DateTimeText>
                </ItemSelectWrapper>
                <ItemSelectWrapper onPress={showTimepicker}>
                    <DateTimeText>{proposedDateTime.time}</DateTimeText>
                </ItemSelectWrapper>
            </FlexViewWrapper>

            <ViewContainer>
                <TextAreaContainer>
                    <TextInputArea
                    onChangeText={val => setEngagementDetails(val)}
                    placeholder="Reason for Rescheduling"
                    value={engagementDetails}
                     />
                </TextAreaContainer>

                <FormButton
                    buttonTitle="Submit"
                    onPress={submit}
             />

                {showDate && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                        />
                    )}

                {showTime && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChangeTime}
                        />
                    )}

            </ViewContainer>

            </PageContentScroll>

        </PageContainer>
    )
}

export default ModifyEngagement
