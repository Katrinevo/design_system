import React,
{
 useState
} from "react";

import {
 Modal
} from "react-native";

import styled from
"styled-components/native";

interface Props {
 label: string;
 options: string[];
}

const Trigger =
 styled.TouchableOpacity`
  padding: 18px;

  border-width: 3px;

  border-color:
   ${({ theme }) =>
     theme.colors.primaryDark};

  border-radius: 20px;
`;

const Text =
 styled.Text`
  font-size: 18px;
`;

const Item =
 styled.TouchableOpacity`
  padding: 20px;
`;

export const Dropdown:
React.FC<Props> = ({
 label,
 options
}) => {
 const [open,setOpen] =
  useState(false);

 const [selected,
  setSelected] =
  useState(label);

 return (
 <>
  <Trigger
   onPress={() =>
    setOpen(true)
   }
  >
   <Text>
    {selected}
   </Text>
  </Trigger>

  <Modal
   visible={open}
   transparent
  >
   {options.map(o => (
    <Item
      key={o}
      onPress={()=>{
       setSelected(o);
       setOpen(false);
      }}
    >
      <Text>{o}</Text>
    </Item>
   ))}
  </Modal>
 </>
 );
};