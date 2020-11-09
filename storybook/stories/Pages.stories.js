import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import RequestPage from '../../comps/RequestPage';
import ActivatePage from '../../comps/ActivatePage';
import OwnerDashPage from '../../comps/OwnerDashPage';
import DogProfilePage from '../../comps/DogProfilePage';
import FootBar from '../../comps/FootBar';

// import CenterView from './CenterView';

storiesOf('Pages', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('RequestPage', () => (
    <RequestPage/>
  ))
  .add('ActivatePage', () => (
    <ActivatePage/>
  ))
  .add('OwnerDashPage', () => (
    <OwnerDashPage/>
  ))
  .add('DogProfilePage', () => (
    <DogProfilePage/>
  ))
  .add('FootBar', () => (
    <FootBar/>
  ))
  ;
