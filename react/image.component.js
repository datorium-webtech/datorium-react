class Image extends React.Component {

    enlarge() {
        window.open(this.props.imageSrc);
    }

    render() {
        // HTML/Text inside this element (another html element)
        let html = e("div", null, this.props.desc);
        // Attributes for container element
        let attributes = {
            className:"item image",
            style: {
                backgroundImage:"url(" + this.props.imageSrc + ")"
            },
            onClick: this.enlarge.bind(this)
        }
        // Return the total html of this element
        return e("div", attributes, html);
    }
}
