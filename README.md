## Instructions to replicate the build

1. `yarn install` to install the dependencies
2. `npx nx build demo-build` - this will fail because of the error already shared
3. When you comment the import from `@cometchat/chat-uikit-react-native` in the file `libs/demo-lib/src/Component.tsx` it works with out an issue

```
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { CometChatMessages } from '@cometchat/chat-uikit-react-native';
const MainExport = () => {
return <View>{/_ <CometChatMessages /> _/}</View>;
};
export default MainExport;
const styles = StyleSheet.create({});
```

4. re build using `npx nx build demo-build`
