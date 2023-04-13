 
function main() {

const openai = require('openai');
const fs = require('fs');

// Set up OpenAI API credentials
openai.api_key = "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";

// Load the yatirim.txt file
const yatirimText = fs.readFileSync('yatirim.txt', 'utf8');

// Define the prompt and question
const prompt = `The following is the content of the yatirim.txt file:\n\n${yatirimText}\n\n`;
const question = "Açığa satış ve ödünç menkul kıymet işlemi nedir? Nasıl yapılır?";

// Train a new GPT model on the yatirim.txt file
const fineTuneParams = {
  engine: 'davinci',
  prompt: prompt,
  max_tokens: 100,
  temperature: 0.7,
  n: 1,
  stop: null,
  frequency_penalty: 0,
  presence_penalty: 0,
  examples: [{
    prompt: prompt + '\nQuestion: ' + question,
    completions: [{result: 'The answer to the question XYZ is ...'}]
  }],
  model: 'yatirim',
};

openai.completions.create(fineTuneParams, (error, response) => {
  if (error) throw error;

  // Use the trained model to generate a response to the question
  const generateParams = {
    engine: 'davinci',
    prompt: prompt + 'Question: ' + question,
    max_tokens: 100,
    temperature: 0.7,
    n: 1,
    stop: null,
    frequency_penalty: 0,
    presence_penalty: 0,
    model: 'yatirim',
  };

  openai.completions.create(generateParams, (error, response) => {
    if (error) throw error;

    // Print the generated response to the console
    console.log(response.choices[0].text);
  });
});
 
}

main();

