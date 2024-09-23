export interface ICar {
  _id: string;
  name: string;
  description: string;
  img?: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
  status: string;
  isDeleted?: boolean;
}

export interface ICarResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ICar;
}
export interface ICarsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ICar[];
}
export interface IUser {
  name: string;
  email: string;
  role: string;
  password: string;
  cpassword?: string;
  phone: string;
  address: string;
}
