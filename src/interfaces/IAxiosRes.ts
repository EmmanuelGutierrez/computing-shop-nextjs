import { AxiosResponse } from "axios";

export interface responseData<param> {
  error: boolean;
  status: number;
  data?: param;
  message?: string;
}
