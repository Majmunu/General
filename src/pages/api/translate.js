import React, { useState } from 'react';
import axios from 'axios';

function Translation() {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const handleTextChange = event => {
        setText(event.target.value);
    };

    const handleTranslate = () => {
        const params = {
            source: 'auto',
            target: 'en',
            text: text,
            appid: 'your_appid',
            salt: Math.floor(Math.random() * 100000),
            sign: '',
        };

        const signStr = `your_appid${text}${params.salt}your_secret_key`;
        params.sign = md5(signStr);

        axios
            .get('https://api.fanyi.qq.com/api/trans/vip/translate', { params })
            .then(response => {
                setResult(response.data.trans_result[0].dst);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Translation</h1>
            <textarea value={text} onChange={handleTextChange} />
            <button onClick={handleTranslate}>Translate</button>
            <p>{result}</p>
        </div>
    );
}

export default Translation;
