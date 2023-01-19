
# LinkedIn BioCrafter

Insert a simple context about you and generate an effective and professional one for LinkedIn Bio.


## Demo

![App Screenshot](https://i.ibb.co/6XLC14M/image.png)

![App Screenshot](https://i.ibb.co/YyCz3RY/image.png)


## How it works
This project uses the OpenAI GPT-3 API (specifically, text-davinci-003) and Vercel Edge functions with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.
## Running Locally
After cloning the repo, go to OpenAI to make an account and put your API key in a file called .env.

Then, run the application in the command line and it will be available at http://localhost:3000.

```bash
  npm run dev
```
    
