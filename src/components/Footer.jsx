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
          <a href="mailto:abulm@metropolia.fi">
            <Icon icon="send" /> abulm@metropolia.fi
          </a>
        </p>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//raghibm.com/atom"
            >
              <Icon icon="rss" />
            </a>
          </li>
          {/* <li>
            <a rel='noopener noreferrer' target='__blank' href='//facebook.com/rgb211'>
              <Icon icon='facebook' />
            </a>
          </li> */
          }
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//twitter.com/ragmha"
            >
              <Icon icon="twitter" />
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
              href="//linkedin.com/in/raghibhasan"
            >
              <Icon icon="linkedin" />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//medium.com/@Rgb_211"
            >
              <Icon icon="medium" />
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
          {/* Crazy goodreads icon */}
          <li style={{ paddingLeft: 0 }}>
            <a
              rel="noopener noreferrer"
              target="__blank"
              href="//goodreads.com/ragmha"
            >
              <Icon icon="goodreads" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
