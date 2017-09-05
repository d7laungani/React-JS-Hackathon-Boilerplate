import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';

export default class ImageGrid extends Component {

    constructor (props) {
        super(props)
    }


    componentWillReceiveProps(newProps) {

        this.setState ({images: newProps.images})
    }
    state = {
        images: [],
    };
    render() {

        return (

            <Gallery images={this.state.images}/>
        )

    }



}