---
title: Professors
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 5
---

# Professor

Professors are a representation of an insturctor on campus for a Course. Professors can be queried to find information regarding their professional information and office hours information.

A Professor Object contains the following properties:

### Properties

| Name         | Type                                                                        | Required | Restrictions | Description                                                                                                                                                                          |
| ------------ | --------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \_id         | string                                                                      | true     | none         | The MongoDB database id for the Professor object.                                                                                                                                    |
| first_name   | string                                                                      | true     | none         | The professor's first name.                                                                                                                                                          |
| last_name    | string                                                                      | true     | none         | The professor's last name.                                                                                                                                                           |
| titles       | [string]                                                                    | false    | none         | The professor's titles. Example: ["Senior Mathematics Lecturer"], ["Lars Magnus Ericsson Chair", "Dean – Erik Jonsson School of Engineering and Computer Science"]                   |
| email        | string                                                                      | true     | none         | The professor's email address.                                                                                                                                                       |
| phone_number | string                                                                      | false    | none         | The professor's phone number.                                                                                                                                                        |
| office       | [Location](/docs/maintainers/Nebula%20API/api-documentation#schemalocation) | false    | none         | The location of the professor's office.                                                                                                                                              |
| profile_uri  | string                                                                      | false    | none         | A hyperlink pointing to the professor's official university profile.                                                                                                                 |
| image_uri    | string                                                                      | false    | none         | A link to the image used for the professor on the professor's official university profile.                                                                                           |
| office_hours | [[Meeting](/docs/maintainers/Nebula%20API/api-documentation#schemameeting)] | false    | none         | A list of all office hours of the professor.                                                                                                                                         |
| sections     | [string]                                                                    | false    | none         | A list of references to sections a professor is currently teaching or has taught. This will be sorted in descending order with respect to end_date in the section's academic_session |

### Querying a Professor

There are two main ways to query for a professor:

1. By Query Paramters
2. By ID

Each of these methods has its own API endpoint to get the requested data.

### GET /professor

The default endpoint for /professor returns a list of professors matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

<h3 id="get__professor-parameters">Parameters</h3>

| Name                           | In    | Type   | Required | Description                                                                               |
| ------------------------------ | ----- | ------ | -------- | ----------------------------------------------------------------------------------------- |
| first_name                     | query | string | false    | The professor's first name                                                                |
| last_name                      | query | string | false    | The professor's last name                                                                 |
| titles                         | query | string | false    | One of the professor's title                                                              |
| email                          | query | string | false    | The professor's email address                                                             |
| phone_number                   | query | string | false    | The professor's phone number                                                              |
| office.building                | query | string | false    | The building of the location of the professor's office                                    |
| office.room                    | query | string | false    | The room of the location of the professor's office                                        |
| office.map_uri                 | query | string | false    | A hyperlink to the UTD room locator of the professor's office                             |
| profile_uri                    | query | string | false    | A hyperlink pointing to the professor's official university profile                       |
| image_uri                      | query | string | false    | A link to the image used for the professor on the professor's official university profile |
| office_hours.start_date        | query | string | false    | The start date of one of the office hours meetings of the professor                       |
| office_hours.end_date          | query | string | false    | The end date of one of the office hours meetings of the professor                         |
| office_hours.meeting_days      | query | string | false    | One of the days that one of the office hours meetings of the professor                    |
| office_hours.start_time        | query | string | false    | The time one of the office hours meetings of the professor starts                         |
| office_hours.end_time          | query | string | false    | The time one of the office hours meetings of the professor ends                           |
| office_hours.modality          | query | string | false    | The modality of one of the office hours meetings of the professor                         |
| office_hours.location.building | query | string | false    | The building of one of the office hours meetings of the professor                         |
| office_hours.location.room     | query | string | false    | The room of one of the office hours meetings of the professor                             |
| office_hours.location.map_uri  | query | string | false    | A hyperlink to the UTD room locator of one of the office hours meetings of the professor  |
| sections                       | query | string | false    | The \_id of one of the sections the professor teaches                                     |
| offset                         | query | string | false    | The (zero-based) offset of the first item to return                                       |

> Example responses

> 200 Response

```json
{
	"status": 200,
	"message": "success",
  "data": [
      {
      "_id": "623107c784ebaf3e8f1bbd8d",
      "email": "nXXXXXXXX@utdallas.edu",
      "first_name": "NXXXXXX",
      "image_uri": "https://profiles.utdallas.edu/storage/media/160/conversions/XXXXXXXXX-medium.jpg",
      "last_name": "AXXXXXXX",
      "office": {
        "building": "ECN",
        "room": "3XXX",
        "map_uri": "https://locator.utdallas.edu/ECN_XXXX"
      },
      "office_hours": [],
      "phone_number": "972-555-5555",
      "profile_uri": "https://profiles.utdallas.edu/XXXXXX",
      "sections": [
        "624163757a5c14bdce6ae7c4",
        "624163777a5c14bdce6ae7c8",
        // ...
      ],
      "titles": [
        "Professor - Electrical Engineering",
        "Jonsson School Distinguished Professor",
        // ...
      ]
    },
    {
      // ...
    }
  ]
}
```

### GET /professor/{id}

This endpoint returns a single Professor object with a primary key matching {id}.

<h3 id="get__professor_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                |
| ---- | ---- | ------ | -------- | -------------------------- |
| id   | path | string | true     | ID of the professor to get |

> Example responses

> 200 Response

```json
{
	"status": 200,
	"message": "success",
  "data": {
    "_id": "623107c784ebaf3e8f1bbd8d",
    "email": "nXXXXXXXX@utdallas.edu",
    "first_name": "NXXXXXX",
    "image_uri": "https://profiles.utdallas.edu/storage/media/160/conversions/XXXXXXXXX-medium.jpg",
    "last_name": "AXXXXXXX",
    "office": {
      "building": "ECN",
      "room": "3XXX",
      "map_uri": "https://locator.utdallas.edu/ECN_XXXX"
    },
    "office_hours": [],
    "phone_number": "972-555-5555",
    "profile_uri": "https://profiles.utdallas.edu/XXXXXX",
    "sections": [
      "624163757a5c14bdce6ae7c4",
      "624163777a5c14bdce6ae7c8",
      // ...
    ],
    "titles": [
      "Professor - Electrical Engineering",
      "Jonsson School Distinguished Professor",
      // ...
    ]
  }
}
```
