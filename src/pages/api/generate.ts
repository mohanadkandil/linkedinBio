import type { NextRequest, NextResponse } from "next/server";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const base =
  "Genrate a professional and effective LinkedIn bio based on the following context:";

export default async function handler(req: NextRequest, res: NextResponse) {
  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${base}${req.body.text}`,
    temperature: 0.7,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
}
