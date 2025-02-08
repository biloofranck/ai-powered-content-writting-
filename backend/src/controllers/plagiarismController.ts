import axios from 'axios';
import { config } from 'dotenv';

config()

const openaiApiUrl = 'https://api.openai.com/v1/completions';
const apiKey = process.env.OPEN_AI_KEY;

const checkPlagiarism = async (text:string) => {
    const prompt = `Check if the following text contains plagiarized content: "${text}"`;
  
    try {
      const response = await axios.post(openaiApiUrl, {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 200,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });
  
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
      throw new Error('Error checking plagiarism');
    }
  };

  export default{
    checkPlagiarism
  }
  