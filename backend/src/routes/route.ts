import express,{Request, Response} from "express"
import grammarController from "../controllers/grammarController"
import plagiarismController from "../controllers/plagiarismController"
import generateContentTemplate from "../controllers/templateController"
import toneController from "../controllers/toneController"
import seoSuggestionWords from "../controllers/seoSuggestionController"

const route = express.Router();

route.post('/', async (req:Request, res:Response) => {
    const { text } = req.body;
    try {
      const result = await grammarController.getGrammarAndStyleSuggestions(text);
      res.json({ result });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  route.post('/plagiarism-check', async (req:Request, res:Response) => {
    const { text } = req.body;
    try {
      const result = await plagiarismController.checkPlagiarism(text);
      res.json({ result });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  