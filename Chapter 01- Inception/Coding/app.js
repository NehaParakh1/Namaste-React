
//Hello World using Javascript//

// const heading=document.createElement('h1')
// heading.innerHTML='Hello World from Javascript';

// const root= document.getElementById('root');
// root.appendChild(heading);
//----------------------------------------------------------------------------------------------
//Hello worldusing React

// const parent= React.createElement('div', {id: "parent"},React.createElement('div', {id: "child"},[React.createElement('h1',{},"I'm h1 tag"), React.createElement('h2',{},"I'm h2 tag")]));

// const heading=React.createElement('h1',{id: 'heading'},"Hello World from React")
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

const parent= React.createElement('div', {id: "parent"},[React.createElement('div', {id: "child"}, React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag")), React.createElement('div', {id: "child2"}, React.createElement('h1', {}, "I'm h1 tag"), React.createElement('h2', {}, "I'm h2 tag"))] )

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);