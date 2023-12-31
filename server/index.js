import express from "express"
import postRouter from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use("/server/posts", postRouter)


app.listen(8800, () => {
    console.log("Connected")
})

