---
sidebar_position: 1
---
# SDK Keys

We use an SDK Key on requests from the SDK to the flag provider service in order to verify that the request is coming from the SDK and not another party. Therefore, you will need to embed your SDK key when you instantiate the SDK client on your app. It is recommended to keep the key as an environment variable rather than hardcoding it in your app for increased security.

To find your key, simply navigate to the “SDK Key” page via the left sidebar. There will be a button you can click to generate an SDK Key. If you already have one, you can generate a new one at any time, but remember to update your environment variable with the new key since the old ones will no longer work.