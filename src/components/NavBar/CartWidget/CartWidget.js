import CartIcon from './CartIcon.png';

const CartWidget = () =>{
    return (
  
        <a className="header__logo" href="/">
            <img src={CartIcon} alt="Carrinho" width="50px" height="50px" />
        </a> 
  
    );
  };
  
  export default CartWidget;