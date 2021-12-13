import React from 'react';
import  ContentManagementParent from './ContentManagementParent';


const uri = process.env.REACT_APP_API_URL;
console.log('uri====>>', uri);
function App() {
  return (
    <div className="App">
      <ContentManagementParent />
    </div>
  );
}

export default App;
