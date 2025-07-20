import axios from 'axios';
import type { TFormValues } from '../utils/type';
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const sendForm = async (formData: TFormValues) => {
  const url = 'http://localhost:8080/application';

  try {
    await axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await sleep(1000);
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    throw error;
  }
};
