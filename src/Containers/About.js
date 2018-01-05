import React, { Component } from 'react';
import './../style/About.css';

const Poem = `After every war \n
someone has to clean up. \n
Things won’t \n
straighten themselves up, after all. \n

Someone has to push the rubble \n
to the side of the road, \n
so the corpse-filled wagons \n
can pass. \n

Someone has to get mired \n
in scum and ashes, \n
sofa springs, \n
splintered glass, \n
and bloody rags. \n

Someone has to drag in a girder \n
to prop up a wall. \n
Someone has to glaze a window, \n
rehang a door. \n

Photogenic it’s not, \n
and takes years. \n
All the cameras have left \n
for another war. \n

We’ll need the bridges back, \n
and new railway stations. \n
Sleeves will go ragged \n
from rolling them up. \n

Someone, broom in hand, \n
still recalls the way it was.\n
Someone else listens \n
and nods with unsevered head. \n
But already there are those nearby \n
starting to mill about who will find it dull. \n

From out of the bushes \n
sometimes someone still unearths \n
rusted-out arguments \n
and carries them to the garbage pile. \n

Those who knew \n
hat was going on here \n
must make way for \n
those who know little. \n
And less than little. \n
And finally as little as nothing. \n
js
In the grass that has overgrown \n
causes and effects, \n
someone must be stretched out \n
blade of grass in his mouth \n
gazing at the clouds. \n `;

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 class="about-title"> ABOUT </h2>
        <p className="about-text"> {Poem}</p>
        <p className="poet">By Wislawa Szymborska</p>
      </div>
    );
  }
}

export default About;
