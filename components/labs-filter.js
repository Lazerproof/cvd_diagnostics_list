import React, { PropTypes } from 'React';
import Select from 'react-select';

export default class LabsFilter extends React.Component {
    static propTypes = {
        handleLabsFilterChange : PropTypes.func,
        laboratoriesForFilter  : PropTypes.array,
        appState               : PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }

    handleLabsSelectChange = (value, items) => {
        this.props.handleLabsFilterChange(value, items);
        this.setState({ value });
    };

    render() {
        return (
            <div className='filter filter_laboratories'>
                <Select
                    name          = 'laboratories-filter-select'
                    multi
                    value         = {this.state.value}
                    searchable
                    noResultsText = {this.props.appState.localization.noResultText}
                    onBlurResetsInput
                    placeholder   = {this.props.appState.localization.laboratoriesFilter}
                    valueKey      = 'id'
                    labelKey      = 'title'
                    options       = {this.props.laboratoriesForFilter}
                    onChange      = {this.handleLabsSelectChange}
                />
            </div>
        );
    }
}
