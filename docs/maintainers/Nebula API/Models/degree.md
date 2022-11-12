---
sidebar_position: 5
title: 'Degree'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A **Degree** represents either a major, minor, or concentration received from The University of Texas at Dallas.

## Properties

| Name                     | Type                                                            | Description                                                                              | Example                                                                                         |
| ------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **\_id**                 | ObjectId                                                        | The MongoDB database id for the `Degree` object.                                         | ObjectId("61ebbb126e3659537e8a14d6")                                                            |
| **subtype**              | DegreeSubtype                                                   | The subtype of degree that this object represents.                                       | Major (Other options include Minor, Concentration, Prescribed Double Major, Certificate, Track) |
| **school**               | String                                                          | The school that the `degree` belongs to.                                                 | School of Natural Sciences and Mathematics                                                      |
| **name**                 | String                                                          | The full name of the degree.                                                             | Bachelor of Science in Computer Science                                                         |
| **year**                 | String                                                          | The academic year to which this degree corresponds to.                                   | 2021-2022                                                                                       |
| **abbreviation**         | String                                                          | The abbreviation of the degree.                                                          | B.S. in Computer Science                                                                        |
| **minimum_credit_hours** | Number                                                          | The minimum credit hours required for the degree, which can be found on the UTD catalog. | 124                                                                                             |
| **catalog_uri**          | String                                                          | A link to the listing of the degree and its requirements in the UTD catalog.             | https://catalog.utdallas.edu/2021/undergraduate/programs/ah/philosophy                          |
| **requirements**         | [CollectionRequirement](./requirement.md#collectionrequirement) | A collection of requirements required to satisfy the degree.                             | N/A                                                                                             |
