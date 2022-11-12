---
sidebar_position: 8
title: 'Meeting'
description: Nebula Labs's approach to user-centered design.
---

## Overview

A `Meeting` represents a recurring meeting. This schema can represent both recurring meetings and single meetings. Meetings occur repeatedly on the specified days of the week during a period. Non-recurring meetings should have the `start_date` equal to the `end_date`.

## Properties

| Name             | Type           | Description                                                                                                                 | Example                 |
| ---------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **start_date**   | String         | The start date of a meeting.                                                                                                | January 18, 2022        |
| **end_date**     | String         | The end date of a meeting.                                                                                                  | May 5, 2022             |
| **meeting_days** | Array - String | A list of all days the meeting occurs during the time period.                                                               | ["Monday", "Wednesday"] |
| **start_time**   | String         | The time the meeting starts on each meeting day.                                                                            | 10:00am                 |
| **end_time**     | String         | The time a meeting ends on each meeting day.                                                                                | 11:15am                 |
| **modality**     | ModalityType   | The modality of the meeting following the modality types in [UTD's CourseBook](https://coursebook.utdallas.edu/modalities). | traditional             |
| **location**     | Location       | The location of the meeting.                                                                                                |                         |
