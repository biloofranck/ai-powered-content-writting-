import OpenAI from "openai";
import dotenv from "dotenv";
import { NextFunction, Response } from "express";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const getGrammarSuggestion = async (
  text: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: `Check grammar and style for the following text:\n\n${text}`,
      max_tokens: 200,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    next(
      res.status(500).json({
        message: `Failed calling OpenAI API : ${error}`,
      })
    );
  }
};

const toneAnalysis = async (
  text: string,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: `Analyze the tone of the following text:\n\n${text}`,
      max_tokens: 100,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    next(
      res.status(500).json({
        message: `Error calling the api`,
      })
    );
  }
};

export default {
  getGrammarSuggestion,
  toneAnalysis,
};
