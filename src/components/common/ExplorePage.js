import React, { useState } from 'react';
import Menu from './Menu';
import Explore from '../Explore/Explore';

function ExplorePage() {
  const [isExploreVisible, setIsExploreVisible] = useState(false);

  const onExploreIconClick = () => {
    setIsExploreVisible(!isExploreVisible);
  };

  return (
    <div>
      <Menu onExploreIconClick={onExploreIconClick} />
      {isExploreVisible && <Explore />}
   
    </div>
  );
}

export default ExplorePage;
