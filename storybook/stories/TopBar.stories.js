import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import TopBar from '../../comps/TopBar';
// import CenterView from './CenterView';

storiesOf('Top Bar', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    <TopBar 
      title="Inbox" 
    />
  ))
  .add('02', () => (
    <TopBar 
      title="Events" 
    />
  ))
  .add('03', () => (
    <TopBar 
      title="Walker Profile" 
      image="require('./leftArrow.png')"
    />
  ))
  .add('04', () => (
    <TopBar 
      title="Walker Profile" 
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