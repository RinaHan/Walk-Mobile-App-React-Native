import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
import UserInfo from '../../comps/UserInfo';
import UserBio from '../../comps/UserBio';
// import WalkerProfile from '../../comps/WalkerProfile';
// import AvatarForm01 from '../../comps/AvatarForm/AvatarForm01';



storiesOf('Comps', module)
 //checked
  .add('WalkerProfileTitle', () => (
    <WalkerProfileTitle/>
  ))
  //했는데, 손보지않은 파일들 연결된거 잠궈놈
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
//   checked, impossible, it break Android
//   .add('WalkerProfile', () => (
//     <WalkerProfile/>
//   ))
//connected, need to modify code
.add('UserInfo', () => (
    <UserInfo/>
  ))
  //connected, need to modify code
.add('UserBio', () => (
    <UserBio/>
  ))
;