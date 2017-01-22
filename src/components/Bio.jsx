import React from 'react';
import { Link } from 'react-router';
import { config } from 'config'; // eslint-disable-line
import { prefixLink } from 'gatsby-helpers' // eslint-disable-line
import avatar from '../../images/avatar.jpg';

export default function Bio() {
  return (
    <div className='bio'>
      <img className='avatar' alt='avatar' src={prefixLink(`${avatar}`)} />
      <p className='intro'>
        Written by <Link to='/about/'>Raghib Hasan</Link> &mdash; an open source developer interested in Javascript and &lambda;.
      </p>
    </div>
  );
}
