import React from 'react';

export default function ChannelEdit({channel,isOpen,onUpdate,onDelete}) {
  return(
    <div className="bg-light my-3" style={{display: (isOpen) ? 'block' : 'none'}} >
      <form name="editChannel" className="p-3">
        <div className="row">
          <div className="col-sm-6 input-group my-1">
          <div className="input-group-prepend">
          <span className="input-group-text">weight</span>
          </div>
          <input type="text" className="form-control" id="weight" defaultValue={channel.weight} onChange={onUpdate} />
          </div>
          <div className="col-sm-6 input-group my-1">
          <div className="input-group-prepend">
          <span className="input-group-text">category</span>
          </div>
          <input type="text" className="form-control" id="category" defaultValue={channel.category} onChange={onUpdate} />
          </div>
        </div>
      </form>
      <div className="clearfix">
        <button type="button" className="float-right btn btn-danger rounded-0" onClick={onDelete}>
          <i className="">delete channel</i>
        </button>
      </div>
    </div>
  );
}
