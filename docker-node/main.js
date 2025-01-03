const express = require('express'); // Corrected the variable name
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    return res.json({ message: "Hello, I am Node.js in a container" });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
