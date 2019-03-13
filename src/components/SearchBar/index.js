import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

import './search.css'



export default class SearchBar extends Component {


    constructor (props) {
        super(props)


        this.state = {
            searchQuery: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        var query = event.target.value
        this.setState({searchQuery: query })

        if (query == '') {
            query = 'fish'
        }
        this.props.searchFunction(query )
    }

    render() {
        return (
            <div >

                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.searchQuery}
                    onChange={this.handleChange}
                    margin="normal"
                    style={{width: '80%'}}
                />
            </div>
        );
    }
}

