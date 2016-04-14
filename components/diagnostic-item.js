import React, { PropTypes } from 'React';
import { Modal } from 'react-modal-bootstrap';

export default class DiagnosticItem extends React.Component {
    static propTypes = {
        appState            : PropTypes.object,
        standardizationData : PropTypes.array,
        pathologiesData     : PropTypes.array,
        diseaseData         : PropTypes.array,
        categoriesData      : PropTypes.array,
        diagnosticData      : PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    state = {
        isOpen: false
    };

    handleHideModal = () => {
        this.setState({
            isOpen: false
        });
    };

    handleModalClick = () => {
        this.setState({
            isOpen: true
        });
    };

    render() {
        let DiagnosticModal         = null;
        let methodTemplate          = null;
        let periodTemplate          = null;
        let diseaseTemplate         = null;
        let categoriesTemplate      = null;
        let pathologiesTemplate     = null;
        let noteTemplate            = null;
        let documnetTemplate        = null;
        let codeTemplate            = null;
        let standardizationTemplate = null;

        if (this.state.isOpen) {
            if (this.props.diagnosticData.code) {
                codeTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.code}
                        </div>
                        <div className='diagnostic-data__body'>
                            {this.props.diagnosticData.code}
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.method) {
                methodTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.method}
                        </div>
                        <div className='diagnostic-data__body'>
                            {this.props.diagnosticData.method}
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.period) {
                periodTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.period}
                        </div>
                        <div className='diagnostic-data__body'>
                            {this.props.diagnosticData.period}
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.note) {
                noteTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.note}
                        </div>
                        <div className='diagnostic-data__body'>
                            {this.props.diagnosticData.note}
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.document) {
                documnetTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.document}
                        </div>
                        <div className='diagnostic-data__body'>
                            {this.props.diagnosticData.document}
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.categories.length > 0) {
                categoriesTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.categories}
                        </div>
                        <div className='diagnostic-data__body'>
                            <div className='diagnostic-data__list'>
                                {this.props.diagnosticData.categories.map((category, i) => {
                                    const categoryItem = this.props.categoriesData.find((item) => {

                                        return item.id === category;
                                    });
                                    return (
                                        <div key={i} className='diagnostic-data__list-item'>
                                            {categoryItem.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.pathologies.length > 0) {
                pathologiesTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.pathologies}
                        </div>
                        <div className='diagnostic-data__body'>
                            <div className='diagnostic-data__list'>
                                {this.props.diagnosticData.pathologies.map((pathology, i) => {
                                    const pathologyItem = this.props.pathologiesData.find((item) => {

                                        return item.id === pathology;
                                    });
                                    return (
                                        <div key={i} className='diagnostic-data__list-item'>
                                            {pathologyItem.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.standardization.length > 0) {
                standardizationTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.standardization}
                        </div>
                        <div className='diagnostic-data__body'>
                            <div className='diagnostic-data__list'>
                                {this.props.diagnosticData.standardization.map((standardization, i) => {
                                    const standardizationItem = this.props.standardizationData.find((item) => {

                                        return item.id === standardization;
                                    });
                                    return (
                                        <div key={i} className='diagnostic-data__list-item'>
                                            {standardizationItem.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }

            if (this.props.diagnosticData.disease.length > 0) {
                diseaseTemplate = (
                    <div className='diagnostic-data'>
                        <div className='diagnostic-data__title'>
                            {this.props.appState.localization.disease}
                        </div>
                        <div className='diagnostic-data__body'>
                            <div className='diagnostic-data__pathologies'>
                                {this.props.diagnosticData.disease.map((disease, i) => {
                                    const diseaseItem = this.props.diseaseData.find((item) => {

                                        return item.id === disease;
                                    });
                                    return (
                                        <div key={i} className='diagnostic-data__pathology-item'>
                                            {diseaseItem.title}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            }

            DiagnosticModal = (
                <Modal
                    isOpen={this.state.isOpen}
                    backdrop={false}
                    size='modal-md'
                    key={this.props.diagnosticData.id}
                    onRequestHide={this.handleHideModal}
                >
                    <div className='modal-body'>
                        <div className='diagnostic-modal'>
                            <div className='diagnostic-modal__title'>
                                <h4>
                                    {this.props.diagnosticData.title}
                                </h4>
                            </div>
                        </div>
                        <div className='diagnostic-modal__body'>
                            {codeTemplate}
                            {methodTemplate}
                            {periodTemplate}
                            {documnetTemplate}
                            {noteTemplate}
                            {categoriesTemplate}
                            {pathologiesTemplate}
                            {diseaseTemplate}
                            {standardizationTemplate}

                        </div>
                        <div className='diagnostic-modal__close-button-box'>
                            <button className='diagnostic-modal__close-button btn' onClick={this.handleHideModal}>
                                {this.props.appState.localization.close}
                            </button>
                        </div>
                    </div>
                </Modal>
            );
        } else {
            codeTemplate            = null;
            methodTemplate          = null;
            periodTemplate          = null;
            documnetTemplate        = null;
            noteTemplate            = null;
            diseaseTemplate         = null;
            categoriesTemplate      = null;
            pathologiesTemplate     = null;
            standardizationTemplate = null;
            DiagnosticModal = (
                <Modal
                    isOpen={this.state.isOpen}
                    backdrop={false}
                    size='modal-md'
                    onRequestHide={this.handleHideModal}
                    key={this.props.diagnosticData.id}
                />
            );
        }

        return (
            <div className='diagnostic-item'>
                <div className='diagnostic-item__row'>
                    <div className='diagnostic-item__code'>
                        {this.props.diagnosticData.code}
                    </div>
                    <div className='diagnostic-item__title'>
                        {this.props.diagnosticData.title}
                    </div>
                    <div className='diagnostic-item__period'>
                        {this.props.diagnosticData.period}
                    </div>
                    <div className='diagnostic-item__info'>
                        <button className='btn diagnostic-item__info-button' handleModalClick={this.openModal}>
                            <span className='icon-info'></span>
                        </button>
                    </div>
                {DiagnosticModal}
                </div>
            </div>
		);
    }
}
