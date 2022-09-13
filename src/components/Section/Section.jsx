import PropTypes from 'prop-types';
import { Component } from 'react';
import {Title} from './Section.styled'

class Section extends Component{

    render() {
        const { title } = this.props;
        return (
            <Title>{title}</Title>
        )
    }
}

Section.propTypes = {
    title:PropTypes.string.isRequired,
}

export default Section;