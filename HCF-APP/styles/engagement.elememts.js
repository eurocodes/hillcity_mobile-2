import styled from "styled-components/native";
import { colors } from "./colors";

export const PageContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const PageTopView = styled.View`
  padding: 25px 0;
  flex-direction: row;
  justify-content: space-between;
  `;

  export const HeaderView = styled.View`
  background-color: ${colors.white};
  align-self: center;
  width: 90%;
  padding: 15px 0;
  `;

export const BodyHeaderText = styled.Text`
font-size: 30px;
color: ${colors.primary_one};
justify-content: space-around;
padding-bottom: 15px;
align-items: center;
`;

export const TitleContainer = styled.View`
display: flex;
flex-direction: row;
padding: 0px 25px;
align-items: center;
justify-content: space-between;
`;

export const BodyTitleText = styled.Text`
font-size: 22px;
color: ${colors.primary_two};
justify-content: space-around;
align-items: center;
`;

export const EngagementModeText = styled.Text`
font-weight: 500;
font-size: 16px;
color: ${colors.tint};
justify-content: center;
`;
export const MidContent = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const UnderLine = styled.View`
border: 1px ${colors.primary_two} solid;
align-self: center;
margin: 15px 0;
width: 90%;
`;

export const UserInfo = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 60%;
`;

export const UserInfoRight = styled.View`

`;

export const UserImage = styled.Image`
`;

export const UserName = styled.Text`
font-weight: 700;
font-size: 16px
color: ${colors.textDarkPrimary};
`;

export const MidContentRight = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 22%;
`;

export const BtnAccept = styled.TouchableOpacity`
display: flex;
flex-direction: row;
`;

export const BtnModify = styled.TouchableOpacity`
display: flex;
flex-direction: row;
`;
export const BtnText = styled.Text``;

export const DateTag = styled.Text`

`;

export const PageContentScroll = styled.ScrollView``;
export const AppointTextView = styled.View`
padding: 0px 15px;
`;

export const AppointText = styled.Text`
font-size: 16px;
margin-left: 10px;
line-height: 30px;
color: ${colors.primary_two};
`;

export const FloatingActionBtn = styled.TouchableOpacity`
position: absolute;
width: 130px;
height: 46px;
align-items: center;
justify-content: center;
right: 20px; 
bottom: 20px;
background-color: ${colors.primary_two};
border-radius: 30px;
elevation: 8;
`;

export const FloatingActionText = styled.Text`
font-size: 15px;
color: white;
`;

export const GoalSelect = styled.View`
background-color: ${colors.secondary_one};
align-self: center;
width: 90%;
margin: 10px 0px;
padding: 8px 0;
border-radius: 5px;
`;

export const ViewContainer = styled.View`
align-self: center;
width: 90%;
padding: 8px 0;
border-radius: 5px;
`;

export const FlexViewWrapper = styled.View`
display: flex;
flex-direction: row;
align-self: center;
align-items: center;
justify-content: space-between;
margin: 8px 0px;
width: 90%;
`;
export const ItemSelectWrapper = styled.TouchableOpacity`
background-color: ${colors.secondary_one};
align-self: center;
width: 49%;
padding: 12px 0;
border-radius: 5px;
`;

export const DateTimeText = styled.Text`
font-size: 20px;
font-weight: bold;
text-align: center;
color: ${colors.advance_two_light};
`;

export const TextAreaContainer = styled.View`
border-color: ${colors.tertiary_two};
border-width: 1px;
padding: 10px;
height: 150px;
border-radius: 5px;
margin-bottom: 12px;
`;

export const TextInputContainer = styled.View`
border-color: ${colors.tertiary_two};
border-width: 1px;
padding: 10px;
height: 50px;
border-radius: 5px;
margin-bottom: 12px;
`;

export const TextInputArea = styled.TextInput`

`;

// color: ${props => props.color}
/* UserInfo */

// position: absolute;
// width: 155px;
// height: 39px;
// left: 40px;
// top: 220px;



// /* Richard Gervain */

// position: absolute;
// width: 101px;
// height: 19px;
// left: 94px;
// top: 220px;

// font-family: Avenir;
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 19px;

// /* Dark Blue */
// color: #0D253C;



// /* profilePicture */

// position: absolute;
// width: 38px;
// height: 38px;
// left: 40px;
// top: 220px;



// /* placeholder */

// position: absolute;
// width: 38px;
// height: 38px;
// left: 40px;
// top: 220px;

// background: url(.jpg);
// border-radius: 12px;


// /* 2m ago */

// position: absolute;
// width: 41px;
// height: 16px;
// left: 94px;
// top: 243px;

// font-family: Avenir;
// font-style: normal;
// font-weight: normal;
// font-size: 12px;
// line-height: 16px;
// text-align: center;

// /* Dark Grey */
// color: #7B8BB2;

