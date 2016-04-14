import React, { PropTypes } from 'React';
import FilterBox from './filter-box';
import ListBox from './list-box';
import Header from './header';

export default class AppBox extends React.Component {
    static propTypes = {
        url      : PropTypes.string,
        appState : PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    state = {
        appState                 : this.props.appState,
        diagnostics              : [],
        disease                  : [],
        categories               : [],
        diseaseForFilter         : [],
        laboratories             : [],
        laboratoriesForFilter    : [],
        pathologies              : [],
        pathologiesForFilter     : [],
        standardization          : [],
        standardizationForFilter : [],
        laboratoriesSelection    : [],
        diseaseSelection         : [],
        standardizationSelection : [],
        pathologiesSelection     : []
    };

    componentDidMount() {
        this.loadData();
    }

    onHandleLabsFilter = (value, items) => {
        const laboratoriesSelection = [];

        items.forEach((item) => {
            laboratoriesSelection.push(item.id);
        });
        this.setState({ laboratoriesSelection });
    };

    onHandlePathologiesFilterChange = (value, items) => {
        const pathologiesSelection = [];

        items.forEach((item) => {
            pathologiesSelection.push(item.id);
        });
        this.setState({ pathologiesSelection });
    }

    onHandleStandardizationFilterChange = (value, items) => {
        const standardizationSelection = [];

        items.forEach((item) => {
            standardizationSelection.push(item.id);
        });
        this.setState({ standardizationSelection });
    }

    onHandleDiseaseFilterChange = (value, items) => {
        const diseaseSelection = [];

        items.forEach((item) => {
            diseaseSelection.push(item.id);
        });
        this.setState({ diseaseSelection });
    }

    initFilterList = (data, criteria, criteriaName) => {
        const tempArray = [];
        const newArray = [];

        data.forEach((diagnostic) => {
            diagnostic[criteriaName].forEach((criteriaId) => {
                if (tempArray.indexOf(criteriaId) === -1) {
                    tempArray.push(criteriaId);
                    newArray.push(
                        criteria.find(criteria =>
                        criteria.id === criteriaId)
                    );
                }
            });
        });
        return newArray;
    }

    loadData() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    diagnostics              : data.diagnostics,
                    laboratories             : data.laboratories,
                    laboratoriesForFilter     : this.initFilterList(
                        data.diagnostics,
                        data.laboratories,
                        'laboratories'
                    ),
                    pathologies              : data.pathologies,
                    pathologiesForFilter     : data.pathologiesForFilter,
                    // pathologiesForFilter     : this.initFilterList(
                    //     data.diagnostics,
                    //     data.pathologies,
                    //     'pathologies'
                    // ),
                    standardization          : data.standardization,
                    standardizationForFilter : this.initFilterList(
                        data.diagnostics,
                        data.standardization,
                        'standardization'
                    ),
                    disease          : data.disease,
                    diseaseForFilter : this.initFilterList(
                        data.diagnostics,
                        data.disease,
                        'disease'
                    ),
                    categories          : data.categories
                });
            }.bind(this),
            error: function error(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div className='diagnostic-app'>
                <FilterBox
                    handleLabsFilterChange            = {this.onHandleLabsFilter}
                    handlePathologiesFilterChange     = {this.onHandlePathologiesFilterChange}
                    handleStandardizationFilterChange = {this.onHandleStandardizationFilterChange}
                    handleDiseaseFilterChange         = {this.onHandleDiseaseFilterChange}
                    laboratoriesForFilter             = {this.state.laboratoriesForFilter}
                    pathologiesForFilter              = {this.state.pathologiesForFilter}
                    standardizationForFilter          = {this.state.standardizationForFilter}
                    diseaseForFilter                  = {this.state.diseaseForFilter}
                    appState                          = {this.state.appState}
                />
                <Header appState={this.state.appState} />
                
                <ListBox
                    laboratoriesData         = {this.state.laboratories}
                    laboratoriesForFilter    = {this.state.laboratoriesForFilter}
                    laboratoriesSelection    = {this.state.laboratoriesSelection}
                    diagnosticsData          = {this.state.diagnostics}
                    pathologiesData          = {this.state.pathologies}
                    pathologiesSelection     = {this.state.pathologiesSelection}
                    standardizationData      = {this.state.standardization}
                    standardizationSelection = {this.state.standardizationSelection}
                    categoriesData           = {this.state.categories}
                    diseaseData              = {this.state.disease}
                    diseaseSelection         = {this.state.diseaseSelection}
                    appState                 = {this.state.appState}
                />
            </div>
        );
    }
}
