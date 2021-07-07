import React from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  SafeAreaView,
  SectionList
} from "react-native";
import styles from "./styles";

const Stir = ({ navigation }) => {

  return (
      <View style={styles.container} >


        <ScrollView style={styles.containerText}>

        <SafeAreaView>
        <Text style={styles.title2}>Stirring</Text>
        </SafeAreaView>

            <Text style={styles.text}> Stirring may seem like a simple thing that you mastered when you were a kid, and it is. However, its purpose in mixology is important and requires a bit more attention.{"\n"}{"\n"} When you stir drinks, the goal is to gently combine the ingredients and dissolve enough ice to water down the potent mix.{"\n"}{"\n"} This softens the alcohol's flavor, making it more palatable and enjoyable for the drinker, and creates a uniform flavor in the drink. </Text>

            <Image 
            source={{uri: "https://i.ibb.co/Rbpw1zp/Mixing-Glass.jpg" }}
            style={{height: 220, width: 300, borderRadius: 32, alignSelf:'center', marginTop: 20, marginBottom:20}} />

            <Text style={{...styles.text, marginTop: 0}}> The most important thing to remember is that you don't stir cocktails as if you were mixing a cake batter. That would only create a huge mess and splash liquid all over the bar.{"\n"}{"\n"} Instead keep it slow, smooth, and steady; be patient and go with the flow.</Text>

            <Image 
            source={{uri: "https://cb.scene7.com/is/image/Crate/BarSpoonWMuddlerSHS16/$web_pdp_main_carousel_med$/190411134814/bar-spoon-with-muddler.jpg" }}
            style={{height: 260, width: 300, borderRadius: 32, alignSelf:'center', marginTop: 20, marginBottom:20}} />

        <View>
        <SectionList
          sections={[
            {title: '1', data: ['Chill a mixing glass or stirring pitcher by placing it in the refrigerator or freezer. (The base of a cocktail shaker or a pint glass works, too.) Alternatively, fill it with ice and cold water, stir it for a quick chill, then discard the ice water.']},
            {title: '2', data: ['Add the liquors and mixers, and fill the glass two-thirds full of ice.']},
            {title: '3', data: ['Hold a bar spoon with your thumb and first two fingers toward the top of the shaft, weaving it between your middle and ring fingers for stability. A tight grip should not be necessary.']},
            {title: '4', data: ['Place the bar spoon into the ice so the back of the spoon rests against the glass. Some bartenders go only an inch or two into the ice and barely touch the liquid, while others slide it almost to the bottom.']},
            {title: '5', data: ['Use your fingers to move the spoon around the edge of the glass to rotate the ice. Let your fingers do the work; your arm should be still, and your wrist should barely move.']},
            {title: '6', data: ['Strain the drink into a well-chilled glass appropriate for the cocktail.']},
          ]}
          renderItem={({item}) => <Text style={{...styles.text, marginTop:5}}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>


        </ScrollView>


      </View>
  );
};

export default Stir;