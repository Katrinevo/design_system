import React,
{
 useState
} from "react";

import styled from
"styled-components/native";

interface Action {
 id:number;
 icon:string;
}

interface Props {
 actions?: Action[];
}

const Wrapper =
 styled.View`
  position: absolute;

  right: 24px;
  bottom: 24px;
`;

const Fab =
 styled.TouchableOpacity`
  width: 72px;
  height: 72px;

  border-radius: 36px;

  background:
   ${({ theme }) =>
    theme.colors.primary};

  justify-content:center;
  align-items:center;
`;

const Text =
 styled.Text`
  font-size: 32px;
`;

const Small =
 styled.TouchableOpacity`
  width: 52px;
  height: 52px;

  border-radius: 26px;

  background:
   ${({ theme }) =>
    theme.colors.primary};

  margin-bottom: 12px;

  justify-content:center;
  align-items:center;
`;

export const FloatingActionButton:
React.FC<Props> = ({
 actions=[]
}) => {
 const [open,setOpen] =
  useState(false);

 return (
  <Wrapper>

   {open &&
    actions.map(a=>(
      <Small key={a.id}>
        <Text>
         {a.icon}
        </Text>
      </Small>
   ))}

   <Fab
    onPress={() =>
      setOpen(!open)
    }
   >
    <Text>+</Text>
   </Fab>

  </Wrapper>
 );
};