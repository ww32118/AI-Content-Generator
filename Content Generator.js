import React, { useState } from 'react';
import axios from 'axios';

const ContentGenerator = () => {
    const [keywords, setKeywords] = useState('');
    const [content, setContent] = useState('');

    const handleGenerate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate', { keywords });
            setContent(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>AI Blog Content Generator</h1>
            <input
                type="text"
                placeholder="Enter keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
            />
            <button onClick={handleGenerate}>Generate</button>
            <div>
                <h2>Generated Content</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ContentGenerator;
