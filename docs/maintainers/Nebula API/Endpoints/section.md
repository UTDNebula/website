---
sidebar_position: 5
title: 'Section'
description: Nebula Labs's approach to user-centered design.
---

## Overview

Sections are the lowest level unit of organization for a class at UT Dallas. A **Section** represents a specific instance of a course taught during a specific semester by a specific professor, at a specific time.

You are able to query for a **Section** by:

- Query Parameters
- ID

Each of these methods has its own API endpoint to get the requested data.

## GET /section

The default endpoint for /section returns a list of sections matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

### Parameters

| Name                               | Description                                                                         | Example                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **section_number**                 | The section's official number                                                       | /section?section_number=002                                               |
| **course_reference**               | An id that points to the course in MongoDB that this section is an instantiation of | /section?course_reference=61ebbb126e3659537e8adsdss                       |
| **academic_session.name**          | The name of the academic session of the section                                     | /section?academic_session.name=Spring 2022                                |
| **academic_session.start_date**    | The name of the academic session of the section                                     | /section?academic_session.start_date=January 18, 2022                     |
| **academic_session.end_date**      | The name of the academic session of the section                                     | /section?academic_session.end_date=January 18, 2022                       |
| **professors**                     | One of the professors teaching the section                                          | /section?professors=61ebbb126e3659537e8a14d8                              |
| **teaching_assistants.first_name** | The first name of one of the teaching assistants of the section                     | /section?teaching_assistants.first_name=John                              |
| **teaching_assistants.last_name**  | The last name of one of the teaching assistants of the section                      | /section?teaching_assistants.last_name=Doe                                |
| **teaching_assistants.role**       | The role of one of the teaching assistants of the section                           | /section?teaching_assistants.role=Teaching Assistant                      |
| **teaching_assistants.email**      | The email of one of the teaching assistants of the section                          | /section?teaching_assistants.email=xxx555555@utdallas.edu                 |
| **internal_class_number**          | The internal (university) number used to reference this section                     | /section?internal_class_number=82785                                      |
| **instruction_mode**               | The instruction modality for this section.                                          | /section?instruction_mode=Traditional                                     |
| **meetings.start_date**            | The start date of one of the section's meetings                                     | /section?meetings.start_date=January 18, 2022                             |
| **meetings.end_date**              | The end date of one of the section's meetings                                       | /section?meetings.end_date=January 18, 2022                               |
| **meetings.meeting_days**          | One of the days that one of the section's meetings                                  | /section?meetings.meeting_days=Monday                                     |
| **meetings.start_time**            | The time one of the section's meetings starts                                       | /section?meetings.start_time=10:00am                                      |
| **meetings.end_time**              | The time one of the section's meetings ends                                         | /section?meetings.end_time=11:15am                                        |
| **meetings.modality**              | The modality of one of the section's meetings                                       | /section?meetings.modality=traditional                                    |
| **meetings.location.building**     | The building of one of the section's meetings                                       | /section?meetings.location.building=SLC                                   |
| **meetings.location.room**         | The room of one of the section's meetings                                           | /section?meetings.location.room=2.203                                     |
| **meetings.location.map_uri**      | A hyperlink to the UTD room locator of one of the section's meetings                | /section?meetings.location.map_uri=https://locator.utdallas.edu/SLC_2.203 |
| **core_flags**                     | One of core requirement codes this section fulfills                                 | /section?core_flags=020                                                   |
| **syllabus_uri**                   | A link to the syllabus on the web                                                   | /section?syllabus_uri=https://dox.utdallas.edu/syl118093                  |

### Example Response

> 200 Response

```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "_id": "62410a21e27d0c74c4093d59",
      "academic_session": {
        "end_date": "December 14, 2017",
        "name": "17F",
        "start_date": "August 21, 2017"
      },
      "attributes": {
        "raw_attributes": []
      },
      "core_flags": [],
      "course_reference": "62410a21e27d0c74c4093d5a",
      "section_number": "001",
      "grade_distribution": [0, 22, 5, 3, 9, 4, 2, 5, 2, 1, 0, 2, 5, 0],
      "instruction_mode": "Face-to-Face",
      "internal_class_number": "84150",
      "meetings": [
        {
          "end_date": "December 6, 2017",
          "end_time": "8:50am",
          "location": {
            "building": "JSOM",
            "map_uri": "https://locator.utdallas.edu/SOM_12.202",
            "room": "12.202"
          },
          "meeting_days": ["Monday", "Wednesday", "Friday"],
          "modality": null,
          "start_date": "August 21, 2017",
          "start_time": "8:00am"
        }
      ],
      "professors": ["62410a21e27d0c74c4093d5b"],
      "section_corequisites": {
        "options": [],
        "type": "collection"
      },
      "syllabus_uri": "https://dox.utdallas.edu/syl69227",
      "teaching_assistants": []
    },
    {
      // ...
    }
  ]
}
```

## GET /section/{id}

This endpoint returns a single **Section** with a primary key matching {id}.

### Parameters

This endpoint accepts a single route parameter: **id**. This is passed into the endpoint path.

| Name   | Description              | Example                           |
| ------ | ------------------------ | --------------------------------- |
| **id** | ID of the section to get | /section/62410a21e27d0c74c4093d59 |

### Example Response

> 200 Response

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "_id": "62410a21e27d0c74c4093d59",
    "academic_session": {
      "end_date": "December 14, 2017",
      "name": "17F",
      "start_date": "August 21, 2017"
    },
    "attributes": {
      "raw_attributes": []
    },
    "core_flags": [],
    "course_reference": "62410a21e27d0c74c4093d5a",
    "section_number": "001",
    "grade_distribution": [0, 22, 5, 3, 9, 4, 2, 5, 2, 1, 0, 2, 5, 0],
    "instruction_mode": "Face-to-Face",
    "internal_class_number": "84150",
    "meetings": [
      {
        "end_date": "December 6, 2017",
        "end_time": "8:50am",
        "location": {
          "building": "JSOM",
          "map_uri": "https://locator.utdallas.edu/SOM_12.202",
          "room": "12.202"
        },
        "meeting_days": ["Monday", "Wednesday", "Friday"],
        "modality": null,
        "start_date": "August 21, 2017",
        "start_time": "8:00am"
      }
    ],
    "professors": ["62410a21e27d0c74c4093d5b"],
    "section_corequisites": {
      "options": [],
      "type": "collection"
    },
    "syllabus_uri": "https://dox.utdallas.edu/syl69227",
    "teaching_assistants": []
  }
}
```
