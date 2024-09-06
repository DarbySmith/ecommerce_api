// required modules are imported and may have to install types for some
import express from "express" // framework
import * as dotenv from "dotenv" // handle env variables
import cors from "cors" // enable Cross-Origin Resource sharing
import helmet from "helmet" // add security to HTTP responses
import { userRouter } from "./users/user.routes"

dotenv.config()

// checks if there is a PORT env variable, if not log to console
if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

// convert the string value for port to int
const PORT = parseInt(process.env.PORT as string, 10)

// create instance of express 
const app = express()

// middleware functions added to express
app.use(express.json())     // parse JSON for incoming requests
app.use(express.urlencoded({extended : true}))      // parse URL-encoded bodies of incoming requests
app.use(cors())     // enable Cross-Origin Resource sharing
app.use(helmet())   // enhance security by setting some HTTP headers

app.use("/", userRouter)

// app is listening on the specified port in env 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
