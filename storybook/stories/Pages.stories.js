import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import RequestPage from '../../comps/RequestPage';
import ActivatePage from '../../comps/ActivatePage';
import DashboardPage from '../../comps/DashboardPage';
import DogProfilePage from '../../comps/DogProfilePage';

// import CenterView from './CenterView';

storiesOf('Pages', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('RequestPage', () => (
    <RequestPage/>
  ))
  .add('ActivatePage', () => (
    <ActivatePage/>
  ))
  .add('DashboardPage', () => (
    <DashboardPage/>
  ))
  .add('DogProfilePage', () => (
    <DogProfilePage/>
  ))
  ;
