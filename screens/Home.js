import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
        {/* <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -2,
          height:'100%',
          backgroundColor: COLORS.primary
        }}>
      </View> */}
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1}}>
        <View style={{ zIndex: 0}}>
          <FlatList
            data={NFTData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
                 </View>
      </View>
    </SafeAreaProvider>
  )
}

export default Home;