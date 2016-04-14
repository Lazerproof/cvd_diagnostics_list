import React, { PropTypes } from 'React';
import Select from 'react-select';

export default class PathologiesFilter extends React.Component {
    static propTypes = {
        handlePathologiesFilterChange : PropTypes.fucn,
        pathologiesForFilter          : PropTypes.array,
        appState                      : PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }

    handlePathologiesSelectChange = (value, items) => {
        this.props.handlePathologiesFilterChange(value, items);
        this.setState({ value });
    };

    render() {
        return (
            <div className='filter filter_pathologies'>
                <Select
                    name				= 'pathologies-filter-select'
                    multi
                    value				= {this.state.value}
                    searchable
                    noResultsText		= {this.props.appState.localization.noResultText}
                    onBlurResetsInput
                    placeholder			= {this.props.appState.localization.pathologiesFilter}
                    valueKey			= 'id'
                    labelKey 			= 'title'
                    options				= {this.props.pathologiesForFilter}
                    onChange			= {this.handlePathologiesSelectChange}
                />
            </div>
        );
    }
}
