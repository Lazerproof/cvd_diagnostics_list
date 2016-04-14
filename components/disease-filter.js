import React, { PropTypes } from 'React';
import Select from 'react-select';

export default class DiseaseFilter extends React.Component {
    static propTypes = {
        handleDiseaseFilterChange : PropTypes.fucn,
        diseaseForFilter          : PropTypes.array,
        appState                  : PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }

    handleDiseaseSelectChange = (value, items) => {
        this.props.handleDiseaseFilterChange(value, items);
        this.setState({ value });
    };

    render() {
        return (
            <div className='filter filter_disease'>
                <Select
                    name				= 'disease-filter-select'
                    multi
                    value				= {this.state.value}
                    searchable
                    noResultsText		= {this.props.appState.localization.noResultText}
                    onBlurResetsInput
                    placeholder			= {this.props.appState.localization.diseaseFilter}
                    valueKey			= 'id'
                    labelKey 			= 'title'
                    options				= {this.props.diseaseForFilter}
                    onChange			= {this.handleDiseaseSelectChange}
                />
            </div>
        );
    }
}
