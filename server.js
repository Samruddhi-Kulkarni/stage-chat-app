const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
       res.send('Api is running');
});
app.use('/api/user', userRoutes);
// app.use('api/chat', chatRoutes);

// const _dirname1 = path();
// if (process.env.NODE_ENV === `production`) {

//     app.use(express.static(path.join(_dirname1c)))

// } else {
//     
//     });
// }
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000
app.listen( console.log('server started on 3000 ${PORT}'));
