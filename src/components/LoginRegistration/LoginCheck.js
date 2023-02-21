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

export const setCookie = (email, value, minutes = 0) => {
  let expires = '1';
  if (minutes && minutes > 0) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = date.toUTCString();
  }
  document.cookie = `${email}=${value}; expires=${expires}; path=/;`;
};

export const checkLogin = () => {
  if (document.cookie.split(';').find((item) => item.includes('email'))) {
    window.location.href = '/';
  }
};
