import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
import UserInfo from '../../comps/UserInfo';
import FooterBar from '../../comps/FooterBar';
import UserBio from '../../comps/UserBio';
import Title from '../../comps/Title';
import Texting from '../../comps/Texting';
import Spacer from '../../comps/Spacer';
import FacebookButton from '../../comps/FacebookButton';
import ShareFeedback from '../../comps/ShareFeedback';
import ReviewStars from '../../comps/ReviewStars';
import RequestPage from '../../comps/RequestPage';
import Posts from '../../comps/Posts';
import Post from '../../comps/Post';
import Popup from '../../comps/Popup';
import Or from '../../comps/Or';
import MsgSent from '../../comps/MsgSent';
import MsgSelection from '../../comps/MsgSelection';
import LocationAge from '../../comps/LocationAge';
import Likes from '../../comps/Likes';
import Input from '../../comps/Input';
import GoogleButton from '../../comps/GoogleButton';
import AvatarEdit from '../../comps/Avatar/AvatarEdit';
import DogPhotos from '../../comps/DogPhotos';

import EventInfo from '../../comps/EventInfo';
import Dropdown from '../../comps/Dropdown';
import DogInfoTitle from '../../comps/DogInfoTitle';
import DogInfo from '../../comps/DogInfo';
import DogDislikes from '../../comps/DogDislikes';
import DogLikes from '../../comps/DogLikes';
import DashOwner from '../../comps/DashOwner';
import DashDog from '../../comps/DashDog';
// import Birthday from '../../comps/Birthday';
import Background from '../../comps/Background';
import WriteReview from '../../comps/WriteReview';
import YourReview from '../../comps/YourReview';
import AvatarDogProfile from '../../comps/AvatarForm/AvatarDogProfile';

import ContinueAs from '../../comps/ContinueAs';
import SignIn from '../../comps/SignIn';
import LeaveReviewPage from '../../comps/LeaveReviewPage';
import ActivatePage from '../../comps/ActivatePage';
import ContinuePage from '../../comps/ContinueAsPage';
import DogProfilePage from '../../comps/DogProfilePage';

storiesOf('Comps', module)
 //modified. done
  .add('WalkerProfileTitle', () => (
    <WalkerProfileTitle/>
  ))
  //modified. done
  .add('UserInfo', () => (
    <UserInfo/>
  ))
  .add('UserBio', () => (
    <UserBio/>
  ))
  //only checked. need to solve 2 import, ----------->
  //only checked. many components or tags are invisible
  .add('Texting', () => (
    <Texting/>
    ))
    //okay
    .add('FooterBar', () => (
      <FooterBar/>
      ))
      //okay
      .add('Title', () => (
        <Title/>
        ))
        //okay
        .add('Spacer', () => (
          <Spacer/>
          ))
          //modified. still need to solve 2 import, ----------->
          // .add('ShareFeedback', () => (
            //     <ShareFeedback/>
            //   ))
            // // error break Android, need to modify code
            .add('ReviewStars', () => (
              <ReviewStars/>
              ))
              // .add('RequestPage', () => (
                //     <RequestPage/>
                //   ))
                // .add('Posts', () => (
                  //     <Posts/>
                  //   ))
                          
// .add('Post', () => (
//     <Post/>
//   ))
// .add('Popup', () => (
//     <Popup/>
//   ))
// .add('Or', () => (
//     <Or/>
//   ))
// .add('MsgSent', () => (
//     <MsgSent/>
//   ))
.add('MsgSelection', () => (
    <MsgSelection/>
  ))
.add('WriteReview', () => (
    <WriteReview/>
  ))
.add('YourReview', () => (
    <YourReview/>
  ))
// .add('MsgRecieved', () => (
//     <MsgRecieved/>
//   ))

// .add('Likes', () => (
//     <Likes/>
//   ))
// .add('LeaveReviewPage', () => (
//     <LeaveReviewPage/>
//   ))
// .add('Input', () => (
//     <Input/>
//   ))
.add('GoogleButton', () => (
    <GoogleButton/>
  ))

.add('FacebookButton', () => (
    <FacebookButton/>
  ))
// .add('EventInfo', () => (
//     <EventInfo/>
//   ))
// .add('Dropdown', () => (
//     <Dropdown/>
//   ))
.add('DogLikes', () => (
    <DogLikes/>
  ))
  .add('DogDislikes', () => (
      <DogDislikes/>
    ))
  .add('DogPhotos', () => (
      <DogPhotos/>
    ))
  
// .add('DogInfoTitle', () => (
//     <DogInfoTitle/>
//   ))
.add('DogInfo', () => (
    <DogInfo/>
  ))
  .add('AvatarEdit', () => (
    <AvatarEdit />
  ))
  .add('AvatarDogProfile', () => (
    <AvatarDogProfile />
  ))
  .add('WriteReview', () => (
    <WriteReview />
  ))
  .add('LocationAge', () => (
    <LocationAge />
  ))
// .add('Description', () => (
//     <Description/>
//   ))
// .add('DashOwner', () => (
//     <DashOwner/>
//   ))
// .add('DashDog', () => (
//     <DashDog/>
//   ))
.add('ContinuePage', () => (
    <ContinuePage/>
  ))
  .add('WalkProfilePage', () => (
    <WalkerProfilePage/>
  ))
.add('SignIn', () => (
    <SignIn/>
  ))
.add('ContinueAs', () => (
    <ContinueAs/>
  ))
.add('RequestPage', () => (
    <RequestPage/>
  ))
.add('ActivatePage', () => (
    <ActivatePage/>
  ))
.add('DogProfilePage', () => (
    <DogProfilePage/>
  ))
// // .add('Birthday', () => (
// //     <Birthday/>
// //   ))
// .add('Background', () => (
//     <Background/>
//   ))
// impossible, it break Android
//   .add('WalkerProfile', () => (
//     <WalkerProfile/>
//   ))



/* 
justifyContent:"center"
style={{width:300, height:100 }} 
style={{fontWeight:"bold", fontSize:18}}

import { View, Text, StyleSheet, ScrollView} from "react-native";



const styles = StyleSheet.create({ 
  app: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red",
    height:"100%"
  },
});
image1={require('../../comps/Avatar/face3.jpg')}
const activehome = require("./activehome.png");


AvatarViewProfile.defaultProps = {
    textname: null,
    text: null,
    backgroundColor: null,
    // height: null
};

<View style={styles.app}>
<TopBar title="Inbox" />
<ScrollView>
<View style={styles.container}>

</View>
</ScrollView>
<FooterBar style={styles.footerBar} />

*/
;