import { useState } from 'react';

function App() {
  const [content, setCotent] = useState('');

  function handleGet() {
    fetch('hello')
      .then((response) => response.text())
      .then((data) => {
        setCotent(data);
      });
  }

  const [postContent, setPostCotent] = useState('');

  function handlePost() {
    fetch('api', {
      method: 'post',
      body: JSON.stringify({ a: 'a', b: 2 })
    })
      .then((response) => response.json())
      .then((data) => {
        setPostCotent(JSON.stringify(data));
      });
  }

  return (
    <div className="App">
      <button onClick={handleGet}>发送get请求</button>
      <div> {content}</div>
      <br />

      <button onClick={handlePost}>发送post请求</button>
      <div>{postContent}</div>
    </div>
  );
}

export default App;
