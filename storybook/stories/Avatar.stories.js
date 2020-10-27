import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Avatar01 from '../../comps/Avatar/Avatar01';
import Avatar02 from '../../comps/Avatar/Avatar02';
// import CenterView from './CenterView';

storiesOf('Avatars', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    <Avatar01
        text="hidd"
        image={require('../../comps/Avatar/face1.jpg')}
    />
  ))
  .add('02', () => (
    <Avatar02
        text="hidd"
        image={require('../../comps/Avatar/dog1.jpg')}
        // width={40}
        // height={40}
        />
  ))
  ;
