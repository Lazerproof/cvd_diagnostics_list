import React, { PropTypes }  from 'React';
import LabsFilter from './labs-filter';
import PathologiesFilter from './pathologies-filter';
import StandardizationFilter from './standardizations-filter';
import DiseaseFilter from './disease-filter';

export default class FilterBox extends React.Component {
    static propTypes = {
        appState                          : PropTypes.object,
        handleLabsFilterChange            : PropTypes.func,
        handlePathologiesFilterChange     : PropTypes.func,
        handleStandardizationFilterChange : PropTypes.func,
        handleDiseaseFilterChange         : PropTypes.func,
        pathologiesForFilter              : PropTypes.array,
        laboratoriesForFilter             : PropTypes.array,
        standardizationForFilter          : PropTypes.array,
        diseaseForFilter                  : PropTypes.array,
        laboratories                      : PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    onHandleLabsFilterChange = (value, items) => {
        this.props.handleLabsFilterChange(value, items);
    };

    onHandlePathologiesFilterChange = (value, items) => {
        this.props.handlePathologiesFilterChange(value, items);
    };

    onHandleStandardizationFilterChange = (value, items) => {
        this.props.handleStandardizationFilterChange(value, items);
    };

    onHandleDiseaseFilterChange = (value, items) => {
        this.props.handleDiseaseFilterChange(value, items);
    };

    render() {
        let labsFilterTemaplte            = null;
        let pathologiesFilterTemaplte     = null;
        let diseaseFilterTemaplte         = null;
        let standardizationFilterTemaplte = null;

        if (this.props.laboratoriesForFilter.length > 0) {
            labsFilterTemaplte = (
                <LabsFilter
                    handleLabsFilterChange  = {this.onHandleLabsFilterChange}
                    laboratoriesForFilter   = {this.props.laboratoriesForFilter}
                    appState                = {this.props.appState}
                />
            );
        }

        if (this.props.pathologiesForFilter.length > 0) {
            pathologiesFilterTemaplte = (
                <PathologiesFilter
                    handlePathologiesFilterChange   = {this.onHandlePathologiesFilterChange}
                    pathologiesForFilter            = {this.props.pathologiesForFilter}
                    appState                        = {this.props.appState}
                />
            );
        }

        if (this.props.diseaseForFilter.length > 0) {
            diseaseFilterTemaplte = (
                <DiseaseFilter
                    handleDiseaseFilterChange = {this.onHandleDiseaseFilterChange}
                    diseaseForFilter                  = {this.props.diseaseForFilter}
                    appState                          = {this.props.appState}
                />
            );
        }

        if (this.props.standardizationForFilter.length > 0) {
            standardizationFilterTemaplte = (
                <StandardizationFilter
                    handleStandardizationFilterChange   = {this.onHandleStandardizationFilterChange}
                    standardizationForFilter            = {this.props.standardizationForFilter}
                    appState                            = {this.props.appState}
                />
            );
        }

        return (
            <div className='filters'>
                <div className='filters__box'>
                    {labsFilterTemaplte}
                    {pathologiesFilterTemaplte}
                    {diseaseFilterTemaplte}
                    {standardizationFilterTemaplte}
                </div>
            </div>
        );
    }
}
