import express from 'express';
import mongoose from 'mongoose';
import Post  from "./Post.js";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const DB_URL = `mongodb+srv://user:user@cluster0.owzqzcx.mongodb.net/?retryWrites=true&w=majority`

const PORT = 4000;

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)



async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server started on PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()


