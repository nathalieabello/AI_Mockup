import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAIApi(new Configuration({apiKey: process.env.OPENAI_API_KEY}));

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hi from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    console.log("i am in try");
    const { prompt } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response error status:', error.response.status);
      console.error('Response error data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up the request:', error.message);
    }
  
    res.status(500).json({ message: "Something went wrong" });
  }  
})

export default router;