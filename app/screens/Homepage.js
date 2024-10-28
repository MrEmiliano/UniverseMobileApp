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
import { useNavigation } from "@react-navigation/native";

const screenwidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function Homepage({ navigation }) {
  const [loaded] = useFonts({
    "Salmond-Semibold": require("../assets/fonts/Salmond-Semibold.ttf"),
    "EthosNova-Heavy": require("../assets/fonts/EthosNova-Heavy.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: screenHeight * 0.250,
          backgroundColor: "%ffffff",
        }}
      >
        <Text
          style={[
            styles.paragraph1,
            {
              fontSize: 24,
              color: "#ffffff",
              right: screenHeight * 0.0-5,
              top: screenHeight * 0.03,
              fontSize: screenHeight * 0.04,
              fontFamily: "Salmond-Semibold",
              marginBottom: 10,
            },
          ]}
        >
          Good music
        </Text>
        <Image
          source={require("../assets/DJ.png")}
          style={{
            width: 37,
            height: 37,
            resizeMode: "contain",
            top: screenHeight * 0.023,
            right: screenHeight * 0.0-4,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Image
            source={require("../assets/logosmall.png")}
            style={{
              width: 37,
              height: 37,
              resizeMode: "contain",
              top: screenHeight * 0.023,
              right: screenHeight * 0.001,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={require("../assets/Logout.png")}
            style={{
              width: 37,
              height: 37,
              resizeMode: "contain",
              top: screenHeight * 0.023,
              right: screenHeight * 0.005,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
      <ScrollView
  horizontal={true}
  showsHorizontalScrollIndicator={false}
  style={{
    backgroundColor: "#121212",
    padding: 10,
    bottom: screenHeight * 0.080,
    left: 3,
  }}
>
<Image
            source={require("../assets/compass.png")}
            style={{
              width: 55,
              height: 45,
              resizeMode: "contain",
              marginRight: 20,
              
            }}
          />
  <Text
    style={{
      color: "#ffffff",
      fontSize: 18,
      marginRight: 20,
      backgroundColor: "#5677E6",
      borderRadius: 5,
      padding: 12,
      fontFamily: 'Salmond-Semibold',
     
      
    }}
  >
    All
  </Text>
  <Text
    style={{
        color: "#ffffff",
        fontSize: 18,
        marginRight: 20,
        backgroundColor: "#535353",
        borderRadius: 5,
        padding: 12,
        fontFamily: 'Salmond-Semibold',
    }}
  >
    NewJeans
  </Text>
  <Text
    style={{
        color: "#ffffff",
        fontSize: 18,
        marginRight: 20,
        backgroundColor: "#535353",
        borderRadius: 5,
        padding: 12,
        fontFamily: 'Salmond-Semibold',
    }}
  >
    RobDeniel
  </Text>
  <Text
    style={{
        color: "#ffffff",
        fontSize: 18,
        marginRight: 20,
        backgroundColor: "#535353",
        borderRadius: 5,
        padding: 12,
        fontFamily: 'Salmond-Semibold',
    }}
  >
    OPM
  </Text>
  <Text
    style={{
        color: "#ffffff",
        fontSize: 18,
        marginRight: 20,
        backgroundColor: "#535353",
        borderRadius: 5,
        padding: 12,
        fontFamily: 'Salmond-Semibold',
    }}
  >
    Kpop
  </Text>
 
</ScrollView>
      </View>
      <ScrollView>
  <View style={styles}>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 24,
        borderRadius: 5,
        left: screenHeight * 0.010,
        padding: 5,
        fontFamily: 'Salmond-Semibold',
      }}
    >
      Discover #trending songs
    </Text>
    </View>
    <View style={{ right: screenHeight * 0.020, height: screenHeight * 0.3, width: '100%' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          padding: 7
        }}
      >
        <Image
          source={require("../assets/1.gif")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -6,
          }}
        />
        <Image
          source={require("../assets/2.gif")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -6,
          }}
        />
                <Image
          source={require("../assets/3.gif")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -6,
          }}
        />
                <Image
          source={require("../assets/4.gif")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -6,
          }}
        />
                <Image
          source={require("../assets/5.gif")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -6,
          }}
        />
      </ScrollView>
    </View>
    <View style={styles}>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 24,
        borderRadius: 5,
        left: screenHeight * 0.010,
        padding: 5,
        fontFamily: 'Salmond-Semibold',
      }}
    >
      Popular artists
    </Text>
    </View>
    <View style={{ right: screenHeight * 0.030, height: screenHeight * 0.3, width: '100%' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          padding: 7
        }}
      >
        <Image
          source={require("../assets/b1.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
        <Image
          source={require("../assets/b2.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/b3.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/b4.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/b5.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
      </ScrollView>
      
    </View>
    <View style={styles}>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 24,
        borderRadius: 5,
        left: screenHeight * 0.010,
        padding: 5,
        fontFamily: 'Salmond-Semibold',
      }}
    >
      Popular artists
    </Text>
    </View>
    <View style={{ right: screenHeight * 0.025, height: screenHeight * 0.3, width: '100%' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          padding: 7
        }}
      >
        <Image
          source={require("../assets/c1.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
        <Image
          source={require("../assets/c2.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/c3.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/c4.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/c5.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
      </ScrollView>
    </View>
    <View style={styles}>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 24,
        borderRadius: 5,
        left: screenHeight * 0.010,
        padding: 5,
        fontFamily: 'Salmond-Semibold',
      }}
    >
      Music is everywhere
    </Text>
    </View>
    <View style={{ right: screenHeight * 0.025, height: screenHeight * 0.3, width: '100%' }}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          padding: 7
        }}
      >
        <Image
          source={require("../assets/e1.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
        <Image
          source={require("../assets/e2.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/e3.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/e4.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
                <Image
          source={require("../assets/e5.png")}
          style={{
            width: 182,
            height:190,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
      </ScrollView>
    </View>
    <View style={styles}>
    <Text
      style={{
        color: "#ffffff",
        fontSize: 24,
        borderRadius: 5,
        left: screenHeight * 0.010,
        padding: 5,
        fontFamily: 'Salmond-Semibold',
      }}
    >
      Universe info
    </Text>
    </View>
    <View style={{ left: screenHeight * 0.020, height: screenHeight * 0.3, width: '100%' }}>
    <Image
          source={require("../assets/OPM.png")}
          style={{
            width: 330,
            height:305,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
    </View>
   
    <View style={{ bottom: screenHeight * 0.025, right: screenHeight * 0.025, height: screenHeight * 0.150, width: '100%' }}>
      
    </View>
    <View style={{ left: screenHeight * 0.020, height: screenHeight * 0.3, width: '100%' }}>
    <Image
          source={require("../assets/COJ.gif")}
          style={{
            width: 330,
            height:350,
            resizeMode: "contain",
            marginRight: -25,
          }}
        />
    </View>
    <View style={{ bottom: screenHeight * 0.025, right: screenHeight * 0.500, height: screenHeight * 0.150, width: '100%' }}>
      
      </View>
      <View style={{ bottom: screenHeight * 0.025, right: screenHeight * 0.30, height: screenHeight * 0.150, width: '100%' }}>
      
      </View>
      </ScrollView>
      <View style={{ flex: 1 }}>
  {/* ... other components ... */}
  <View style={{ position: 'absolute', bottom: 0, right: 0, left: -330, height: screenHeight * 0.150 }}>
    <Image
      source={require("../assets/Home.png")}
      style={{
        width: 1000,
        height: 120,
        resizeMode: "contain",
        marginRight: -25,
      }}
    />
  </View>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollView: {
  },
  container1: {
   
    
  },
});

export default Homepage;
