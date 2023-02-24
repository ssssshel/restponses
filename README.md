
<h1 align="center"> Restponses </h1>
<p align="center"> 
Restponses is a library that allows you to easily generate clear and concise responses for your APIs. If your project is small, you don't have so clear your business rules, or you just don't want to worry about status codes, default messages and the nomenclature of the fields of your endpoints responses, then Restponses is for you :).
</p>

## Get Started
---
First you need to install the dependency.

`npm install restponses`

Restponses has been developed totally with typescript, so you don't have to worry about installing any @types dependencies

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
      //Example 1
      return res.json(Response4xxClientError(400))
    }
    try {
      const potato = dbGetPotato(id)
      if(!potato){
        // Example 2
        return res.json(Response4xxClientError(404))
      }else{
        // Example 3
        return res.json(Response2xxSuccessful(200))
      }
    } catch (error) {
      // Example 4
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
    detail: 'Internal Server Error',
    error: true,
    success: false
  }

```


## Base methods
---
As you read above, Restponses gives you five base methods to generate responses according to the status code to return.

| Method | Description |
|-|-|
| Response1xxInformative | Generates informative responses with status codes 100 |
| Response2xxSuccessful | Generates successful responses with status codes 200 |
| Response3xxRedirection | Generates redirection responses with status codes 300 |
| Response4xxClientError | Generates client side error responses with status codes 400 |
| Response5xxServerError | Generates server side error responses with status codes 500 |

### Response1xxInformative()

**Params:**
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
      <td>Detail of the message that the server will send to the client</td>
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


**Example:**
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

**Default values:**
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
  httpStatus: StatusCode.Status101,
  serverMessage: "Switching Protocols",
}

// Status102Processing
{
  httpStatus: StatusCode.Status102,
  serverMessage: "Processing",
}

// Status103EarlyHints
{
  httpStatus: StatusCode.Status103,
  serverMessage: "Checkpoint",
}
```