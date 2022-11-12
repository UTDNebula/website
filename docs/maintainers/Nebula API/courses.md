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

| Name                   | In    | Type    | Required | Description                                                               |
| ---------------------- | ----- | ------- | -------- | ------------------------------------------------------------------------- |
| course_number          | query | string  | false    | The course's official number                                              |
| subject_prefix         | query | string  | false    | The course's subject prefix                                               |
| title                  | query | string  | false    | The course's title                                                        |
| description            | query | string  | false    | The course's description                                                  |
| school                 | query | string  | false    | The course's school                                                       |
| credit_hours           | query | string  | false    | The number of credit hours awarded by successful completion of the course |
| class_level            | query | string  | false    | The level of education that this course course corresponds to             |
| activity_type          | query | string  | false    | The type of class this course corresponds to                              |
| grading                | query | string  | false    | The grading status of this course                                         |
| internal_course_number | query | string  | false    | The internal (university) number used to reference this course            |
| lecture_contact_hours  | query | string  | false    | The weekly contact hours in lecture for a course                          |
| offering_frequency     | query | string  | false    | The frequency of offering a course                                        |
| offset                 | query | integer | false    | The (zero-based) offset of the first item to return                       |

> Example responses

> 200 Response

```json
{
	"status": 200,
	"message": "success",
	"data": [
    {
      "_id": "6241a542e0a87a87f38b1aa3",
      "subject_prefix": "MATH",
      "course_number": "2413",
      "title": "Differential Calculus",
      "credit_hours": "4",
      "class_level": "Undergraduate",
      "activity_type": "Lecture",
      "description": "MATH 2413 - Differential Calculus (4 semester credit hours) Course covers topics in differential calculus of functions of one variable; topics include limits, continuity, derivative, chain rule, implicit differentiation, mean value theorem, maxima and minima, curve sketching, derivatives of inverse trigonometric functions, antiderivative, substitution method, and applications. Three lecture hours and two discussion hours a week; a problem section required with MATH 2413, and will also be registered for exam section. Not all MATH/STAT courses may be counted toward various degree plans. Please consult your degree plan to determine the appropriate MATH/STAT course requirements. Prerequisite: ALEKS score required or a grade of at least a C- in MATH 2306 or MATH 2312. (3-2) S",
      "grading": "Graded - Undergraduate",
      "internal_course_number": "008610",
      "laboratory_contact_hours": "2",
      "lecture_contact_hours": "3",
      "offering_frequency": "S",
      "prerequisites": {
        "type": "collection",
        "required": 1,
        "options": [
          {
            "type": "collection",
            "required": 1,
            "options": [
              {
                "type": "other",
                "description": "A score of 80% on ALEKS math placement exam",
                "condition": null,
              },
              {
                "type": "collection",
                "required": 1,
                "options": [
                  {
                    "type": "course",
                    "class_reference": "6240b438ddc4b627a73c07d3",
                    "minimum_grade": "C-"
                  },
                  {
                    "type": "course",
                    "class_reference": "6241a53ee0a87a87f38b1a95",
                    "minimum_grade": "C-"
                  }
                ]
              }
            ]
          }
        ]
      },
      "corequisites": {
        "type": "collection",
        "required": 0,
        "options": []
      },
      "co_or_pre_requisites": {
        "type": "collection",
        "options": [],
        "required": 0
      },
      "school": "School of Natural Sciences and Mathematics",
      "sections": [
        "6241a542e0a87a87f38b1aa2",
        "6241a542e0a87a87f38b1aa4",
        // ...
      ]
    },
    {
      // ...
    }
  ]
}
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
	"status": 200,
	"message": "success",
	"data": {
    "_id": "6241a542e0a87a87f38b1aa3",
    "subject_prefix": "MATH",
    "course_number": "2413",
    "title": "Differential Calculus",
    "credit_hours": "4",
    "class_level": "Undergraduate",
    "activity_type": "Lecture",
    "description": "MATH 2413 - Differential Calculus (4 semester credit hours) Course covers topics in differential calculus of functions of one variable; topics include limits, continuity, derivative, chain rule, implicit differentiation, mean value theorem, maxima and minima, curve sketching, derivatives of inverse trigonometric functions, antiderivative, substitution method, and applications. Three lecture hours and two discussion hours a week; a problem section required with MATH 2413, and will also be registered for exam section. Not all MATH/STAT courses may be counted toward various degree plans. Please consult your degree plan to determine the appropriate MATH/STAT course requirements. Prerequisite: ALEKS score required or a grade of at least a C- in MATH 2306 or MATH 2312. (3-2) S",
    "grading": "Graded - Undergraduate",
    "internal_course_number": "008610",
    "laboratory_contact_hours": "2",
    "lecture_contact_hours": "3",
    "offering_frequency": "S",
    "prerequisites": {
      "type": "collection",
      "required": 1,
      "options": [
        {
          "type": "collection",
          "required": 1,
          "options": [
            {
              "type": "other",
              "description": "A score of 80% on ALEKS math placement exam",
              "condition": null,
            },
            {
              "type": "collection",
              "required": 1,
              "options": [
                {
                  "type": "course",
                  "class_reference": "6240b438ddc4b627a73c07d3",
                  "minimum_grade": "C-"
                },
                {
                  "type": "course",
                  "class_reference": "6241a53ee0a87a87f38b1a95",
                  "minimum_grade": "C-"
                }
              ]
            }
          ]
        }
      ]
    },
    "corequisites": {
      "type": "collection",
      "required": 0,
      "options": []
    },
    "co_or_pre_requisites": {
      "type": "collection",
      "options": [],
      "required": 0
    },
    "school": "School of Natural Sciences and Mathematics",
    "sections": [
      "6241a542e0a87a87f38b1aa2",
      "6241a542e0a87a87f38b1aa4",
      // ...
    ]
  }
}
```
