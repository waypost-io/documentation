---
sidebar_position: 3
title: Node SDK
---
# Node SDK Installation and Usage

##

1. Install via `npm install waypost-sdk-js-server` (npm link: [https://www.npmjs.com/package/waypost-sdk-js-server](https://www.npmjs.com/package/waypost-sdk-js-server))

2. Set up a middleware before your routes that imports the `waypost-sdk-js-server` package, and configures the SDK client (follow the following steps):

3. In the `Config` constructor, the first argument is your SDK key, which is obtained via the Waypost-UI. The second argument is the address of Waypost's Flag Provider service. Chain the `connect()` method immediately, which sets up the connection to the Waypost flag provider service, and returns the SDK Client containing the feature flag data. Note that the `connect()` method is async, so you will need to `await` it.

4. Assign the resulting `sdkClient` object to `req.sdkClient`. This will ensure that all request handlers will have access to the `sdkClient` which will evaluate feature flags for you.

Example for steps 2-4:

```jsx
app.use(async (req, res, next) => {
  const Config = require("waypost-sdk-js-server");
  const sdkClient = await new Config(process.env.WAYPOST_SDK_KEY, "http://localhost:5050").connect();
  req.sdkClient = sdkClient;
  next();
});
```
5. To add the user_id or any other identifier (such as session_id) to the SDK, which will assign the treatment, use the `addContext()` method on the `sdkClient`, passing in an object containing the key `userId` and the value. Example:

```jsx
sdkClient.addContext({ userId: userId });
```

6. Wherever you need to branch your code based on the feature flag status, call the `evaluateFlag()` method on `req.sdkClient`.

Example:

```javascript
const useNewPaymentFlag = sdkClient.evaluateFlag("New Payment Feature");
if (useNewPaymentFlag) {
  newPaymentProcessor();
} else {
  oldPaymentProcessor();
}
```