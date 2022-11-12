---
sidebar_position: 3
title: 'Exam'
description: Nebula Labs's approach to user-centered design.
---

## Overview

An **Exam** represents a credit-bearing or placement examination at the University of Texas at Dallas. These are used to store exams that could fulfill the same requirements as courses at the University for fulfilling prerequisites or other degree requiremenmts. There are many different types of Exams but all are accessed through the same endpoints.

You are able to query for a **Exam** by:

- Query Parameters
- ID

Each of these methods has its own API endpoint to get the requested data.

## GET /exam

The default endpoint for /exam returns a list of sections matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

### Parameters

| Name      | Description                                        | Example                   |
| --------- | -------------------------------------------------- | ------------------------- |
| **type**  | The type of exam                                   | /exam?type=AP             |
| **name**  | The name of the exam                               | /exam?name=Macroeconomics |
| **level** | The level of the IB exam (should it be an IB exam) | /exam?level=Standard      |

### Example Response

> 200 Response

```json
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "_id": "623f8ef656965e1884291c17",
      "name": "History of Art",
      "type": "AP",
      "yields": [
        {
          "requirement": {
            "type": "exam",
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 3
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
            "type": "exam",
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 4
          },
          "outcome": [["62410d50e27d0c74c4093e65"]]
        },
        {
          "requirement": {
            "type": "exam",
            "exam_reference": "623f8ef656965e1884291c17",
            "minimum_score": 5
          },
          "outcome": [["62410d50e27d0c74c4093e65"]]
        }
      ]
    },
    {
      // ...
    }
  ]
}
```

## GET /exam/{id}

This endpoint returns a single **Exam** with a primary key matching {id}.

### Parameters

This endpoint accepts a single route parameter: **id**. This is passed into the endpoint path.

| Name   | Description           | Example                        |
| ------ | --------------------- | ------------------------------ |
| **id** | ID of the exam to get | /exam/623f8ef656965e1884291c17 |

### Example Response

> 200 Response

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "_id": "623f8ef656965e1884291c17",
    "name": "History of Art",
    "type": "AP",
    "yields": [
      {
        "requirement": {
          "type": "exam",
          "exam_reference": "623f8ef656965e1884291c17",
          "minimum_score": 3
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
          "type": "exam",
          "exam_reference": "623f8ef656965e1884291c17",
          "minimum_score": 4
        },
        "outcome": [["62410d50e27d0c74c4093e65"]]
      },
      {
        "requirement": {
          "type": "exam",
          "exam_reference": "623f8ef656965e1884291c17",
          "minimum_score": 5
        },
        "outcome": [["62410d50e27d0c74c4093e65"]]
      }
    ]
  }
}
```
