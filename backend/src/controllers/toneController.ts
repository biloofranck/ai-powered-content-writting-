import axios from 'axios';

const openaiApiUrl = 'https://api.openai.com/v1/completions';
const apiKey = process.env.OPEN_AI_KEY;


const analyzeToneAndReadability = async (text:string) => {
    const prompt = `Analyze the tone and readability of the following text: "${text}"`;
  
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
      throw new Error('Error analyzing tone and readability');
    }
  };

  export default analyzeToneAndReadability;
  