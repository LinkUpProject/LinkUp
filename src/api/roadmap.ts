import { request } from "./request";

export const getRoadmap = (id: string) => {
  return request({
    url: `/roadmap/${id}`,
    method: "GET",
  });
};
