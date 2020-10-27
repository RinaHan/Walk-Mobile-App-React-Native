import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '../../comps/WButton/Button';
import Button01 from '../../comps/WButton/Button01';
import Button02 from '../../comps/WButton/Button02';
import Button03 from '../../comps/WButton/Button03';
import Button04 from '../../comps/WButton/Button04';
import Button05 from '../../comps/WButton/Button05';
import CenterView from './CenterView';

storiesOf('Walk Buttons', module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('01', () => (
    // <Button 
    //   text="Activate Walk"  
    //   backgroundColor= "#38BC64" 
    //   height={26}
    //   />
    <Button01 />
  ))
  .add('02', () => (
    // <Button 
    //   text="Dog Owner"  
    //   backgroundColor= "#53B7BE" 
    //   height={55}
    //   />
    <Button02 />
  ))
  .add('03', () => (
    // <Button 
    //   text="Continue"  
    //   backgroundColor= "#53B7BE" 
    //   height={45}
    //   />
    <Button03 />
  ))
  .add('04', () => (
    // <Button 
    //   text="Write a Review"  
    //   backgroundColor= "#565555" 
    //   height={45}
    //   width={140}
    //   />
      
      <Button04 />
  ))
  .add('05', () => (
    // <Button 
    //   text="Interested"  
    //   backgroundColor= "#959494" 
    //   height={27} 
    //   />
    //   ,
    <Button05 />
  ))
  .add('06', () => (
    <Button 
      text="Interested"  
      backgroundColor= "#53B7BE" 
      height={27} 
      />
  ))
  ;