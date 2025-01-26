const { connectDB } = require('./src/config/db'); // Import the connectDB function
const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});