import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/v2/user/data', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        city: 'New York',
        isSubscribed: true,
    });
});

app.listen(PORT, () => {
    console.log(`✅ Mock API running at http://localhost:${PORT}`);
});
