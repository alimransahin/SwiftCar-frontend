import { ReactNode } from "react";

export interface ICar {
  _id: string;
  name: string;
  description: string;
  img?: string;
  color: string;
  isElectric: boolean;
  features?: string[];
  pricePerHour: number;
  status: string;
  isDeleted?: boolean;
}
export interface IUserInfo {
  name: string;
  email: string;
  role?: string;
  token?: string;
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
export interface IUsersResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser[];
}
export interface IUserResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
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

export interface IRoute {
  path: string;
  element: ReactNode;
}

export interface ISidebarItem {
  key: string;
  label: ReactNode;
  children?: ISidebarItem[] | null;
}

export interface IUserPath {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: IUserPath[];
}
export interface IBooking {
  _id: string;
  carId: {
    name: string;
    img: string;
  };
  status: string;
  date: string;

  pickUpDate: string;
  pickUpTime: string;
  dropOffDate: string;
  dropOffTime: string;
}
