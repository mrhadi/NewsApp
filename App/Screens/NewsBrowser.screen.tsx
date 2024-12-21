import React, { useContext } from 'react';
import { View } from 'react-native';

import { Header } from '../Components/Header.component';

import { MainFlowContext, MainFlowStateType } from '../flow';

function NewsBrowserScreen() {
  const mainFlow: MainFlowStateType = useContext(MainFlowContext);

  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <Header categories={mainFlow.getCategories()} />
    </View>
  );
}

export default NewsBrowserScreen;
