// import { View, Text } from 'react-native'
// import React from 'react'

// const TestIndvidualdetails = () => {
//   return (
//     <View>
//       <Text>TestIndvidualdetails</Text>
//     </View>
//   )
// }

// export default TestIndvidualdetails

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Image, ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../utils/SharedImages';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const TestIndvidual = () => {
      const navigation = useNavigation();
      type Test = {
        id: string;
        name: string;
        price: string;
        resultTime: string;
        images:ImageSourcePropType;
      };
  // Using the provided data
  const testData: Test[] =[ 
  ,{
    id: '2',
    name: 'Glucose - Fasting',
    price: 'SAR 199',
    resultTime: ' 03hrs',
    images:IMAGES.bloodDrop
  }
];

  const [tests,setTests]=useState<Test[]>(testData)

  const removeTest = (id : string) : void => {
    setTests(tests.filter(test => test.id !== id));
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
      
      <View style={styles.content}>
        {/* Test Cards */}
        {tests.map((test) => (
          <View key={test.id} style={styles.testCard}>
            <View style={styles.testCardContent}>
              <View style={styles.iconContainer}>
                  <Image source={test.images} resizeMode="contain"/>
              </View>
              <View style={styles.testInfo}>
                <Text style={styles.testName}>{test.name}</Text>
                <View style={styles.testMetaInfo}>
                  <Text style={styles.testPrice}>{test.price}</Text>
                  <View style={styles.divider} />
                  <Text style={styles.resultTime}>Result {test.resultTime}</Text>
                </View>
              </View>
                  <TouchableOpacity 
                    style={styles.removeButton}
                    onPress={()=>navigation.navigate("TestIndvidualdetails")}
                  >
                    <Image source={IMAGES.DownArrow} style={{width:18,height:18}} resizeMode="contain" />
                  </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:15,width:"50%",marginLeft:50}}>
            <LinearGradient
           colors={['#1E3989', '#9B71AA', '#87C699']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <TouchableOpacity style={styles.bookButton}  onPress={()=>navigation.navigate("MyLabCartscreen")}>
            <Text style={styles.bookButtonText}>Add Lab</Text>
          </TouchableOpacity>
        </LinearGradient>
        </View>
          </View>
        ))}
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
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: 'white',
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    // Optional: paddingVertical: hp('1%'),
  },
  headerTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginLeft: wp('2%'),
  },
  content: {
    flex: 1,
    marginTop: hp('2%'),
    padding: wp('4%'),
  },
  testCard: {
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
    padding: wp('5%'),
    borderWidth: 1,
    borderColor: "#E4E6EF",
  },
  testCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: wp('6.5%'),
    backgroundColor: 'rgba(255, 159, 67, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
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
  testInfo: {
    flex: 1,
  },
  testName: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  testMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testPrice: {
    fontSize: wp('3.5%'),
    color: '#555',
  },
  divider: {
    width: 1,
    height: hp('2%'),
    backgroundColor: '#DDD',
    marginHorizontal: wp('2%'),
  },
  resultTime: {
    fontSize: wp('3.5%'),
    color: '#555',
  },
  removeButton: {
    padding: wp('2%'),
  },
  bottomButtons: {
    flexDirection: 'row',
    padding: wp('4%'),
    backgroundColor: 'white',
  },
  addButton: {
    flex: 1,
    height: hp('6%'),
    borderRadius: hp('3%'),
    borderWidth: 1,
    borderColor: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
  },
  addButtonText: {
    color: '#3949AB',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
  gradientButton: {
    flex: 1,
    borderRadius: hp('3%'),
    marginLeft: wp('2%'),
  },
  bookButton: {
    height: hp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});


export default TestIndvidual;