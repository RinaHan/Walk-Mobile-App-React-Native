import React from 'react';
import Input from '../comps/Input';
import Popup from '../comps/Popup';
import MessageInput from '../comps/MessageInput';

export default {
  title: 'Example/Input',
  component: Input
};



export const BasicInput = () => <Input/>;
export const ThickInput = () => <Input
height={"48"}
/>;
export const MessagePopup = () =><Popup/>;
export const TextingInput = () =><MessageInput/>;

