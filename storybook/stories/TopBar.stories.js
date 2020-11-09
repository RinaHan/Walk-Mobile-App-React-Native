import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import TopBar from '../../comps/TopBar';
// import CenterView from './CenterView';

storiesOf('Top Bars', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    <TopBar 
      title="Inbox" 
    />
  ))
  .add('02', () => (
    <TopBar 
      title="Events" 
      imageLeft1={require('../../comps/TopBar/leftArrow.png')}
      imageRight1={require('../../comps/TopBar/plus.png')}
    />
  ))
  .add('03', () => (
    <TopBar 
      title="Walker Profile" 
      imageLeft1={require('../../comps/TopBar/leftArrow.png')}
      />
      ))
      .add('04', () => (
    <TopBar 
      title="Walker Profile" 
      imageLeft1={require('../../comps/TopBar/leftArrow.png')}
      imageLeft2={require('../../comps/TopBar/message.png')}
    />
  ))
  .add('05', () => (
    <TopBar 
      title="Edit Profile" 
      text1="Cancel"
      text2="Done"
    />
  ))
  ;