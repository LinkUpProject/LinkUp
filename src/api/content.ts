import { request } from "./request";

export const getContent = (id: string) => request.get(`/api/content/${id}`);
