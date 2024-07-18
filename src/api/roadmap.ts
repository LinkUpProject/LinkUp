import { request } from "./request";

export const getRoadMap = async (id: string): Promise<DataNode> => {
  return request({
    url: `/api/roadmap/${id}`,
    method: "get",
  });
};
