import { CREATED_STATUS_CODE, SUCCESS_STATUS_CODE } from '@/utils/constants/status-code';

export class HttpError {
  constructor(error) {
    this.error = error.response.data;
  }

  getError() {
    return this.error.message;
  }

  getStatusCode() {
    return this.error.code;
  }

  isSuccess() {
    return (
      this.getStatusCode() === CREATED_STATUS_CODE || this.getStatusCode() === SUCCESS_STATUS_CODE
    );
  }
}
