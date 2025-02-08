import axios from 'axios';
import {config} from "dotenv"
config()

const openaiApiUrl = 'https://api.openai.com/v1/completions';
const apiKey = process.env.OPEN_AI_KEY;

const generateKeywordSuggestions = async (text: string) => {
    const prompt = `Generate SEO keywords for the following text: "${text}"`;
  
    try {
      const response = await axios.post(openaiApiUrl, {
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });
  
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
      throw new Error('Error generating keyword suggestions');
    }
  };

  export default generateKeywordSuggestions;