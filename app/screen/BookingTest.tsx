import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AllComponent from '../components/Common/AllComponent';
import PackagesComponent from '../components/Common/PackagesComponent';
import TestsComponent from '../components/Common/IndividualtestsComponent';
import UploadComponent from '../components/Common/UploadComponent';
import { IMAGES } from '../utils/SharedImages';
import { useRoute } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const categories = [
    // { label: 'All' },
    { label: 'Packages' },
    { label: 'Individual tests' },
    { label: 'Upload prescription' },
  ];


const categoryIcons = [
    { label: 'Heart', color: '#FFF5F8', icon:IMAGES.Heart},
    { label: 'Bones', color: '#E8FFF3', icon:IMAGES.Bones},
    { label: 'Kidney', color: '#FFF9F4', icon:IMAGES.kidney },
    { label: 'Liver', color: '#FFF8DD', icon:IMAGES.liver },
    { label: 'Colon', color: '#FFF8DD', icon:IMAGES.Colon},
    { label: 'Lungs', color: '#FFF8DD', icon:IMAGES.Lungs},
    { label: 'Thyroid', color: '#F1FAFF', icon:IMAGES.Thyroid},
    { label: 'Blood', color: '#FFF9F4', icon:IMAGES.BloodDrop },

    
  ]



const packageSections = [
  { 
  
    section: 'Full Body Health',
    packages: [
      {
        packid:"1",
        title: 'Full Body Checkup - Advanced',
        description: 'Home sample collection',
        price: '1799',
        originalPrice: '2499',
        recommended: true,
        tests: 15,
      },
      {
        packid:"2",
        title: 'Full Body Checkup - Advanced',
        description: 'Home sample collection',
        price: '1799',
        originalPrice: '2499',
        recommended: true,
        tests: 15,
      },
      {
        packid:"3",
        title: 'Full Body Checkup - Advanced',
        description: 'Home sample collection',
        price: '1799',
        originalPrice: '2499',
        recommended: true,
        tests: 15,
      },
    ],
  },
  {  
    section: 'Diabetes',
    packages: [
      {
        packid:"4",
        title: 'Diabetes Screening',
        description: 'Home sample collection',
        price: '1799',
        originalPrice: '2499',
        recommended: true,
        tests: "03",
      },
      {
        packid:"5",
        title: 'Advanced Diabetes Test Package',
        description: 'Home sample collection',
        price: '1799',
        originalPrice: '2499',
        recommended: true,
        tests: "03",
      },
    ],
  },
  {
    section: 'Thyroid',
    packages: [
      {
        packid:"6",
        title: 'Thyroid Checkup',
        description: 'Home sample collection',
        price: '1200',
        originalPrice: '1700',
        recommended: false,
        tests: "05",
      },
      { 
        packid:"7",
        title: 'Advanced Thyroid Package',
        description: 'Home sample collection',
        price: '2000',
        originalPrice: '2499',
        recommended: false,
        tests: "06",
      },
    ],
  },
];


const screenWidth = Dimensions.get('window').width;
const CategoryButton = ({ label,index, activeCategoryIndex,setActiveCategoryIndex }) => (
  <TouchableOpacity  onPress={() => setActiveCategoryIndex(index)} style={[styles.categoryButton, activeCategoryIndex  && styles.activeCategory]}>
    <Text style={[styles.categoryText, activeCategoryIndex && styles.activeCategoryText]}>{label}</Text>
  </TouchableOpacity>
);


export default function BookingTest() {
  const route = useRoute();
  const index = route?.params?.index ?? 0;
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(index);

    const renderComponent = () => {
        switch (activeCategoryIndex) {
          // case 0: return <AllComponent  packageData ={packageSections} categoryIcons={categoryIcons}/>;
          case 0: return <PackagesComponent packageData ={packageSections} categoryIcons={categoryIcons}/>;
          case 1: return <TestsComponent categoryIcons={categoryIcons}/>;
          case 2: return <UploadComponent />;
          default: return null;
        }
      };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with search */}
      <View style={styles.header}>

        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          {/* Search Container */}
          <View style={[styles.searchContainer, {width: screenWidth * 0.8}]}>
            <Image
              source={IMAGES.Search}
              resizeMode="contain"
              style={styles.icon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for tests or health packages"
              placeholderTextColor="#7E8299"
            />
            <Image
              source={IMAGES.searchInsta}
              resizeMode="contain"
              style={styles.icon}
            />
          </View>

          {/* Cart Button - Always visible */}
          <TouchableOpacity style={styles.cartButton}>
                    <View style={styles.cartContainer}>
                        <Image source={IMAGES.Cart} resizeMode="contain" />
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>1</Text>
                      </View>
                    </View>
          {/* <Image
              source={IMAGES.Cart}
              resizeMode="contain"
              style={styles.icon}
            />
            <View style={styles.cartBadge}>
                
              <Text style={styles.cartBadgeText}>1</Text>
            </View> */}
          </TouchableOpacity>
        </View>
      </View>
      {/* Categories - horizontal */}
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <CategoryButton
              key={index}
              label={item.label}
              // icon={item.icon}
              index={index}
              activeCategoryIndex={activeCategoryIndex === index}
              setActiveCategoryIndex={setActiveCategoryIndex}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView >
        <View style={{flex: 1}}>{renderComponent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('3%'),
  },
  categories: {
    paddingBottom: hp('1.5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#EFF2F5",
    borderRadius: wp('6%'),
    marginRight: wp('2.5%'),
    padding: hp('1.2%'),
  },
  searchInput: {
    flex: 1,
    justifyContent: "space-around",
    color: '#000',
    marginLeft: wp('2%'),
    fontSize: hp('2%'),
  },
  icon: {
    width: wp('6%'),
    height: wp('6%'),
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
    top: -hp('0.3%'),
    right: -wp('0.5%'),
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
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
  },
  cartButton: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: '#EFF2F5',
    borderRadius: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -hp('0.5%'),
    right: -wp('0.7%'),
    backgroundColor: '#1E3989',
    borderRadius: wp('3.5%'),
    paddingHorizontal: wp('1.5%'),
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: hp('1.3%'),
  },
  scrollRow: {
    marginVertical: hp('1.5%'),
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('2%'),
    borderRadius: wp('8%'),
    backgroundColor: '#F1FAFF',
    marginRight: wp('2.5%'),
  },
  categoryText: {
    fontSize: hp('1.8%'),
    color: '#3F4254',
  },
  activeCategory: {
    backgroundColor: '#1E3989',
  },
  activeCategoryText: {
    color: '#fff',
  },
});

