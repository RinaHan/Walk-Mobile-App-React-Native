import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
import UserInfo from '../../comps/UserInfo';
import UserBio from '../../comps/UserBio';
import Title from '../../comps/Title';
import Texting from '../../comps/Texting';
import Spacer from '../../comps/Spacer';
import SignIn from '../../comps/SignIn';
import ShareFeedback from '../../comps/ShareFeedback';

storiesOf('Comps', module)
 //completed
  .add('WalkerProfileTitle', () => (
    <WalkerProfileTitle/>
  ))
  //했는데, 손보지않은 파일들 연결된거 잠궈놈
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
// impossible, it break Android
//   .add('WalkerProfile', () => (
//     <WalkerProfile/>
//   ))
//error occured, need to modify code
.add('UserInfo', () => (
    <UserInfo/>
  ))
  //error break Android. need to modify code
.add('UserBio', () => (
    <UserBio/>
  ))
  //completed
.add('Title', () => (
    <Title/>
  ))
  //completed
.add('Texting', () => (
    <Texting/>
  ))
//empty screen. need to modify code
.add('Spacer', () => (
    <Spacer/>
  ))
//error occured, need to modify code
.add('SignIn', () => (
    <SignIn/>
  ))
//error break Android, need to modify code
// .add('ShareFeedback', () => (
//     <ShareFeedback/>
//   ))
;