import React from "react";
import ReactDOM from "react-dom/client";

//JSX(transpiled before it reaches the JS)-parcel-Babel

//JSX=> Babel transpiles it to React.createElement => ReactcreateElement => ReactElement-JS object => HTMLElement(render)

//Q. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2", {}, "I am h2 tag"),
  React.createElement("h3", {}, "i am h3 tag"),
]);

// Q. Create the same element using JSX

const jsxheading = (
  <div className="title">
    <h1>This is h1 tag</h1>
    <h2>This is h2 tag</h2>
    <h3>This is h3 tag</h3>
  </div>
);

// Q. Create a functional component of the same with JSX

const FunctionalHeading = () => {
  return (
    <div className="title">
      <h1>This is functional h1 tag</h1>
      <h2>This is functional h2 tag</h2>
      <h3>This is functional h3 tag</h3>
    </div>
  );
};

//Q. Pass attribute into the tag in JSX

const jsxHeadingWithAttribute = (
  <div className="title">
    <h1 style={{ color: "red" }}>This is h1 tag</h1>
    <h2 style={{ color: "blue" }}>This is h2 tag</h2>
    <h3 style={{ color: "orange" }}>This is h3 tag</h3>
  </div>
);

//Q. Composition of Component (Add a component inside another)
// Q. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const FunctionalHeadingWithComponent = () => {
  return (
    <div className="title">
      {/* {TitleComponent} */}
      {jsxHeadingWithAttribute}
      {/* {<TitleComponent/>}  */}
      <FunctionalHeading />
      <h1>This is functional h1 tag</h1>
      <h2>This is functional h2 tag</h2>
      <h3>This is functional h3 tag</h3>
      {/* {<TitleComponent></TitleComponent>} */}
      <FunctionalHeading></FunctionalHeading>
    </div>
  );
};

// Q. Create a Header Component from scratch using Functional Component with JSX
//     - Add a Logo on Left
//     - Add a search bar in middle
//     - Add User icon on right
//     - Add CSS to make it look nice

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="left">
            <img
              src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png"
              alt="logo"
            ></img>
          </div>
          <div className="middle">
            <input className="input" type="text" placeholder="search"></input>
            <button>Search</button>
          </div>
          <div className="right">
            <img
              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              alt="User Icon"
            ></img>
          </div>
        </header>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
