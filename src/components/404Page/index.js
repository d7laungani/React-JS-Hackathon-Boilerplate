import React, {Component} from 'react';

import './404.css'

export default class NotFoundPage extends Component {

    render() {
        return (

            <div style={styles.root}>
                <img src={'https://cdn.dribbble.com/users/11408/screenshots/1869337/404.jpg'} alt="bg" class="bg"/>

            </div>
        );
    }
}

let imgUrl = 'https://cdn.dribbble.com/users/11408/screenshots/1869337/404.jpg'
let styles = {
    root: {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
    },

}

