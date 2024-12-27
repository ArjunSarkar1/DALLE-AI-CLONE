const PORT = 8000

const express = require('express')
const cors = require('cors')
const { default: OpenAI } = require('openai')
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

app.post('/images', async(req, res) => {
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
        });
        res.send(response.data.data)
        
    } catch (error) {
     console.log(error)   
    }

})


app.listen(PORT, () => console.log("Your server is running on PORT " + PORT))
