---
sidebar_position: 1
title: 'Nebula API'
description: Documentation for the Nebula API.
---

# API Reference

API endpoint: http://api.utdnebula.com/

The Nebula API allows you to query for data regarding UTD class sections as sourced from Coursebook.

API key is in the HackUTD server in the #project-nebula-general chat.

## Authentication

Every request to the Nebula Data API requires a valid API key included in the HTTP header `Authorization`.

```HTTP
GET /v1/sections HTTP/1.1
Authorization: apikey
```

An example of code that would search for sections with course number 2020 and print the output to the console:

```js
fetch('https://api.utdnebula.com/v1/sections/search?course_number=2020', {
  method: 'GET',
  headers: {
    Authorization: 'dd1h55UQUb8x5nQIPW2iJ1ABaIDx9iv7',
  },
}).then((resp) => {
  resp.json().then((json) => {
    console.log(json);
  });
});
```

## Sections

Sections are specific instantiations of a course with a unique section ID⁠—for example, ACCT 2301 would be a general course classification, while acct2301.001.21f would represent an instance of ACCT 2301, taught by a professor at a specific time during the Fall 2021 semester. An API request with acct2301.001.21f would return data similar to that shown by Coursebook for ACCT 2301.001 during term 2021 Fall.

`/v1/sections/id`

| Value | Description  | Example          |
| ----- | ------------ | ---------------- |
| id    | Section Name | acct2301.001.21f |

```js
Returns
{
    "term": "string",
    "title": "string",
    "course_number": "string",
    "school": "string",
    "location": "string",
    "activity_type": "string",
    "class_number": "string",
    "days": "string",
    "assistants": "string",
    "times": "string",
    "topic": "string",
    "core_area": "string",
    "department": "string",
    "section_name": "string",
    "course_prefix": "string",
    "instructors": "string",
    "section_number": "string"
}
```

---

The following specification allows for section querying:

`/v1/sections/search?property=value`

| Property       | Description                               | Example                               |
| -------------- | ----------------------------------------- | ------------------------------------- |
| activity_type  | Whether the section is a lecture or a lab | Lecture                               |
| assistants     | Teaching assistants in the section        | Brad%20Nathan                         |
| class_number   | Class number                              | 80642                                 |
| core_area      | Core area of the class                    | ∅                                     |
| course_prefix  | Abbreviation of the course                | acct                                  |
| days           | On what days the section occurs           | Monday%2C%20Wednesday%2C%20Friday     |
| department     | What department is the course under       | mgmt                                  |
| instructors    | The instructors teaching the section      | Cameron%20Holstead                    |
| location       | Where the section meets                   | SOM%201.110                           |
| section_name   | Section name                              | acct2301.001.21f                      |
| section_number | Section number                            | 001                                   |
| term           | Term in which the section occurs          | 21f                                   |
| times          | When the section occurs                   | 08:00%2008:50                         |
| title          | Course title                              | Introductory%20Financial%20Accounting |
| topic          | Course topic                              |                                       |

```js
Returns
[
   {
      "term": "string",
      "title": "string",
      "course_number": "string",
      "school": "string",
      "location": "string",
      "activity_type": "string",
      "class_number": "string",
      "days": "string",
      "assistants": "string",
      "times": "string",
      "topic": "string",
      "core_area": "string",
      "department": "string",
      "section_name": "string",
      "course_prefix": "string",
      "instructors": "string",
      "section_number": "string"
   },
]
```
