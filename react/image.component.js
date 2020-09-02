class Image extends React.Component {
    render() {
        // HTML/Text inside this element (another html element)
        let html = e("div", null, "test");
        // Attributes for container element
        let attributes = {
            className:"image",
            style: {
                backgroundImage:"url(resources/images/forest.jpg)"
            }
        }
        // Return the total html of this element
        return e("div", attributes, html);
    }
}
