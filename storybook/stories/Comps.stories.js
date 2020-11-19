import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';


import AvatarWithName from '../../comps/Avatar/AvatarWithName';
import AvatarDogProfile from '../../comps/AvatarForm/AvatarDogProfile';
import AddImage from '../../comps/AddImage';
import ActivatePage from '../../comps/ActivatePage';
import AvatarEdit from '../../comps/Avatar/AvatarEdit';


import Background from '../../comps/Background';

import ContinuePage from '../../comps/ContinueAsPage';
import ContinueAs from '../../comps/ContinueAs';

import DogProfilePage from '../../comps/DogProfilePage';
import Dropdown from '../../comps/Dropdown';
import DogInfoTitle from '../../comps/DogInfoTitle';
import DogInfo from '../../comps/DogInfo';
import DogDislikes from '../../comps/DogDislikes';
import DogLikes from '../../comps/DogLikes';
import DashOwner from '../../comps/DashOwner';
import DashDog from '../../comps/DashDog';
import DogPhotos from '../../comps/DogPhotos';

// import Feed from '../../comps/Feed';
import FooterBar from '../../comps/FooterBar';
import FacebookButton from '../../comps/FacebookButton';

import GoogleButton from '../../comps/GoogleButton';

import Likes from '../../comps/Likes';
import LocationAge from '../../comps/LocationAge';

import MsgSent from '../../comps/MsgSent';
import MsgSelection from '../../comps/MsgSelection';
import MapPlaceholder from '../../comps/MapPlaceholder';

import Or from '../../comps/Or';

import Posts from '../../comps/Posts';
import Post from '../../comps/Post';
import Popup from '../../comps/Popup';

import ReviewStars from '../../comps/ReviewStars';
import RequestPage from '../../comps/RequestPage';

import ShareFeedback from '../../comps/ShareFeedback';
import Spacer from '../../comps/Spacer';

import Title from '../../comps/Title';
import Texting from '../../comps/Texting';

import UserBio from '../../comps/UserBio';

import WalkerProfile from '../../comps/WalkerProfile';
import WriteReview from '../../comps/WriteReview';

import YourReview from '../../comps/YourReview';

//-----------Pages
import SignIn from '../../comps/SignIn';
import LeaveReviewPage from '../../comps/LeaveReviewPage';
import WalkerProfileTitle from '../../comps/WalkerProfileTitle';
import WalkerProfilePage from '../../comps/WalkerProfilePage';
import UserInfo from '../../comps/UserInfo';




storiesOf('Comps', module)


.add('AvatarEdit', () => (
  <AvatarEdit />
  ))
.add('AddImage', () => (
  <AddImage />
))
.add('AvatarDogProfile', () => (
  <AvatarDogProfile />
))
.add('AvatarWithName', () => (
<AvatarWithName/>
))
.add('DogInfo', () => (
  <DogInfo/>
))
.add('DogLikes', () => (
  <DogLikes/>
))
.add('DashOwner', () => (
  <DashOwner/>
))
.add('DashDog', () => (
  <DashDog/>
))
.add('DogDislikes', () => (
<DogDislikes/>
))
.add('DogPhotos', () => (
<DogPhotos/>
))



.add('FooterBar', () => (
<FooterBar/>
))
.add('FacebookButton', () => (
<FacebookButton/>
))

.add('GoogleButton', () => (
<GoogleButton/>
))
.add('MsgSelection', () => (
<MsgSelection/>
))

.add('MapPlaceholder', () => (
<MapPlaceholder/>
))
.add('Post', () => (
<Post/>
))


.add('ReviewStars', () => (
<ReviewStars/>
))
.add('Spacer', () => (
<Spacer/>
))
  
  
.add('Texting', () => (
<Texting/>
))

.add('Title', () => (
<Title/>
))


.add('LocationAge', () => (
  <LocationAge />
))

.add('UserInfo', () => (
  <UserInfo/>
))
.add('UserBio', () => (
  <UserBio/>
))
.add('WalkerProfile', () => (
  <WalkerProfile/>
))
.add('WriteReview', () => (
  <WriteReview />
))
.add('WalkerProfileTitle', () => (
  <WalkerProfileTitle/>
))
.add('WriteReview', () => (
  <WriteReview/>
))
.add('YourReview', () => (
<YourReview/>
))

//--------------Pages----------------------

.add('ActivatePage', () => (
<ActivatePage/>
))
.add('ContinueAs', () => (
<ContinueAs/>
))
.add('ContinuePage', () => (
  <ContinuePage/>
))
.add('DogProfilePage', () => (
<DogProfilePage/>
))
// .add('Feed', () => (
// <Feed/>
// ))

.add('RequestPage', () => (
<RequestPage/>
))

.add('SignIn', () => (
  <SignIn/>
))
.add('WalkProfilePage', () => (
<WalkerProfilePage/>
))

;



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
<BasicAvatar image1={require('../../comps/Avatar/face3.jpg')}/>
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



