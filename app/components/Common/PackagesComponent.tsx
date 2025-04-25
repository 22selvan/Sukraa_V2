import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
  } from 'react-native';
  import React from 'react';
  import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../utils/SharedImages';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


  interface PackageItem {
    title: string;
    description: string;
    tests: string;
    price: number;
    recommended?: boolean;
    originalPrice:string;
  }
  
  interface PackageSection {
    section: string;
    packages: PackageItem[];
  }
  
  interface PackagesComponentProps {
    packageData: PackageSection[];
    categoryIcons: CategoryIconItem[];
  }
  
  interface CategoryIconItem {
    label: string;
    color: string;
    icon: ImageSourcePropType;
  }
  

  
  const PackagesComponent: React.FC<PackagesComponentProps> = ({ packageData,categoryIcons }) => {
      const navigation = useNavigation()
    return (
      <>
            <ScrollView
              horizontal
              style={styles.iconRow}
              showsHorizontalScrollIndicator={false}>
              {categoryIcons.map((item, index) => (
                <TouchableOpacity key={index} style={styles.iconContainer}>
                  <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                  <Image
                    source={item.icon}
                    style={{
                      width: wp('15%'),
                      height: wp('15%'),
                      resizeMode: 'contain',
                      marginRight: wp('1.5%'),
                    }}
                  />
                  </View>
                  <Text >{item.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
        {packageData.map((section, index) => (
          <View key={index} style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollRow}>
              {section.packages.map((item, index) => (
                <View key={index} style={styles.packageCard}>
                  {item.recommended && (
                    <View style={styles.recommendedBadge}>
                      <Text style={{ color: '#fff', fontSize: 12 }}>
                        Recommended For You
                      </Text>
                    </View>
                  )}
                  <View style={styles.contentContainer}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <View style={styles.sampleInfo}>
                        <Text style={styles.sampleText}>{item.description}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            backgroundColor: '#fff',
                            marginVertical: 10,
                            borderRadius: 10,
                            paddingHorizontal: 8,
                          }}>
                          <Image source={IMAGES.testtube} style={styles.testTubeIcon} />
                          <Text style={styles.timeText}>{item.tests}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.priceContainer}>
                      <TouchableOpacity onPress={() => navigation.navigate('TestDetailsScreen')}>
                        <LinearGradient
                          colors={['#1E3989', '#9B71AA', '#87C699']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={styles.addButton}>
                          <Text style={styles.buttonText}>Add to Lab</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                      <View>
                        <Text style={styles.price}>SAR {item.price}</Text>
                        <Text style={styles.originalPrice}>SAR2499</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </>
    );
  };
  
  const styles = StyleSheet.create({
    iconRow: {
      marginTop: hp('1.5%'),
    },
    sectionTitle: {
      color: "#00071A",
      fontSize: hp('2.2%'),
      fontWeight: 'bold',
      marginHorizontal: wp('3%'),
      marginTop: hp('2.5%'),
    },
    scrollRow: {
      marginVertical: hp('1.5%'),
    },
    packageCard: {
      width: wp('80%'),
      marginHorizontal: wp('2.5%'),
      padding: wp('4%'),
      backgroundColor: '#C8DFFF',
      borderRadius: wp('3%'),
    },
    recommendedBadge: {
      position: 'absolute',
      backgroundColor: '#1E3989',
      paddingHorizontal: wp('3%'),
      paddingVertical: hp('0.5%'),
      borderTopLeftRadius: wp('2.5%'),
      borderBottomRightRadius: wp('2.5%'),
      alignSelf: 'flex-start',
    },
    recommendedText: {
      fontSize: hp('2.2%'),
      fontWeight: '600',
      color: '#333',
      marginBottom: hp('2%'),
    },
    card: {
      backgroundColor: 'white',
      borderRadius: wp('3%'),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 3,
    },
    contentContainer: {
      gap: hp('1.5%'),
    },
    title: {
      fontSize: hp('2%'),
      fontWeight: '600',
      color: '#00071A',
      marginTop: hp('2.5%'),
      marginBottom: hp('1%'),
    },
    sampleInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp('1%'),
    },
    sampleText: {
      fontSize: hp('1.6%'),
      color: '#3F4254',
    },
    dotContainer: {
      paddingHorizontal: wp('2%'),
      justifyContent: 'center',
    },
    dot: {
      width: wp('0.8%'),
      height: wp('0.8%'),
      borderRadius: wp('0.4%'),
      backgroundColor: '#666',
    },
    testTubeIcon: {
      width: wp('4%'),
      height: wp('4%'),
      resizeMode: 'contain',
    },
    timeText: {
      fontSize: hp('1.6%'),
      color: '#00071A',
    },
    priceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: hp('0.5%'),
    },
    price: {
      fontSize: hp('2%'),
      fontWeight: '600',
      color: '#333',
    },
    originalPrice: {
      fontSize: hp('1.5%'),
      color: '#666',
      textDecorationLine: 'line-through',
    },
    addButton: {
      borderRadius: wp('8%'),
      padding: hp('2%'),
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: hp('1.8%'),
      fontWeight: '600',
    },
    iconContainer: {
      alignItems: 'center',
      marginRight: wp('5%'),
    },
    iconCircle: {
      justifyContent: "center",
      alignItems: "center",
      width: wp('22%'),
      height: wp('22%'),
      borderRadius: wp('11%'),
      marginBottom: hp('0.5%'),
    },
    icon: {
      width: wp('5%'),
      height: wp('5%'),
      marginRight: wp('1.5%'),
    },
    iconSmall: {
      width: wp('8%'),
      height: wp('8%'),
      resizeMode: 'contain',
    },
  });
  
  
  export default PackagesComponent;
  