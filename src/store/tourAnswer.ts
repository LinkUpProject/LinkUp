//Tour 答案状态

import { proxy } from "valtio";

export const tourAnswerStore = proxy({
  answers: [] as Array<{ id: number; question: string; answer: string }>,
});
