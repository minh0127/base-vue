import { SUCCESS_STATUS_CODE } from '@/utils/constants/status-code';

export class HttpResponse {
  constructor(response) {
    this.response = response.data;
  }

  getResponse() {
    return this.response.data;
  }

  //   Get custom error for validating
  getError() {
    return this.response.error;
  }

  getStatusCode() {
    return this.response.status;
  }

  isSuccessResponse() {
    return this.getStatusCode() === SUCCESS_STATUS_CODE;
  }
}
