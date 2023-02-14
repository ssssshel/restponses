export interface HttpStatus {
  Code: StatusCode;
  Message: string;
  Details?: string;
}



enum StatusCode {
  Status100 = 100,
  Status101 = 101,
  Status102 = 102,
  Status103 = 103,

  Status200 = 200,
  Status201 = 201,
  Status202 = 202,
  Status203 = 203,
  Status204 = 204,
  Status205 = 205,
  Status206 = 206,
  Status207 = 207,
  Status208 = 208,
  Status226 = 226,

  Status300 = 300,
  Status301 = 301,
  Status302 = 302,
  Status303 = 303,
  Status304 = 304,
  Status305 = 305,
  Status307 = 307,
  Status308 = 309,

  Status400 = 400,
  Status401 = 401,
  Status402 = 402,
  Status403 = 403,
  Status404 = 404,
  Status405 = 405,
  Status406 = 406,
  Status407 = 407,
  Status408 = 408,
  Status409 = 409,
  Status410 = 410,
  Status411 = 411,
  Status412 = 412,
  Status413 = 413,
  Status414 = 414,
  Status415 = 415,
  Status416 = 416,
  Status417 = 417,
  Status418 = 418,
  Status421 = 421,
  Status422 = 422,
  Status423 = 423,
  Status424 = 424,
  Status425 = 425,
  Status426 = 426,
  Status428 = 428,
  Status429 = 429,
  Status431 = 431,
  Status451 = 451,

  Status500 = 500,
  Status501 = 501,
  Status502 = 502,
  Status503 = 503,
  Status504 = 504,
  Status505 = 505,
  Status506 = 506,
  Status507 = 507,
  Status508 = 508,
  Status509 = 509,
  Status510 = 510,
  Status511 = 511,
  Status521 = 521,
}

interface IDefaultStateContent {
  [key: string]: HttpStatus;
}

export const defaultStatesContent: IDefaultStateContent = {
  "Status100Continue": {
    Code: StatusCode.Status100,
    Message: "Continue",
    Details:
      "Continue with the request",
  },
  "Status101SwitchingProtocols": {
    Code: StatusCode.Status101,
    Message: "Switching Protocols",
    Details: ""
  },
  "Status102Processing": {
    Code: StatusCode.Status102,
    Message: "Processing",
    Details: ""
  },
  "Status103EarlyHints": {
    Code: StatusCode.Status103,
    Message: "Checkpoint",
    Details: ""
  },

  "Status200OK": {
    Code: StatusCode.Status200,
    Message: "OK",
    Details: "The request has been successfully processed"
  },
  "Status201Created": {
    Code: StatusCode.Status201,
    Message: "Created",
    Details: "Resource successfully created"
  },
  "Status202Accepted": {
    Code: StatusCode.Status202,
    Message: "Accepted",
    Details: "The request has been accepted for processing"
  },
  "Status203NonAuthoritativeInformation": {
    Code: StatusCode.Status203,
    Message: "Non-Authoritative Information",
    Details: "Non-Authoritative Information returned"
  },
  // "Status204NoContent": {
  //   Code: StatusCode.Status204,
  //   Message: "No Content",
  //   Details: "The request has been successfully processed, but no content is returned"
  // },
  "Status205ResetContent": {
    Code: StatusCode.Status205,
    Message: "Reset Content",
    Details: "The request has been successfully processed, but no content is returned"
  },
  "Status206PartialContent": {
    Code: StatusCode.Status206,
    Message: "Partial Content",
    Details: "Partial Content returned"
  },
  "Status207MultiStatus": {
    Code: StatusCode.Status207,
    Message: "Multi-Status",
    Details: "Multi-Status returned"
  },
  "Status208AlreadyReported": {
    Code: StatusCode.Status208,
    Message: "Already Reported",
    Details: "Resource already reported"
  },
  "Status226IMUsed": {
    Code: StatusCode.Status226,
    Message: "IM Used",
    Details: "IM Used"
  },

  "Status300MultipleChoices": {
    Code: StatusCode.Status300,
    Message: "Multiple Choices",
    Details: "Multiple Choices"
  },
  "Status301MovedPermanently": {
    Code: StatusCode.Status301,
    Message: "Moved Permanently",
    Details: "Moved Permanently"
  },
  "Status302Found": {
    Code: StatusCode.Status302,
    Message: "Found",
    Details: "Found"
  },
  "Status303SeeOther": {
    Code: StatusCode.Status303,
    Message: "See Other",
    Details: "See Other"
  },
  "Status304NotModified": {
    Code: StatusCode.Status304,
    Message: "Not Modified",
    Details: "Not Modified"
  },
  "Status305UseProxy": {
    Code: StatusCode.Status305,
    Message: "Use Proxy",
    Details: "Use Proxy"
  },
  "Status307TemporaryRedirect": {
    Code: StatusCode.Status307,
    Message: "Temporary Redirect",
    Details: "Temporary Redirect"
  },
  "Status308PermanentRedirect": {
    Code: StatusCode.Status308,
    Message: "Permanent Redirect",
    Details: "Permanent Redirect"
  },

  "Status400BadRequest": {
    Code: StatusCode.Status400,
    Message: "Bad Request",
    // Details: "Bad Request"
  },
  "Status401Unauthorized": {
    Code: StatusCode.Status401,
    Message: "Unauthorized",
    // Details: "Unauthorized"
  },
  "Status402PaymentRequired": {
    Code: StatusCode.Status402,
    Message: "Payment Required",
    // Details: "Payment Required"
  },
  "Status403Forbidden": {
    Code: StatusCode.Status403,
    Message: "Forbidden",
    // Details: "Forbidden"
  },
  "Status404NotFound": {
    Code: StatusCode.Status404,
    Message: "Not Found",
    // Details: "Not Found"
  },
  "Status405MethodNotAllowed": {
    Code: StatusCode.Status405,
    Message: "Method Not Allowed",
    // Details: "Method Not Allowed"
  },
  "Status406NotAcceptable": {
    Code: StatusCode.Status406,
    Message: "Not Acceptable",
    // Details: "Not Acceptable"
  },
  "Status407ProxyAuthenticationRequired": {
    Code: StatusCode.Status407,
    Message: "Proxy Authentication Required",
    // Details: "Proxy Authentication Required"
  },
  "Status408RequestTimeout": {
    Code: StatusCode.Status408,
    Message: "Request Timeout",
    // Details: "Request Timeout"
  },
  "Status409Conflict": {
    Code: StatusCode.Status409,
    Message: "Conflict",
    // Details: "Conflict"
  },
  "Status410Gone": {
    Code: StatusCode.Status410,
    Message: "Gone",
    // Details: "Gone"
  },
  "Status411LengthRequired": {
    Code: StatusCode.Status411,
    Message: "Length Required",
    // Details: "Length Required"
  },
  "Status412PreconditionFailed": {
    Code: StatusCode.Status412,
    Message: "Precondition Failed",
    // Details: "Precondition Failed"
  },
  "Status413PayloadTooLarge": {
    Code: StatusCode.Status413,
    Message: "Payload Too Large",
    // Details: "Payload Too Large"
  },
  "Status414URITooLong": {
    Code: StatusCode.Status414,
    Message: "URI Too Long",
    // Details: "URI Too Long"
  },
  "Status415UnsupportedMediaType": {
    Code: StatusCode.Status415,
    Message: "Unsupported Media Type",
    // Details: "Unsupported Media Type"
  },
  "Status416RangeNotSatisfiable": {
    Code: StatusCode.Status416,
    Message: "Range Not Satisfiable",
    // Details: "Range Not Satisfiable"
  },
  "Status417ExpectationFailed": {
    Code: StatusCode.Status417,
    Message: "Expectation Failed",
    // Details: "Expectation Failed"
  },
  "Status418ImATeapot": {
    Code: StatusCode.Status418,
    Message: "I'm a teapot",
    // Details: "I'm a teapot"
  },
  "Status421MisdirectedRequest": {
    Code: StatusCode.Status421,
    Message: "Misdirected Request",
    // Details: "Misdirected Request"
  },
  "Status422UnprocessableEntity": {
    Code: StatusCode.Status422,
    Message: "Unprocessable Entity",
    // Details: "Unprocessable Entity"
  },
  "Status423Locked": {
    Code: StatusCode.Status423,
    Message: "Locked",
    // Details: "Locked"
  },
  "Status424FailedDependency": {
    Code: StatusCode.Status424,
    Message: "Failed Dependency",
    // Details: "Failed Dependency"
  },
  "Status425Unnassigned": {
    Code: StatusCode.Status425,
    Message: "Unassigned",
    // Details: "Unassigned"
  },
  "Status426UpgradeRequired": {
    Code: StatusCode.Status426,
    Message: "Upgrade Required",
    // Details: "Upgrade Required"
  },
  "Status428PreconditionRequired": {
    Code: StatusCode.Status428,
    Message: "Precondition Required",
    // Details: "Precondition Required"
  },
  "Status429TooManyRequests": {
    Code: StatusCode.Status429,
    Message: "Too Many Requests",
    // Details: "Too Many Requests"
  },
  "Status431RequestHeaderFieldsTooLarge": {
    Code: StatusCode.Status431,
    Message: "Request Header Fields Too Large",
    // Details: "Request Header Fields Too Large"
  },
  "Status451UnavailableForLegalReasons": {
    Code: StatusCode.Status451,
    Message: "Unavailable For Legal Reasons",
    // Details: "Unavailable For Legal Reasons"
  },

  "Status500InternalServerError": {
    Code: StatusCode.Status500,
    Message: "Internal Server Error",
    Details: "Internal Server Error"
  },
  "Status501NotImplemented": {
    Code: StatusCode.Status501,
    Message: "Not Implemented",
    Details: "Not Implemented"
  },
  "Status502BadGateway": {
    Code: StatusCode.Status502,
    Message: "Bad Gateway",
    Details: "Bad Gateway"
  },
  "Status503ServiceUnavailable": {
    Code: StatusCode.Status503,
    Message: "Service Unavailable",
    Details: "Service Unavailable"
  },
  "Status504GatewayTimeout": {
    Code: StatusCode.Status504,
    Message: "Gateway Timeout",
    Details: "Gateway Timeout"
  },
  "Status505HTTPVersionNotSupported": {
    Code: StatusCode.Status505,
    Message: "HTTP Version Not Supported",
    Details: "HTTP Version Not Supported"
  },
  "Status506VariantAlsoNegotiates": {
    Code: StatusCode.Status506,
    Message: "Variant Also Negotiates",
    Details: "Variant Also Negotiates"
  },
  "Status507InsufficientStorage": {
    Code: StatusCode.Status507,
    Message: "Insufficient Storage",
    Details: "Insufficient Storage"
  },
  "Status508LoopDetected": {
    Code: StatusCode.Status508,
    Message: "Loop Detected",
    Details: "Loop Detected"
  },
  "Status509BandwithLimitExceeded": {
    Code: StatusCode.Status509,
    Message: "Bandwith Limit Exceeded",
    Details: "Bandwith Limit Exceeded"
  },
  "Status510NotExtended": {
    Code: StatusCode.Status510,
    Message: "Not Extended",
    Details: "Not Extended"
  },
  "Status511NetworkAuthenticationRequired": {
    Code: StatusCode.Status511,
    Message: "Network Authentication Required",
    Details: "Network Authentication Required"
  },
  "Status521WebServerIsDown": {
    Code: StatusCode.Status521,
    Message: "Web Server Is Down",
    Details: "Web Server Is Down"
  }
};
