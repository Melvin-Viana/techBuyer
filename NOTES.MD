## Issues:

1. Had issues showing the Reload outside of the React Native entry point (App.js).
  - Must be in a WSL directory not on the local machine
  - https://medium.com/@jaehdawg/react-native-wsl2-expo-tips-to-get-expo-and-hot-reloading-working-b0c08af90895
2. Issues with accessing folders with import/export i.e.(import {...} from '../constants').  EISDIR: Illegal operation on a directory.
  - Either folder doesn't exist or the user doesn't have the right permissions.
  - https://stackoverflow.com/questions/34959038/npm-stuck-giving-the-same-error-eisdir-illegal-operation-on-a-directory-read-a
3. Expo maintains ~6 months compatability.
  - https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/
  - ``` expo-cli upgrade``` to update expo go project

## New Discoveries
- FlatList component it renders items when they are about to appear, lowering memory usage. "Lazy Loading"
4. Using iphone and expo go together, has problems with loading onto phone.
  - npm start -- --tunnel
  - And use the latest npm
  - Install with ```nvm install --lts```
