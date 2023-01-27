---
sidebar_position: 2
title: 'Degree'
description: Nebula Labs's approach to user-centered design.
---

## Overview

Degrees are a collection of different Requirement objects that make up a full degree plan for the year it was published in the course catalog.

You are able to query for a **Degree** by:

- ID

## GET /degree/{id}

This endpoint returns a single **Degree** with a primary key matching {id}.

### Parameters

This endpoint accepts a single route parameter: **id**. This is passed into the endpoint path.

| Name   | Description             | Example                           |
| ------ | ----------------------- | --------------------------------- |
| **id** | ID of the degree to get | /degree/61ebbb126e3659537e8adsdss |
