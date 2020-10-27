import React from 'react';
import Input from '../comps/Input';

export default {
  title: 'Example/Input',
  component: Input
};



export const BasicInput = () => <Input/>;
export const ThickInput = () => <Input
height={"48px"}
/>;

