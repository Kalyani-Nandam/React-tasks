import React from 'react';

const JsxExample = function example(){
    return<h1>Jsx Example1</h1>
}

const JsxExample = () => { 
    return (<div>
        <h1>JsxExample</h1>
        </div>);

    return React.createElement('div',null,React.createElement('h1',null,'React elements without jsx'))
}


export default JsxExample;