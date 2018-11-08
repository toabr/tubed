import React from 'react';

export default function SearchForm(props) {
  return(
    <form name="searchForm" className="my-3" onSubmit={(e) => props.onFormSubmit(e)}>
      <div className="input-group">
        <input
          type="text"
          name="q"
          className="form-control"
          placeholder="Find a new channel"
          onChange={(e) => props.onInputChange(e)}
        />
        <div className="input-group-append">
          <button className="btn btn-default" type="submit">
            <i className="fa fa-search"></i> search
          </button>
        </div>
      </div>
      <a className="text-muted" href="https://developers.google.com/apis-explorer/#s/youtube/v3/youtube.search.list?part=snippet&_h=3&" target="blank">developers.google.com/apis-explorer</a>
    </form>
  );
}
