---
sidebar_position: 2
---
# Introduction

## Why Use Waypost?

Waypost is an open-source, lightweight, self-hosted feature flag management system that specializes in A/B Testing, providing analytical insights for your experiments on both the front-end and back-end.

While it is possible to build your own feature flagging system and A/B testing platform, it’s extremely time-consuming, and not everyone has the time and resources to do that. Some companies opt to use industry leaders such as LaunchDarkly and Optimizely, but they have their own downsides to consider, such as high costs and loss of ownership over your data.  That’s why we made Waypost. It’s free to use and self-hosted so your data never leaves your hands!

## How does Waypost work?

Waypost consists of 4 main parts: a full-stack feature flag management and A/B testing application called Waypost, the Flag Provider service, SDK(s) which are inserted into your own application, and a PostgreSQL database (Events DB) that’s owned and operated by the user. In order to perform the A/B tests, a user must collect the data they want to analyze in their own PostgreSQL database, what we call the “Events DB”, in a designated schema and connect to it via the feature flag management app.

Waypost has three components. Waypost-UI is a React.js application that developers can use to create feature flags and configure them, set up and view the results of A/B tests, view logs of changes to feature flags, and more. Waypost’s backend is an Express.js application that handles several API endpoints and makes updates to the PostgreSQL database (Waypost-DB). Waypost-DB stores all the flag information as well as the high-level A/B testing data like metrics and experiment exposures and results. To obtain the results of the A/B tests, the feature flag managment app queries the Events DB, analyzes the data using statistical tests, and stores the results in its own PostgreSQL database.

The SDK will be imported into your app (either on the client, server, or both), and contains the logic to serve different versions of code based on various factors. The SDK receives feature flag data from the flag provider service via SSE (Server-Sent Events), and the flag provider service receives updates from the main feature flag mangement app via webhooks.