import { request } from "./request";
import { processData } from "../utils/roadmap";
import { roadmapStore } from "../store/roadmap";

export const getContent = async (id: string) => {
  try {
    const response = await request({
      url: `/roadmap/${id}`,
      method: "get",
    });

    const data = response.data.data; // 提取完整的 data
    console.log("Full response data:", data);

    // 更新 Valtio 状态
    roadmapStore.PreanalyticData = data;

    // 处理数据
    processData(data);

    return data;
  } catch (error) {
    console.error("Error fetching content:", error);
    throw error;
  }
};
