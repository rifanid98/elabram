import { HttpMessage, HttpStatus } from "../core/constant/http.constant";
import {
  GlobalResponse,
  GlobalResponseWithData,
  GlobalResponseWithError,
} from "../core/constant/resp.constant";

export class Response {
  static resp: GlobalResponse;

  static created(param?: GlobalResponseWithData): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.CREATED;
    this.resp.message = param?.message ? param.message : HttpMessage.CREATED;
    param?.data ? (this.resp.data = param.data) : false;
    return this.resp;
  }

  static success(param?: GlobalResponseWithData): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.OK;
    this.resp.message = param?.message ? param.message : HttpMessage.OK;
    param?.data && (this.resp.data = param.data);
    return this.resp;
  }

  static internalservererror(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.resp.error = HttpMessage.INTERNAL_SERVER_ERROR;
    this.resp.message = HttpMessage.INTERNAL_SERVER_ERROR;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static badrequest(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.BAD_REQUEST;
    this.resp.error = HttpMessage.BAD_REQUEST;
    this.resp.message = HttpMessage.BAD_REQUEST;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static serviceunavailable(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.SERVICE_UNAVAILABLE;
    this.resp.error = HttpMessage.SERVICE_UNAVAILABLE;
    this.resp.message = HttpMessage.SERVICE_UNAVAILABLE;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static notfound(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.NOT_FOUND;
    this.resp.error = HttpMessage.NOT_FOUND;
    this.resp.message = HttpMessage.NOT_FOUND;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static notmodified(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.NOT_MODIFIED;
    this.resp.error = HttpMessage.NOT_MODIFIED;
    this.resp.message = HttpMessage.NOT_MODIFIED;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static unprocessableentity(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
    this.resp.error = HttpMessage.UNPROCESSABLE_ENTITY;
    this.resp.message = HttpMessage.UNPROCESSABLE_ENTITY;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static unauthorized(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.UNAUTHORIZED;
    this.resp.error = HttpMessage.UNAUTHORIZED;
    this.resp.message = HttpMessage.UNAUTHORIZED;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static forbidden(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.FORBIDDEN;
    this.resp.error = HttpMessage.FORBIDDEN;
    this.resp.message = HttpMessage.FORBIDDEN;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static conflict(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.CONFLICT;
    this.resp.error = HttpMessage.CONFLICT;
    this.resp.message = HttpMessage.CONFLICT;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static gone(error?: GlobalResponseWithError): GlobalResponse {
    this.clear();
    this.resp.statusCode = HttpStatus.GONE;
    this.resp.error = HttpMessage.GONE;
    this.resp.message = HttpMessage.GONE;
    if (error?.message) {
      this.resp.message = error.message;
    } else if (error?.error?.message) {
      this.resp.message = error.error.message;
    } else {
      this.resp.error = error.error;
      this.resp.errors = error.errors;
    }
    return this.resp;
  }

  static clear() {
    this.resp = { statusCode: 0 };
  }
}
