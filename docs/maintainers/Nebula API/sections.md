---
title: Sections
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 2
---

# Sections

Sections are the lowest level unit of organization for a class at UT Dallas. A section represents a specific instance of a course taught during a specific semester by a specific professor, at a specific time.

When querying for a Section, it will return Section JSON objects in with the following properties:

### Properties

| Name                  | Type                                                                                                  | Required | Restrictions | Description                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------- |
| \_id                  | string                                                                                                | true     | none         | The id represents the primary key associated with the section                               |
| section_number        | string                                                                                                | true     | none         | This is the number associated with the course during its semester eg. .001                  |
| course_reference      | string                                                                                                | true     | none         | The course reference represents a foreign key to the course record                          |
| section_corequisites  | [CollectionRequirement](/docs/maintainers/Nebula%20API/api-documentation#schemacollectionrequirement) | false    | none         | All of the classes that must be taken alongside this section eg. A lab for a science course |
| academic_session      | [AcademicSession](/docs/maintainers/Nebula%20API/api-documentation#schemaacademicsession)             | true     | none         | The name of the academic session of the section                                             |
| professors            | [string]                                                                                              | true     | none         | An array of references to professor objects associated with this section                    |
| teaching_assistants   | [[Assistant](/docs/maintainers/Nebula%20API/api-documentation#schemaassistant)]                       | false    | none         | An array of all TA's associated with this section                                           |
| internal_class_number | string                                                                                                | true     | none         | The internal representation of the class number unique id from university                   |
| instruction_mode      | string                                                                                                | true     | none         | The modality the course is taught it eg. Online, In Person, Hybrid                          |
| meetings              | [[Meeting](/docs/maintainers/Nebula%20API/api-documentation#schemameeting)]                           | true     | none         | All of the meeting information associated with a section                                    |
| core_flags            | [string]                                                                                              | false    | none         | Information if the course counts as a core credit for one of the core subject areas         |
| syllabus_uri          | string                                                                                                | true     | none         | Link to the syllabus for the section listed on coursebook                                   |
| grade_distribution    | [integer]                                                                                             | false    | none         | An array representing the distribution of grades for this section                           |

### Querying a Section

There are two main ways to query for a section:

1. By Query Paramters
2. By ID

Each of these methods has its own API endpoint to get the requested data.

### GET /section

The default endpoint for /section returns a list of sections matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

<h3 id="get__section-parameters">Parameters</h3>

| Name                           | In    | Type   | Required | Description                                                                         |
| ------------------------------ | ----- | ------ | -------- | ----------------------------------------------------------------------------------- |
| section_number                 | query | string | false    | The section's official number                                                       |
| course_reference               | query | string | false    | An id that points to the course in MongoDB that this section is an instantiation of |
| academic_session.name          | query | string | false    | The name of the academic session of the section                                     |
| academic_session.start_date    | query | string | false    | The date of classes starting for the section                                        |
| academic_session.end_date      | query | string | false    | The date of classes ending for the section                                          |
| professors                     | query | string | false    | One of the professors teaching the section                                          |
| teaching_assistants.first_name | query | string | false    | The first name of one of the teaching assistants of the section                     |
| teaching_assistants.last_name  | query | string | false    | The last name of one of the teaching assistants of the section                      |
| teaching_assistants.role       | query | string | false    | The role of one of the teaching assistants of the section                           |
| teaching_assistants.email      | query | string | false    | The email of one of the teaching assistants of the section                          |
| internal_class_number          | query | string | false    | The internal (university) number used to reference this section                     |
| instruction_mode               | query | string | false    | The instruction modality for this section                                           |
| meetings.start_date            | query | string | false    | The start date of one of the section's meetings                                     |
| meetings.end_date              | query | string | false    | The end date of one of the section's meetings                                       |
| meetings.meeting_days          | query | string | false    | One of the days that one of the section's meetings                                  |
| meetings.start_time            | query | string | false    | The time one of the section's meetings starts                                       |
| meetings.end_time              | query | string | false    | The time one of the section's meetings ends                                         |
| meetings.modality              | query | string | false    | The modality of one of the section's meetings                                       |
| meetings.location.building     | query | string | false    | The building of one of the section's meetings                                       |
| meetings.location.room         | query | string | false    | The room of one of the section's meetings                                           |
| meetings.location.map_uri      | query | string | false    | A hyperlink to the UTD room locator of one of the section's meetings                |
| core_flags                     | query | string | false    | One of core requirement codes this section fulfills                                 |
| syllabus_uri                   | query | string | false    | A link to the syllabus on the web                                                   |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "section_number": "string",
    "course_reference": "string",
    "section_corequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "academic_session": {
      "name": "string",
      "start_date": "string",
      "end_date": "string"
    },
    "professors": ["string"],
    "teaching_assistants": [
      {
        "first_name": "string",
        "last_name": "string",
        "role": "string",
        "email": "string"
      }
    ],
    "internal_class_number": "string",
    "instruction_mode": "string",
    "meetings": [
      {
        "start_date": "string",
        "end_date": "string",
        "meeting_days": ["string"],
        "start_time": "string",
        "end_time": "string",
        "modality": "string",
        "location": {
          "building": "string",
          "room": "string",
          "map_uri": "string"
        }
      }
    ],
    "core_flags": ["string"],
    "syllabus_uri": "string",
    "grade_distribution": [0]
  }
]
```

### GET /section/{id}

This endpoint returns a single Section object with a primary key matching {id}.

#### Parameters

This endpoint accepts a single route paramter: id

| Name | In   | Type   | Required | Description              |
| ---- | ---- | ------ | -------- | ------------------------ |
| id   | path | string | true     | ID of the section to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "section_number": "string",
  "course_reference": "string",
  "section_corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "academic_session": {
    "name": "string",
    "start_date": "string",
    "end_date": "string"
  },
  "professors": ["string"],
  "teaching_assistants": [
    {
      "first_name": "string",
      "last_name": "string",
      "role": "string",
      "email": "string"
    }
  ],
  "internal_class_number": "string",
  "instruction_mode": "string",
  "meetings": [
    {
      "start_date": "string",
      "end_date": "string",
      "meeting_days": ["string"],
      "start_time": "string",
      "end_time": "string",
      "modality": "string",
      "location": {
        "building": "string",
        "room": "string",
        "map_uri": "string"
      }
    }
  ],
  "core_flags": ["string"],
  "syllabus_uri": "string",
  "grade_distribution": [0]
}
```
