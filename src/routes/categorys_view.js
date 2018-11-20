import React from 'react';
import { Link } from "react-router-dom";

import ChannelData from '../components/channel_data';

function groupChannels(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    let category = obj[property];
    let x = acc.find(item => item.category === category);
    if (!x) {
      acc.push({ category: category, ids: [obj.id] })
    } else {
      x.ids.push(obj.id);
    }
    return acc;
  }, []);
}

function byName(a, b) {
  var nameA = a.category.toUpperCase(); // ignore upper and lowercase
  var nameB = b.category.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

export default function CategorysView({storedChannels}) {

  const groupedChannels = groupChannels(storedChannels, 'category').sort(byName);
  // console.log('groupedChannels', groupedChannels);

  return (
    <div className="categorys-view" >
      <div className="list-group list-group-flush">

        {groupedChannels.map(group => (
          <div key={group.category} className="category list-group-item">

            <Link to={`/category/${group.category}`}>
              <h2>{group.category}</h2>
            </Link>

            <ChannelData id={group.ids} render={ channels => (
              <div className="row">
                {channels.map((channel,i) => (
                  <div key={i} className="channel">
                    <Link to={`/channel/${channel.id}`}>
                      <img
                        src={channel.thumbnails.medium.url}
                        alt={channel.title}
                        title={channel.title}
                        width={channel.thumbnails.medium.width}
                        height={channel.thumbnails.medium.height}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )} />

          </div>
        ))}
      </div>
    </div>
  );
}
