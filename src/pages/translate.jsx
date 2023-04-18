import React from 'react';
export default function Translate() {
    let apiUrl = 'https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(111, data);
        })
        .catch(err => {
            console.log(err);
        });
    console.log(123);
    return <div>translate</div>;
}
