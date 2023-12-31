import React from 'react';
import { useSelector } from 'react-redux';
import './WishlistPage.css';
import { useNavigate } from 'react-router-dom';
import WishlistButton from '../Buttons/WishlistButtons/WishlistButton';

const WishlistPage: React.FC = function () {
  const navigate = useNavigate();
  function goToProduct(id: number) {
    navigate('/product', { state: { id } });
  }
  const { wishlistItems } = useSelector((state: any) => state.wishlist);
  const wishlistLength = wishlistItems.length;
  return (
    <div className="wishlist-container">
      {wishlistLength === 0 ? (
        <div className="empty-wishlist-image-container">
          <img
            src="/other/empty-wishlist.png"
            alt="empty wishlist"
            className="empty-wishlist-image"
          />
        </div>
      ) : (
        <div className="wishlist-items-container">
          {wishlistItems.map(
            (item: {
              key: React.Key | null | undefined;
              id: number;
              url: string;
              name: string;
              price: number;
            }) => {
              const wishlistImage =
                process.env.REACT_APP_BACKEND_API_URL + item.url;
              return (
                <div className="wishlist-item" key={item.id}>
                  <button
                    className="productimage-container"
                    type="button"
                    onClick={() => goToProduct(item.id)}
                  >
                    <img src={wishlistImage} alt="" className="product-image" />
                  </button>
                  <h2 className="product-head">{item.name}</h2>
                  <p className="price">Price ${item.price}</p>
                  <WishlistButton productId={item.id} />
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
