import { SUCCESS_STATUS_CODE } from '@/utils/constants/status-code';

export class HttpError {
  constructor(error) {
    this.error = error;
  }

  getError() {
    return this.error.response.data;
  }

  getStatusCode() {
    return this.error.response.status;
  }

  isSuccessResponse() {
    return this.getStatusCode() === SUCCESS_STATUS_CODE;
  }
}
