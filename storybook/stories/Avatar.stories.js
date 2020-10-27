import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Avatar from '../../comps/Avatar';
// import CenterView from './CenterView';

storiesOf('Avatar', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    <Avatar
        text="lala"
    />
  ))
  ;