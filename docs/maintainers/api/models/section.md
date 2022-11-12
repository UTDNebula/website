---
sidebar_position: 11
title: 'Section'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A **Section** is the instantiation of a **Course** with a professor, meeting times, and a grade distribution.

## Properties

| Name                      | Type                                                                       | Description                                                                                                       | Example                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **\_id**                  | ObjectId                                                                   | The MongoDB database id for the `Section` object.                                                                 | ObjectId("61ebbb126e3659537e8a14d6")                                                                               |
| **section_number**        | String                                                                     | The section's official number.                                                                                    | 002                                                                                                                |
| **course_reference**      | ObjectId                                                                   | An id that points to the course in MongoDB that this section is an instantiation of.                              | ObjectId("61ebbb126e3659537e8adsdss")                                                                              |
| **section_corequisites**  | [CollectionRequirement](./requirement.md#collectionrequirement-properties) | A collection of all sections that must be taken alongside this section such as specific labs and exam sections.   |                                                                                                                    |
| **academic_session**      | [AcademicSession](./academic_session.md)                                   | The academic session that the section takes place in.                                                             |                                                                                                                    |
| **professors**            | Array - ObjectId                                                           | An array of ids linking to each professor in MongoDB for this section.                                            | [ObjectId("61ebbb126e3659537e8a14d8"), ObjectId("61ebbb126e3659537e8a14d6"), ObjectId("61ebbb126e3659537e8a14g4")] |
| **teaching_assistants**   | Array - [Assistant](./assistant.md)                                        | An array of all teaching assistants for this section.                                                             |                                                                                                                    |
| **internal_class_number** | String                                                                     | The internal (university) number used to reference this section.                                                  | 82785                                                                                                              |
| **instruction_mode**      | String                                                                     | The instruction modality for this section.                                                                        | Traditional                                                                                                        |
| **meetings**              | Array - [Meeting](./meeting.md)                                            | An array of the locations and times that this section meets.                                                      |                                                                                                                    |
| **core_flags**            | Array - String                                                             | An array of core requirement codes this section fulfills.                                                         | ["020", "050", ...]                                                                                                |
| **syllabus_uri**          | String                                                                     | A link to the syllabus on the web.                                                                                | https://dox.utdallas.edu/syl118093                                                                                 |
| **grade_distribution**    | Array - Number                                                             | An array of how many students achieved a certain grade in this section decreating in the order of A+, A, A-, etc. | [2, 3, 5, 4, 3, ...]                                                                                               |
| **attributes**            | Object                                                                     | Space for additional data describing the section not listed elsewhere.                                            |
