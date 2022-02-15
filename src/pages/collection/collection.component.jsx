import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {

  const collections = useContext(CollectionsContext)
  const collection = collections[match.params.collectionId]
  const { title, items } = collection

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
      </div>
    </div>




    // // one way of doing
    // // Shop data passed is passed as props to children
    // // .Consumer -> we are using context not setting up
    // <CollectionsContext.Consumer>
    //   {
    // //     collections passed as props
    //     collections => {
    //       const collection = collections[match.params.collectionId]
    //       const { title, items } = collection;
    //       return (
    //         <div className='collection-page'>
    //           <h2 className='title'>{title}</h2>
    //           <div className='items'>
    //           {items.map(item => (
    //             <CollectionItem key={item.id} item={item} />
    //           ))}
    //           </div>
    //        </div>
    //       )
    //     }
    //   }
    // </CollectionsContext.Consumer>
  )
};

export default CollectionPage;
