## API Monetization Demo with Stripe Metered Billing

Learn how to [make money from an API](https://youtu.be/MbqSMgMAzxU) on YouTube. 

Detailed breakdown of the [API monetization](https://fireship.io/lessons/api-monetization-stripe) code Fireship. 

## Run it

- Create a metered billing product in Stripe
- Install Stripe CLI
- Add your testing Stripe secret key in the index.js

```bash
git clone 
npm i
node .
stripe listen --forward-to localhost:8080/webhook
```

## Using dotenv configuration options

dotenv allows you to have secret keys and other important bits of data stay safe by 
using the system that you're running your code on's environment variables.

In the index.js file, the first thing we call is `require('dotenv').config()` which
will set up our environment by importing a file called `.env` into our running code.

You'll notice that in several places there are now calls to `process.env.<SOME_ENV_VAR>`
these have been imported and set by the `.env` file.

There is a versioned file called `.env.sample` which contains all of the environment
variables that you should set in order to make this new example work.