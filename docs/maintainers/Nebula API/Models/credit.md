---
sidebar_position: 4
title: 'Credit'
toc_footers: []
includes: []
search: true
highlight_theme: darkula
---

## Overview

The `Credit` object represents an amount of 'semester credit hours' given by The University of Texas at Dallas. A `Credit` should not be confused with a **Course** as semester credit hours serve only to fulfill credit hour requirements.

## Properties

| Name             | Type   | Description                                                                                                                               | Example                                                        |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **category**     | String | The category of the credit hours. If there is no category associated with the credit, the value is "general". "free" is a valid category. | "Geosciences", "Business Computer Information Systems", "free" |
| **credit_hours** | Number | The number of credit hours.                                                                                                               | 3                                                              |
