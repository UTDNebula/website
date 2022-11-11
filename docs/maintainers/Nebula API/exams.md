---
title: Exams
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 6
---

# Exams

An Exam represents a credit-bearing or placement examination at the University of Texas at Dallas. These are used to store exams that could fulfill the same requirements as courses at the University for fulfilling prerequisites or other degree requiremenmts. There are many different types of Exams but all are accessed through the same endpoints.

## Querying Exams

There are two main ways to query for a exam:

1. By Query Paramters
2. By ID

Each of these methods has its own API endpoint to get the requested data.

## GET /exam

The default endpoint for /exam returns a list of exams matching the set of query parameters provided.

Below is a list of all of the parameters that can be used to refine your query:

<h3 id="get__exam-parameters">Parameters</h3>

| Name  | In    | Type   | Required | Description                                        |
| ----- | ----- | ------ | -------- | -------------------------------------------------- |
| type  | query | string | false    | The type of exam                                   |
| name  | query | string | false    | The name of the exam                               |
| level | query | string | false    | The level of the IB exam (should it be an IB exam) |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "type": "string"
  }
]
```

## GET /exam/{id}

This endpoint returns a single Exam object with a primary key matching {id}.

<h3 id="get__exam_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description           |
| ---- | ---- | ------ | -------- | --------------------- |
| id   | path | string | true     | ID of the exam to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "type": "string"
}
```

## Exam

The default exam interface whose attributes are inherited by all other exam types.

```json
{
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name | Type   | Required | Restrictions | Description                                     |
| ---- | ------ | -------- | ------------ | ----------------------------------------------- |
| \_id | string | true     | none         | The MongoDB database id for the Exam object.    |
| type | string | true     | none         | The type of exam object this object represents. |

### ALEXS Exam

The ALEXS Exam is an exam required by all students for math placement upon admittance to the University. This Exam is used in leiu of credit for lower level math courses in the University.

```json
{
  "placement": [
    {
      "requirement": {
        "type": null
      },
      "outcome": [["string"]]
    }
  ],
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name      | Type                                                                        | Required | Restrictions | Description                                                                                                                      |
| --------- | --------------------------------------------------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| placement | [[Outcome](/docs/maintainers/Nebula%20API/api-documentation#schemaoutcome)] | true     | none         | An array of Outcomes for which the placement into the Course is earned. Does not include credit, only placement into the course. |

### AP Exam

AP Exams are exams offered by College Board that are taken prior to college in order to earn college credit. Depending upon the score received, a student may be able to obtain different levels of credit for their success on the exam.

```json
{
  "name": "string",
  "yields": [
    {
      "requirement": {
        "type": null
      },
      "outcome": [["string"]]
    }
  ],
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name   | Type                                                                        | Required | Restrictions | Description                                                                                                                     |
| ------ | --------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| name   | string                                                                      | true     | none         | The name of the exam                                                                                                            |
| yields | [[Outcome](/docs/maintainers/Nebula%20API/api-documentation#schemaoutcome)] | true     | none         | An array of Outcomes for which the credit for the Course or Credit is received. Does not include placement, only actual credit. |

### CLEP Exam

CLEP Exams are exams offered by College Board that are taken before or during college in order to earn college credit. Depending upon the score received, a student may be able to obtain different levels of credit for their success on the exam.

```json
{
  "name": "string",
  "yields": [
    {
      "requirement": {
        "type": null
      },
      "outcome": [["string"]]
    }
  ],
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name   | Type                                                                        | Required | Restrictions | Description                                                                                                                     |
| ------ | --------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| name   | string                                                                      | true     | none         | The name of the exam                                                                                                            |
| yields | [[Outcome](/docs/maintainers/Nebula%20API/api-documentation#schemaoutcome)] | true     | none         | An array of Outcomes for which the credit for the Course or Credit is received. Does not include placement, only actual credit. |

### CS Placement Exam

The CS Placement Exam is an exam required of Computer Science students upon entry to the Erik Johnsson School of Computer Science. This exam can be used to place out of entry level computer science courses and obtain credit for them instead.

```json
{
  "yields": [
    {
      "requirement": {
        "type": null
      },
      "outcome": [["string"]]
    }
  ],
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name   | Type                                                                        | Required | Restrictions | Description                                                                                                                     |
| ------ | --------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| yields | [[Outcome](/docs/maintainers/Nebula%20API/api-documentation#schemaoutcome)] | true     | none         | An array of Outcomes for which the credit for the Course or Credit is received. Does not include placement, only actual credit. |

### IB Exam

International Baccalaureate (IB) Exams are exams offered by the IBO for students in secondary education to obtain credit for university level credit. Depending upon the score recieved on these exams, a student may be eligible for credit that can replace other required courses in their degree plan.

```json
{
  "name": "string",
  "level": "string",
  "yields": [
    {
      "requirement": {
        "type": null
      },
      "outcome": [["string"]]
    }
  ],
  "_id": "string",
  "type": "string"
}
```

#### Properties

| Name   | Type                                                                        | Required | Restrictions | Description                                                                                                                     |
| ------ | --------------------------------------------------------------------------- | -------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| name   | string                                                                      | true     | none         | The name of the exam                                                                                                            |
| level  | string                                                                      | true     | none         | The level of the IB exam.                                                                                                       |
| yields | [[Outcome](/docs/maintainers/Nebula%20API/api-documentation#schemaoutcome)] | true     | none         | An array of Outcomes for which the credit for the Course or Credit is received. Does not include placement, only actual credit. |
