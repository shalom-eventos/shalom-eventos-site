import { api } from './apiClient';

const PATH = '/events';

interface CreateRequest {
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
}

interface UpdateRequest extends Partial<CreateRequest> {}

export const adminEventsServices = () => ({
  create: async (data: CreateRequest) => {
    const response = await api.post(PATH, data);
    return response.data;
  },
  update: async (id: string, data: UpdateRequest) => {
    const response = await api.put(PATH + '/' + id, data);
    return response.data;
  },
});
