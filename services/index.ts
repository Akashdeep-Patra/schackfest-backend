import axios from "axios";

export const getAllCategoryData = (key:string,name: string) =>
  axios.get<any>(`https://schackfest-backend.vercel.app/api/category-groupes?categories=${name}`);

export const getCategoryWiseData = (key:string,name: any) =>
    axios.get<any>(`https://schackfest-backend.vercel.app/api/category-feed?categories=${name}&limit=${30}`);

export const getAvailableCategory = (key: string) =>
    axios.get<any>(`https://schackfest-backend.vercel.app/api/categories`);

