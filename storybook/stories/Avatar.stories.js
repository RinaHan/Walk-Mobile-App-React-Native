import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import BasicAvatar from '../../comps/Avatar/BasicAvatar';
import Avatar04 from '../../comps/Avatar/Avatar04';
import Avatar05 from '../../comps/Avatar/Avatar05';
import Avatar06 from '../../comps/Avatar/Avatar06';
import Avatar07 from '../../comps/Avatar/Avatar07';
// import CenterView from './CenterView';

storiesOf('Avatars', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('BasicAvatar', () => (
    <BasicAvatar
        image1={require('../../comps/Avatar/face1.jpg')}
        width={28}
        height={28}
    />
  ))
  .add('01', () => (
    <BasicAvatar
        image1={require('../../comps/Avatar/face1.jpg')}
        width={28}
        height={28}
    />
  ))
  .add('02', () => (
    <BasicAvatar
        image1={require('../../comps/Avatar/dog1.jpg')}
        width={40}
        height={40}
        />
  ))
  .add('03', () => (
    <BasicAvatar
        image1={require('../../comps/Avatar/dog2.jpg')}
        width={64}
        height={64}
        />
  ))
  .add('04', () => (
    <Avatar04
        image2={require('../../comps/Avatar/edit.png')}
        />
  ))
  .add('05', () => (
    <Avatar05
        text="Mason K."
        />
  ))
  .add('06', () => (
    <Avatar06
        // text="Change Profile Photo"
        image1={require('../../comps/Avatar/dog4.jpg')}
        />
  ))
  .add('07', () => (
    <Avatar07
        image1={require('../../comps/Avatar/face3.jpg')}
        />
  ))
  ;
