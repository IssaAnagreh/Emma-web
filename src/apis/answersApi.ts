import { request } from ".";

export const getAnswers = () => request.get(`/answer`);
