export enum StatusCode1xx {
  Status100 = 100,
  Status101 = 101,
  Status102 = 102,
  Status103 = 103,
}

export enum StatusCode2xx {
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
}

export enum StatusCode3xx {
  Status300 = 300, // Multiple Choices
  Status301 = 301, // Moved Permanently
  Status302 = 302, // Found
  Status303 = 303, // See Other
  Status304 = 304, // Not Modified
  Status305 = 305, // Use Proxy
  Status307 = 307, // Temporary Redirect
  Status308 = 309, // Permanent Redirect
}

export enum StatusCode4xx {
  Status400 = 400, // Bad Request
  Status401 = 401, // Unauthorized
  Status402 = 402, // Payment Required
  Status403 = 403, // Forbidden
  Status404 = 404, // Not Found
  Status405 = 405, // Method Not Allowed
  Status406 = 406, // Not Acceptable
  Status407 = 407, // Proxy Authentication Required
  Status408 = 408, // Request Timeout
  Status409 = 409, // Conflict
  Status410 = 410, // Gone
  Status411 = 411, // Length Required
  Status412 = 412, // Precondition Failed
  Status413 = 413, // Payload Too Large
  Status414 = 414, // URI Too Long
  Status415 = 415, // Unsupported Media Type
  Status416 = 416, // Range Not Satisfiable
  Status417 = 417, // Expectation Failed
  Status418 = 418, // I'm a teapot
  Status421 = 421, // Misdirected Request
  Status422 = 422, // Unprocessable Entity
  Status423 = 423, // Locked
  Status424 = 424, // Failed Dependency
  Status425 = 425, // Unordered Collection
  Status426 = 426, // Upgrade Required
  Status428 = 428, // Precondition Required
  Status429 = 429, // Too Many Requests
  Status431 = 431, // Request Header Fields Too Large
  Status451 = 451, // Unavailable For Legal Reasons
}

export enum StatusCode5xx {
  // Server error
  Status500 = 500,
  // Not implemented
  Status501 = 501,
  // Bad gateway
  Status502 = 502,
  // Service unavailable
  Status503 = 503,
  // Gateway timeout
  Status504 = 504,
  // HTTP version not supported
  Status505 = 505,
  // Variant also negotiates
  Status506 = 506,
  // Insufficient storage
  Status507 = 507,
  // Loop detected
  Status508 = 508,
  // Bandwidth limit exceeded
  Status509 = 509,
  // Not extended
  Status510 = 510,
  // Network authentication required
  Status511 = 511,
  // Web server is down
  Status521 = 521,
}