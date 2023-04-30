import axios from "axios";

export interface UserType {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
 [key: string]: any;

}

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<UserType[]> => {
  const response = await axios.get<UserType[]>(`${API_URL}/users`);
  return response.data;
};

export interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const fetchPhotos = async (): Promise<PhotoType[]> => {
  const response = await axios.get<PhotoType[]>(`${API_URL}/photos`);
  return response.data;
};
