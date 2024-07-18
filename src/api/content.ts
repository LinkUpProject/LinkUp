import { request } from "./request";

export const getContent = async (id: string) => {
  return request({
    url: `/api/content/${id}`,
    method: "get",
  });
};
