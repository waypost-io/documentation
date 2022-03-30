---
sidebar_position: 1
---
# SDK Keys

An SDK Key is used on requests from the SDK to the Flag Provider service in order to verify that the request is coming from the SDK and not another party. Therefore, you will need to embed your SDK key when you instantiate the SDK client on your app. For increased security, it is recommended to keep the key as an environment variable rather than hard-coding it into your app.

To find your key, simply navigate to the *SDK Key* page via the left sidebar of Waypost-UI. If there’s already an existing key, you can view and copy it from this page to place in your application. If you don’t have one or want to generate a new one, click “Generate a new key”.

Warning: generating a new key will make existing keys no longer valid, so be sure to replace the existing key in your application’s environment variable.