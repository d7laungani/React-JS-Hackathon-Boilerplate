import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import './search.css'



export default class SearchBar extends Component {
    state = {
        dataSource: [],
    };

    render() {
        return (
            <div >
                <AutoComplete
                    hintText="Zion National Park"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.props.searchFunction}
                    floatingLabelText="Search Flikr Images"
                    fullWidth={true}
                />
            </div>
        );
    }
}

