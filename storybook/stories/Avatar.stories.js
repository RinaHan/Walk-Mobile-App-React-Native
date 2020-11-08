import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
// import BasicAvatar from '../../comps/Avatar/BasicAvatar';
import AvatarEdit from '../../comps/Avatar/AvatarEdit';
import AvatarWithName from '../../comps/Avatar/AvatarWithName';
import Avatar06 from '../../comps/Avatar/Avatar06';
import Avatar07 from '../../comps/Avatar/Avatar07';
import Avatar28 from '../../comps/Avatar/Avatar28';
import Avatar40 from '../../comps/Avatar/Avatar40';
import Avatar64 from '../../comps/Avatar/Avatar64';
// import CenterView from './CenterView';

storiesOf('Avatars', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Avatar28', () => (
    <Avatar28/>
  ))
  .add('Avatar40', () => (
    <Avatar40/>
  ))
  .add('Avatar64', () => (
    <Avatar64/>
  ))
  .add('AvatarEdit', () => (
    <AvatarEdit
      imageedit={require('../../comps/Avatar/edit.png')}
        />
  ))
  .add('AvatarWithName', () => (
    <AvatarWithName
        text="Mason K."
        />
  ))
  .add('AvatarProfile', () => (
    <Avatar06
        // text="Change Profile Photo"
        image1={require('../../comps/Avatar/dog4.jpg')}
        />
  ))
  .add('AvatarwithText', () => (
    <Avatar07
        image1={require('../../comps/Avatar/face3.jpg')}
        />
  ))
  ;
