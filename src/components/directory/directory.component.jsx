import React, { useContext } from 'react';
import DirectoryContext from '../../contexts/directory/directory';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const directory = useContext(DirectoryContext)
  const { sections } = directory
  return (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)};

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySections
// });

export default Directory;
