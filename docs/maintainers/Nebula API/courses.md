---
title: Courses
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 3
---

# Courses

Courses lay one level of abstraction above sections in the academic hierarchy at UTD. A course represents a class offered by a school at UTD.

A Course should not be confused with a Section which is the actual instantiation of a Course with a professor and dedicated meeting times.A course can have multiple sections associated with it every semester. An example of a course would be ECS1100.

This data will include important pieces of information that a relevant to every section of the course like its prerequisites and the number of credit hours. All of the attributes associated with a course are as follows:

### Properties

| Name                     | Type                                                                                                  | Required | Restrictions | Description                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| \_id                     | string                                                                                                | true     | none         | The primary key associated with a course                                                                                                         |
| course_number            | string                                                                                                | true     | none         | The course's official number                                                                                                                     |
| subject_prefix           | string                                                                                                | true     | none         | The course's subject prefix                                                                                                                      |
| title                    | string                                                                                                | true     | none         | The course's title                                                                                                                               |
| description              | string                                                                                                | true     | none         | The course's description                                                                                                                         |
| school                   | string                                                                                                | true     | none         | The course's school                                                                                                                              |
| credit_hours             | string                                                                                                | true     | none         | The number of credit hours awarded by successful completion of the course                                                                        |
| class_level              | string                                                                                                | true     | none         | The level of education that this course course corresponds to                                                                                    |
| activity_type            | string                                                                                                | true     | none         | The type of class this course corresponds to                                                                                                     |
| grading                  | string                                                                                                | true     | none         | The grading status of this course                                                                                                                |
| internal_course_number   | string                                                                                                | true     | none         | The internal (university) number used to reference this course                                                                                   |
| prerequisites            | [CollectionRequirement](/docs/maintainers/Nebula%20API/api-documentation#schemacollectionrequirement) | false    | none         | A Collection Requirement object containing a list of the courses that must be taken before this course                                           |
| corequisites             | [CollectionRequirement](/docs/maintainers/Nebula%20API/api-documentation#schemacollectionrequirement) | false    | none         | A Collection Requirement object containing a list of the courses that must be taken before or alongside this course                              |
| lecture_contact_hours    | string                                                                                                | true     | none         | The weekly contact hours in lecture for a course                                                                                                 |
| laboratory_contact_hours | string                                                                                                | true     | none         | The weekly contact hours in laboratory for a course                                                                                              |
| offering_frequency       | string                                                                                                | true     | none         | The frequency of offering a course. The meanings of each letter can be found in the UTD Course Policies page. Example: "S", "Y", "T", "R" course |

### Querying a Course

There are two main ways to query for a course:

1. By Query Paramters
2. By ID

Each of these methods has its own API endpoint to get the requested data.

### GET /course

The default endpoint for /course returns a list of courses matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

<h3 id="get__course-parameters">Parameters</h3>

| Name                   | In    | Type   | Required | Description                                                               |
| ---------------------- | ----- | ------ | -------- | ------------------------------------------------------------------------- |
| course_number          | query | string | false    | The course's official number                                              |
| subject_prefix         | query | string | false    | The course's subject prefix                                               |
| title                  | query | string | false    | The course's title                                                        |
| description            | query | string | false    | The course's description                                                  |
| school                 | query | string | false    | The course's school                                                       |
| credit_hours           | query | string | false    | The number of credit hours awarded by successful completion of the course |
| class_level            | query | string | false    | The level of education that this course course corresponds to             |
| activity_type          | query | string | false    | The type of class this course corresponds to                              |
| grading                | query | string | false    | The grading status of this course                                         |
| internal_course_number | query | string | false    | The internal (university) number used to reference this course            |
| lecture_contact_hours  | query | string | false    | The weekly contact hours in lecture for a course                          |
| offering_frequency     | query | string | false    | The frequency of offering a course                                        |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "course_number": "string",
    "subject_prefix": "string",
    "title": "string",
    "description": "string",
    "school": "string",
    "credit_hours": "string",
    "class_level": "string",
    "activity_type": "string",
    "grading": "string",
    "internal_course_number": "string",
    "prerequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "corequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "lecture_contact_hours": "string",
    "laboratory_contact_hours": "string",
    "offering_frequency": "string"
  }
]
```

### GET /course/{id}

This endpoint returns a single Course object with a primary key matching {id}.

#### Parameters

This endpoint accepts a single route paramter: id

<h3 id="get__course_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description             |
| ---- | ---- | ------ | -------- | ----------------------- |
| id   | path | string | true     | ID of the course to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "course_number": "string",
  "subject_prefix": "string",
  "title": "string",
  "description": "string",
  "school": "string",
  "credit_hours": "string",
  "class_level": "string",
  "activity_type": "string",
  "grading": "string",
  "internal_course_number": "string",
  "prerequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "lecture_contact_hours": "string",
  "laboratory_contact_hours": "string",
  "offering_frequency": "string"
}
```
