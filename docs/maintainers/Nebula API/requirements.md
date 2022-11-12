---
title: Requirements
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 3
---

<a id="requirement"></a>

# Requirements

Requirements represent a requirement that can be satisfied. This is probably the most important concept in the API and also has the most cognitive overhead. Requirement is an abstract type and has multiple classes that derive from it to represent the various types of requirements at UTD.

## Requirement

> :warning: **This is an abstract type.**

### Properties

| Name | Type                                                                           | Required | Description                                     |
| ---- | ------------------------------------------------------------------------------ | -------- | ----------------------------------------------- |
| type | [RequirementType](docs/maintainers/Nebula%20API/requirements/#requirementtype) | true     | The type of requirement this object represents. |

<a id="requirementtype"></a>

### RequirementType

Requirement types are differentiated by the `type` attribute. The valid types are:

```
"collection", "course", "section", "major", "minor", "exam",
"gpa", "hours", "consent", "limit", "core", "other"
```

<a id="collectionrequirement"></a>

## CollectionRequirement

A `CollectionRequirement` represents the need to have some number of requirements from a list of `Requirement`s to satisfy the requirement. This is used to represent groups of requirements, "and" relationships, "some" relationships, and "or" relationships. Collections can contain other collections.

### Properties

| Name     | Type                                                                     | Required | Restrictions | Description                                                                                              |
| -------- | ------------------------------------------------------------------------ | -------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| type     | string                                                                   | true     | "collection" | none                                                                                                     |
| name     | string                                                                   | false    | none         | A name for the collection to indicate what it holds. May be empty if not very applicable.                |
| required | integer                                                                  | true     | none         | The minimum number of requirements (from `options`) necessary to satisfy the collection requirement.     |
| options  | [[Requirement](docs/maintainers/Nebula%20API/requirements/#requirement)] | true     | none         | A list of all the options for requirements that can contribute to satisfying the collection requirement. |

### Examples

The following is an example collection requirement where completion of both CS 2305 and CS 2336 are required.

```json
{
  "type": "collection",
  "name": "Example Collection Requirement",
  "required": 2, // This represents a requirement that requires both CS 2305 and CS 2336 (i.e. an "and" relationship)
  // to be satisfied. If the `required` property was set to 1,
  // only 1 of CS 2305 and CS 2336 would be required (i.e. an "or" relationship).
  "options": [
    {
      "type": "course",
      "class_reference": "62414c4ee27d0c74c4094581", // CS 2305
      "minimum_grade": ""
    },
    {
      "type": "course",
      "class_reference": "62414c52e27d0c74c409458d", // CS 2336
      "minimum_grade": ""
    }
  ]
}
```

This is the prerequisites collection requirement for the course CS 3305.
It requires CE 2305 or CS 2305 or TE 2305 with a grade of C or better and MATH 2414 or MATH 2419.

```json
{
  "type": "collection",
  "required": 1, // and (only 1 requirement in options)
  "options": [
    {
      "type": "collection",
      "required": 2, // and
      "options": [
        {
          "type": "collection",
          "required": 1, // or
          "options": [
            {
              "type": "course",
              "class_reference": "6241328ce27d0c74c40942e3", // CE 2305
              "minimum_grade": "C"
            },
            {
              "type": "course",
              "class_reference": "62414c4ee27d0c74c4094581", // CS 2305
              "minimum_grade": "C"
            },
            {
              "type": "course",
              "class_reference": "624202cc9f98f082445205f1", // TE 2305
              "minimum_grade": "C"
            }
          ]
        },
        {
          "type": "collection",
          "required": 1, // or
          "options": [
            {
              "type": "course",
              "class_reference": "6241a7c7e0a87a87f38b1aea" // MATH 2414
            },
            {
              "type": "course",
              "class_reference": "6241a843e0a87a87f38b1b70" // MATH 2419
            }
          ]
        }
      ]
    }
  ]
}
```

<a id="courserequirement"></a>

## CourseRequirement

A `CourseRequirement` represents a specific `Course` that must be taken to satisfy the requirement. This will represent the majority of requirements.

### Properties

| Name            | Type     | Required | Restrictions | Description                                                                                                       |
| --------------- | -------- | -------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| type            | string   | true     | "course"     | none                                                                                                              |
| class_reference | ObjectID | true     | none         | The `id` of the respective `Course`                                                                               |
| minimum_grade   | string   | false    | none         | The minimum grade required for the course to fulfill the requirement. An empty string indicates default behavior. |

### Example

```json
{
  "type": "course",
  "class_reference": "6241328ce27d0c74c40942e3", // CE 2305
  "minimum_grade": "C"
}
```

<a id="sectionrequirement"></a>

## SectionRequirement

A `SectionRequirement` represents a specific `Section` that must be taken to satisfy the requirement.

### Properties

| Name              | Type     | Required | Restrictions | Description                          |
| ----------------- | -------- | -------- | ------------ | ------------------------------------ |
| type              | string   | true     | "section"    | none                                 |
| section_reference | ObjectID | true     | none         | The `id` of the respective `Section` |

### Example

```json
{
  "type": "section",
  "section_reference": "62410a21e27d0c74c4093d59" // ACCT 2301.001.17F
}
```

<a id="majorrequirement"></a>

## MajorRequirement

A `MajorRequirement`represents a major that a student must be enrolled in to satisfy the requirement.

### Properties

| Name  | Type   | Required | Restrictions | Description                                        |
| ----- | ------ | -------- | ------------ | -------------------------------------------------- |
| type  | string | true     | "major"      | none                                               |
| major | string | true     | none         | The major abbreviation, as indicated on Coursebook |

### Example

```json
{
  "type": "major",
  "major": "ENCS" // Engineering and Computer Science
}
```

<a id="minorrequirement"></a>

## MinorRequirement

A `MinorRequirement` represents a minor that a student must be enrolled in to satisfy the requirement.

### Properties

| Name  | Type   | Required | Restrictions | Description                                        |
| ----- | ------ | -------- | ------------ | -------------------------------------------------- |
| type  | string | true     | "minor"      | none                                               |
| minor | string | true     | none         | The minor abbreviation, as indicated on Coursebook |

### Example

```json
{
  "type": "minor",
  "minor": "ENCS" // Engineering and Computer Science
}
```

<a id="examrequirement"></a>

## ExamRequiremnet

An `ExamRequirement` represents a specific `Exam` credit that must be received to satisfy the requirement.

### Properties

| Name           | Type     | Required | Restrictions | Description                                                       |
| -------------- | -------- | -------- | ------------ | ----------------------------------------------------------------- |
| type           | string   | true     | "exam"       | none                                                              |
| exam_reference | ObjectID | true     | none         | A reference to the exam required                                  |
| minimum_score  | integer  | true     | none         | The minimum score required on the exam to fulfill the requirement |

### Example

```json
{
  "type": "exam",
  "exam_reference": "623f8ef656965e1884291c17", // AP History of Art
  "minimum_score": 3
}
```

<a id="gparequirement"></a>

## GPARequirement

A `GPARequirement` represents the minimum GPA a student must have to satisfy the requirement.

### Properties

| Name    | Type   | Required | Restrictions | Description                                                                                                 |
| ------- | ------ | -------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| type    | string | true     | "gpa"        | none                                                                                                        |
| minimum | float  | true     | 0.0 - 4.0    | The minimum GPA required to fulfill the requirement                                                         |
| subset  | string | true     | none         | The subset of courses that are in question when determining the GPA. If empty, this represents overall GPA. |

### Example

```json
{
  "type": "gpa",
  "minimum": 3,
  "subset": "university"
}
```

<a id="hoursrequirement"></a>

## HoursRequirement

An `HoursRequirement` represents the need to have taken some number of credit hours from a list of `CourseRequirement`s to satisfy the requirement.

### Properties

| Name     | Type                                      | Required | Restrictions | Description                                                                            |
| -------- | ----------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------- |
| type     | string                                    | true     | "hours"      | none                                                                                   |
| required | integer                                   | true     | none         | The minimum number of credit hours that a course meeting this requirement must fulfill |
| options  | [[CourseRequirement](#courserequirement)] | true     | none         | The list of `CourseRequirement`s to take hours from                                    |

### Example

```json
{
  "type": "hours",
  "minimum": 3,
  "options": {
    "type": "course",
    "class_reference": "624127fce27d0c74c40941cd", // BMEN 4V95
    "minimum_grade": ""
  }
}
```

<a id="limitrequirement"></a>

## LimitRequirement

A `LimitRequirement` represents a limit on the number of credit hours that a course may be repeated for.

### Properties

| Name      | Type    | Required | Restrictions | Description                                                          |
| --------- | ------- | -------- | ------------ | -------------------------------------------------------------------- |
| type      | string  | true     | "limit"      | none                                                                 |
| max_hours | integer | true     | none         | The maximum number of credit hours that a course may be repeated for |

### Example

```json
{
  "type": "limit",
  "max_hours": 6
}
```

<a id="consentrequirement"></a>

## ConsentRequirement

A `ConsentRequirement` represents the need for consent from a faculty member to satisfy the requirement.

### Properties

| Name    | Type   | Required | Restrictions | Description                                        |
| ------- | ------ | -------- | ------------ | -------------------------------------------------- |
| type    | string | true     | "consent"    | none                                               |
| granter | string | true     | none         | The type of faculty member who's consent is needed |

### Example

```json
{
  "type": "consent",
  "granter": "instructor"
}
```

<a id="corerequirement"></a>

## CoreRequirement

A `CoreRequirement` represents the need to have taken a course fulfilling a specific core code for a minimum number of credit hours.

### Properties

| Name      | Type   | Required | Restrictions | Description                                                            |
| --------- | ------ | -------- | ------------ | ---------------------------------------------------------------------- |
| type      | string | true     | "core"       | none                                                                   |
| core_flag | string | true     | none         | The Core Flag for this requirement, as indicated on the Course Catelog |
| hours     | int    | true     | none         | The number of hours needed to satisfy this requirement                 |

### Example

```json
{
  "type": "core",
  "core_flag": "010", // Communication Core
  "hours": 6
}
```

<a id="otherrequirement"></a>

## OtherRequirement

An `OtherRequirement` represents some miscellaneous need to satisfy the requirement.

### Properties

| Name        | Type   | Required | Restrictions | Description                                                                                             |
| ----------- | ------ | -------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| type        | string | true     | "other"      | none                                                                                                    |
| description | string | true     | none         | A description of what kind of custom criteria will be used to determine if the requirement is satisfied |
| condition   | string | true     | none         | The condition to determine if the requirement is satisfied                                              |

### Example

```json
{
  "type": "other",
  "description": "Incoming freshmen must enroll and complete requirements of UNIV 1010",
  "condition": "Student completed UNIV 1010 or is not an incoming freshman"
}
```
