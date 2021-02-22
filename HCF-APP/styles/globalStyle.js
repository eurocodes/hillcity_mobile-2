import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #cacaca;
`

export const StyledText = styled.Text`
  color: #2654d1;
`

export const Button = styled.TouchableOpacity`
  font-size: 20px;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  border: 2px solid #a371f3;
  background-color: #a371f3;

  /* Color the border and text with theme.main */
  /* color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background-color: ${props => props.theme.bg}; */
`;