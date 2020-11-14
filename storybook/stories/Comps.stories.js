import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
// import WalkerProfile from '../../comps/WalkerProfile';
// import AvatarForm01 from '../../comps/AvatarForm/AvatarForm01';



storiesOf('Comps', module)
 //했는데 스토리북에 안보임
  .add('WalkerProfile', () => (
    <WalkerProfileTitle/>
  ))
  //했는데, 잠궈놈
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
  //했는데, 화면에 아무것도 안보임, 에러떠서 잠궈놈
//   .add('WalkerProfile', () => (
//     <WalkerProfile/>
//   ))
  
;