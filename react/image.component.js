class Image extends React.Component {
    render() {
        return React.createElement("div", {className: "test123"}, "ABC");
    }
}

ReactDOM.render(
    React.createElement(Image),
    document.querySelector(".image-container")
);
