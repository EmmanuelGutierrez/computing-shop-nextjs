export interface responseData<param> {
  error: boolean;
  status: number;
  data?: param;
  message?: string;
}
