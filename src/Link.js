import React from 'react';
import classnames from '../node_modules/classnames/';
import PropTypes from 'prop-types';

class Link extends React.Component {

    className() {
        classnames(this.props.className, {link: this.props.theme !== 'no'});
    }

    onClick(e) {
        const newTab = e.metaKey || e.ctrlKey;
        if (!newTab && !this.props.href.startsWith('http')) {
            e.preventDefault();
            this.props.ejecutar();
        }
    }

    render() {
        return <a className={this.className()} href={this.props.href} onClick={this.onClick}>
            {this.props.children}
        </a>
    }

};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    theme: PropTypes.oneOf([
        'no',
        'default',
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
};

Link.defaultProps = {
    theme: 'default',
    className: '',
};

export default Link;