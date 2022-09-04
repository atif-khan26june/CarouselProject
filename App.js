import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import CarouselItem from './src/CarouselItem';
import DynamicCarousel from './src/DynamicCarousel';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <CarouselItem />
      <DynamicCarousel />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
