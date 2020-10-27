import React from 'react';
import Input from '../comps/Input';
import Popup from '../comps/Popup';
import Texting from '../comps/Texting';
import Dropdown from '../comps/Dropdown';


export default {
  title: 'Example/Input',
  component: Input
};



export const BasicInput = () => <Input/>;
export const ThickInput = () => <Input
height={"48"}
/>;
export const MessagePopup = () =><Popup/>;
export const MessageInput = () =><Texting/>;
export const DropdownMenu = () =><Dropdown/>;


