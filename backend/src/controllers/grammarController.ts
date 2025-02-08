import axios from 'axios';

const openaiApiUrl = 'https://api.openai.com/v1/completions';
const apiKey = process.env.OPEN_AI_KEY;

const getGrammarAndStyleSuggestions = async (text: string) => {
  const prompt = `Check and suggest improvements for grammar and style: "${text}"`;

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
    throw new Error('Error generating grammar and style suggestions');
  }
};

export default{
    getGrammarAndStyleSuggestions
}