export interface StatusCode1xx {
    "100Continue": 100;
    "101SwitchingProtocols": 101;
    "102Processing": 102;
    "103EarlyHints": 103;
}
export interface StatusCode2xx {
    "200OK": 200;
    "201Created": 201;
    "202Accepted": 202;
    "203NonAuthoritativeInformation": 203;
    "204NoContent": 204;
    "205ResetContent": 205;
    "206PartialContent": 206;
    "207MultiStatus": 207;
    "208AlreadyReported": 208;
    "226IMUsed": 226;
}
export interface StatusCode3xx {
    "300MultipleChoices": 300;
    "301MovedPermanently": 301;
    "302Found": 302;
    "303SeeOther": 303;
    "304NotModified": 304;
    "305UseProxy": 305;
    "307TemporaryRedirect": 307;
    "308PermanentRedirect": 308;
}
export interface StatusCode4xx {
    "400BadRequest": 400;
    "401Unauthorized": 401;
    "402PaymentRequired": 402;
    "403Forbidden": 403;
    "404NotFound": 404;
    "405MethodNotAllowed": 405;
    "406NotAcceptable": 406;
    "407ProxyAuthenticationRequired": 407;
    "408RequestTimeout": 408;
    "409Conflict": 409;
    "410Gone": 410;
    "411LengthRequired": 411;
    "412PreconditionFailed": 412;
    "413PayloadTooLarge": 413;
    "414URITooLong": 414;
    "415UnsupportedMediaType": 415;
    "416RangeNotSatisfiable": 416;
    "417ExpectationFailed": 417;
    "418ImATeapot": 418;
    "421MisdirectedRequest": 421;
    "422UnprocessableEntity": 422;
    "423Locked": 423;
    "424FailedDependency": 424;
    "425TooEarly": 425;
    "426UpgradeRequired": 426;
    "428PreconditionRequired": 428;
    "429TooManyRequests": 429;
    "431RequestHeaderFieldsTooLarge": 431;
    "451UnavailableForLegalReasons": 451;
}
export interface StatusCode5xx {
    "500InternalServerError": 500;
    "501NotImplemented": 501;
    "502BadGateway": 502;
    "503ServiceUnavailable": 503;
    "504GatewayTimeout": 504;
    "505HTTPVersionNotSupported": 505;
    "506VariantAlsoNegotiates": 506;
    "507InsufficientStorage": 507;
    "508LoopDetected": 508;
    "509BandwidthLimitExceeded": 509;
    "510NotExtended": 510;
    "511NetworkAuthenticationRequired": 511;
    "521ConnectionTimedOut": 521;
}
