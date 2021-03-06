// throw new Error("ai, ca fait mal");

// https://frontendmasters.com/courses/complete-react-v5/passing-in-component-props/
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.origin),
//     ]);
// }
// https://frontendmasters.com/courses/complete-react-v5/destructuring-props/
// Destructuring props
const Pet = ({ name, animal, origin }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, origin),
    React.createElement("h2", {}, animal),
  ]);
};

const App = () => {
  // https://frontendmasters.com/courses/complete-react-v5/createelement-arguments/
  // 1. what kind of element is it? (h1)
  // 2. empty object ({}); all attribute you want to give your component, what you want to pass to your child element
  //  3. children; what ever children you want to pass in this element; variable verity
  return React.createElement("div", { id: "pet-container" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Noam",
      animal: "Domesticated Human",
      origin: "From the east",
    }),
    React.createElement(Pet, {
      name: "Brutus",
      animal: "Domesticated Cat",
      origin: "Brussels",
    }),
    React.createElement(Pet, {
      name: "Sirius",
      animal: "Domesticated Cat",
      origin: "Sint-Gilles",
    }),
    React.createElement(Pet, {
      name: "Eggman",
      animal: "Millionaire",
      origin: "Absence of mother",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
