import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AvatarForm01 from '../../comps/AvatarForm/AvatarForm01';
import AvatarForm02 from '../../comps/AvatarForm/AvatarForm02';
import AvatarForm03 from '../../comps/AvatarForm/AvatarForm03';
import AvatarForm04 from '../../comps/AvatarForm/AvatarForm04';
import AvatarForm05 from '../../comps/AvatarForm/AvatarForm05';
import AvatarForm06 from '../../comps/AvatarForm/AvatarForm06';



storiesOf('AvatarForms', module)
 
  .add('01', () => (
    <AvatarForm01/>
  ))
  .add('02', () => (
    <AvatarForm02/>
  ))
  .add('03', () => (
    <AvatarForm03/>
  ))
  .add('04', () => (
    <AvatarForm04/>
  ))
  .add('05', () => (
    <AvatarForm05/>
  ))
  .add('06', () => (
    <AvatarForm06/>
  ))
  
;