import create from 'zustand';
import { getUsers } from '../api/users';

const useStore = create((set) => ({
  users: [],
  page: 1,
  next: false,
  loading: false,
  error: null,
  getUsers: async (page = null, city = null, fullname = null) => {
    try {
      set({ loading: true });

      // Foydalanuvchilarni olish uchun API-ga so'rov jo'natish
      const response = await getUsers(page, city, fullname);
      const data = response.data;

      set({ page: page + 1, next: data.next ? true : false, users: data.results, loading: false });
    } catch (error) {
      set({ error: error.message, next: false, loading: false });
    }
  },
}));

export default useStore;