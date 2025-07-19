import axios from 'axios';

export const subscribeNews = async (email: string) => {
  const url = 'http://localhost:8080/email';
  try {
    const response = await axios.post(
      url,
      {
        email: email,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    throw error;
  }
};
