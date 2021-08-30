import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { UserContext } from '../helpers/userContext';
import Feather from '@expo/vector-icons/Feather';
import {Picker} from "@react-native-picker/picker";
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

const CreateEngagement = ({navigation}) => {
    const { userData } = useContext(UserContext);
    const [selectedGoal, setSelectedGoal] = useState();
    const [modeOfEngagement, setModeOfEngagement] = useState();
    const [proposedDate, setProposedDate] = useState("Proposed Date");
    const [proposedTime, setProposedTime] = useState("Proposed Time");
    const [engagementSubject, setEngagementSubject] = useState("");
    const [engagementDetails, setEngagementDetails] = useState("");
    const modeOfEng = ["Face to Face", "Technology Enabled"];

    
    useEffect(() => {
        console.log(engagementSubject);
        return () => {
            //cleanup
        }
    }, [engagementSubject])
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
                            <DateTag> Created at data.createdDate</DateTag>
                        </UserInfoRight>
                    </UserInfo>
                    <MidContentRight>
                        <BtnAccept>
                            <Feather name="check-circle" size={30} style={{color: colors.acceptOnWhite}} />
                        </BtnAccept>
                        <BtnModify>
                        <Feather name="edit-2" size={30} style={{color: colors.modifyOnWhite}} />
                        </BtnModify>
                    </MidContentRight>
                </MidContent>
                {/* <UnderLine /> */}
                <BodyHeaderText>Create Engagement</BodyHeaderText>
            </HeaderView>

            <GoalSelect>
                <Picker
                    dropdownIconColor="blue"
                    style={{fontSize: 50, fontWeight: "900", color: "blue"}}
                    itemStyle={{fontSize: 50, fontWeight: "900", color: "blue"}}
                    selectedValue={selectedGoal}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedGoal(itemValue)
                    }>
                        <Picker.Item label={"Select Goal"} value="" />
                        {userData.goals && userData.goals.map((item) => 
                            <Picker.Item 
                            key={item.id}
                            label={item.goal_details} value={item.goal_details} />
                        )}
                        
                </Picker>
            </GoalSelect>

            <GoalSelect>
                <Picker
                    dropdownIconColor="blue"
                    style={{fontSize: 50, fontWeight: "900", color: "blue"}}
                    itemStyle={{fontSize: 50, fontWeight: "900", color: "blue"}}
                    selectedValue={modeOfEngagement}
                    onValueChange={(itemValue, itemIndex) =>
                        setModeOfEngagement(itemValue)
                    }>
                        <Picker.Item label={"Select Mode of Engagement"} value="" />
                        {modeOfEng.map((item, index) => 
                            <Picker.Item 
                            key={index}
                            label={item} value={item} />
                        )}
                        
                </Picker>
            </GoalSelect>

            <FlexViewWrapper>
                <ItemSelectWrapper>
                    <DateTimeText>{proposedDate}</DateTimeText>
                </ItemSelectWrapper>
                <ItemSelectWrapper>
                    <DateTimeText>{proposedTime}</DateTimeText>
                </ItemSelectWrapper>
            </FlexViewWrapper>

            <ViewContainer>
                <TextInputContainer>
                <TextInputArea
                    onChangeText={val => setEngagementSubject(val)}
                    placeholder="Enter Engagement Subject"
                     />
                </TextInputContainer>
                <TextAreaContainer>
                    <TextInputArea
                    onChangeText={val => setEngagementDetails(val)}
                    placeholder="Enter Engagement Details"
                     />
                </TextAreaContainer>

                <FormButton
                    buttonTitle="Submit"
                    onPress={() =>{}}
             />

            </ViewContainer>

            </PageContentScroll>

        </PageContainer>
    )
}

export default CreateEngagement
