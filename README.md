
<h1 align="center"> Restponses </h1>
<p align="center"> 
Restponses is a library that allows you to easily generate clear and concise responses for your APIs. If your project is small, you don't have so clear your business rules, or you just don't want to worry about status codes, default messages and the nomenclature of the fields of your endpoints responses, then Restponses is for you :).
</p>

## Get Started
---
First you need to install the dependency.

`npm install restponses`

Restponses has been developed totally with typescript, so you don't have to worry about installing any @types dependencies.

Then you will need to import the base methods to generate your response, you have five options for five status codes types:

```javascript
import { 
  Response1xxInformative,
  Response2xxSuccessful, 
  Response3xxRedirection, 
  Response4xxClientError, 
  Response5xxServerError 
  } from "restponses"
```

The most simpliest way to use these methods is entering the only mandatory parameter, this is the status code for your response. In this way, they will return the minimum default values for each status code, for example, look at this request made with express:

```javascript
  app.get("/potatoes/:id", (req, res) => {
    const {id} = req.params
    if(!id){
      //Example 1 (400BadRequest)
      return res.json(Response4xxClientError(400))
    }
    try {
      const potato = dbGetPotato(id)
      if(!potato){
        // Example 2 (404NotFound)
        return res.json(Response4xxClientError(404))
      }else{
        // Example 3 (200Ok)
        return res.json(Response2xxSuccessful(200))
      }
    } catch (error) {
      // Example 4 (500InternalServerError)
      return res.json(Responses5xxServerError(500))
    }
  })

  ```

The outputs would be these:

  ```javascript

  // Example 1
  {
    httpStatus: 400,
    serverMessage: 'Bad Request',
    error: true,
    success: false
  }

  // Example 2
  {
    httpStatus: 404,
    serverMessage: 'Not Found',
    error: true,
    success: false
  }

  // Example 3
  {
    httpStatus: 200,
    serverMessage: 'OK',
    detail: 'The request has been successfully processed',
    success: true,
    error: false
  }

  // Example 4
  {
    httpStatus: 500,
    serverMessage: 'Internal Server Error',
    error: true,
    success: false
  }

```

### Input parameter

You can also overwrite the fields *serverMessage* and *detail* with custom information using the second parameter: **input**. You can even add information about the consulted resource, data obtained or details of errors in the same way:

```javascript
Response1xxInformative(100, { consultedResource: "/getPotato", serverMessage: "/getPotato consulted", detail: "please continue"})

  //Output
  {
    httpStatus: 100,
    serverMessage: '/getPotato consulted',
    detail: 'please continue',
    consultedResource: '/getPotato'
  }


Response2xxSuccessful(200, { consultedResource: "/getPotato", data: dbResponse, serverMessage: "Potato was found", detail: "now you can eat potato" })

  // Output
  {
    httpStatus: 200,
    serverMessage: 'Potato was found',
    data: {
      id: 45322,
      name: "Yellow potato",
      country: "Peru"
    }
    detail: 'now you can eat potato',
    consultedResource: '/getPotato',
    success: true,
    error: false
  }

  Response3xxRedirection(300, { consultedResource: "/getPotato", detail: "Potato was found, but you can't eat it now", serverMessage: "Potato was found, now choose one" })

  // Output
  {
    httpStatus: 300,
    serverMessage: 'Potato was found, now choose one',
    detail: "Potato was found, but you can't eat it now",
    consultedResource: '/getPotato'
  }

  Response4xxClientError(404, { consultedResource: "/getPotato", detail: "Potato was not found", serverMessage: "Potato was not found", errorCode: "404NOTFOUND", errorName: "PotatoNotFound", errorDescription: "Your resource was not found" })
  
  // Output
  {
    httpStatus: 404,
    serverMessage: 'Potato was not found',
    consultedResource: '/getPotato',
    errors: undefined,
    errorCode: '404NOTFOUND',
    errorName: 'PotatoNotFound',
    errorDescription:'Your resource was not found',
    error: true,
    success: false
  }

  Response5xxServerError(500, { consultedResource: "/getPotato", serverMessage: "Potato was not found due to a server error", errorCode: "500SERVERERROR", errorName: "INTERNAL_SERVER_ERROR" })

  // Output
  {
    httpStatus: 500,
    serverMessage: 'Potato was not found due to a server error',
    consultedResource: '/getPotato',
    errorCode: '500SERVERERROR',
    errorName: 'INTERNAL_SERVER_ERROR',
    error: true,
    success: false
  }

```

### StatusOptions parameter

The third and last parameter, statusOptions params allows you introduce specific field/s related to the status code of your response. For example, if you want to add the url where is your created resource (201), or the not found URL or resource (404), you can simply use the corresponding StatusOption method. You just have to import the class and access the desired method:

```javascript
import { StatusOptions } from "restponses/dist/utils/status_options"

Response2xxSuccessful(201, { consultedResource: "/createPotato", serverMessage: "Potato created" }, StatusOptions.Status201Opt("https://potato.api/34"))

//Output
  {
    httpStatus: 201,
    serverMessage: 'Potato created',
    detail: 'Resource successfully created',
    consultedResource: '/createPotato',
    success: true,
    error: false,
    location: 'https://potato.api/34'
  }
```

## Base methods
---
As you read above, Restponses gives you five base methods to generate responses according to the status code to return:

| Method | Description |
|-|-|
| Response1xxInformative | Generates informative responses with status codes 100 |
| Response2xxSuccessful | Generates successful responses with status codes 200 |
| Response3xxRedirection | Generates redirection responses with status codes 300 |
| Response4xxClientError | Generates client side error responses with status codes 400 |
| Response5xxServerError | Generates server side error responses with status codes 500 |

### Response1xxInformative()

#### Params:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>statusCode</td>
      <td>number</td>
      <td>
        <ul>
          <li>Mandatory</li>
        </ul>
      </td>
      <td>Status code of your response. * Supported: 100, 101, 102, 103</td>
    </tr>
    <tr>
      <td>input</td>
      <td>BaseInput</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Base input object</td>
    </tr>
    <tr>
      <td>input.consultedResource</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
        </ul>
      </td>
      <td>Url or name of the resource that was consulted</td>
    </tr>
    <tr>
      <td>input.detail</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
          <li>Default (only 100)</li>
        </ul>
      </td>
      <td>Detail of the response</td>
    </tr>
    <tr>
      <td>input.serverMessage</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
          <li>Default</li>
        </ul>
      </td>
      <td>serverMessage that the server will send to the client</td>
    </tr>
  </tbody>
</table>


#### Example:
```javascript
Response1xxInformative(statusCode: 100, input: { consultedResource: "potato/getPotato" })

// Output
{
  httpStatus: 100,
  serverMessage: 'Continue',
  detail: 'Continue with the request',
  consultedResource: 'potato/getPotato'
}
```

#### Default responses:

```javascript
// Status100Continue
{
  httpStatus: 100,
  serverMessage: "Continue",
  detail:
    "Continue with the request",
}

// Status101SwitchingProtocols
{
  httpStatus: 101,
  serverMessage: "Switching Protocols",
}

// Status102Processing
{
  httpStatus: 102,
  serverMessage: "Processing",
}

// Status103EarlyHints
{
  httpStatus: 103,
  serverMessage: "Checkpoint",
}
```

### Response2xxSuccessful()

#### Params:
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>statusCode</td>
      <td>number</td>
      <td>
        <ul>
          <li>Mandatory</li>
        </ul>
      </td>
      <td>Status code of your response. *Supported: 200, 201, 202, 203, 204, 205, 206, 207, 208, 226</td>
    </tr>
    <tr>
      <td>input</td>
      <td>BaseSuccessfulInput</td>
      <td>
        <ul>
          <li>Optional</li>
        </ul>
      </td>
      <td>Base successful input object</td>
    </tr>
    <tr>
      <td>input.consultedResource</td>
      <td>string</td>
      <td>
        <ul>
          <li>Optional</li>
        </ul>
      </td>
      <td>URl or name of the consulted resource</td>
    </tr>
    <tr>
      <td>input.data</td>
      <td>any</td>
      <td>
        <ul>
          <li>Optional</li>
        </ul>
      </td>
      <td>Data that the server will send to the client</td>
    </tr>
    <tr>
      <td>input.detail</td>
      <td>string</td>
      <td>
        <ul>
          <li>Optional</li>
          <li>Default</li>
        </ul>
      </td>
      <td>Detail of the response</td>
    </tr>
    <tr>
      <td>input.serverMessage</td>
      <td>string</td>
      <td>
        <ul>
          <li>Optional</li>
          <li>Default</li>
        </ul>
      </td>
      <td>Message that the server will send to the client</td>
    </tr>
    <tr>
      <td>statusOptions</td>
      <td>Response2xxOpt</td>
      <td>
        <ul>
          <li>Optional
          </li>
        </ul>
      </td>
      <td>Methods that you could use to add specific fields in your response related to the status code</td>
    </tr>
  </tbody>
</table>

#### Example:

> Output includes *success* and *error* fields by default.

```javascript
Response2xxSuccessful(200, { consultedResource: "/getPotato" })

// Output
{
  httpStatus: 200,
  serverMessage: 'OK',
  detail: 'The request has been successfully processed',
  consultedResource: '/getPotato',
  success: true,
  error: false
}
```

#### Default responses:

```javascript

  // Status200OK
  {
    httpStatus: 200,
    serverMessage: "OK",
    detail: "The request has been successfully processed"
  }

  // Status201Created
  {
    httpStatus: 201,
    serverMessage: "Created",
    detail: "Resource successfully created"
  }

  // Status202Accepted
  {
    httpStatus: 202,
    serverMessage: "Accepted",
    detail: "The request has been accepted for processing"
  }

  // Status203NonAuthoritativeInformation
  {
    httpStatus: 203,
    serverMessage: "Non-Authoritative Information",
    detail: "Non-Authoritative Information returned"
  }

  // Status204NoContent
  {
    httpStatus: 204
  }

  // Status205ResetContent
  {
    httpStatus: 205,
    serverMessage: "Reset Content",
    detail: "The request has been successfully processed, but no content is returned"
  }

  // Status206PartialContent
  {
    httpStatus: 206,
    serverMessage: "Partial Content",
    detail: "Partial Content returned"
  }

  // Status207MultiStatus
  {
    httpStatus: 207,
    serverMessage: "Multi-Status",
    detail: "Multi-Status returned"
  }

  // Status208AlreadyReported
  {
    httpStatus: 208,
    serverMessage: "Already Reported",
    detail: "Resource already reported"
  }

  // Status226IMUsed
  {
    httpStatus: 226,
    serverMessage: "IM Used",
    detail: "IM Used"
  }
```

#### Status options:

<table>
 <thead>
  <tr>
    <th>Method</th>
    <th>Params</th>
    <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
    <td>Status201Opt</td>
    <td>
      <ul>
        <li>location: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status202Opt</td>
    <td>
      <ul>
        <li>requestId: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status203Opt</td>
    <td>
      <ul>
        <li>source: ISource203</li>
        <li>source.name: string </li>
        <li>source.description: string (optional) </li>
        <li>source.url: string (optional) </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status207Opt</td>
    <td>
      <ul>
        <li>states: IBasicState207[]</li>
        <li>httpStatus: number</li>
        <li>serverMessage: string</li>
        <li>detail: string (optional)</li>
      </ul>
    </td>
    <td></td>
  </tr>
 </tbody>
</table>

### Response3xxRedirection()

#### Params:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>statusCode</td>
      <td>number</td>
      <td>
      <ul>
          <li>Mandatory</li>
      </ul>
      </td>
      <td>Status code of your response. *Supported: 300, 301, 302, 303, 304, 305, 307, 308</td>
    </tr> 
    <tr>
      <td>input</td>
      <td>BaseInput</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Base input object</td>
    </tr> 
    <tr>
      <td>input.consultedResource</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>URL or name of the resource that was consulted</td>
    </tr> 
    <tr>
      <td>input.detail</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Detail of the response</td>
    </tr> 
    <tr>
      <td>input.serverMessage</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
          <li>Default</li>
      </ul>
      </td>
      <td>Message that the server will send to the client</td>
    </tr> 
    <tr>
      <td>statusOptions</td>
      <td>Response3xxOpt</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Methods that you could use to add specific fields in your response related to the status code</td>
    </tr> 
  </tbody>
</table>
  
#### Example:

```javascript
Response3xxRedirection(301, { consultedResource: "/getPotato", detail: "You can found the resource consulting at: '/getPot' endpoint" })

// Output
{
  httpStatus: 301,
  serverMessage: 'Moved Permanently',
  detail: "You can found the resource consulting at: '/getPot' endpoint",
  consultedResource: '/getPotato'
}
```

#### Default responses:
```javascript

  // Status300MultipleChoices
  {
    httpStatus: 300,
    serverMessage: "Multiple Choices",
  }

  // Status301MovedPermanently
  {
    httpStatus: 301,
    serverMessage: "Moved Permanently",
  }

  // Status302Found
  {
    httpStatus: 302,
    serverMessage: "Found",
  }

  // Status303SeeOther
  {
    httpStatus: 303,
    serverMessage: "See Other",
  }

  // Status304NotModified
  {
    httpStatus: 304,
    serverMessage: "Not Modified",
  }

  // Status305UseProxy
  {
    httpStatus: 305,
    serverMessage: "Use Proxy",
  }

  // Status307TemporaryRedirect
  {
    httpStatus: 307,
    serverMessage: "Temporary Redirect",
  }

  // Status308PermanentRedirect
  {
    httpStatus: 308,
    serverMessage: "Permanent Redirect",
  }
```

#### Status options:

<table>
 <thead>
  <tr>
    <th>Method</th>
    <th>Params</th>
    <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
    <td>Status300Opt</td>
    <td>
      <ul>
        <li>options: Array</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status301Opt</td>
    <td>
      <ul>
        <li>sources: ISources301</li>
        <li>sources.oldSource: string</li>
        <li>sources.newSource: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status302Opt</td>
    <td>
      <ul>
        <li>redirectUrl: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status303Opt</td>
    <td>
      <ul>
        <li>redirectUrl: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status305Opt</td>
    <td>
      <ul>
        <li>proxyUrl: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status307Opt</td>
    <td>
      <ul>
        <li>redirectUrl: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status308Opt</td>
    <td>
      <ul>
        <li>redirectUrl: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
 </tbody>
</table>

### Response4xxClientError()

#### Params:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>statusCode</td>
      <td>number</td>
      <td>
      <ul>
          <li>Mandatory</li>
      </ul>
      </td>
      <td>Status code of your response. *Supported: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451</td>
    </tr> 
    <tr>
      <td>input</td>
      <td>BaseErrorInput</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Base error input object</td>
    </tr> 
    <tr>
      <td>input.consultedResource</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>URL or name of the resource that was consulted</td>
    </tr> 
    <tr>
      <td>input.detail</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Detail of the response</td>
    </tr> 
    <tr>
      <td>input.serverMessage</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
          <li>Default</li>
      </ul>
      </td>
      <td>Message that the server will send to the client</td>
    </tr> 
    <tr>
      <td>input.errorCode</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error identifier code</td>
    </tr> 
    <tr>
      <td>input.errorDescription</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error description</td>
    </tr> 
    <tr>
      <td>input.errorName</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error name</td>
    </tr> 
    <tr>
      <td>input.errors</td>
      <td>any</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Arbitrary errors you can add to your response</td>
    </tr> 
    <tr>
      <td>statusOptions</td>
      <td>Response4xxOpt</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Methods that you could use to add specific fields in your response related to the status code</td>
    </tr> 
  </tbody>
</table>

#### Example:

> Output includes *success* and *error* fields by default.

```javascript
Response4xxClientError(404, { consultedResource: "/getPotato", errorCode: "NOT_FOUND_404", detail: "Potato was not found" }, StatusOptions.Status404Opt("Potato n4355"))

// Output
{
  httpStatus: 404,
  serverMessage: 'Not Found',
  consultedResource: '/getPotato',
  errorCode: "NOT_FOUND_404",
  errorDetails: { notFoundResource: 'Potato n4355' },
  error: true,
  success: false
}
```

#### Default responses:

```javascript

  // Status400BadRequest
  {
    httpStatus: 400,
    serverMessage: "Bad Request",
  }

  // Status401Unauthorized
  {
    httpStatus: 401,
    serverMessage: "Unauthorized",
  }

  // Status402PaymentRequired
  {
    httpStatus: 402,
    serverMessage: "Payment Required",
  }

  // Status403Forbidden
  {
    httpStatus: 403,
    serverMessage: "Forbidden",
  }

  // Status404NotFound
  {
    httpStatus: 404,
    serverMessage: "Not Found",
  }

  // Status405MethodNotAllowed
  {
    httpStatus: 405,
    serverMessage: "Method Not Allowed",
  }

  // Status406NotAcceptable
  {
    httpStatus: 406,
    serverMessage: "Not Acceptable",
  }

  // Status407ProxyAuthenticationRequired
  {
    httpStatus: 407,
    serverMessage: "Proxy Authentication Required",
  }

  // Status408RequestTimeout
  {
    httpStatus: 408,
    serverMessage: "Request Timeout",
  }

  // Status409Conflict
  {
    httpStatus: 409,
    serverMessage: "Conflict",
  }

  // Status410Gone
  {
    httpStatus: 410,
    serverMessage: "Gone",
  }

  // Status411LengthRequired
  {
    httpStatus: 411,
    serverMessage: "Length Required",
  }

  // Status412PreconditionFailed
  {
    httpStatus: 412,
    serverMessage: "Precondition Failed",
  }

  // Status413PayloadTooLarge
  {
    httpStatus: 413,
    serverMessage: "Payload Too Large",
  }

  // Status414URITooLong
  {
    httpStatus: 414,
    serverMessage: "URI Too Long",
  }
  
  // Status415UnsupportedMediaType
  {
    httpStatus: 415,
    serverMessage: "Unsupported Media Type",
  }

  // Status416RangeNotSatisfiable
  {
    httpStatus: 416,
    serverMessage: "Range Not Satisfiable",
  }

  // Status417ExpectationFailed
  {
    httpStatus: 417,
    serverMessage: "Expectation Failed",
  }

  // Status418ImATeapot
  {
    httpStatus: 418,
    serverMessage: "I'm a teapot",
  }

  // Status421MisdirectedRequest
  {
    httpStatus: 421,
    serverMessage: "Misdirected Request",
  }

  // Status422UnprocessableEntity
  {
    httpStatus: 422,
    serverMessage: "Unprocessable Entity",
  }

  // Status423Locked
  {
    httpStatus: 423,
    serverMessage: "Locked",
  }

  // Status424FailedDependency
  {
    httpStatus: 424,
    serverMessage: "Failed Dependency",
  }

  // Status425Unnassigned
  {
    httpStatus: 425,
    serverMessage: "Unassigned",
  }

  // Status426UpgradeRequired
  {
    httpStatus: 426,
    serverMessage: "Upgrade Required",
  }

  // Status428PreconditionRequired
  {
    httpStatus: 428,
    serverMessage: "Precondition Required",
  }

  // Status429TooManyRequests
  {
    httpStatus: 429,
    serverMessage: "Too Many Requests",
    // Details: "Too Many Requests"
  }

  // Status431RequestHeaderFieldsTooLarge
  {
    httpStatus: 431,
    serverMessage: "Request Header Fields Too Large",
  }

  // Status451UnavailableForLegalReasons
  {
    httpStatus: 451,
    serverMessage: "Unavailable For Legal Reasons",
  }
```

#### Status options:

<table>
 <thead>
  <tr>
    <th>Method</th>
    <th>Params</th>
    <th>Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
    <td>Status404Opt</td>
    <td>
      <ul>
        <li>notFoundResource: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status405Opt</td>
    <td>
      <ul>
        <li>allowedMethods: string[] </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status406Opt</td>
    <td>
      <ul>
        <li>allowedRepresentations: string[] </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status407Opt</td>
    <td>
      <ul>
        <li>authenticationType: string</li>
        <li>realm: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status408Opt</td>
    <td>
      <ul>
        <li>timeWaiting: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status409Opt</td>
    <td>
      <ul>
        <li>conflictResource: string</li>
        <li>conflictId: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status410Opt</td>
    <td>
      <ul>
        <li>goneResource: string</li>
        <li>reason: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status411Opt</td>
    <td>
      -
    </td>
    <td>Adds the field 'requiredHeader': 'Content-Length'</td>
  </tr>
  <tr>
    <td>Status413Opt</td>
    <td>
      <ul>
        <li>maxAllowedSize: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status414Opt</td>
    <td>
      <ul>
        <li>maxAllowedLength: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status415Opt</td>
    <td>
      <ul>
        <li>supportedMediaTypes: string[] </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status416Opt</td>
    <td>
      <ul>
        <li>requestedContentRange: string</li>
        <li>supportedContentRange: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status423Opt</td>
    <td>
      <ul>
        <li>lockedResource: string </li>
      </ul>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Status424Opt</td>
    <td>
      <ul>
        <li>failedDependency: string</li>
      </ul>
    </td>
    <td></td>
  </tr>
 </tbody>
</table>

### Response5xxServerError()

#### Params:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>statusCode</td>
      <td>number</td>
      <td>
      <ul>
          <li>Mandatory</li>
      </ul>
      </td>
      <td>Status code of your response. *Supported: 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 521</td>
    </tr> 
    <tr>
      <td>input</td>
      <td>BaseErrorInput</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Base error input object</td>
    </tr> 
    <tr>
      <td>input.consultedResource</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>URL or name of the consulted resource</td>
    </tr> 
    <tr>
      <td>input.detail</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Detail of the response</td>
    </tr> 
    <tr>
      <td>input.serverMessage</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
          <li>Default</li>
      </ul>
      </td>
      <td>Message that the server will send to the client</td>
    </tr> 
    <tr>
      <td>input.errorCode</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error identifier code</td>
    </tr> 
    <tr>
      <td>input.errorDescription</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error description</td>
    </tr> 
    <tr>
      <td>input.errorName</td>
      <td>string</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Error name</td>
    </tr> 
    <tr>
      <td>input.errors</td>
      <td>any</td>
      <td>
      <ul>
          <li>Optional</li>
      </ul>
      </td>
      <td>Arbitrary errors you can add to your response</td>
    </tr> 
  </tbody>
</table>

#### Example:

> Output includes *success* and *error* fields by default.

```javascript
Response5xxServerError(500, { consultedResource: "/getPotato", errorCode: "500SERVERERROR", errorName: "INTERNAL_SERVER_ERROR" })

// Output
{
  httpStatus: 500,
  serverMessage: 'Internal Server Error',
  consultedResource: '/getPotato',
  errorCode: '500SERVERERROR',
  errorName: 'INTERNAL_SERVER_ERROR',
  error: true,
  success: false
}
```

#### Default responses:

```javascript
  // Status500InternalServerError
  {
    httpStatus: 500,
    serverMessage: "Internal Server Error",
  }

  // Status501NotImplemented
  {
    httpStatus: 501,
    serverMessage: "Not Implemented",
  }

  // Status502BadGateway
  {
    httpStatus: 502,
    serverMessage: "Bad Gateway",
  }

  // Status503ServiceUnavailable
  {
    httpStatus: 503,
    serverMessage: "Service Unavailable",
  }

  // Status504GatewayTimeout
  {
    httpStatus: 504,
    serverMessage: "Gateway Timeout",
  }

  // Status505HTTPVersionNotSupported
  {
    httpStatus: 505,
    serverMessage: "HTTP Version Not Supported",
  }

  // Status506VariantAlsoNegotiates
  {
    httpStatus: 506,
    serverMessage: "Variant Also Negotiates",
  }

  // Status507InsufficientStorage
  {
    httpStatus: 507,
    serverMessage: "Insufficient Storage",
  }

  // Status508LoopDetected
  {
    httpStatus: 508,
    serverMessage: "Loop Detected",
  }

  // Status509BandwithLimitExceeded
  {
    httpStatus: 509,
    serverMessage: "Bandwith Limit Exceeded",
  }

  // Status510NotExtended
  {
    httpStatus: 510,
    serverMessage: "Not Extended",
  }

  // Status511NetworkAuthenticationRequired
  {
    httpStatus: 511,
    serverMessage: "Network Authentication Required",
  }

  // Status521WebServerIsDown
  {
    httpStatus: 521,
    serverMessage: "Web Server Is Down",
  }
```