import axios from 'axios';
import {config} from "dotenv"
config()


const openaiApiUrl = 'https://api.openai.com/v1/completions';
const apiKey = process.env.OPEN_AI_KEY;


const generateContentTemplate = async (type: string) => {
    const prompt = `Generate a content template for a ${type} (e.g., blog, email)`;

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
        throw new Error('Error generating content template');
    }
};

export default generateContentTemplate;