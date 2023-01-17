import type { NextRequest, NextResponse } from "next/server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextRequest, res: NextResponse) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: req.query.prompt,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256,
  });
  res.status(200).json(completion.data);
}
