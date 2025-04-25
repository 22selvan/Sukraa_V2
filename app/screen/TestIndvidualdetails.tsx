import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../utils/SharedImages';
import { useNavigation, useRoute } from '@react-navigation/native';
import { packageDummyData } from '../DummyData';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const TestIndvidualdetails = () => {
     const navigation = useNavigation();
//  const testData = packageDummyData[0]
  const testData = {
    title: "Glucose-Fasting",
  price: "SAR 199",
  deliveryTime: "3 hr",
  sampleRequired: ["Blood Sample",],
  description: "Measures sugar level after fasting.Helpful for diabetes diagnosis.",
  
//   beforeFood: [
//     { name: "CBC", tags: ["Blood health"] },
//     { name: "Blood Sugar", tags: ["Diabetes"] },
//     { name: "Urine Test", tags: ["Kidney", "Urinary tract"] },
//     { name: "ESR", tags: ["Blood health"] },
//   ],

//   afterFood: [
//     { name: "Blood Pressure", tags: ["Heart"] },
//     { name: "BMI", tags: ["Body Measurement"] },
//   ],

  fasting: {
    food: false,
    drink: false,
    water: true,
  },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft} >
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Image source={IMAGES.back} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Test Details</Text>
        </View>
        <View style={styles.cartContainer}>
            <Image source={IMAGES.Cart} resizeMode="contain" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {/* Test Card */}
        <View style={styles.testCard}>
          <View style={styles.testCardContent}>
            <View style={styles.iconContainer}>
              <Image source={IMAGES.bloodDrop} resizeMode="contain" />
            </View>
            <View style={styles.testInfo}>
              <Text style={styles.testName}>{testData.title}</Text>
              <View style={styles.testMetaInfo}>
                <Text style={styles.testPrice}>{testData.price}</Text>
                <View style={styles.divider} />
                <Text style={styles.resultTime}>Result {testData.deliveryTime}</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* About this test */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About this test</Text>
          <Text style={styles.description}>{testData.description}</Text>
        </View>
        
        {/* Fasting */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fasting</Text>
          <View style={styles.fastingContainer}>
            <View style={styles.fastingItem}>
              <View style={[styles.fastingIconContainer, !testData.fasting.food && styles.notAllowed]}>
              <Image source={IMAGES.food} resizeMode="contain" style={{marginBottom:20}}/>
              {!testData.fasting.food && <Image source={IMAGES.close} resizeMode="contain"/>}
              </View>
            </View>
            
            <View style={styles.fastingItem}>
              <View style={[styles.fastingIconContainer, !testData.fasting.drink && styles.notAllowed]}>
              <Image source={IMAGES.Tea} resizeMode="contain" style={{marginBottom:20}}/>
              {!testData.fasting.drink && <Image source={IMAGES.close} resizeMode="contain"/>}
              </View>
            </View>
            
            <View style={styles.fastingItem}>
              <View style={[styles.fastingIconContainer, !testData.fasting.water && styles.notAllowed]}>
              <Image source={IMAGES.water} resizeMode="contain" style={{marginBottom:20}}/>
              {testData.fasting.water && <Image source={IMAGES.check} resizeMode="contain"/>}
              </View>
            </View>
          </View>
        </View>
        
        
        {/* Sample Required */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sample Required</Text>
          <View style={styles.testList}>
            {testData.sampleRequired.map((sample, index) => (
              <View key={index} style={styles.testItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.testItemText}>{sample}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.buttonSpacing} />
      </ScrollView>
      
      {/* Add to Lab Button */}
      <View style={styles.buttonContainer}>
        <LinearGradient
           colors={['#1E3989', '#9B71AA', '#87C699']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("MyLabCartscreen")}>
            <Text style={styles.buttonText}>Add to Lab</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: wp('1%'),
  },
  headerTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginLeft: wp('2%'),
  },
  cartContainer: {
    position: 'relative',
    width: wp('10%'),
    height: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: wp('5%'),
  },
  badge: {
    position: 'absolute',
    top: -hp('0.5%'),
    right: -hp('0.5%'),
    backgroundColor: '#3949AB',
    width: wp('4.5%'),
    height: wp('4.5%'),
    borderRadius: wp('2.25%'),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  testCard: {
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    margin: wp('4%'),
    padding: wp('4%'),
    borderWidth: 1,
    borderColor: "#E4E6EF"
  },
  testCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: wp('17%'),
    height: wp('17%'),
    borderRadius: wp('8.5%'),
    backgroundColor: 'rgba(255, 159, 67, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
  },
  testInfo: {
    flex: 1,
  },
  testName: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: "#00071A"
  },
  testMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testPrice: {
    fontSize: wp('3.8%'),
    color: '#3F4254',
  },
  divider: {
    width: 1,
    height: hp('2%'),
    backgroundColor: '#00071A',
    marginHorizontal: wp('2%'),
  },
  resultTime: {
    fontSize: wp('3.8%'),
    color: '#3F4254',
  },
  section: {
    marginHorizontal: wp('4%'),
    marginBottom: hp('3%'),
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('1.5%'),
    color: '#00071A',
  },
  description: {
    fontSize: wp('3.5%'),
    lineHeight: hp('3.2%'),
    color: '#3F4254',
  },
  fastingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: hp('1%'),
  },
  fastingItem: {
    alignItems: 'center',
    marginRight: wp('6%'),
  },
  fastingIconContainer: {
    width: wp('10%'),
    height: hp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('0.5%'),
  },
  notAllowed: {
    backgroundColor: 'rgba(255, 82, 82, 0.1)',
  },
  notAllowedIcon: {
    marginTop: hp('0.5%'),
  },
  allowedIcon: {
    marginTop: hp('0.5%'),
  },
  subSectionTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    marginTop: hp('1.5%'),
    marginBottom: hp('1%'),
    color: '#00071A',
  },
  testList: {
    marginLeft: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    color: '#00071A',
  },
  testItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  bulletPoint: {
    fontSize: wp('5%'),
    marginRight: wp('2%'),
    color: '#00071A',
  },
  testItemText: {
    fontSize: wp('3.5%'),
    color: '#3F4254',
  },
  buttonContainer: {
    padding: wp('4%'),
    backgroundColor: 'white',
  },
  gradientButton: {
    borderRadius: wp('6%'),
  },
  button: {
    paddingVertical: hp('1.7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.2%'),
    fontWeight: 'bold',
  },
  buttonSpacing: {
    height: hp('10%'),
  },
});


export default TestIndvidualdetails;