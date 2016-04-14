import React, { PropTypes }  from 'React';
import LaboratoryItem from './laboratory-item';

export default class ListBox extends React.Component {
    static propTypes = {
        handleLabsFilterChange            : PropTypes.func,
        handlePathologiesFilterChange     : PropTypes.func,
        handleStandardizationFilterChange : PropTypes.func,
        handleDiseaseFilterChange         : PropTypes.func,
        appState                          : PropTypes.array,
        standardizationSelection          : PropTypes.array,
        pathologiesSelection              : PropTypes.array,
        diseaseSelection                  : PropTypes.array,
        laboratoriesSelection             : PropTypes.array,
        laboratoriesData                  : PropTypes.array,
        laboratoriesForFilter             : PropTypes.array,
        diagnosticsData                   : PropTypes.array,
        categoriesData                    : PropTypes.array,
        standardizationData               : PropTypes.array,
        diseaseData                       : PropTypes.array,
        pathologiesData                   : PropTypes.array
    };

    constructor(props) {
        super(props);
        this.count = 0;
    }

    onHandleEmptyList = (action) => {
        if (action === 'minus') {
            this.count--;
        } else if (action === 'plus') {
            this.count++;
        }
        console.log(this.count);
    }

    onHandleLabsFilterChange = (value, items) => {
        this.props.handleLabsFilterChange(value, items);
    };

    render() {
        let diagnosticsList = [];

        if (this.props.pathologiesSelection.length === 0) {
            diagnosticsList = this.props.diagnosticsData;
        } else {
            diagnosticsList = this.props.diagnosticsData.filter((diagnostic) => {
                return (
                    diagnostic.pathologies.some((pathologyItem) => {
                        return this.props.pathologiesSelection.indexOf(pathologyItem) !== -1;
                    })
                );
            });
        }

        this.count = 0;

        if (this.props.standardizationSelection.length !== 0) {
            diagnosticsList = diagnosticsList.filter((diagnostic) => {
                return (
                    diagnostic.standardization.some((standardizationItem) => {
                        return this.props.standardizationSelection.indexOf(standardizationItem) !== -1;
                    })
                );
            });
        }

        if (this.props.diseaseSelection.length !== 0) {
            diagnosticsList = diagnosticsList.filter((diagnostic) => {
                return (
                    diagnostic.disease.some((diseaseItem) => {
                        return this.props.diseaseSelection.indexOf(diseaseItem) !== -1;
                    })
                );
            });
        }

        let laboratoriesList = [];

        if (this.props.laboratoriesSelection.length === 0) {
            laboratoriesList = this.props.laboratoriesForFilter;
        } else {
            laboratoriesList = this.props.laboratoriesForFilter.filter((item) => {
                return this.props.laboratoriesSelection.indexOf(item.id) !== -1;
            });
        }

        return (
            <div className='laboratories-list list'>
				{laboratoriesList.map((item, i) => {
                    return (
                        <LaboratoryItem
                            laboratoryData           = {item}
                            pathologiesData          = {this.props.pathologiesData}
                            standardizationData      = {this.props.standardizationData}
                            categoriesData           = {this.props.categoriesData}
                            diseaseData              = {this.props.diseaseData}
                            appState                 = {this.props.appState}
                            pathologiesSelection     = {this.props.pathologiesSelection}
                            standartizationSelection = {this.props.standardizationSelection}
                            diagnosticsList          = {diagnosticsList}
                            handleEmptyList          = {this.onHandleEmptyList}
                            key                      = {i}
                        />
                    );
				})}
            </div>
        );
    }
}
