import React from 'react';
import PropTypes from 'prop-types';

function SectionTitle( { title }) {
    return (
        <div className="section__title">
            <h2 className="">
                {title}
            </h2>
        </div>
    )
      
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };
export default SectionTitle;