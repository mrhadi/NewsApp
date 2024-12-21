import React, { useContext } from 'react';
import { View } from 'react-native';

import { MainFlowContext, MainFlowStateType } from '../flow';

function NewsBrowserScreen() {
  const mainFlow: MainFlowStateType = useContext(MainFlowContext);

  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
    </View>
  );
}

export default NewsBrowserScreen;
