import api from './index.js';

async function getUsers(page, city = null, fullname = null) {
  try {
    let url = '/api/student/get-all-students/';
    let params = [];

    if (page) {
      params.push(`page=${page}`);
    }
    if (city) {
      params.push(`city=${city}`);
    }
    if (fullname) {
      params.push(`fullname=${fullname}`);
    }

    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
    return null;
  }
}

export { getUsers };