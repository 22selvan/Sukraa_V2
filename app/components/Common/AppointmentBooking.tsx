// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   ScrollView,
//   FlatList,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// // import { Ionicons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';

// const AppointmentBooking = ({ navigation }) => {
//   const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3, 1)); // April 2025
//   const [selectedDate, setSelectedDate] = useState(new Date(2025, 3, 20)); // April 20, 2025
//   const [calendarDays, setCalendarDays] = useState([]);
//   const [selectedTimeOfDay, setSelectedTimeOfDay] = useState('Morning');
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState('10 - 10:30 AM');
//   const [selectedVisitType, setSelectedVisitType] = useState('Home Visit');
//   const [selectedAddress, setSelectedAddress] = useState('home');

//   // Time slots based on time of day
//   const timeSlots = {
//     Morning: ['9 - 9:30 AM', '10 - 10:30 AM', '10:30 - 11 AM', '11 - 11:30 AM'],
//     Afternoon: ['12 - 12:30 PM', '1 - 1:30 PM', '2 - 2:30 PM'],
//     Night: ['6 - 6:30 PM', '7 - 7:30 PM', '8 - 8:30 PM'],
//   };

//   // Generate calendar days for the current month
//   useEffect(() => {
//     generateCalendarDays();
//   }, [currentMonth]);

//   const generateCalendarDays = () => {
//     const days = [];
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
    
//     // Get the number of days in the current month
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
    
//     // Generate days for the current month
//     for (let i = 1; i <= daysInMonth; i++) {
//       const date = new Date(year, month, i);
//       days.push({
//         date,
//         day: i,
//         dayOfWeek: getDayOfWeek(date.getDay()),
//         isCurrentMonth: true,
//       });
//     }
    
//     setCalendarDays(days);
//   };

//   const getDayOfWeek = (day) => {
//     const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
//     return days[day];
//   };

//   const formatMonthYear = (date) => {
//     const months = [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ];
//     return `${months[date.getMonth()]} ${date.getFullYear()}`;
//   };

//   const goToPreviousMonth = () => {
//     const prevMonth = new Date(currentMonth);
//     prevMonth.setMonth(prevMonth.getMonth() - 1);
//     setCurrentMonth(prevMonth);
//   };

//   const goToNextMonth = () => {
//     const nextMonth = new Date(currentMonth);
//     nextMonth.setMonth(nextMonth.getMonth() + 1);
//     setCurrentMonth(nextMonth);
//   };

//   const isDateSelected = (date) => {
//     return date.getDate() === selectedDate.getDate() &&
//            date.getMonth() === selectedDate.getMonth() &&
//            date.getFullYear() === selectedDate.getFullYear();
//   };

//   const renderCalendarDay = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.dateItem,
//         isDateSelected(item.date) && styles.selectedDateItem,
//       ]}
//       onPress={() => setSelectedDate(item.date)}
//     >
//       <Text style={styles.dayText}>{item.dayOfWeek}</Text>
//       <Text
//         style={[
//           styles.dateText,
//           isDateSelected(item.date) && styles.selectedDateText,
//         ]}
//       >
//         {item.day}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Book now</Text>
//       </View>
      
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.title}>Select your time slot</Text>
        
//         {/* Month Navigation */}
//         <View style={styles.monthSelector}>
//           <TouchableOpacity onPress={goToPreviousMonth}>
//             {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
//           </TouchableOpacity>
//           <Text style={styles.monthText}>{formatMonthYear(currentMonth)}</Text>
//           <TouchableOpacity onPress={goToNextMonth}>
//             {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
//           </TouchableOpacity>
//         </View>
        
//         {/* Date Selection - Horizontal ScrollView */}
//         <FlatList
//           data={calendarDays}
//           renderItem={renderCalendarDay}
//           keyExtractor={(item) => item.day.toString()}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.calendarList}
//         />
        
//         {/* Time of Day Selection */}
//         <View style={styles.timeOfDayContainer}>
//           {['Morning', 'Afternoon', 'Night'].map((time) => (
//             <TouchableOpacity
//               key={time}
//               style={[
//                 styles.timeOfDayItem,
//                 selectedTimeOfDay === time && styles.selectedTimeOfDay,
//               ]}
//               onPress={() => setSelectedTimeOfDay(time)}
//             >
//               <Text
//                 style={[
//                   styles.timeOfDayText,
//                   selectedTimeOfDay === time && styles.selectedTimeOfDayText,
//                 ]}
//               >
//                 {time}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
        
//         {/* Time Slots */}
//         <View style={styles.timeSlotsContainer}>
//           <View style={styles.timeSlotRow}>
//             {timeSlots[selectedTimeOfDay].slice(0, 3).map((slot) => (
//               <TouchableOpacity
//                 key={slot}
//                 style={[
//                   styles.timeSlotItem,
//                   selectedTimeSlot === slot && styles.selectedTimeSlot,
//                 ]}
//                 onPress={() => setSelectedTimeSlot(slot)}
//               >
//                 <Text
//                   style={[
//                     styles.timeSlotText,
//                     selectedTimeSlot === slot && styles.selectedTimeSlotText,
//                   ]}
//                 >
//                   {slot}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
          
//           <View style={styles.timeSlotRow}>
//             {timeSlots[selectedTimeOfDay].slice(3, 4).map((slot) => (
//               <TouchableOpacity
//                 key={slot}
//                 style={[
//                   styles.timeSlotItem,
//                   selectedTimeSlot === slot && styles.selectedTimeSlot,
//                 ]}
//                 onPress={() => setSelectedTimeSlot(slot)}
//               >
//                 <Text
//                   style={[
//                     styles.timeSlotText,
//                     selectedTimeSlot === slot && styles.selectedTimeSlotText,
//                   ]}
//                 >
//                   {slot}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
        
//         {/* Visit Type Selection */}
//         <View style={styles.visitTypeContainer}>
//           <TouchableOpacity
//             style={[
//               styles.visitTypeButton,
//               selectedVisitType === 'Home Visit' && styles.selectedVisitType,
//             ]}
//             onPress={() => setSelectedVisitType('Home Visit')}
//           >
//             <Text
//               style={[
//                 styles.visitTypeText,
//                 selectedVisitType === 'Home Visit' && styles.selectedVisitTypeText,
//               ]}
//             >
//               Home Visit
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[
//               styles.visitTypeButton,
//               selectedVisitType === 'Lab Visit' && styles.selectedVisitType,
//             ]}
//             onPress={() => setSelectedVisitType('Lab Visit')}
//           >
//             <Text
//               style={[
//                 styles.visitTypeText,
//                 selectedVisitType === 'Lab Visit' && styles.selectedVisitTypeText,
//               ]}
//             >
//               Lab Visit
//             </Text>
//           </TouchableOpacity>
//         </View>
        
//         {/* Address Selection */}
//         <View style={styles.addressContainer}>
//           <TouchableOpacity
//             style={styles.addressItem}
//             onPress={() => setSelectedAddress('home')}
//           >
//             <View style={styles.radioContainer}>
//               <View
//                 style={[
//                   styles.radioOuter,
//                   selectedAddress === 'home' && styles.radioOuterSelected,
//                 ]}
//               >
//                 {selectedAddress === 'home' && <View style={styles.radioInner} />}
//               </View>
//               <Text style={styles.addressTypeText}>Home Address</Text>
//             </View>
//             <Text style={styles.addressText}>
//               Purujit KG, 123 Colony, Riyadh,{'\n'}Saudi Arabia
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={styles.addressItem}
//             onPress={() => setSelectedAddress('office')}
//           >
//             <View style={styles.radioContainer}>
//               <View
//                 style={[
//                   styles.radioOuter,
//                   selectedAddress === 'office' && styles.radioOuterSelected,
//                 ]}
//               >
//                 {selectedAddress === 'office' && <View style={styles.radioInner} />}
//               </View>
//               <Text style={styles.addressTypeText}>Office Address</Text>
//             </View>
//             <Text style={styles.addressText}>
//               Purujit KG, 31st Street, Riyadh,{'\n'}Saudi Arabia
//             </Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.addAddressButton}>
//             {/* <Ionicons name="add" size={18} color="#333" /> */}
//             <Text style={styles.addAddressText}>Add Address</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
      
//       {/* Proceed Button */}
//       <LinearGradient
//         colors={['#1e3a8a', '#7c3aed', '#10b981']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={styles.proceedButton}
//       >
//         <TouchableOpacity
//           style={styles.proceedButtonTouch}
//           onPress={() => navigation.navigate('Payment')}
//         >
//           <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
//         </TouchableOpacity>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollView: {
//     flex: 1,
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginLeft: 12,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 24,
//   },
//   monthSelector: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   monthText: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   calendarList: {
//     paddingVertical: 8,
//     paddingHorizontal: 4,
//     marginBottom: 24,
//   },
//   dateItem: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     minWidth: 45,
//   },
//   selectedDateItem: {
//     backgroundColor: '#e0e7ff',
//     borderRadius: 20,
//   },
//   dayText: {
//     fontSize: 14,
//     color: '#6b7280',
//     marginBottom: 4,
//   },
//   dateText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   selectedDateText: {
//     color: '#1e3a8a',
//     fontWeight: 'bold',
//   },
//   timeOfDayContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   timeOfDayItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderRadius: 24,
//     marginHorizontal: 4,
//   },
//   selectedTimeOfDay: {
//     backgroundColor: '#1e3a8a',
//   },
//   timeOfDayText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   selectedTimeOfDayText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
//   timeSlotsContainer: {
//     marginBottom: 24,
//   },
//   timeSlotRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   timeSlotItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     marginHorizontal: 4,
//   },
//   selectedTimeSlot: {
//     borderColor: '#1e3a8a',
//     backgroundColor: '#fff',
//   },
//   timeSlotText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   selectedTimeSlotText: {
//     color: '#1e3a8a',
//     fontWeight: '500',
//   },
//   visitTypeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   visitTypeButton: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 14,
//     borderRadius: 24,
//     marginHorizontal: 4,
//     backgroundColor: '#fff',
//   },
//   selectedVisitType: {
//     backgroundColor: '#1e3a8a',
//   },
//   visitTypeText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   selectedVisitTypeText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
//   addressContainer: {
//     marginBottom: 24,
//   },
//   addressItem: {
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   radioContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   radioOuter: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#6b7280',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
//   radioOuterSelected: {
//     borderColor: '#1e3a8a',
//   },
//   radioInner: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     backgroundColor: '#1e3a8a',
//   },
//   addressTypeText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#1e3a8a',
//   },
//   addressText: {
//     fontSize: 14,
//     color: '#6b7280',
//     marginLeft: 30,
//   },
//   addAddressButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     borderWidth: 1,
//     borderColor: '#e5e7eb',
//     borderRadius: 12,
//     borderStyle: 'dashed',
//   },
//   addAddressText: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   proceedButton: {
//     marginHorizontal: 16,
//     marginBottom: 24,
//     borderRadius: 24,
//   },
//   proceedButtonTouch: {
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
//   proceedButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

// export default AppointmentBooking;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../utils/SharedImages';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
type AppointmentBookingProps = {
  navigation: any; 
};

const AppointmentBooking = ({ navigation }: AppointmentBookingProps) => {
  const addressData = [
    {
      id: 'home',
      label: 'Home Address',
      address: 'Purujit KG, 123 Colony, Riyadh,\nSaudi Arabia',
    },
    {
      id: 'office',
      label: 'Office Address',
      address: 'Purujit KG, 31st Street, Riyadh,\nSaudi Arabia',
    },
    {
      id: 'other',
      label: 'Mother Address',
      address: 'Purujit KG, 31st Street, Riyadh,\nSaudi Arabia',
    },
  ];



  const labData : LabData[] = [
    {
      id: '1',
      name: 'SDL Laboratory',
      location: 'Riyadh, Saudi Arabia',
      distance: '5 kms',
    },
    {
      id: '2',
      name: 'Future Labs',
      location: 'Jeddah, Saudi Arabia',
      distance: '8 kms',
    },
    {
      id: '3',
      name: 'Medical Research Center',
      location: 'Dammam, Saudi Arabia',
      distance: '12 kms',
    },
  ];

  type LabData = {
    id: string;
    name: string;
    location: string;
    distance: string;
  };
  

  type DayData = {
    date: Date;
    day: number;
    dayOfWeek: string;
    isCurrentMonth: boolean;
  };

  type TimeSlots = {
    Morning: string[];
    Afternoon: string[];
    Night: string[];
  };

  type CalendarDay = {
    date: Date;
    day: number;
    dayOfWeek: string;
    isCurrentMonth: boolean;
  };
  

  const [currentMonth, setCurrentMonth] = useState(new Date()); 
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState('Morning');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedVisitType, setSelectedVisitType] = useState('Home Visit');
  const [selectedAddress, setSelectedAddress] = useState('home');


  // Time slots based on time of day
  const timeSlots:TimeSlots = {
    Morning:  ['08 - 08:30 AM','9 - 9:30 AM', '10 - 10:30 AM', '10:30 - 11 AM', '11 - 11:30 AM',],
    Afternoon: ['12 - 12:30 PM', '1 - 1:30 PM', '2 - 2:30 PM','3 - 3:30 PM'],
    Night: ['6 - 6:30 PM', '7 - 7:30 PM', '8 - 8:30 PM'],
  };

  useEffect(() => {
    generateCalendarDays();
  }, [currentMonth]);

  const generateCalendarDays = () => {
    const days: DayData[]  = [];
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      const prevMonthDay = daysInPrevMonth - i;
      const date = new Date(year, month - 1, prevMonthDay);
      days.push({
        date,
        day: prevMonthDay,
        dayOfWeek: getDayOfWeek(date.getDay()),
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        day: i,
        dayOfWeek: getDayOfWeek(date.getDay()),
        isCurrentMonth: true,
      });
    }
    
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        const date = new Date(year, month + 1, i);
        days.push({
          date,
          day: i,
          dayOfWeek: getDayOfWeek(date.getDay()),
          isCurrentMonth: false,
        });
      }
    }
    
    setCalendarDays(days); 
  };

  const getDayOfWeek = (day) => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return days[day];
  };

  const formatMonthYear = (date: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid Date');
    }
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentMonth(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentMonth(nextMonth);
  };

  const isDateSelected = (date) => {
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const renderCalendarDay = ({ item }: { item: CalendarDay }) => (
    <TouchableOpacity
      style={[
        styles.dateItem,
        isDateSelected(item.date) && styles.selectedDateItem,
        !item.isCurrentMonth && styles.inactiveDateItem,
      ]}
      onPress={() => item.isCurrentMonth && setSelectedDate(item.date)}
      disabled={!item.isCurrentMonth}
    >
      <Text 
        style={[
          styles.dayText,
          isDateSelected(item.date) && styles.selectedDayText,
          !item.isCurrentMonth && styles.inactiveDayText,
        ]}
      >
        {item.dayOfWeek}
      </Text>
      <Text
        style={[
          styles.dateText,
          isDateSelected(item.date) && styles.selectedDateText,
          !item.isCurrentMonth && styles.inactiveDateText,
        ]}
      >
        {item.day}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      

      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book now</Text>
      </View> */}

      <View style={styles.header}>
        <View style={styles.headerLeft} >
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Image source={IMAGES.back} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book Now</Text>
        </View>
        {/* <View style={styles.cartContainer}>
            <Image source={IMAGES.Cart} resizeMode="contain" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View> */}
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Select your time slot</Text>
        
        {/* Month Navigation */}
        <View style={styles.monthSelector}>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <Text style={{fontSize:15}}>{">"}</Text>
            {/* <Ionicons name="chevron-back" size={24} color="black" /> */}
          </TouchableOpacity>
          <Text style={styles.monthText}>{formatMonthYear(currentMonth)}</Text>
          <TouchableOpacity onPress={goToNextMonth}>
          <Text style={{fontSize:15}}>{"<"}</Text>
            {/* <Ionicons name="chevron-forward" size={24} color="black" /> */}
          </TouchableOpacity>
        </View>
        
        {/* Calendar Header - Days of Week */}
        <View style={styles.calendarHeader}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
            <Text key={index} style={styles.calendarHeaderText}>
              {day}
            </Text>
          ))}
        </View>
        
        {/* Date Selection - Horizontal ScrollView */}
        <FlatList
          data={calendarDays}
          renderItem={renderCalendarDay}
          keyExtractor={(item, index) => `${item.date.toISOString()}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.calendarList}
          initialScrollIndex={Math.floor(calendarDays.findIndex(day => 
            day.day === selectedDate.getDate() && 
            day.isCurrentMonth
          ) / 7) * 7}
          getItemLayout={(data, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
        />
        
        {/* Time of Day Selection */}
        <View style={styles.timeOfDayContainer}>
          {['Morning', 'Afternoon', 'Night'].map((time) => (
            <TouchableOpacity
              key={time}
              style={[
                styles.timeOfDayItem,
                selectedTimeOfDay === time && styles.selectedTimeOfDay,
              ]}
              onPress={() => setSelectedTimeOfDay(time)}
            >
              <Text
                style={[
                  styles.timeOfDayText,
                  selectedTimeOfDay === time && styles.selectedTimeOfDayText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Time Slots */}
        <View style={styles.timeSlotsContainer}>
          <View style={styles.timeSlotRow}>
            {timeSlots[selectedTimeOfDay].slice(0, 3).map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.timeSlotItem,
                  selectedTimeSlot === slot && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTimeSlot(slot)}
              >
                <Text
                  style={[
                    styles.timeSlotText,
                    selectedTimeSlot === slot && styles.selectedTimeSlotText,
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.timeSlotRow}>
            {timeSlots[selectedTimeOfDay].slice(3, 4).map((slot) => (
              <TouchableOpacity
                key={slot}
                style={[
                  styles.timeSlotItem,
                  selectedTimeSlot === slot && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTimeSlot(slot)}
              >
                <Text
                  style={[
                    styles.timeSlotText,
                    selectedTimeSlot === slot && styles.selectedTimeSlotText,
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Visit Type Selection */}
        <View style={styles.visitTypeContainer}>
          <TouchableOpacity
            style={[
              styles.visitTypeButton,
              selectedVisitType === 'Home Visit' && styles.selectedVisitType,
            ]}
            onPress={() => setSelectedVisitType('Home Visit')}
          >
            <Text
              style={[
                styles.visitTypeText,
                selectedVisitType === 'Home Visit' && styles.selectedVisitTypeText,
              ]}
            >
              Home Visit
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.visitTypeButton,
              selectedVisitType === 'Lab Visit' && styles.selectedVisitType,
            ]}
            onPress={() => setSelectedVisitType('Lab Visit')}
          >
            <Text
              style={[
                styles.visitTypeText,
                selectedVisitType === 'Lab Visit' && styles.selectedVisitTypeText,
              ]}
            >
              Lab Visit
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Address Selection */}
        <View style={styles.addressContainer}>
         {selectedVisitType  !== "Lab Visit" ? 
         <View>
            {addressData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.addressItem,
                  selectedAddress === item.id && styles.selectedAddressItem,
                ]}
                onPress={() => setSelectedAddress(item.id)}
              >
                <View style={styles.radioContainer}>
                  <View
                    style={[
                      styles.radioOuter,
                      selectedAddress === item.id && styles.radioOuterSelected,
                    ]}
                  >
                    {selectedAddress === item.id && <View style={styles.radioInner} />}
                  </View>
                  <Text style={[
                      styles.addressTypeText,
                      selectedAddress === item.id && styles.selectTest,
                    ]}>{item.label}</Text>
                </View>
                <Text style={styles.addressText}>{item.address}</Text>
                </TouchableOpacity>
            ))}

                <TouchableOpacity style={styles.addAddressButton}>
                   <Text style={styles.addAddressText}>Add Address</Text>
                </TouchableOpacity>
            
          </View>
             :
          <View>
          <FlatList
        horizontal
        data={labData}
        keyExtractor={(item) => item.id}
        renderItem={({  item }) => 
        <>
         <TouchableOpacity style={styles.card}>
      <Image source={IMAGES.Lab} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.row}>
          {/* <Icon name="place" size={16} color="#777" /> */}
          <Text style={styles.text}>{item.location}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="location-on" size={16} color="#777" /> */}
          <Text style={styles.text}>{item.distance}</Text>
        </View>
      </View>
      {/* <Icon name="star" size={20} color="#f4c542" style={styles.starIcon} /> */}
    </TouchableOpacity>
        </>}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
          </View>}
      



    </View>
      </ScrollView>
      
      {/* Proceed Button */}
      <LinearGradient
        colors={['#1E3989', '#9B71AA', '#87C699']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.proceedButton}
      >
        <TouchableOpacity
          style={styles.proceedButtonTouch}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:  wp('4%'),
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
    fontSize: wp('2.5%'),
    fontWeight: 'bold',
  },

  title: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  monthText: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    color: '#181C32',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    marginBottom: 8,
    display: 'none', // Hidden as per the design
  },
  selectedAddressItem: {
    borderColor: '#1E3989', // selected border color
  },
  calendarHeaderText: {
    fontSize: 14,
    color: '#181C32',
    width: 40,
    textAlign: 'center',
  },
  calendarList: {
    paddingVertical: hp('1%'),
  },
  dateItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('12%'),
    height: hp('9%'),
    marginHorizontal: wp('1%'),
  },
  selectedDateItem: {
    backgroundColor: '#e0e7ff',
    borderRadius: 20,
    borderColor:"#1E3989",
    borderWidth:1,
  },
  inactiveDateItem: {
    opacity: 0.5,
  },
  dayText: {
    fontSize: wp('3.5%'),
    color: '#6b7280',
    marginBottom: hp('0.5%'),
  },
  selectedDayText: {
    color: '#1e3a8a',
  },
  inactiveDayText: {
    color: '#9ca3af',
  },
  dateText: {
    fontSize: wp('4%'),
    fontWeight: '500',
  },
  selectedDateText: {
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
  inactiveDateText: {
    color: '#9ca3af',
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
    marginTop: hp('2%'),
  },
  timeOfDayItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderRadius: 24,
    marginHorizontal: wp('1%'),
  },
  selectedTimeOfDay: {
    backgroundColor: '#1E3989',
  },
  timeOfDayText: {
    fontSize: wp('4%'),
    color: '#333',
  },
  selectedTimeOfDayText: {
    color: '#fff',
    fontWeight: '500',
  },
  timeSlotsContainer: {
    marginBottom: hp('3%'),
  },
  timeSlotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
  },
  timeSlotItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginHorizontal: wp('1%'),
  },
  selectedTimeSlot: {
    borderColor: '#1E3989',
    backgroundColor: '#F1FAFF',
  },
  timeSlotText: {
    fontSize: wp('3.5%'),
    color: '#333',
  },
  selectedTimeSlotText: {
    color: '#1E3989',
    fontWeight: '600',
  },
  visitTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  visitTypeButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
    borderRadius: 24,
    marginHorizontal: wp('1%'),
    backgroundColor: '#fff',
  },
  selectedVisitType: {
    backgroundColor: '#1E3989',
  },
  visitTypeText: {
    fontSize: wp('4%'),
    color: '#333',
  },
  selectedVisitTypeText: {
    color: '#fff',
    fontWeight: '500',
  },
  addressContainer: {
    marginBottom: hp('3%'),
  },
  addressItem: {
    borderWidth: 1,
    borderColor: '#E4E6EF',
    borderRadius: 12,
    padding: wp('4%'),
    marginBottom: hp('2%'),
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  radioOuter: {
    height: hp('2.5%'),
    width: hp('2.5%'),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#82869D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
  },
  radioOuterSelected: {
    borderColor: '#1E3989',
  },
  radioInner: {
    height: hp('1.2%'),
    width: hp('1.2%'),
    borderRadius: 5,
    backgroundColor: '#1e3a8a',
  },
  addressTypeText: {
    fontSize: wp('4.5%'),
    fontWeight: '500',
    color: '#3F4254',
  },  selectTest:{
    color: '#1E3989',
    fontSize: wp('4.5%'),
    fontWeight: '600',
  },

  addressText: {
    fontSize: wp('3.5%'),
    color: '#3F4254',
    marginLeft: wp('8%'),
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('2%'),
    borderWidth: 1,
    borderColor: '#E4E6EF',
    borderRadius: 12,
  
  },
  addAddressText: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
    color: '#3F4254',
    fontWeight: '600',
  },
  proceedButton: {
    marginHorizontal: wp('4%'),
    marginBottom: hp('3%'),
    borderRadius: wp('6%'),
    backgroundColor: '#1E3989',
  },
  proceedButtonTouch: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    margin: wp('2%'),
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: hp('25%'),
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: wp('3%'),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  text: {
    fontSize: wp('4%'),
    color: '#555',
    marginLeft: wp('2%'),
  },
  starIcon: {
    position: 'absolute',
    top: hp('1%'),
    right: wp('2%'),
  },
});

export default AppointmentBooking;