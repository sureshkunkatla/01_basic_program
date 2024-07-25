const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Iam first line"),
    React.createElement("h1", {}, "Iam second line"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam first line"),
    React.createElement("h1", {}, "Iam second line"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
