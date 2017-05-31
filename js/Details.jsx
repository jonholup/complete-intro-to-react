// @flow

import React from 'react';

const Details = props => {
  const { title, description, year, poster, trailer } = props.show;
  <div className="details">
    <header>
      <h1>svideo</h1>
    </header>
    <section>
      <h1>{title}</h1>
      <h2>({year})</h2>
      <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
      <p>{description}</p>
      </section>
      <div>
      <iframe
      src={`https://youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
      frameBorder="0"
      allowFullScreen
      title={`Trailer for ${title}`}
      />
  </div>
};

export default Details;
