import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
// import AvatarForm01 from '../../comps/AvatarForm/AvatarForm01';



storiesOf('Comps', module)
 
  .add('WalkerProfile', () => (
    <WalkerProfileTitle/>
  ))
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
  
;