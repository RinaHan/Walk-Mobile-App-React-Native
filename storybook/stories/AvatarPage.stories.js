import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import AvatarPage from '../../comps/AvatarPage';

// import CenterView from './CenterView';

storiesOf('Pages', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('AvatarPage', () => (
    <PagAvatarPagee01/>
  ))
  ;
