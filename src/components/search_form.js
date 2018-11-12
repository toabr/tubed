import React from 'react';

export default function SearchForm(props) {
  const apiLink = <a className="text-muted" href="https://developers.google.com/apis-explorer/#s/youtube/v3/youtube.search.list?part=snippet&_h=3&" target="blank">developers.google.com/apis-explorer</a>;
  return(
    <form name="searchForm" className="mb-3" onSubmit={(e) => props.onFormSubmit(e)}>
      <div className="input-group">
        <input
          type="text"
          name="q"
          className="form-control"
          placeholder="search for a channel"
          onChange={(e) => props.onInputChange(e)}
        />
      </div>
      {false && apiLink}
    </form>
  );
}
