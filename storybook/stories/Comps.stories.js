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
import WalkerProfile from '../../comps/WalkerProfile';
import Posts from '../../comps/Posts';
import Post from '../../comps/Post';
import Popup from '../../comps/Popup';
import Or from '../../comps/Or';
import MsgSent from '../../comps/MsgSent';
import MsgSelection from '../../comps/MsgSelection';
import MapPlaceholder from '../../comps/MapPlaceholder';
import LocationAge from '../../comps/LocationAge';
import Likes from '../../comps/Likes';
import Input from '../../comps/Input';
import GoogleButton from '../../comps/GoogleButton';
import AvatarEdit from '../../comps/Avatar/AvatarEdit';
import DogPhotos from '../../comps/DogPhotos';
import AvatarWithName from '../../comps/Avatar/AvatarWithName';

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
  
  
.add('AvatarEdit', () => (
  <AvatarEdit />
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

          //modified. still need to solve 2 import, ----------->
          // .add('ShareFeedback', () => (
            //     <ShareFeedback/>
            //   ))
            // // error break Android, need to modify code

              // .add('RequestPage', () => (
                //     <RequestPage/>
                //   ))
                // .add('Posts', () => (
                  //     <Posts/>
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



// .add('EventInfo', () => (
//     <EventInfo/>
//   ))
// .add('Dropdown', () => (
//     <Dropdown/>
//   ))

  
// .add('DogInfoTitle', () => (
//     <DogInfoTitle/>
//   ))


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


  //뻑남              
// .add('Post', () => (
//     <Post/>
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
;


// import React from "react";
// import styled from "styled-components/native";
// import { View, Text, StyleSheet } from "react-native";
// import UserInfo from "../UserInfo";
// import Avatar07 from '../../comps/Avatar/Avatar07';
// import ReviewStars from "../ReviewStars";

// const styles = StyleSheet.create({ 
//   box: {
//     width:353,
//     height:196,
//     backgroundColor:"red",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 26,
//     alignItems:"center",
//     justifyContent:"space-between",
//   },
//   container: {
//     width:"80%",
//     flexDirection:"row",
//     justifyContent:"center",
//   },
//   rightcont: {
//     marginTop:20,
//     height:150,
//     justifyContent:"center",
//     justifyContent:"space-between",
//   },
// });


// const WalkerProfile = ({city, age, bio, name}) => {
//   return (
//     <View style={styles.box}>
      
     
//         <View style={styles.container}>
//           <View>
//             <UserInfo/>
//             <Text 
//               style={styles.extratext}
//               style={{fontSize:10, marginTop:10}}>View full profile</Text>
//           </View>

//           <View style={styles.rightcont}>
//           <Avatar07
//               image1={require('../../comps/Avatar/face3.jpg')}
//           />
//           <ReviewStars/>
//           </View>
//         </View>
        
//     </View>
//   );
// };

// WalkerProfile.defaultProps = {
//   city:"Burnaby, BC",
//   age:"23",
//   bio:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
//   name:"Ethan P",
//   pic:"selfie.jpg"
// };
// export default WalkerProfile;