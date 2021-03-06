import React, { useContext } from 'react';
import { CartContext } from '../../provider/cart/cart.context';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext)
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

export default CollectionItem;
