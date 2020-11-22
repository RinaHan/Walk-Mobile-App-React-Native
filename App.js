// import React, { Component } from "react";
// import { View, StyleSheet } from "react-native";
// import Button from "./comps/Button";


// const App = () => {
//   return (
//     <View>
//         <Button 
//         backgroundColor="red"/>

//       </View>
//   );
// };

// // export default App;
// export {default} from './storybook'; 


import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";

import Post from "./comps/Post";import AvatarEdit from "./comps/Avatar/AvatarEdit";
import FooterBar from "./comps/FooterBar";


const Main = styled.View`
 height: 100%;
 margin-top:20px;
`;
const MainCont = styled.View`
`;
const FooterCont = styled.View`
`;
const Cont = styled.View`
  margin-bottom:70px;
`;
const Feed = () => {
  return (
    <Main>
      <ScrollView>
        <Cont>
          <Post />
        </Cont>
        <Cont>
          <Post />
        </Cont>

      </ScrollView>
      <FooterBar />
    </Main>
  );
};

export default Feed;
