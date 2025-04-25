import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    Dimensions,
  } from 'react-native';
  import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


  interface CategoryIconItem {
    label: string;
    color: string;
    icon: ImageSourcePropType;
  }
  
  interface TestsComponentProps {
    categoryIcons: CategoryIconItem[];
  }
  const { width } = Dimensions.get('window');

  const CIRCLE_SIZE = wp('18%');
  const TestsComponent: React.FC<TestsComponentProps> = ({ categoryIcons }) => {
    const navigation = useNavigation()
    return (
      <>
        <Text style={styles.sectionTitle}>Individual tests</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categoryIcons.map((item, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer}  onPress={()=>navigation.navigate("TestIndvidual")}>
              <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                <Image
                  source={item.icon}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    marginRight: 5,
                  }}
                />
                <Text style={styles.iconLabel}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    iconRow: {
      flex: 1,
      marginTop: hp('1.2%'),
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  
    iconContainer: {
      alignItems: 'center',
      marginRight: wp('3.5%'),
      marginBottom: hp('2%'),
    },
  
    iconCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      marginBottom: hp('1.5%'),
    },
  
    iconLabel: {
      fontSize: wp('3%'), 
      textAlign: 'center',
    },
  
    sectionTitle: {
      color: '#00071A',
      fontSize: wp('5%'), 
      fontWeight: 'bold',
      marginTop: hp('1%'),
      marginBottom: hp('1.5%'),
    },
  });
  
  export default TestsComponent;
  