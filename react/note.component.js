/*
 * Create a React component called "Note"
 * make it create a div with no html and no attributes
 */
class Note extends React.Component {

    render() {
        // Set the inner html of the div as two elements:
        // 1) h1 element
        // 2) p element
        let html = [
            e("h1", null, this.props.title),
            e("p", null, this.props.text)
        ];

        // Create attributes for main div
        // 1) Class as note
        // 2) style backgroundcolor as red
        let attributes = {
            className: "item note",
            style: {
                backgroundColor: "red"
            }
        }

        return e("div", attributes, html);
    }
}