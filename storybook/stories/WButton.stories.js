import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import BasicButton from '../../comps/WButton/BasicButton';
import ActivateButton from '../../comps/WButton/ActivateButton';
import DogOwnerButton from '../../comps/WButton/DogOwnerButton';
import ReviewButton from '../../comps/WButton/ReviewButton';
import ContinueButton from '../../comps/WButton/ContinueButton';
import InterestedButton from '../../comps/WButton/InterestedButton';
import GoingButton from '../../comps/WButton/GoingButton';
// import CenterView from './CenterView';

storiesOf('Walk Buttons', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ActivateButton', () => (
    <ActivateButton/>
  ))
  .add('DogOwnerButton', () => (
    <DogOwnerButton/>
  ))
  .add('ContinueButton', () => (
    <ContinueButton />
  ))
  .add('ReviewButton', () => (
    <ReviewButton
        />
  ))
  .add('InterestedButton', () => (
    <InterestedButton/>
  ))
  .add('GoingButton', () => (
    <GoingButton />
  ))
  ; 