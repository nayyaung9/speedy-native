import 'react-native-gesture-handler'
import React from "react";
import Application from '~/navigation/Application';

import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { queryClient } from '~/libs/query';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Application />
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App;