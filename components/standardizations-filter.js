import React, { PropTypes } from 'React';
import Select from 'react-select';

export default class StandardizationFilter extends React.Component {
    static propTypes = {
        handleStandardizationFilterChange : PropTypes.fucn,
        standardizationForFilter          : PropTypes.array,
        appState                          : PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }


    handleStandardizationFilterChange = (value, items) => {
        this.props.handleStandardizationFilterChange(value, items);
        this.setState({ value });
    };

    render() {
        return (
            <div className='filter filter_standartization'>
                <Select
                    name				= 'standardization-filter-select'
                    multi
                    value				= {this.state.value}
                    searchable
                    noResultsText		= {this.props.appState.localization.noResultText}
                    onBlurResetsInput
                    placeholder			= {this.props.appState.localization.standardizationFilter}
                    valueKey			= 'id'
                    labelKey 			= 'title'
                    options				= {this.props.standardizationForFilter}
                    onChange			= {this.handleStandardizationFilterChange}
                />
            </div>
        );
    }
}
