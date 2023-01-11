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
4. Statusbar issues on ios
  - StatusBar componenet is not supported on ios
  - Need a workaround for this

## New Discoveries
- FlatList component it renders items when they are about to appear, lowering memory usage. "Lazy Loading"
4. Using iphone and expo go together, has problems with loading onto phone.
  - npm start -- --tunnel
  - And use the latest npm
  - Install with ```nvm install --lts```

## Notes
- Data is hardcoded at the moment
This is may be a good site to use to gather NFT data:
  - https://www.quicknode.com/nft-api?utm_term=nft%20apis&utm_campaign=Product+%7C+NFT+API&utm_source=google&utm_medium=cpc&hsa_acc=1365030395&hsa_cam=15870075777&hsa_grp=132563119335&hsa_ad=574877317357&hsa_src=g&hsa_tgt=kwd-1846324076527&hsa_kw=nft%20apis&hsa_mt=p&hsa_net=adwords&hsa_ver=3
  -TODO: Research sites where you can gather NFT data and purchase places
- Integrating Stripe maybe another thing to add onto this project