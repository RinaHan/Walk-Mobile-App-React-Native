import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Avatar01 from '../../comps/Avatar/Avatar01';
import Avatar02 from '../../comps/Avatar/Avatar02';
import Avatar03 from '../../comps/Avatar/Avatar03';
import Avatar04 from '../../comps/Avatar/Avatar04';
import Avatar05 from '../../comps/Avatar/Avatar05';
import Avatar06 from '../../comps/Avatar/Avatar06';
// import CenterView from './CenterView';

storiesOf('Avatars', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    <Avatar01
        image={require('../../comps/Avatar/face1.jpg')}
    />
  ))
  .add('02', () => (
    <Avatar02
        image={require('../../comps/Avatar/dog1.jpg')}
        // width={40}
        // height={40}
        />
  ))
  .add('03', () => (
    <Avatar03
        image={require('../../comps/Avatar/dog2.jpg')}
        // width={40}
        // height={40}
        />
  ))
  .add('04', () => (
    <Avatar04
        image1={require('../../comps/Avatar/dog3.jpg')}
        image2={require('../../comps/Avatar/edit.png')}
      
        />
  ))
  .add('05', () => (
    <Avatar05
        text="Mason K."
        image1={require('../../comps/Avatar/dog4.jpg')}
        />
  ))
  .add('06', () => (
    <Avatar06
        text="Change Profile Photo"
        image1={require('../../comps/Avatar/dog5.jpg')}
        />
  ))
  ;
