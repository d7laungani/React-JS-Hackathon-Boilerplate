import React, {Component} from 'react';
import Search from '../SearchBar'
import ImageGrid from '../ImageGrid'

export default class Home extends Component {

    constructor (props) {
       super(props)
       this.props.queryPhotos('&method=flickr.photos.search&text=fish')

        this.state = {
            images: []
        }
        this.updateImages = this.updateImages.bind(this);
    }

    componentWillReceiveProps(newProps) {

       this.mapImagesToFormat(newProps.photos)
    }



    updateImages(imgQuery) {
        console.log(imgQuery)
        let query = '&text=' + imgQuery
        this.props.queryPhotos('&method=flickr.photos.search' + query)
    }

    mapImagesToFormat(images) {

        let updated = images.map(element => {
            let url = 'https://farm' + element.farm + '.staticflickr.com/' + element.server + '/' + element.id + '_' + element.secret + '.jpg'
            return element = {

                src: url,
                thumbnail: url,
                thumbnailWidth: 320,
                thumbnailHeight: 212,

            }
        });

        this.setState ({images: updated})

    }

    render() {
        return (
            <div>
                <Search searchFunction={this.updateImages}/>
                <ImageGrid images={this.state.images} />
            </div>
        )

    }



}