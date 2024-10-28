import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { useScrollTo } from "@react-navigation/native";

const screenwidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function About({ navigation }) {
  const [loaded] = useFonts({
    SalmondSemibold: require("../assets/fonts/Salmond-Semibold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Homepage")}
        style={styles.backButton}
      >
        <Image
          source={require("../assets/BackArrow.png")}
          style={styles.backArrow}
        />
      </TouchableOpacity>
      <ScrollView
  ref={(ref) => (scrollViewRef = ref)}
  style={styles.scrollView}
>
        <View style={styles.Container1}></View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/Lcenter.png")}
            style={{
              bottom: screenHeight * 0.3,
              width: 137,
              height: 140,
              alignSelf: "center",
              bottom: screenHeight * 0.1,
            }}
          />
          <Text style={styles.title1}>What is</Text>
          <Text style={styles.title2}>Universe?</Text>
          <Text
            style={[styles.paragraph, { lineHeight: screenHeight * 0.035 }]}
            multiline
          >
            Universe is a music player, and streaming mobile app designed to be
            your ultimate music discovery platform. With its minimalist
            interface, you can effortlessly explore trending tracks, uncover new
            artists and genres, and delve deep into the nuances of various
            musical styles. Whether you're a seasoned music enthusiast or just
            starting your sonic journey, Universe offers a curated experience
            that caters to your unique taste.
          </Text>

          <Image
            source={require("../assets/animated.gif")}
            style={{
              bottom: screenHeight * 0.2,
              width: 280,
              height: 200,
              alignSelf: "center",
            }}
          />
          <Image />
          <Text style={styles.line}></Text>
          <Text style={styles.title3}>All about</Text>
          <Text style={styles.title4}>Design</Text>
          <Text
            style={[styles.paragraph1, { lineHeight: screenHeight * 0.035 }]}
            multiline
          >
            Aesthetics are crucial in the Universe music player, and streaming
            mobile app. A minimalist design with clean lines and uncluttered
            interfaces enhances visual appeal and navigation. The perfect
            combination of colours (60-30-10), fonts (Salmond and Ethos Nova),
            and spacing creates a harmonious environment. Attractive content,
            such as album artwork and song titles, keeps users engaged. Readable
            typography ensures easy reading and prevents eye strain,
            contributing to a delightful listening experience.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../assets/D1.png")}
            style={{
              width: 110,
              height: 140,
              resizeMode: "contain",
            }}
          />
          <Image
            source={require("../assets/D2.png")}
            style={{
              width: 110,
              height: 140,
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../assets/D3.png")}
            style={{
              width: 110,
              height: 140,
              resizeMode: "contain",
            }}
          />
          <Image
            source={require("../assets/D4.png")}
            style={{
              width: 110,
              height: 140,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={styles.line1}></Text>
        <Text style={styles.title5}>We are</Text>
        <Text style={styles.title6}>StudioU</Text>
        <Text
  style={[styles.paragraph3, { lineHeight: screenHeight * 0.035 }]}
  multiline
>
  StudioU is a group of IT students developers from BSIT-3A in Colegio
  De Montalban aiming to build a user-friendly application and valuable
  project to establish group purpose in the community. The developers
  excellence and professionalism are their edge to the IT industry.
</Text>
<Text
  style={[styles.paragraph3, { lineHeight: screenHeight * 0.035, paddingTop: 20 }]}
  multiline
>
  The StudioU motto is “It all starts with a great idea and teamwork.”
</Text>
<View
  style={{
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 50,
  }}
>
  <Image
    source={require("../assets/Group.png")}
    style={{
      width: 500,
      height: 450,
      resizeMode: "contain",
      marginBottom: 30,
    }}
  />
  <Image
    source={require("../assets/Group1.png")}
    style={{
      width: 500,
      height: 450,
      resizeMode: "contain",
      marginBottom: 30,
    }}
  />
  <Image
    source={require("../assets/Group2.png")}
    style={{
      width: 500,
      height: 450,
      resizeMode: "contain",
      marginBottom: 30,
    }}
  />
  <Image
    source={require("../assets/Group3.png")}
    style={{
      width: 500,
      height: 450,
      resizeMode: "contain",
      marginBottom: 30,
    }}
  />
  <Image
    source={require("../assets/Group4.png")}
    style={{
      width: 500,
      height: 450,
      resizeMode: "contain",
      marginBottom: 100,
    }}
  />
</View>

<Text style={styles.t1}>Thank</Text>
<Text style={styles.t2}>You</Text>

<View
  style={{
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  }}
>
  <Image
    source={require("../assets/man.gif")}
    style={{
      width: 236,
      height: 229.49,
      resizeMode: "contain",
      marginBottom: 30,
    }}
  />

  </View>
  <TouchableOpacity
  onPress={() => {
    setTimeout(() => {
      scrollViewRef.scrollTo({ y: 0, animated: true });
    }, 1000); 
  }}
  style={[
    styles.Button,
    {
      justifyContent: "center",
      alignItems: "center",
      
    },
  ]}
>
  <Image
    source={require("../assets/UpArrow.png")}
    style={[styles.Arrow,
{
  width: 50,
  height: 50,
  marginBottom: 100
}
    ]}
  />
</TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#5677E5",
  },
  scrollView: {
    flex: 1,
  },
  Container1: {
    backgroundColor: "#ffffff",
    padding: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
  backArrow: {
    width: 50,
    height: 50,
    backgroundColor: "#5677E5",
    borderRadius: 100,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  paragraph: {
    fontSize: screenHeight * 0.024,
    bottom: screenHeight * 0.25,
    color: "#ffff",
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    fontFamily: "SalmondSemibold",
  },
  paragraph1: {
    fontSize: screenHeight * 0.024,
    bottom: screenHeight * 0.02,
    color: "#ffff",
    textAlign: "center",
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    fontFamily: "SalmondSemibold",
  },
  paragraph2: {
    fontSize: screenHeight * 0.024,
    bottom: screenHeight * 0.02,
    color: "#ffff",
    textAlign: "center",
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    fontFamily: "SalmondSemibold",
  },
  paragraph3: {
    fontSize: screenHeight * 0.024,
    bottom: screenHeight * 0.05-50,
    color: "#ffff",
    textAlign: "center",
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 10,
    fontFamily: "SalmondSemibold",
  },
  line: {
    width: 282,
    height: 1,
    borderWidth: 2,
    borderColor: "#ffffff",
    bottom: screenHeight * 0.12,
  },
  line1: {
    width: 282,
    height: 1,
    borderWidth: 2,
    borderColor: "#ffffff",
    bottom: screenHeight * 0.001,
    left: 36,
    marginTop: 30,
  },
  title1: {
    fontSize: 24,
    color: "#5677E5",
    bottom: screenHeight * 0.46,
    fontSize: screenHeight * 0.05,
    fontFamily: "SalmondSemibold",
    marginBottom: 10,
  },
  title2: {
    fontSize: 24,
    color: "#5677E5",
    bottom: screenHeight * 0.47,
    fontSize: screenHeight * 0.087,
    fontFamily: "SalmondSemibold",
  },
  title3: {
    fontSize: 24,
    color: "#ffffff",
    bottom: screenHeight * 0.05,
    fontSize: screenHeight * 0.045,
    fontFamily: "SalmondSemibold",
  },
  title4: {
    fontSize: 24,
    color: "#ffffff",
    bottom: screenHeight * 0.05,
    fontSize: screenHeight * 0.087,
    fontFamily: "SalmondSemibold",
  },
  title5: {
    fontSize: screenHeight * 0.045,
    color: "#ffffff",
    bottom: screenHeight * 0.001,
    fontFamily: "SalmondSemibold",
    textAlign: "center",
    paddingTop: 35,
  },

  title6: {
    fontSize: screenHeight * 0.087,
    color: "#ffffff",
    bottom: screenHeight * 0.0 - 1,
    fontFamily: "SalmondSemibold",
    textAlign: "center",
  },
  t1: {
    fontSize: screenHeight * 0.087,
    color: "#ffffff",
    bottom: screenHeight * 0.001,
    fontFamily: "SalmondSemibold",
    textAlign: "center",
    paddingTop: 35,
  },

  t2: {
    fontSize: screenHeight * 0.087,
    color: "#ffffff",
    bottom: screenHeight * 0.0 - 1,
    fontFamily: "SalmondSemibold",
    textAlign: "center",
  },
});

export default About;
