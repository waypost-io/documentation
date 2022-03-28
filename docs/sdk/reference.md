---
sidebar_position: 4
---
# SDK Reference
The client-side and server-side SDK’s are extremely similar. The main difference between the two is that the client-side (React) SDK exports the additional objects `WaypostContext` and `WaypostProvider` , which use React Context. The `WaypostProvider` component takes the `config` (instance of the `Config` class) as an argument, and the SDK client is created inside of the component.

In contrast, the server-side SDK does not need React Context, and instead you will call `connect()` inside of a middleware function to receive the SDK client, which will get set on the request object.

### Config

The `Config` class is the primary export of the Waypost SDK. You will need to instantiate it one time in your app using the constructor.

**Constructor Parameters:**

- `sdkKey` - A **string** representing the SDK Key that will be used by the flag provider service for authorization of the requester. You can find this on Waypost-UI’s *SDK Key* page.
- `providerAddress` - A **string** representing the URL where the Waypost flag provider service is hosted. It will be used for making API calls to receive the feature flag data.

**Instance Methods**

**`Config.prototype.connect()`**

This instance method creates an instance of the `Client` class, calls the async `getFlagData()` method on it, and then returns the client object. If using the Node SDK, you will need to call this and save the return value into a variable, such as `sdkClient`.

### Client

You will not need to instantiate this yourself, since the **`Config.prototype.connect()`** method does this automatically.

**Instance Methods**

**`Client.prototype.addContext(context)`**

This instance method takes an **object** containing at least one key called `userId`, which you assign to an identifier such as a user ID or session ID.

This allows us to use that identifier to determine the status of a given feature flag for that user. This is necessary for experiments (A/B tests), in which some percentage of users receive one treatment, and should continue receiving the same treatment each time they access your application.

**`Client.prototype.evaluateFlag(featureName, defaultVal)`**

This instance method has two required parameters. The first argument is the `featureName`,  a **string** that should match the name of a feature flag that you have created in the Waypost-UI. The second argument is the `defaultVal`, a **boolean** representing what the default status should be if the flag data is unavailable for some reason.