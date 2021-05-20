import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { Storage } from '~/services';
import { ExpiredSessionError, showAlert } from '~/utils';

const baseURL = process.env.BASE_PATH;
const clientId = process.env.CLIENT_ID;

export const request = axios.create({
  baseURL: baseURL,
  headers: { client_id: clientId },
  timeout: 30000, // 30 seconds timeout
});

/**
 * Middleware, to change whatever we need in the request
 * ex: Put a bearer token in the request, if necessary
 */

interface CustomRequest {
  authorization?: string;
}

const successResponse = (response: any): AxiosResponse => response;

const addAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token: Token | null = Storage.getToken();
  if (!token || isEmpty(token)) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token?.access_token}`,
    },
  };
};

const verifyExpiredToken = (
  error: ErrorResponse,
): ExpiredSessionError | ErrorResponse => {
  const expiredSessionError = 401;
  if (error.response.status === expiredSessionError) {
    const message = 'Sessão expirada. Autentique novamente para continuar';
    showAlert({ message });
    throw new ExpiredSessionError();
  }
  throw error;
};

request.interceptors.response.use(successResponse, verifyExpiredToken);

request.interceptors.request.use(addAuthHeaders);

export default request;
