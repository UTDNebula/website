---
sidebar_position: 9
title: 'Outcome'
description: Nebula Labs's approach to user-centered design.
---

## Overview

An `Outcome` represents a [Requirement](./requirement.md) outcome from [Exam](./exam.md) completion.

## Properties

| Name            | Type                                             | Description                                                                                 |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **requirement** | [Requirement](./requirement.md)                  | Requirement associated with the outcome                                                     |
| **outcome**     | Array - Array<ObjectId \| [Credit](.\credit.md)> | Array of choices of `Course`s and `Credit`s for meeting the [Requirement](./requirement.md) |

## Example

> This is part of an example exam object

```json
{
  "_id": "623f8ef656965e1884291c2a",
  "name": "Calculus BC",
  "type": "AP",
  "yields": [
    // One of many potential Outcomes
    {
      // The Requirement associated with the Outcome
      "requirement": {
        "type": "collection",
        "name": "AP Calculus BC",
        "required": 3,
        "options": [
          {
            "type": "exam",
            "exam_reference": "623f8ef656965e1884291c2a",
            "minimum_score": 3
          },
          {
            "type": "other",
            "description": "AP Math Exam Credit",
            "condition": "Students can receive credit for only one AP Math exam"
          },
          {
            "type": "other",
            "description": "AP Calculus BC: AB subscore",
            "condition": "Requires an AB subscore of 4 or 5."
          }
        ]
      },
      // Array of choices of Courses and Credits for meeting the Requirement
      "outcome": [
        // Awarded either MATH 2312 and MATH 1315
        [
          "6241a53ee0a87a87f38b1a95", // MATH 2312
          "6241a532e0a87a87f38b1a78" // MATH 1325
        ],
        // Or MATH 2312 and
        [
          "6241a53ee0a87a87f38b1a95", // MATH 2312
          "6241a542e0a87a87f38b1aa3" // MATH 2413
        ]
      ]
    },
    {
      // Outcome
      // ...
    }
  ]
}
```

```json
"_id": "623f8ef656965e1884291c17",
"name": "History of Art",
"type": "AP",
"yields": [
    {
        "requirement": {
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 3,
            "type": "exam"
        },
        "outcome": [
            [
                {
                    "category": "free",
                    "credit_hours": 3
                }
            ]
        ]
    },
    {
        "requirement": {
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 4,
            "type": "exam"
        },
        "outcome": [
            [
                "62410d50e27d0c74c4093e65"
            ]
        ]
    },
    {
        "requirement": {
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 5,
            "type": "exam"
        },
        "outcome": [
            [
                "62410d50e27d0c74c4093e65"
            ]
        ]
    }
]
```
