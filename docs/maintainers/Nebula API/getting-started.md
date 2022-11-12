---
title: Getting Started
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 1
---

# Getting Started

Welcome to the Nebula API Documentation. The goal of this API is to provide students at UT Dallas with a
comprehensive set of data about everything on campus. Currently the API primarily contains data regarding
acadmenics, but is continually getting new data and information, so keep an eye out for new features.

## Acessing the API

The API is hosted by Nebula Labs at:

`api.utdnebula.com`

The default address will return no data, but by making use of the endpoints documented here, you can access
the full suite of data provided by the API.

## API Keys

Each endpoint is protected by an API Key. If you are a student or
are interested in using this data for a personal project please reach out to engineering@utdnebula.com to get
access to an API Key.

The API is free to use for any students at UTD, but each key does have a limit on how much data it can query per day, so please be careful when making potentially large queries.

> :warning: **Be sure to not accidentally leak your API Key by uploading it to a public Github repository!**

We recommend storing your keys in a file ([.env](https://dev.to/aadilraza339/what-is-env-file-in-node-js-3h6c)), including that file in your [.gitignore](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/) file.

## Making your first request

Because API keys are required to access the API, we recommend that you use a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/). From here you can make richly formatted requests with proper HTTP Headings.

```
GET /course/ HTTP/1.1

Authorization: {API Key}
Accept: application/json
```

## Making a request in Javascript/ Typescript

Most users of our API will be using it to connect to a front end application built using a JS/ TS framework.
If that includes you, here is an example of how a Javascript request would look

```javascript
const headers = {
  x-api-key: { API_KEY },
  Accept: 'application/json',
};

fetch('https://api.utdnebula.com/section', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

## Formatting Paramters for an Endpoint

If you have never handled an API before, there are two main ways of sending parameters to the API with your request.

Route Parameters are parameters which are appended using an additional `/` after the endpoint. Route parameters are a little cleaner to use, but are only useful if the endpoint is only expecting a single parameter like an id. For our API an example of a route parameter may look something like:

`api.utdnebula.com/section/a09ajca0a`

where a09ajca0a is the route parameter providing a section id.

The other alternative is query paramters which are provided in key value pairings. These are denoted by following the endpoint with a `?` and delimiting each key value pair with an `&`. These are more useful when you are trying to perform traditional queries which return multiple results or need to provide multiple parameters to the endpoint. For our API an example of a query parameter may look like:

`api.utdnebula.com/section?academic_session.name=21F&instruction_mode=hybrid`

## Get Started!

You should now have a basic understanding of how to make requests to API's and how to interface with the Nebula API. Once you have been given an API key and looked through the documentation for each of the endpoints, you are ready to get started on your project!
