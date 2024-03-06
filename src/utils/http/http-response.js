import { CREATED_STATUS_CODE, SUCCESS_STATUS_CODE } from '@/utils/constants/status-code';

export class HttpResponse {
  constructor(response) {
    this.response = response;
  }

  getResponse() {
    return this.response.data;
  }

  //   Get custom error for validating
  getError() {
    return this.response.error;
  }

  getStatusCode() {
    return this.response.code;
  }

  isSuccess() {
    return (
      this.getStatusCode() === CREATED_STATUS_CODE || this.getStatusCode() === SUCCESS_STATUS_CODE
    );
  }
}
