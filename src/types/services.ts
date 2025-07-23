export interface GenericResponse<T> {
  message: string;
  data?: T;
}

export const CSRF_TOKEN_NAME = 'waitlist-csrf';

export const TOKEN_EXPIRY = 60 * 60 * 1000;
