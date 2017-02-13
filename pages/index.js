import { config } from 'config'; // eslint-disable-line
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import moment from 'moment';
import Helmet from 'react-helmet';
import { getBlogPosts } from '../src/utils/blog-helpers';
import '../src/css/lists.css';

const Anchor = props => (
  <a target="_blank" rel="noopener noreferrer" href={props.href}>
    {props.title}
  </a>
);

Anchor.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};

export default function BlogIndex(props) {
  const latestBlogPost = getBlogPosts(props.route).shift();
  const { data: { title, date }, path } = latestBlogPost;
  const docTitle = `${config.blogTitle} by ${config.authorName}`;
  // const { data: { title, date }, path } = latestBlogPost;
  // const fromNow = moment(date, 'MM/DD/YYYY').fromNow();

  return (
    <section className="content">
      <Helmet
        title={docTitle}
        meta={[
          { name: 'description', content: config.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:title', content: docTitle },
          { property: 'og:description', content: config.description },
          { name: 'twitter:description', content: config.description },
          { name: 'twitter:title', content: docTitle },
        ]}
      />
      <p>
        Hello, my name is{' '}
        <Link to="/about/">Raghib Hasan</Link>
        . I am a Software Engineer based in Helsinki.
      </p>
      <p>
        I use this space primarily for{' '}
        <Link to="/blog/">writing</Link>
        {' '}
        and helping out{' '}
        <Anchor href="https://youtu.be/Vhh_GeBPOhs" title="developers" />.
      </p>
      {/* <p>
        I am a huge proponent of{' '}
        <Anchor href="//en.wikipedia.org/<wiki/Lifelog" title="lifelogging" />
        {' '}and have been collecting actionable data on myself this year.
       </p>
      <br /> <br /> */
      }
      {/* I will be posting my latest metrics below from{' '}
        <Anchor href="//rescuetime.com" title="Rescuetime" />
        {' '}soon 🦄 . */
      }

      {/* <QuantfiedSelf /> */}
    </section>
  );
}
BlogIndex.propTypes = {
  route: PropTypes.object,
};
