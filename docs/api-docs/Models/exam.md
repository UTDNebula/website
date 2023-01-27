---
sidebar_position: 6
title: 'Exam'
description: Nebula Labs's approach to user-centered design.
---

## Overview

An **Exam** represents a credit-bearing or placement examination at the University of Texas at Dallas. There are five types of exams that can be returned: AP, ALEKS, CLEP, IB, and CS Placement.

## Properties

| Name     | Type     | Description                                     | Example                                     |
| -------- | -------- | ----------------------------------------------- | ------------------------------------------- |
| **\_id** | ObjectId | The MongoDB database id for the `Exam` object.  | ObjectId("61ebbb126e3659537e8a14d6")        |
| **type** | String   | The type of exam object this object represents. | "AP", "ALEKS", "CLEP", "IB", "CS placement" |

### APExam Properties

| Name       | Type                            | Description                                                                                                                               | Example                                                                                                   |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **name**   | String                          | The name of the exact exam being taken.                                                                                                   | "Macroeconomics", "American History I: Early Colonization to 1877", "Environmental Systems and Societies" |
| **yields** | Array - [Outcome](./outcome.md) | An array of `Outcomes` for which the credit for the `Course` or `Credit` is received. Does not include placement, only actual **credit**. | See [Outcome](./outcome.md)                                                                               |

### ALEKSExam Properties

| Name          | Type                            | Description                                                                                                                              | Example                     |
| ------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **placement** | Array - [Outcome](./outcome.md) | An array of `Outcomes` for which the placement into the `Course` is earned. Does not include credit, only **placement** into the course. | See [Outcome](./outcome.md) |

### CLEPExam Properties

| Name       | Type                            | Description                                                                                                                               | Example                                                                                                   |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **name**   | String                          | The name of the exact exam being taken.                                                                                                   | "Macroeconomics", "American History I: Early Colonization to 1877", "Environmental Systems and Societies" |
| **yields** | Array - [Outcome](./outcome.md) | An array of `Outcomes` for which the credit for the `Course` or `Credit` is received. Does not include placement, only actual **credit**. | See [Outcome](./outcome.md)                                                                               |

### IBExam Properties

| Name       | Type                            | Description                                                                                                                               | Example                                                                                                   |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **name**   | String                          | The name of the exact exam being taken.                                                                                                   | "Macroeconomics", "American History I: Early Colonization to 1877", "Environmental Systems and Societies" |
| **level**  | String                          | The level of the IB exam.                                                                                                                 | Standard, Higher                                                                                          |
| **yields** | Array - [Outcome](./outcome.md) | An array of `Outcomes` for which the credit for the `Course` or `Credit` is received. Does not include placement, only actual **credit**. | See [Outcome](./outcome.md)                                                                               |

### CSPlacementExam Properties

| Name       | Type                            | Description                                                                                                                               | Example                     |
| ---------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| **yields** | Array - [Outcome](./outcome.md) | An array of `Outcomes` for which the credit for the `Course` or `Credit` is received. Does not include placement, only actual **credit**. | See [Outcome](./outcome.md) |
