import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AvatarForm01 from '../../comps/AvatarForm/AvatarForm01';
import AvatarFormText from '../../comps/AvatarForm/AvatarFormText';
import AvatarViewProfile from '../../comps/AvatarForm/AvatarViewProfile';
import AvatarForm04 from '../../comps/AvatarForm/AvatarForm04';
import AvatarForm05 from '../../comps/AvatarForm/AvatarForm05';
import AvatarDogProfile from '../../comps/AvatarForm/AvatarDogProfile';



storiesOf('AvatarForms', module)
 
  .add('01', () => (
    <AvatarForm01/>
  ))
  .add('AvatarFormText', () => (
    <AvatarFormText
    textname={"Bob. S"}
    text={"Such great weather today!"}
    backgroundColor={"#53B7BE"}
    />
  ))
  .add('AvatarViewProfile', () => (
    <AvatarViewProfile
    textName={"Bob. S"}
    text={"Cute Pup! I want to walk him"}
    />
  ))
  .add('04', () => (
    <AvatarForm04/>
  ))
  .add('05', () => (
    <AvatarForm05/>
  ))
  .add('AvatarDogProfile', () => (
    <AvatarDogProfile/>
  ))
  
;