import React, { PropTypes } from 'React';
import DiagnosticItem from './diagnostic-item';
import ReactCSSTransitionGroup from 'react/addons';

export default class LaboratoryItem extends React.Component {
    static propTypes = {
        appState              : PropTypes.array,
        diagnosticsList       : PropTypes.array,
        pathologiesSelection  : PropTypes.array,
        laboratoriesSelection : PropTypes.array,
        laboratoryData        : PropTypes.array,
        diseaseData           : PropTypes.array,
        laboratoriesForFilter : PropTypes.array,
        diagnosticsData       : PropTypes.array,
        categoriesData        : PropTypes.array,
        standardizationData   : PropTypes.array,
        handleEmptyList   : PropTypes.func,
        pathologiesData       : PropTypes.array
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleEmptyList = (action) => {
        this.props.handleEmptyList(action);
    }

    render() {
        let filteredByLabsDiagnosticList = [];
        let laboratoryItemTemplate = '';

        filteredByLabsDiagnosticList = this.props.diagnosticsList.filter((diagnostic) => {
            return diagnostic.laboratories.some((item) => {
                return item === this.props.laboratoryData.id;
            });
        });

        if (filteredByLabsDiagnosticList.length > 0) {
            laboratoryItemTemplate = (
                <div className='list-item' key={this.props.laboratoryData.id}>
                    <h3 className='laboratory-item__title'>
                        {this.props.laboratoryData.title}
                    </h3>
                    <div className='laboratory-item__list'>
                        {filteredByLabsDiagnosticList.map((item, i) => {
                            return (
                                <DiagnosticItem
                                    key                 = {i}
                                    diagnosticData      = {item}
                                    pathologiesData     = {this.props.pathologiesData}
                                    standardizationData = {this.props.standardizationData}
                                    diseaseData         = {this.props.diseaseData}
                                    categoriesData      = {this.props.categoriesData}
                                    appState            = {this.props.appState}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            laboratoryItemTemplate = null;
        }

        return (
            <div className='laboratory-list__item' key={this.props.laboratoryData.id}>
                    {laboratoryItemTemplate}
            </div>
        );
    }
}
