---
title: Degrees
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 7
---

# Degrees

> :warning: **The endpoints and data associated with degrees is still a WIP. All information subject to change**

Degrees are a collection of different [Requirement](/docs/maintainers/Nebula%20API/api-documentation#schemarequirement) objects that make up a full degree plan for the year it was published in the course catalog.

## GET /degree/{id}

This endpoint accepts a single route parameter to get a degree by its primary key.

<h3 id="get__degree_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description             |
| ---- | ---- | ------ | -------- | ----------------------- |
| id   | path | string | true     | ID of the degree to get |
