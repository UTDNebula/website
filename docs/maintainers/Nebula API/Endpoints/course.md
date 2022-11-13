---
sidebar_position: 1
title: 'Course'
description: Nebula Labs's approach to user-centered design.
---

## Overview

Courses lay one level of abstraction above sections in the academic hierarchy at UTD. A **Course** represents a class offered by a school at UTD.

A **Course** should not be confused with a [Section](./section.md) which is the actual instantiation of a **Course** with a professor and dedicated meeting times.A course can have multiple sections associated with it every semester. An example of a course would be ECS1100.

You are able to query for a **Course** by:

- Query Parameters
- ID

Each of these methods has its own API endpoint to get the requested data.

## GET /course

The default endpoint for /course returns a list of sections matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

### Parameters

| Name                       | Description                                                                                                     | Example                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **course_number**          | The course's official number.                                                                                   | /course?course_number=2417                                                            |
| **subject_prefix**         | The course's subject prefix.                                                                                    | /course?subject_prefix=MATH                                                           |
| **title**                  | The course's title.                                                                                             | /course?title=Calculus I                                                              |
| **description**            | The course's description.                                                                                       | /course?description=Functions, limits, continuity, differentiation; integration of... |
| **school**                 | The course's school.                                                                                            | /course?school=School of Natural Sciences and Mathematics                             |
| **credit_hours**           | The number of credit hours awarded by successful completion of the course.                                      | /course?credit_hours=4                                                                |
| **class_level**            | The level of education that this course course corresponds to                                                   | /course?class_level="Undergraduate"                                                   |
| **activity_type**          | The type of class this course corresponds to.                                                                   | /course?activity_type=Lecture                                                         |
| **grading**                | The grading status of this course.                                                                              | /course?grading=Graded                                                                |
| **internal_course_number** | The internal (university) number used to reference this course.                                                 | /course?internal_course_number=008613                                                 |
| **lecture_contact_hours**  | The weekly contact hours in lecture for a course. This information is outlined in the UTD Course Policies page. | /course?lecture_contact_hours=2                                                       |
| **offering_frequency**     | The frequency of offering a course                                                                              | /course?offering_frequency=S                                                          |

### Example Response

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
                "condition": null
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
        "6241a542e0a87a87f38b1aa4"
        // ...
      ]
    },
    {
      // ...
    }
  ]
}
```

## GET /course/{id}

This endpoint returns a single **Course** with a primary key matching {id}.

### Parameters

This endpoint accepts a single route parameter: **id**. This is passed into the endpoint path.

| Name   | Description             | Example                           |
| ------ | ----------------------- | --------------------------------- |
| **id** | ID of the course to get | /course/61ebbb126e3659537e8adsdss |

### Example Response

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
              "condition": null
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
      "6241a542e0a87a87f38b1aa4"
      // ...
    ]
  }
}
```
