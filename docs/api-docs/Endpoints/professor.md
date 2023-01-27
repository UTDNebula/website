---
sidebar_position: 4
title: 'Professor'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A **Professor** is a representation of an instructor on campus for a **Course**. Professors can be queried to find information regarding their professional information and office hours information.

You are able to query for a **Professor** by:

- Query Parameters
- ID

Each of these methods has its own API endpoint to get the requested data.

## GET /professor

The default endpoint for /professor returns a list of sections matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

### Parameters

| Name                               | Description                                                                               | Example                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **first_name**                     | The professor's first name.                                                               | /professor?first_name=John                                                      |
| **last_name**                      | The professor's last name.                                                                | /professor?last_name=Doe                                                        |
| **titles**                         | One of the professor's titles                                                             | /professor?titles=Senior Mathematics Lecturer                                   |
| **email**                          | The professor's email address.                                                            | /professor?email=xxx555555@utdallas.edu                                         |
| **phone_number**                   | The professor's phone number.                                                             | /professor?phone_number=+1xxxxxxxxxx                                            |
| **office.building**                | The building of the location of the professor's office                                    | /professor?office.building=SLC                                                  |
| **office.room**                    | The room of the location of the professor's office                                        | /professor?office.room=2.203                                                    |
| **office.map_uri**                 | A hyperlink to the UTD room locator of the professor's office                             | /professor?office.map_uri=https://locator.utdallas.edu/SLC_2.203                |
| **profile_uri**                    | A hyperlink pointing to the professor's official university profile.                      | /professor?profile_uri=https://example.com                                      |
| **image_uri**                      | A link to the image used for the professor on the professor's official university profile | /professor?image_uri=https://example.com/profile.png                            |
| **office_hours.start_date**        | The start date of one of the office hours meetings of the professor                       | /professor?office_hours.start_date=January 18, 2022                             |
| **office_hours.end_date**          | The end date of one of the office hours meetings of the professor                         | /professor?office_hours.end_date=May 5, 2022                                    |
| **office_hours.meeting_days**      | One of the days that one of the office hours meetings of the professor is held            | /professor?office_hours.meeting_days=Monday                                     |
| **office_hours.start_time**        | The time one of the office hours meetings of the professor starts                         | /professor?office_hours.start_time=10:00am                                      |
| **office_hours.end_time**          | The time one of the office hours meetings of the professor ends                           | /professor?office_hours.end_time=11:15am                                        |
| **office_hours.modality**          | The modality of one of the office hours meetings of the professor                         | /professor?office_hours.modality=traditional                                    |
| **office_hours.location.building** | The building of one of the office hours meetings of the professor                         | /professor?office_hours.location.building=SLC                                   |
| **office_hours.location.room**     | The room of one of the office hours meetings of the professor                             | /professor?office_hours.location.room=2.203                                     |
| **office_hours.location.map_uri**  | A hyperlink to the UTD room locator of one of the office hours meetings of the professor  | /professor?office_hours.location.map_uri=https://locator.utdallas.edu/SLC_2.203 |
| **sections**                       | The \_id of one of the sections the professor teaches                                     | /professor?sections=61ebbb126e3659537e8adsdss                                   |

# Example Response

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
        "624163777a5c14bdce6ae7c8"
        // ...
      ],
      "titles": [
        "Professor - Electrical Engineering",
        "Jonsson School Distinguished Professor"
        // ...
      ]
    },
    {
      // ...
    }
  ]
}
```

## GET /professor/{id}

This endpoint returns a single **Professor** with a primary key matching {id}.

### Parameters

This endpoint accepts a single route parameter: **id**. This is passed into the endpoint path.

| Name   | Description                | Example                              |
| ------ | -------------------------- | ------------------------------------ |
| **id** | ID of the professor to get | /professor/61ebbb126e3659537e8adsdss |

### Example Response

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
      "624163777a5c14bdce6ae7c8"
      // ...
    ],
    "titles": [
      "Professor - Electrical Engineering",
      "Jonsson School Distinguished Professor"
      // ...
    ]
  }
}
```
