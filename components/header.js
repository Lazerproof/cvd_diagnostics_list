import React, { PropTypes }  from 'React';

export default class Header extends React.Component {
    static propTypes = {
        appState : PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='diagnostics-header'>
                <div className='diagnostics-header__code'>
                    {this.props.appState.localization.codeHeader}
                </div>
                <div className='diagnostics-header__title'>
                    {this.props.appState.localization.titleHeader}
                </div>
                <div className='diagnostics-header__period'>
                    {this.props.appState.localization.periodHeader}
                </div>
            </div>
        );
    }
}
