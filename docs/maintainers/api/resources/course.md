---
sidebar_position: 1
title: 'Course'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A **Course** represents a course available at the University of Texas at Dallas. A **Course** should not be confused with a **Section**, which is the actual instantiation of a **Course** with a professor and dedicated meeting times.

## Properties

| Name                         | Type                  | Description                                                                                                                    | Example                                                           |
| ---------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **\_id**                     | ObjectId              | The MongoDB database id for the `Course` object.                                                                               | ObjectId("61ebbb126e3659537e8a14d6")                              |
| **course_number**            | String                | The course's official number.                                                                                                  | 2417                                                              |
| **subject_prefix**           | String                | The course's subject prefix.                                                                                                   | MATH                                                              |
| **title**                    | String                | The course's title.                                                                                                            | Calculus I                                                        |
| **description**              | String                | The course's description.                                                                                                      | Functions, limits, continuity, differentiation; integration of... |
| **school**                   | String                | The course's school.                                                                                                           | School of Natural Sciences and Mathematics                        |
| **credit_hours**             | String                | The number of credit hours awarded by successful completion of the course. Will be "V" if variable credit hours.               | V                                                                 |
| **class_level**              | String                | The level of education that this course course corresponds to                                                                  | 4                                                                 |
| **activity_type**            | String                | The type of class this course corresponds to.                                                                                  | Lecture                                                           |
| **grading**                  | String                | The grading status of this course.                                                                                             | Graded                                                            |
| **internal_course_number**   | String                | The internal (university) number used to reference this course.                                                                | 008613                                                            |
| **prerequisites**            | CollectionRequirement | A collection of prerequisites that must be met before a student may enroll in a section of this course.                        | N/A                                                               |
| **corequisites**             | CollectionRequirement | A collection of all course requirements that must be met either before or while a student enrolls in a section of this course. | N/A                                                               |
| **lecture_contact_hours**    | String                | The weekly contact hours in lecture for a course. This information is outlined in the UTD Course Policies page.                | 2                                                                 |
| **laboratory_contact_hours** | String                | The weekly contact hours in laboratory for a course. This information is outlined in the UTD Course Policies page.             | 4                                                                 |
| **offering_frequency**       | String                | The frequency of offering a course. The meanings of each letter can be found in the UTD Course Policies page.                  | S (Other options include Y, T, R)                                 |
| **attributes**               | Object                | Space for additional data describing the course not listed elsewhere.                                                          | N/A                                                               |

## Request

## Response
