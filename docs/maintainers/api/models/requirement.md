---
sidebar_position: 10
title: 'Requirement'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A 'Requirement' represents a requirement that can be satisfied. This is probably the most important concept in the API and also has the most cognitive overhead. `Requirement` is abstract and has multiple classes that derive from it to represent the various types requirements at UTD. An overview of these will be given here:

### Course Requirement

A `CourseRequirement` represents a specific `Course` that must be taken to satisfy the requirement. This will represent the majority of requirements.

### Section Requirement

A `SectionRequirement` represents a specific `Section` that must be taken to satisfy the requirement.

### Exam Requirement

An `ExamRequirement` represents a specific `Exam` credit that must be received to satisfy the requirement.

### Major Requirement

A `MajorRequirement` represents a major that a student must be enrolled in to satisfy the requirement.

### Minor Requirement

A `MinorRequirement` represents a minor that a student must be enrolled in to satisfy the requirement.

### GPA Requirement

A `GPARequirement` represents the minimum GPA a student must have to satisfy the requirement.

### Consent Requirement

A `ConsentRequirement` represents the need for consent from a faculty member to satisfy the requirement.

### Collection Requirement

A `CollectionRequirement` represents the need to have some number of requirements from a list of `Requirement`s to satisfy the requirement. This is used to represent groups of requirements, "and" relationships, "some" relationships, and "or" relationships. Collections can contain other collections. Since this is probably the most complicated data structure, I will give some examples here.

For example, a `CollectionRequirement` can contain (inside `options`) the `CourseRequirement` CS 2305 and the `CourseRequirement` CS 2336 with the `required` property set to 2. This represents a requirement that requires both CS 2305 and CS 2336 (i.e. an "and" relationship) to be satisfied. If the `required` property was set to 1, only 1 of CS 2305 and CS 2336 would be required (i.e. an "or" relationship).

As a more real example, consider the prerequisites for the course CS 3305. It requires CE 2305 or CS 2305 or TE 2305 with a grade of C or better and MATH 2414 or MATH 2419. This would be represented as a `CollectionRequirement` with `required` set to 2. The two `options` are two separate `CollectionRequirement`s: one `CollectionRequirement` has a `required` property of 1 with the `options` of the `CourseRequirement`s CE 2305, CS 2305, TE 2305 each with a `minimum_grade` of "C". The other `CollectionRequirement` has a `required` of 1 and the two `options` being the two `CourseRequirement`s MATH 2414 and MATH 2419.

### Hours Requirement

An `HoursRequirement` represents the need to have taken some number of credit hours from a list of `CourseRequirement`s to satisfy the requirement.

### Choice Requirement

A `ChoiceRequirement` represents the need to choose to receive credit from a specific number of courses out of a list of possible courses. This is represented by a `CollectionRequirement` of `CourseRequirement`s, of which you may choose to receive credit from only `CollectionRequirement.required` of the listed courses.

### Limit Requirement

A `LimitRequirement` represents a limit on the number of credit hours that a course may be repeated for.

### Core Requirement

A `CoreRequirement` represents the need to have taken a course fulfilling a specific core code, and potentially also for a minimum number of credit hours.

### Other Requirement

An `OtherRequirement` represents some miscellaneous need to satisfy the requirement.

## Properties

| Name     | Type            | Description                                     | Example    |
| -------- | --------------- | ----------------------------------------------- | ---------- |
| **type** | RequirementType | The type of requirement this object represents. | collection |

### CourseRequirement Properties

| Name                | Type     | Description                                                                                                       | Example                              |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **type**            | String   | The type of requirement this object represents.                                                                   | course                               |
| **class_reference** | ObjectId | A reference to the class required in MongoDB in the form of an id.                                                | ObjectId("61ebbb126e3659537e8a14d6") |
| **minimum_grade**   | String   | The minimum grade required for the course to fulfill the requirement. An empty string indicates default behavior. | "C", ""                              |

### SectionRequirement Properties

| Name                | Type     | Description                                                          | Example                              |
| ------------------- | -------- | -------------------------------------------------------------------- | ------------------------------------ |
| **type**            | String   | The type of requirement this object represents.                      | section                              |
| **class_reference** | ObjectId | A reference to the section required in MongoDB in the form of an id. | ObjectId("61ebbb126e3659537e8a14d6") |

### ExamRequirement Properties

| Name               | Type     | Description                                                       | Example                              |
| ------------------ | -------- | ----------------------------------------------------------------- | ------------------------------------ | --- | ----------------- | ------ | ------------------------------------------------------------------ | --- |
| **type**           | String   | The type of requirement this object represents.                   | exam                                 |
| **exam_reference** | ObjectId | A reference to the exam required in MongoDB in the form of an id. | ObjectId("61ebbb126e3659537e8a14d6") |     | **minimum_score** | Number | The minimum score required on the exam to fulfill the requirement. | 70  |

### MajorRequirement Properties

| Name      | Type   | Description                                     | Example |
| --------- | ------ | ----------------------------------------------- | ------- |
| **type**  | String | The type of requirement this object represents. | major   |
| **major** | String | The major associated with the requirement.      |         |

### MinorRequirement Properties

| Name      | Type   | Description                                     | Example |
| --------- | ------ | ----------------------------------------------- | ------- |
| **type**  | String | The type of requirement this object represents. | minor   |
| **major** | String | The minor associated with the requirement.      |         |

### GPARequirement Properties

| Name        | Type   | Description                                                                                                 | Example     |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------- | ----------- |
| **type**    | String | The type of requirement this object represents.                                                             | gpa         |
| **minimum** | Number | The minimum GPA required to fulfill the requirement.                                                        | 3.5         |
| **subset**  | String | The subset of courses that are in question when determining the GPA. If empty, this represents overall GPA. | "Major", "" |

### ConsentRequirement Properties

| Name        | Type   | Description                                     | Example |
| ----------- | ------ | ----------------------------------------------- | ------- |
| **type**    | String | The type of requirement this object represents. | consent |
| **granter** | String | Who grants consent.                             | Advisor |

### OtherRequirement Properties

| Name            | Type   | Description                                                                                              | Example |
| --------------- | ------ | -------------------------------------------------------------------------------------------------------- | ------- |
| **type**        | String | The type of requirement this object represents.                                                          | other   |
| **description** | String | A description of what kind of custom criteria will be used to determine if the requirement is satisfied. |         |
| **condition**   | String | The condition given the criteria to determine if the requirement is satisfied.                           |         |

### CollectionRequirement Properties

| Name         | Type                                    | Description                                                                               | Example                                                                                                  |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **type**     | String                                  | The type of requirement this object represents.                                           | collection                                                                                               |
| **name**     | String                                  | A name for the collection to indicate what it holds. May be empty if not very applicable. | "Core Curriculum", "", "Major Requirements"                                                              |
| **required** | Number                                  | The minimum number of required requirements necessary to satisfy the requirement.         | 3                                                                                                        |
| **options**  | Array - [Requirement](./requirement.md) | A list of all the options that can contribute to satisfying the requirement.              | [CourseRequirement1, CourseRequirement2, CourseRequirement3, CourseRequirement4, CollectionRequirement1] |

### HoursRequirement Properties

| Name         | Type                                                                       | Description                                                                       | Example                                                                                                  |
| ------------ | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **type**     | String                                                                     | The type of requirement this object represents.                                   | hours                                                                                                    |
| **required** | Number                                                                     | The minimum number of required requirements necessary to satisfy the requirement. | 3                                                                                                        |
| **options**  | Array - [CourseRequirement](./requirement.md#courserequirement-properties) | A list of all the options that can contribute to satisfying the requirement.      | [CourseRequirement1, CourseRequirement2, CourseRequirement3, CourseRequirement4, CollectionRequirement1] |

### ChoiceRequirement Properties

| Name        | Type                                                                       | Description                                                                                                                           | Example |
| ----------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **type**    | String                                                                     | The type of requirement this object represents.                                                                                       | choice  |
| **choices** | [CollectionRequirement](./requirement.md#collectionrequirement-properties) | A `CollectionRequirement` of `CourseRequirement`s, from which only `CollectionRequirement.required` courses can be chosen for credit. |         |

### LimitRequirement Properties

| Name          | Type   | Description                                                           | Example |
| ------------- | ------ | --------------------------------------------------------------------- | ------- |
| **type**      | String | The type of requirement this object represents.                       | limit   |
| **max_hours** | Number | The maximum number of credit hours that a course may be repeated for. | 3       |

### CoreRequirement Properties

| Name          | Type   | Description                                                                             | Example |
| ------------- | ------ | --------------------------------------------------------------------------------------- | ------- |
| **type**      | String | The type of requirement this object represents.                                         | core    |
| **core_flag** | String | The core flag that a course meeting this requirement must fulfill                       | 060     |
| **hours**     | Number | The minimum number of credit hours that a course meeting this requirement must fulfill. | 3       |
