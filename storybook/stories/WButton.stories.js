import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import BasicButton from '../../comps/WButton/BasicButton';
import ActivateButton from '../../comps/WButton/ActivateButton';
import DogOwnerButton from '../../comps/WButton/DogOwnerButton';
import Button04 from '../../comps/WButton/Button04';
// import CenterView from './CenterView';

storiesOf('Walk Buttons', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('ActivateButton', () => (
    <ActivateButton/>
  ))
  .add('DogOwnerButton', () => (
    <DogOwnerButton/>
  ))
  .add('03', () => (
    <BasicButton 
      text="Continue"  
      backgroundColor= "#53B7BE" 
      height={45}
      width={175}
      size={18}
      />
  ))
  .add('04', () => (
    <Button04/>
  ))
  .add('05', () => (
    <BasicButton 
      text="Interested"  
      backgroundColor= "#959494" 
      height={27} 
      width={107}
      />
  ))
  .add('06', () => (
    <BasicButton 
      text="Interested"  
      backgroundColor= "#53B7BE" 
      height={27} 
      width={107}
      />
  ))
  ;