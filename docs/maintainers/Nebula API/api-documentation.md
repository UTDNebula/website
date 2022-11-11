---
title: Nebula Labs API v0.1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
sidebar_position: 8
---

<h1 id="nebula-labs-api">Nebula Labs API v0.1.0</h1>

This is the full open API Specification. If you want to know something about the API and weren't able to
find it elsewhere in our documentation, you should be able to find it here, just with less examples and
detail.

If there is an issue or you are still unable to find what you are looking forward, please reach out to
engineering@utdnebula.com

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The public Nebula Labs API for access to pertinent UT Dallas data

Email: <a href="mailto:eric.boysen@utdnebula.com">Eric Boysen</a>
License: MIT License

<h1 id="nebula-labs-api-default">Default</h1>

## get\_\_course

> Code samples

```shell
# You can also use wget
curl -X GET /course \
  -H 'Accept: application/json'

```

```http
GET /course HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/course', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/course',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/course', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/course', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/course");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/course", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /course`

Returns all courses matching the query's string-typed key-value pairs

<h3 id="get__course-parameters">Parameters</h3>

| Name                   | In    | Type   | Required | Description                                                               |
| ---------------------- | ----- | ------ | -------- | ------------------------------------------------------------------------- |
| course_number          | query | string | false    | The course's official number                                              |
| subject_prefix         | query | string | false    | The course's subject prefix                                               |
| title                  | query | string | false    | The course's title                                                        |
| description            | query | string | false    | The course's description                                                  |
| school                 | query | string | false    | The course's school                                                       |
| credit_hours           | query | string | false    | The number of credit hours awarded by successful completion of the course |
| class_level            | query | string | false    | The level of education that this course course corresponds to             |
| activity_type          | query | string | false    | The type of class this course corresponds to                              |
| grading                | query | string | false    | The grading status of this course                                         |
| internal_course_number | query | string | false    | The internal (university) number used to reference this course            |
| lecture_contact_hours  | query | string | false    | The weekly contact hours in lecture for a course                          |
| offering_frequency     | query | string | false    | The frequency of offering a course                                        |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "course_number": "string",
    "subject_prefix": "string",
    "title": "string",
    "description": "string",
    "school": "string",
    "credit_hours": "string",
    "class_level": "string",
    "activity_type": "string",
    "grading": "string",
    "internal_course_number": "string",
    "prerequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "corequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "lecture_contact_hours": "string",
    "laboratory_contact_hours": "string",
    "offering_frequency": "string"
  }
]
```

<h3 id="get__course-responses">Responses</h3>

| Status | Meaning                                                 | Description       | Schema |
| ------ | ------------------------------------------------------- | ----------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A list of courses | Inline |

<h3 id="get__course-responseschema">Response Schema</h3>

Status Code **200**

| Name                     | Type                                | Required | Restrictions | Description |
| ------------------------ | ----------------------------------- | -------- | ------------ | ----------- |
| _anonymous_              | [[Course](#schemacourse)]           | false    | none         | none        |
| » \_id                   | string                              | true     | none         | none        |
| » course_number          | string                              | true     | none         | none        |
| » subject_prefix         | string                              | true     | none         | none        |
| » title                  | string                              | true     | none         | none        |
| » description            | string                              | true     | none         | none        |
| » school                 | string                              | true     | none         | none        |
| » credit_hours           | string                              | true     | none         | none        |
| » class_level            | string                              | true     | none         | none        |
| » activity_type          | string                              | true     | none         | none        |
| » grading                | string                              | true     | none         | none        |
| » internal_course_number | string                              | true     | none         | none        |
| » prerequisites          | object                              | false    | none         | none        |
| »» name                  | string                              | true     | none         | none        |
| »» required              | integer                             | true     | none         | none        |
| »» options               | [[Requirement](#schemarequirement)] | true     | none         | none        |
| »»» type                 | any                                 | true     | none         | none        |

_allOf - discriminator: type_

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| »» _anonymous_ | object | false    | none         | none        |

_and_

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| »» _anonymous_ | object | false    | none         | none        |

_continued_

| Name                       | Type   | Required | Restrictions | Description |
| -------------------------- | ------ | -------- | ------------ | ----------- |
| » corequisites             | object | false    | none         | none        |
| » lecture_contact_hours    | string | true     | none         | none        |
| » laboratory_contact_hours | string | true     | none         | none        |
| » offering_frequency       | string | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## get\__course_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /course/{id} \
  -H 'Accept: application/json'

```

```http
GET /course/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/course/{id}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/course/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/course/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/course/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/course/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/course/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /course/{id}`

Returns the course with given ID

<h3 id="get__course_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description             |
| ---- | ---- | ------ | -------- | ----------------------- |
| id   | path | string | true     | ID of the course to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "course_number": "string",
  "subject_prefix": "string",
  "title": "string",
  "description": "string",
  "school": "string",
  "credit_hours": "string",
  "class_level": "string",
  "activity_type": "string",
  "grading": "string",
  "internal_course_number": "string",
  "prerequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "lecture_contact_hours": "string",
  "laboratory_contact_hours": "string",
  "offering_frequency": "string"
}
```

<h3 id="get__course_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema                  |
| ------ | ------------------------------------------------------- | ----------- | ----------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A course    | [Course](#schemacourse) |

<aside class="success">
This operation does not require authentication
</aside>

## get\__degree_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /degree/{id}

```

```http
GET /degree/{id} HTTP/1.1

```

```javascript
fetch('/degree/{id}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/degree/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/degree/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/degree/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/degree/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/degree/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /degree/{id}`

Returns the degree with given ID

<h3 id="get__degree_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description             |
| ---- | ---- | ------ | -------- | ----------------------- |
| id   | path | string | true     | ID of the degree to get |

<h3 id="get__degree_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A degree    | None   |

<aside class="success">
This operation does not require authentication
</aside>

## get\_\_exam

> Code samples

```shell
# You can also use wget
curl -X GET /exam \
  -H 'Accept: application/json'

```

```http
GET /exam HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/exam', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/exam',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/exam', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/exam', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/exam");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/exam", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /exam`

Returns all exams matching the query's string-typed key-value pairs

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

<h3 id="get__exam-responses">Responses</h3>

| Status | Meaning                                                 | Description     | Schema |
| ------ | ------------------------------------------------------- | --------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A list of exams | Inline |

<h3 id="get__exam-responseschema">Response Schema</h3>

Status Code **200**

| Name        | Type                  | Required | Restrictions | Description |
| ----------- | --------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [[Exam](#schemaexam)] | false    | none         | none        |
| » \_id      | string                | true     | none         | none        |
| » type      | string                | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## get\__exam_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /exam/{id} \
  -H 'Accept: application/json'

```

```http
GET /exam/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/exam/{id}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/exam/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/exam/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/exam/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/exam/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/exam/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /exam/{id}`

Returns the exam with given ID

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

<h3 id="get__exam_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema              |
| ------ | ------------------------------------------------------- | ----------- | ------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | An exam     | [Exam](#schemaexam) |

<aside class="success">
This operation does not require authentication
</aside>

## get\_\_professor

> Code samples

```shell
# You can also use wget
curl -X GET /professor \
  -H 'Accept: application/json'

```

```http
GET /professor HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/professor', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/professor',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/professor', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/professor', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/professor");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/professor", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /professor`

Returns all professors matching the query's string-typed key-value pairs

<h3 id="get__professor-parameters">Parameters</h3>

| Name                           | In    | Type   | Required | Description                                                                               |
| ------------------------------ | ----- | ------ | -------- | ----------------------------------------------------------------------------------------- |
| first_name                     | query | string | false    | The professor's first name                                                                |
| last_name                      | query | string | false    | The professor's last name                                                                 |
| titles                         | query | string | false    | One of the professor's title                                                              |
| email                          | query | string | false    | The professor's email address                                                             |
| phone_number                   | query | string | false    | The professor's phone number                                                              |
| office.building                | query | string | false    | The building of the location of the professor's office                                    |
| office.room                    | query | string | false    | The room of the location of the professor's office                                        |
| office.map_uri                 | query | string | false    | A hyperlink to the UTD room locator of the professor's office                             |
| profile_uri                    | query | string | false    | A hyperlink pointing to the professor's official university profile                       |
| image_uri                      | query | string | false    | A link to the image used for the professor on the professor's official university profile |
| office_hours.start_date        | query | string | false    | The start date of one of the office hours meetings of the professor                       |
| office_hours.end_date          | query | string | false    | The end date of one of the office hours meetings of the professor                         |
| office_hours.meeting_days      | query | string | false    | One of the days that one of the office hours meetings of the professor                    |
| office_hours.start_time        | query | string | false    | The time one of the office hours meetings of the professor starts                         |
| office_hours.end_time          | query | string | false    | The time one of the office hours meetings of the professor ends                           |
| office_hours.modality          | query | string | false    | The modality of one of the office hours meetings of the professor                         |
| office_hours.location.building | query | string | false    | The building of one of the office hours meetings of the professor                         |
| office_hours.location.room     | query | string | false    | The room of one of the office hours meetings of the professor                             |
| office_hours.location.map_uri  | query | string | false    | A hyperlink to the UTD room locator of one of the office hours meetings of the professor  |
| sections                       | query | string | false    | The \_id of one of the sections the professor teaches                                     |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "first_name": "string",
    "last_name": "string",
    "titles": ["string"],
    "email": "string",
    "phone_number": "string",
    "office": {
      "building": "string",
      "room": "string",
      "map_uri": "string"
    },
    "profile_uri": "string",
    "image_uri": "string",
    "office_hours": [
      {
        "start_date": "string",
        "end_date": "string",
        "meeting_days": ["string"],
        "start_time": "string",
        "end_time": "string",
        "modality": "string",
        "location": {
          "building": "string",
          "room": "string",
          "map_uri": "string"
        }
      }
    ],
    "sections": ["string"]
  }
]
```

<h3 id="get__professor-responses">Responses</h3>

| Status | Meaning                                                 | Description          | Schema |
| ------ | ------------------------------------------------------- | -------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A list of professors | Inline |

<h3 id="get__professor-responseschema">Response Schema</h3>

Status Code **200**

| Name            | Type                            | Required | Restrictions | Description |
| --------------- | ------------------------------- | -------- | ------------ | ----------- |
| _anonymous_     | [[Professor](#schemaprofessor)] | false    | none         | none        |
| » \_id          | string                          | true     | none         | none        |
| » first_name    | string                          | true     | none         | none        |
| » last_name     | string                          | true     | none         | none        |
| » titles        | [string]                        | false    | none         | none        |
| » email         | string                          | true     | none         | none        |
| » phone_number  | string                          | false    | none         | none        |
| » office        | object                          | false    | none         | none        |
| »» building     | string                          | false    | none         | none        |
| »» room         | string                          | false    | none         | none        |
| »» map_uri      | string                          | false    | none         | none        |
| » profile_uri   | string                          | false    | none         | none        |
| » image_uri     | string                          | false    | none         | none        |
| » office_hours  | [[Meeting](#schemameeting)]     | false    | none         | none        |
| »» start_date   | string                          | false    | none         | none        |
| »» end_date     | string                          | false    | none         | none        |
| »» meeting_days | [string]                        | false    | none         | none        |
| »» start_time   | string                          | false    | none         | none        |
| »» end_time     | string                          | false    | none         | none        |
| »» modality     | string                          | false    | none         | none        |
| »» location     | object                          | false    | none         | none        |
| » sections      | [string]                        | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## get\__professor_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /professor/{id} \
  -H 'Accept: application/json'

```

```http
GET /professor/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/professor/{id}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/professor/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/professor/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/professor/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/professor/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/professor/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /professor/{id}`

Returns the professor with given ID

<h3 id="get__professor_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description                |
| ---- | ---- | ------ | -------- | -------------------------- |
| id   | path | string | true     | ID of the professor to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "first_name": "string",
  "last_name": "string",
  "titles": ["string"],
  "email": "string",
  "phone_number": "string",
  "office": {
    "building": "string",
    "room": "string",
    "map_uri": "string"
  },
  "profile_uri": "string",
  "image_uri": "string",
  "office_hours": [
    {
      "start_date": "string",
      "end_date": "string",
      "meeting_days": ["string"],
      "start_time": "string",
      "end_time": "string",
      "modality": "string",
      "location": {
        "building": "string",
        "room": "string",
        "map_uri": "string"
      }
    }
  ],
  "sections": ["string"]
}
```

<h3 id="get__professor_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema                        |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A professor | [Professor](#schemaprofessor) |

<aside class="success">
This operation does not require authentication
</aside>

## get\_\_section

> Code samples

```shell
# You can also use wget
curl -X GET /section \
  -H 'Accept: application/json'

```

```http
GET /section HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Authorization: { API_KEY },
  Accept: 'application/json',
};

fetch('/section', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/section',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/section', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/section', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/section");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/section", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /section`

Returns all courses matching the query's string-typed key-value pairs

<h3 id="get__section-parameters">Parameters</h3>

| Name                           | In    | Type   | Required | Description                                                                         |
| ------------------------------ | ----- | ------ | -------- | ----------------------------------------------------------------------------------- |
| section_number                 | query | string | false    | The section's official number                                                       |
| course_reference               | query | string | false    | An id that points to the course in MongoDB that this section is an instantiation of |
| academic_session.name          | query | string | false    | The name of the academic session of the section                                     |
| academic_session.start_date    | query | string | false    | The date of classes starting for the section                                        |
| academic_session.end_date      | query | string | false    | The date of classes ending for the section                                          |
| professors                     | query | string | false    | One of the professors teaching the section                                          |
| teaching_assistants.first_name | query | string | false    | The first name of one of the teaching assistants of the section                     |
| teaching_assistants.last_name  | query | string | false    | The last name of one of the teaching assistants of the section                      |
| teaching_assistants.role       | query | string | false    | The role of one of the teaching assistants of the section                           |
| teaching_assistants.email      | query | string | false    | The email of one of the teaching assistants of the section                          |
| internal_class_number          | query | string | false    | The internal (university) number used to reference this section                     |
| instruction_mode               | query | string | false    | The instruction modality for this section                                           |
| meetings.start_date            | query | string | false    | The start date of one of the section's meetings                                     |
| meetings.end_date              | query | string | false    | The end date of one of the section's meetings                                       |
| meetings.meeting_days          | query | string | false    | One of the days that one of the section's meetings                                  |
| meetings.start_time            | query | string | false    | The time one of the section's meetings starts                                       |
| meetings.end_time              | query | string | false    | The time one of the section's meetings ends                                         |
| meetings.modality              | query | string | false    | The modality of one of the section's meetings                                       |
| meetings.location.building     | query | string | false    | The building of one of the section's meetings                                       |
| meetings.location.room         | query | string | false    | The room of one of the section's meetings                                           |
| meetings.location.map_uri      | query | string | false    | A hyperlink to the UTD room locator of one of the section's meetings                |
| core_flags                     | query | string | false    | One of core requirement codes this section fulfills                                 |
| syllabus_uri                   | query | string | false    | A link to the syllabus on the web                                                   |

> Example responses

> 200 Response

```json
[
  {
    "_id": "string",
    "section_number": "string",
    "course_reference": "string",
    "section_corequisites": {
      "name": "string",
      "required": 0,
      "options": [
        {
          "type": null
        }
      ],
      "type": null
    },
    "academic_session": {
      "name": "string",
      "start_date": "string",
      "end_date": "string"
    },
    "professors": ["string"],
    "teaching_assistants": [
      {
        "first_name": "string",
        "last_name": "string",
        "role": "string",
        "email": "string"
      }
    ],
    "internal_class_number": "string",
    "instruction_mode": "string",
    "meetings": [
      {
        "start_date": "string",
        "end_date": "string",
        "meeting_days": ["string"],
        "start_time": "string",
        "end_time": "string",
        "modality": "string",
        "location": {
          "building": "string",
          "room": "string",
          "map_uri": "string"
        }
      }
    ],
    "core_flags": ["string"],
    "syllabus_uri": "string",
    "grade_distribution": [0]
  }
]
```

<h3 id="get__section-responses">Responses</h3>

| Status | Meaning                                                 | Description        | Schema |
| ------ | ------------------------------------------------------- | ------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A list of sections | Inline |

<h3 id="get__section-responseschema">Response Schema</h3>

Status Code **200**

| Name                   | Type                                | Required | Restrictions | Description |
| ---------------------- | ----------------------------------- | -------- | ------------ | ----------- |
| _anonymous_            | [[Section](#schemasection)]         | false    | none         | none        |
| » \_id                 | string                              | true     | none         | none        |
| » section_number       | string                              | true     | none         | none        |
| » course_reference     | string                              | true     | none         | none        |
| » section_corequisites | object                              | false    | none         | none        |
| »» name                | string                              | true     | none         | none        |
| »» required            | integer                             | true     | none         | none        |
| »» options             | [[Requirement](#schemarequirement)] | true     | none         | none        |
| »»» type               | any                                 | true     | none         | none        |

_allOf - discriminator: type_

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| »» _anonymous_ | object | false    | none         | none        |

_and_

| Name           | Type   | Required | Restrictions | Description |
| -------------- | ------ | -------- | ------------ | ----------- |
| »» _anonymous_ | object | false    | none         | none        |

_continued_

| Name                    | Type                            | Required | Restrictions | Description |
| ----------------------- | ------------------------------- | -------- | ------------ | ----------- |
| » academic_session      | object                          | true     | none         | none        |
| »» name                 | string                          | false    | none         | none        |
| »» start_date           | string                          | false    | none         | none        |
| »» end_date             | string                          | false    | none         | none        |
| » professors            | [string]                        | true     | none         | none        |
| » teaching_assistants   | [[Assistant](#schemaassistant)] | false    | none         | none        |
| »» first_name           | string                          | false    | none         | none        |
| »» last_name            | string                          | false    | none         | none        |
| »» role                 | string                          | false    | none         | none        |
| »» email                | string                          | false    | none         | none        |
| » internal_class_number | string                          | true     | none         | none        |
| » instruction_mode      | string                          | true     | none         | none        |
| » meetings              | [[Meeting](#schemameeting)]     | true     | none         | none        |
| »» start_date           | string                          | false    | none         | none        |
| »» end_date             | string                          | false    | none         | none        |
| »» meeting_days         | [string]                        | false    | none         | none        |
| »» start_time           | string                          | false    | none         | none        |
| »» end_time             | string                          | false    | none         | none        |
| »» modality             | string                          | false    | none         | none        |
| »» location             | object                          | false    | none         | none        |
| »»» building            | string                          | false    | none         | none        |
| »»» room                | string                          | false    | none         | none        |
| »»» map_uri             | string                          | false    | none         | none        |
| » core_flags            | [string]                        | false    | none         | none        |
| » syllabus_uri          | string                          | true     | none         | none        |
| » grade_distribution    | [integer]                       | false    | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## get\__section_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /section/{id} \
  -H 'Accept: application/json'

```

```http
GET /section/{id} HTTP/1.1

Accept: application/json

```

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/section/{id}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/section/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/section/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/section/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/section/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/section/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /section/{id}`

Returns the section with given ID

<h3 id="get__section_{id}-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description              |
| ---- | ---- | ------ | -------- | ------------------------ |
| id   | path | string | true     | ID of the section to get |

> Example responses

> 200 Response

```json
{
  "_id": "string",
  "section_number": "string",
  "course_reference": "string",
  "section_corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "academic_session": {
    "name": "string",
    "start_date": "string",
    "end_date": "string"
  },
  "professors": ["string"],
  "teaching_assistants": [
    {
      "first_name": "string",
      "last_name": "string",
      "role": "string",
      "email": "string"
    }
  ],
  "internal_class_number": "string",
  "instruction_mode": "string",
  "meetings": [
    {
      "start_date": "string",
      "end_date": "string",
      "meeting_days": ["string"],
      "start_time": "string",
      "end_time": "string",
      "modality": "string",
      "location": {
        "building": "string",
        "room": "string",
        "map_uri": "string"
      }
    }
  ],
  "core_flags": ["string"],
  "syllabus_uri": "string",
  "grade_distribution": [0]
}
```

<h3 id="get__section_{id}-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema                    |
| ------ | ------------------------------------------------------- | ----------- | ------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | A section   | [Section](#schemasection) |

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

## ALEKSExam

<a id="schemaaleksexam"></a>
<a id="schema_ALEKSExam"></a>
<a id="tocSaleksexam"></a>
<a id="tocsaleksexam"></a>

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

| Name      | Type                        | Required | Restrictions | Description |
| --------- | --------------------------- | -------- | ------------ | ----------- |
| placement | [[Outcome](#schemaoutcome)] | true     | none         | none        |

allOf - discriminator: Exam.type

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Exam](#schemaexam) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## APExam

<a id="schemaapexam"></a>
<a id="schema_APExam"></a>
<a id="tocSapexam"></a>
<a id="tocsapexam"></a>

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

| Name   | Type                        | Required | Restrictions | Description |
| ------ | --------------------------- | -------- | ------------ | ----------- |
| name   | string                      | true     | none         | none        |
| yields | [[Outcome](#schemaoutcome)] | true     | none         | none        |

allOf - discriminator: Exam.type

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Exam](#schemaexam) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## AcademicSession

<a id="schemaacademicsession"></a>
<a id="schema_AcademicSession"></a>
<a id="tocSacademicsession"></a>
<a id="tocsacademicsession"></a>

```json
{
  "name": "string",
  "start_date": "string",
  "end_date": "string"
}
```

### Properties

| Name       | Type   | Required | Restrictions | Description |
| ---------- | ------ | -------- | ------------ | ----------- |
| name       | string | false    | none         | none        |
| start_date | string | false    | none         | none        |
| end_date   | string | false    | none         | none        |

## Assistant

<a id="schemaassistant"></a>
<a id="schema_Assistant"></a>
<a id="tocSassistant"></a>
<a id="tocsassistant"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "role": "string",
  "email": "string"
}
```

### Properties

| Name       | Type   | Required | Restrictions | Description |
| ---------- | ------ | -------- | ------------ | ----------- |
| first_name | string | false    | none         | none        |
| last_name  | string | false    | none         | none        |
| role       | string | false    | none         | none        |
| email      | string | false    | none         | none        |

## CLEPExam

<a id="schemaclepexam"></a>
<a id="schema_CLEPExam"></a>
<a id="tocSclepexam"></a>
<a id="tocsclepexam"></a>

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

| Name   | Type                        | Required | Restrictions | Description |
| ------ | --------------------------- | -------- | ------------ | ----------- |
| name   | string                      | true     | none         | none        |
| yields | [[Outcome](#schemaoutcome)] | true     | none         | none        |

allOf - discriminator: Exam.type

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Exam](#schemaexam) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## CSPlacementExam

<a id="schemacsplacementexam"></a>
<a id="schema_CSPlacementExam"></a>
<a id="tocScsplacementexam"></a>
<a id="tocscsplacementexam"></a>

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

| Name   | Type                        | Required | Restrictions | Description |
| ------ | --------------------------- | -------- | ------------ | ----------- |
| yields | [[Outcome](#schemaoutcome)] | true     | none         | none        |

allOf - discriminator: Exam.type

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Exam](#schemaexam) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## ChoiceRequirement

<a id="schemachoicerequirement"></a>
<a id="schema_ChoiceRequirement"></a>
<a id="tocSchoicerequirement"></a>
<a id="tocschoicerequirement"></a>

```json
{
  "choices": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "type": null
}
```

### Properties

| Name    | Type                                                  | Required | Restrictions | Description |
| ------- | ----------------------------------------------------- | -------- | ------------ | ----------- |
| choices | [CollectionRequirement](#schemacollectionrequirement) | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## CollectionRequirement

<a id="schemacollectionrequirement"></a>
<a id="schema_CollectionRequirement"></a>
<a id="tocScollectionrequirement"></a>
<a id="tocscollectionrequirement"></a>

```json
{
  "name": "string",
  "required": 0,
  "options": [
    {
      "type": null
    }
  ],
  "type": null
}
```

### Properties

| Name     | Type                                | Required | Restrictions | Description |
| -------- | ----------------------------------- | -------- | ------------ | ----------- |
| name     | string                              | true     | none         | none        |
| required | integer                             | true     | none         | none        |
| options  | [[Requirement](#schemarequirement)] | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## ConsentRequirement

<a id="schemaconsentrequirement"></a>
<a id="schema_ConsentRequirement"></a>
<a id="tocSconsentrequirement"></a>
<a id="tocsconsentrequirement"></a>

```json
{
  "granter": "string",
  "type": null
}
```

### Properties

| Name    | Type   | Required | Restrictions | Description |
| ------- | ------ | -------- | ------------ | ----------- |
| granter | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## CoreRequirement

<a id="schemacorerequirement"></a>
<a id="schema_CoreRequirement"></a>
<a id="tocScorerequirement"></a>
<a id="tocscorerequirement"></a>

```json
{
  "core_flag": "string",
  "hours": 0,
  "type": null
}
```

### Properties

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| core_flag | string  | true     | none         | none        |
| hours     | integer | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## Course

<a id="schemacourse"></a>
<a id="schema_Course"></a>
<a id="tocScourse"></a>
<a id="tocscourse"></a>

```json
{
  "_id": "string",
  "course_number": "string",
  "subject_prefix": "string",
  "title": "string",
  "description": "string",
  "school": "string",
  "credit_hours": "string",
  "class_level": "string",
  "activity_type": "string",
  "grading": "string",
  "internal_course_number": "string",
  "prerequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "lecture_contact_hours": "string",
  "laboratory_contact_hours": "string",
  "offering_frequency": "string"
}
```

### Properties

| Name                     | Type                                                  | Required | Restrictions | Description |
| ------------------------ | ----------------------------------------------------- | -------- | ------------ | ----------- |
| \_id                     | string                                                | true     | none         | none        |
| course_number            | string                                                | true     | none         | none        |
| subject_prefix           | string                                                | true     | none         | none        |
| title                    | string                                                | true     | none         | none        |
| description              | string                                                | true     | none         | none        |
| school                   | string                                                | true     | none         | none        |
| credit_hours             | string                                                | true     | none         | none        |
| class_level              | string                                                | true     | none         | none        |
| activity_type            | string                                                | true     | none         | none        |
| grading                  | string                                                | true     | none         | none        |
| internal_course_number   | string                                                | true     | none         | none        |
| prerequisites            | [CollectionRequirement](#schemacollectionrequirement) | false    | none         | none        |
| corequisites             | [CollectionRequirement](#schemacollectionrequirement) | false    | none         | none        |
| lecture_contact_hours    | string                                                | true     | none         | none        |
| laboratory_contact_hours | string                                                | true     | none         | none        |
| offering_frequency       | string                                                | true     | none         | none        |

## CourseRequirement

<a id="schemacourserequirement"></a>
<a id="schema_CourseRequirement"></a>
<a id="tocScourserequirement"></a>
<a id="tocscourserequirement"></a>

```json
{
  "class_reference": "string",
  "minimum_grade": "string",
  "type": null
}
```

### Properties

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| class_reference | string | true     | none         | none        |
| minimum_grade   | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## Credit

<a id="schemacredit"></a>
<a id="schema_Credit"></a>
<a id="tocScredit"></a>
<a id="tocscredit"></a>

```json
{
  "category": "string",
  "credit_hours": null
}
```

### Properties

| Name         | Type   | Required | Restrictions | Description |
| ------------ | ------ | -------- | ------------ | ----------- |
| category     | string | true     | none         | none        |
| credit_hours | int    | true     | none         | none        |

## Exam

<a id="schemaexam"></a>
<a id="schema_Exam"></a>
<a id="tocSexam"></a>
<a id="tocsexam"></a>

```json
{
  "_id": "string",
  "type": "string"
}
```

### Properties

| Name | Type   | Required | Restrictions | Description |
| ---- | ------ | -------- | ------------ | ----------- |
| \_id | string | true     | none         | none        |
| type | string | true     | none         | none        |

## ExamRequirement

<a id="schemaexamrequirement"></a>
<a id="schema_ExamRequirement"></a>
<a id="tocSexamrequirement"></a>
<a id="tocsexamrequirement"></a>

```json
{
  "exam_reference": "string",
  "minimum_score": 0,
  "type": null
}
```

### Properties

| Name           | Type    | Required | Restrictions | Description |
| -------------- | ------- | -------- | ------------ | ----------- |
| exam_reference | string  | true     | none         | none        |
| minimum_score  | integer | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## GPARequirement

<a id="schemagparequirement"></a>
<a id="schema_GPARequirement"></a>
<a id="tocSgparequirement"></a>
<a id="tocsgparequirement"></a>

```json
{
  "subset": "string",
  "minimum": 0,
  "type": null
}
```

### Properties

| Name    | Type   | Required | Restrictions | Description |
| ------- | ------ | -------- | ------------ | ----------- |
| subset  | string | false    | none         | none        |
| minimum | number | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## HoursRequirement

<a id="schemahoursrequirement"></a>
<a id="schema_HoursRequirement"></a>
<a id="tocShoursrequirement"></a>
<a id="tocshoursrequirement"></a>

```json
{
  "required": 0,
  "options": [
    {
      "class_reference": "string",
      "minimum_grade": "string",
      "type": null
    }
  ],
  "type": null
}
```

### Properties

| Name     | Type                                            | Required | Restrictions | Description |
| -------- | ----------------------------------------------- | -------- | ------------ | ----------- |
| required | integer                                         | true     | none         | none        |
| options  | [[CourseRequirement](#schemacourserequirement)] | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## IBExam

<a id="schemaibexam"></a>
<a id="schema_IBExam"></a>
<a id="tocSibexam"></a>
<a id="tocsibexam"></a>

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

### Properties

| Name   | Type                        | Required | Restrictions | Description |
| ------ | --------------------------- | -------- | ------------ | ----------- |
| name   | string                      | true     | none         | none        |
| level  | string                      | true     | none         | none        |
| yields | [[Outcome](#schemaoutcome)] | true     | none         | none        |

allOf - discriminator: Exam.type

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Exam](#schemaexam) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## LimitRequirement

<a id="schemalimitrequirement"></a>
<a id="schema_LimitRequirement"></a>
<a id="tocSlimitrequirement"></a>
<a id="tocslimitrequirement"></a>

```json
{
  "max_hours": 0,
  "type": null
}
```

### Properties

| Name      | Type    | Required | Restrictions | Description |
| --------- | ------- | -------- | ------------ | ----------- |
| max_hours | integer | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## Location

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "building": "string",
  "room": "string",
  "map_uri": "string"
}
```

### Properties

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| building | string | false    | none         | none        |
| room     | string | false    | none         | none        |
| map_uri  | string | false    | none         | none        |

## MajorRequirement

<a id="schemamajorrequirement"></a>
<a id="schema_MajorRequirement"></a>
<a id="tocSmajorrequirement"></a>
<a id="tocsmajorrequirement"></a>

```json
{
  "major": "string",
  "type": null
}
```

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| major | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## Meeting

<a id="schemameeting"></a>
<a id="schema_Meeting"></a>
<a id="tocSmeeting"></a>
<a id="tocsmeeting"></a>

```json
{
  "start_date": "string",
  "end_date": "string",
  "meeting_days": ["string"],
  "start_time": "string",
  "end_time": "string",
  "modality": "string",
  "location": {
    "building": "string",
    "room": "string",
    "map_uri": "string"
  }
}
```

### Properties

| Name         | Type                        | Required | Restrictions | Description |
| ------------ | --------------------------- | -------- | ------------ | ----------- |
| start_date   | string                      | false    | none         | none        |
| end_date     | string                      | false    | none         | none        |
| meeting_days | [string]                    | false    | none         | none        |
| start_time   | string                      | false    | none         | none        |
| end_time     | string                      | false    | none         | none        |
| modality     | string                      | false    | none         | none        |
| location     | [Location](#schemalocation) | false    | none         | none        |

## MinorRequirement

<a id="schemaminorrequirement"></a>
<a id="schema_MinorRequirement"></a>
<a id="tocSminorrequirement"></a>
<a id="tocsminorrequirement"></a>

```json
{
  "minor": "string",
  "type": null
}
```

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| minor | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## OtherRequirement

<a id="schemaotherrequirement"></a>
<a id="schema_OtherRequirement"></a>
<a id="tocSotherrequirement"></a>
<a id="tocsotherrequirement"></a>

```json
{
  "description": "string",
  "condition": "string",
  "type": null
}
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| description | string | true     | none         | none        |
| condition   | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |

## Outcome

<a id="schemaoutcome"></a>
<a id="schema_Outcome"></a>
<a id="tocSoutcome"></a>
<a id="tocsoutcome"></a>

```json
{
  "requirement": {
    "type": null
  },
  "outcome": [["string"]]
}
```

### Properties

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| requirement | [Requirement](#schemarequirement) | true     | none         | none        |
| outcome     | [array]                           | true     | none         | none        |

oneOf

| Name          | Type   | Required | Restrictions | Description |
| ------------- | ------ | -------- | ------------ | ----------- |
| » _anonymous_ | string | false    | none         | none        |

xor

| Name          | Type                    | Required | Restrictions | Description |
| ------------- | ----------------------- | -------- | ------------ | ----------- |
| » _anonymous_ | [Credit](#schemacredit) | false    | none         | none        |

## Professor

<a id="schemaprofessor"></a>
<a id="schema_Professor"></a>
<a id="tocSprofessor"></a>
<a id="tocsprofessor"></a>

```json
{
  "_id": "string",
  "first_name": "string",
  "last_name": "string",
  "titles": ["string"],
  "email": "string",
  "phone_number": "string",
  "office": {
    "building": "string",
    "room": "string",
    "map_uri": "string"
  },
  "profile_uri": "string",
  "image_uri": "string",
  "office_hours": [
    {
      "start_date": "string",
      "end_date": "string",
      "meeting_days": ["string"],
      "start_time": "string",
      "end_time": "string",
      "modality": "string",
      "location": {
        "building": "string",
        "room": "string",
        "map_uri": "string"
      }
    }
  ],
  "sections": ["string"]
}
```

### Properties

| Name         | Type                        | Required | Restrictions | Description |
| ------------ | --------------------------- | -------- | ------------ | ----------- |
| \_id         | string                      | true     | none         | none        |
| first_name   | string                      | true     | none         | none        |
| last_name    | string                      | true     | none         | none        |
| titles       | [string]                    | false    | none         | none        |
| email        | string                      | true     | none         | none        |
| phone_number | string                      | false    | none         | none        |
| office       | [Location](#schemalocation) | false    | none         | none        |
| profile_uri  | string                      | false    | none         | none        |
| image_uri    | string                      | false    | none         | none        |
| office_hours | [[Meeting](#schemameeting)] | false    | none         | none        |
| sections     | [string]                    | false    | none         | none        |

## Requirement

<a id="schemarequirement"></a>
<a id="schema_Requirement"></a>
<a id="tocSrequirement"></a>
<a id="tocsrequirement"></a>

```json
{
  "type": null
}
```

### Properties

| Name | Type | Required | Restrictions | Description |
| ---- | ---- | -------- | ------------ | ----------- |
| type | any  | true     | none         | none        |

## Section

<a id="schemasection"></a>
<a id="schema_Section"></a>
<a id="tocSsection"></a>
<a id="tocssection"></a>

```json
{
  "_id": "string",
  "section_number": "string",
  "course_reference": "string",
  "section_corequisites": {
    "name": "string",
    "required": 0,
    "options": [
      {
        "type": null
      }
    ],
    "type": null
  },
  "academic_session": {
    "name": "string",
    "start_date": "string",
    "end_date": "string"
  },
  "professors": ["string"],
  "teaching_assistants": [
    {
      "first_name": "string",
      "last_name": "string",
      "role": "string",
      "email": "string"
    }
  ],
  "internal_class_number": "string",
  "instruction_mode": "string",
  "meetings": [
    {
      "start_date": "string",
      "end_date": "string",
      "meeting_days": ["string"],
      "start_time": "string",
      "end_time": "string",
      "modality": "string",
      "location": {
        "building": "string",
        "room": "string",
        "map_uri": "string"
      }
    }
  ],
  "core_flags": ["string"],
  "syllabus_uri": "string",
  "grade_distribution": [0]
}
```

### Properties

| Name                  | Type                                                  | Required | Restrictions | Description |
| --------------------- | ----------------------------------------------------- | -------- | ------------ | ----------- |
| \_id                  | string                                                | true     | none         | none        |
| section_number        | string                                                | true     | none         | none        |
| course_reference      | string                                                | true     | none         | none        |
| section_corequisites  | [CollectionRequirement](#schemacollectionrequirement) | false    | none         | none        |
| academic_session      | [AcademicSession](#schemaacademicsession)             | true     | none         | none        |
| professors            | [string]                                              | true     | none         | none        |
| teaching_assistants   | [[Assistant](#schemaassistant)]                       | false    | none         | none        |
| internal_class_number | string                                                | true     | none         | none        |
| instruction_mode      | string                                                | true     | none         | none        |
| meetings              | [[Meeting](#schemameeting)]                           | true     | none         | none        |
| core_flags            | [string]                                              | false    | none         | none        |
| syllabus_uri          | string                                                | true     | none         | none        |
| grade_distribution    | [integer]                                             | false    | none         | none        |

## SectionRequirement

<a id="schemasectionrequirement"></a>
<a id="schema_SectionRequirement"></a>
<a id="tocSsectionrequirement"></a>
<a id="tocssectionrequirement"></a>

```json
{
  "section_reference": "string",
  "type": null
}
```

### Properties

| Name              | Type   | Required | Restrictions | Description |
| ----------------- | ------ | -------- | ------------ | ----------- |
| section_reference | string | true     | none         | none        |

allOf - discriminator: Requirement.type

| Name        | Type                              | Required | Restrictions | Description |
| ----------- | --------------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [Requirement](#schemarequirement) | false    | none         | none        |

and

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| _anonymous_ | object | false    | none         | none        |
