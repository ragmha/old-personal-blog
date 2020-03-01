import React, { PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line

const Icon = ({ icon }) => (
  <span
    className="footer-icon"
    style={{ backgroundImage: `url(${prefixLink(`/icons/${icon}.svg`)})` }}
  />
);

Icon.propTypes = {
  icon: PropTypes.string,
};

export default function Footer() {
  return (
    <footer>
      <section>
        <p>
          <a href="mailto:raghibhasan@gmail.com">
            <Icon icon="send" /> raghibhasan@gmail.com
          </a>
        </p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//raghibhasan.com/atom"
            >
              <Icon icon="rss" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//github.com/ragmha"
            >
              <Icon icon="github" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//open.spotify.com/user/rgbm21"
            >
              <Icon icon="spotify" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
