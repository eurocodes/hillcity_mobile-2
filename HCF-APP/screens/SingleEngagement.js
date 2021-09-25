import React from 'react'
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { BodyHeaderText,  AppointText,
    BodyTitleText, BtnAccept, 
    BtnModify, BtnText, 
    DateTag, EngagementModeText, 
    HeaderView, MidContent, MidContentRight, 
    PageContainer, PageTopView, PageView, 
    TitleContainer, UnderLine, UserImage, UserInfo, 
    UserInfoRight, UserName, AppointTextView, PageContentScroll, FloatingActionBtn, FloatingActionText } from '../styles/engagement.elememts';
import { colors } from '../styles/colors';

export default function SingleEngagement({route, navigation}) {

    const { userData } = useContext(UserContext);

    const { data } = route.params;
    console.log(data);
    return (
        <PageContainer>
            <StatusBar style="dark" />
            <HeaderView>
                <PageTopView>
                    <Feather 
                    onPress={() => navigation.navigate("Home Screen")} 
                    name="arrow-left" size={25} style={{ color: "#1c1c1c", }} 
                    />
                    <Feather name="more-horizontal" size={25} style={{ color: "#1c1c1c", }} />
                </PageTopView>
            
                <BodyHeaderText>{data.title}</BodyHeaderText>
                <MidContent>
                    <UserInfo>
                        {/* <UserImage></UserImage> */}
                        <Feather name="user-check" size={30} style={{color: "#1c1c1c"}} />
                        <UserInfoRight>
                            <UserName>{data.createdBy}</UserName>
                            <DateTag> Created at {data.createdDate}</DateTag>
                        </UserInfoRight>
                    </UserInfo>
                    {userData.userdata.membership_status !== "mentee" &&
                    <MidContentRight>
                        <BtnAccept>
                            <Feather name="check-circle" size={30} style={{color: colors.acceptOnWhite}} />
                        </BtnAccept>
                        <BtnModify>
                        <Feather name="edit-2" size={30} style={{color: colors.modifyOnWhite}} />
                        </BtnModify>
                    </MidContentRight>}
                </MidContent>
            </HeaderView>
            <PageContentScroll>
            <TitleContainer>
                <BodyTitleText>{data.status}</BodyTitleText>
                <EngagementModeText>{data.proposedDate}</EngagementModeText>
            </TitleContainer>
            <UnderLine />
            <AppointTextView>
                <AppointText>{data.details}</AppointText>
            </AppointTextView>
            <TitleContainer>
                <BodyTitleText>{data.goalType}</BodyTitleText>
                <EngagementModeText>Due by {data.goalTargetDate}</EngagementModeText>
            </TitleContainer>
            <UnderLine />
            <AppointTextView>
                <AppointText>{data.goalChallenges}</AppointText>
            </AppointTextView>
            <AppointTextView>
                <AppointText>{data.reasonForEngagement}</AppointText>
            </AppointTextView>
            </PageContentScroll>
            <FloatingActionBtn>
                    <FloatingActionText>See More Goals</FloatingActionText>
            </FloatingActionBtn>
        </PageContainer>
    )
}
