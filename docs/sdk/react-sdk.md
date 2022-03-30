---
sidebar_position: 2
title: React SDK
---
# React SDK Installation and Usage

1. Install from npm by running `npm install waypost-sdk-react` (npm link: https://www.npmjs.com/package/waypost-sdk-react)

2. Import the package at the top of your React application's `App.js` file.

Inside the `Config` constructor, the first argument is your SDK Key that you can get from the Waypost-UI. The second argument is the address of the Flag Provider service.

See the example code below:

```jsx
import * as waypost from 'waypost-sdk-react';
const { Config, WaypostProvider } = waypost;
const config = new Config(process.env.WAYPOST_SDK_KEY, "http://localhost:5050");
```

3. Wrap your App component inside the `WaypostProvider` context provider. Example:

```jsx
function App() {
	return (
		<WaypostProvider config={config}>
			...
		</WaypostProvider>
	);
}
```

4. Now you can access the `sdkClient` from other parts of the app by using `useContext(WaypostContext)`:

```jsx
const { sdkClient } = useContext(WaypostContext)
```

5. You can add the user_id or any other identifier to the SDK, which will assign the treatment (whether they will receive the feature) based on a hash of their user_id and the flag’s `hash_offset` attribute. To use this, call the `addContext()` method on the `sdkClient`, and pass in an object containing the key `userId` and the corresponding value. Even if you use it as a session ID, you must still use the key `userId` in the object passed in. You can call this method anywhere in your app where the user identifier is detected, depending on if you are using a logged-in user ID or a session ID.

Example:

```jsx
sdkClient.addContext({ userId: myUserId });
```

6. Wherever you need to branch your code based on the feature flag status, call the `evaluateFlag()` method on the `sdkClient` object. The `evaluateFlag()` method takes the name of the feature flag as the required argument, and optionally a default value if the feature flag data is unavailable. The function returns a *boolean* denoting whether the status is on or off.

Example:

```javascript
const useNewHeader = sdkClient.evaluateFlag('New Header', false);

if (useNewHeader) {
	return <NewHeader />
} else {
	return <Header />
}
```