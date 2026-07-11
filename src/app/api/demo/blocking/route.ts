import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { google } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";

export async function POST() {
  const response = await generateText({
    model: google('gemini-2.5-flash'),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});

  return Response.json({ response });
};