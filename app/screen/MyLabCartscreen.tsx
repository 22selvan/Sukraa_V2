import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Image, ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../utils/SharedImages';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const MyLabCartscreen = () => {
      const navigation = useNavigation();
      type Test = {
        id: string;
        name: string;
        price: string;
        resultTime: string;
        images:ImageSourcePropType;
      };
  // Using the provided data
  const testData =[ {
    id: '1',
    name: 'Basic Health Checkup',
    price: 'SAR 999',
    resultTime: '24hrs',
    images:IMAGES.Black
  }
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
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
              <Image source={IMAGES.back} resizeMode="contain" />
          </TouchableOpacity>
              <Text style={styles.headerTitle}>My Lab</Text>
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
                onPress={() => removeTest(test.id)}
              >
                <Image source={IMAGES.remove} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.addButton} onPress={()=>navigation.navigate("BookingTest")}>
          <Text style={styles.addButtonText}>Add Test</Text>
        </TouchableOpacity>
        
        <LinearGradient
           colors={['#1E3989', '#9B71AA', '#87C699']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <TouchableOpacity style={styles.bookButton} onPress={()=>navigation.navigate("AppointmentBooking")}>
            <Text style={styles.bookButtonText}>Book Now</Text>
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
    paddingVertical: hp('2%'), 
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
    // paddingVertical: 4,
  },
  headerTitle: {
    fontSize: wp("4.5%"), 
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
    borderRadius: 12,
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
    width: wp('12%'), 
    height: wp('12%'), 
    borderRadius: wp('6%'),
    backgroundColor: 'rgba(255, 159, 67, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
  },
  testInfo: {
    flex: 1,
  },
  testName: {
    fontSize:wp("4.5%"), 
    fontWeight: 'bold',
    marginBottom: hp('1%'), 
  },
  testMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  testPrice: {
    fontSize:wp("3.5%"),  
    color: '#555',
  },
  divider: {
    width: 1,
    height: hp('2%'), // Responsive height
    backgroundColor: '#DDD',
    marginHorizontal: wp('2%'), // Responsive margin
  },
  resultTime: {
    fontSize:wp("3.5%"), 
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
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#3949AB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'), 
  },
  addButtonText: {
    color: '#3949AB',
    fontSize:wp("4%"), 
    fontWeight: '600',
  },
  gradientButton: {
    flex: 1,
    borderRadius: 25,
    marginLeft: wp('2%'), 
  },
  bookButton: {
    height: hp('6%'), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize:wp("4%"), 
    fontWeight: '600',
  },
});

export default MyLabCartscreen;