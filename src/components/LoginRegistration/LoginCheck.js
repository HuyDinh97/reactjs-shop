/* eslint-disable consistent-return */
export const postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      body: new URLSearchParams(data),
    });
    return response.json();
  } catch {
    console.error('ss');
  }
};

export default postData;
