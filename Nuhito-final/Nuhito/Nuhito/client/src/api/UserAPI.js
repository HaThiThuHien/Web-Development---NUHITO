import { useState, useEffect } from 'react'
// import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await fetch('/user/infor', {
                        headers: { Authorization: token }
                    });
                    const data = await res.json();

                    setIsLogged(true);
                    data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);

                    setCart(data.cart);
                    setWishlist(data.wishlist);

                } catch (err) {
                    alert(err.message);
                }
            }
            getUser()

        }
    }, [token])

    const addCart = async (product, number) => {
        if (!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setCart([...cart, { ...product, quantity: number }])

            const response = await fetch('/user/addcart', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ cart: [...cart, { ...product, quantity: number }] })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                alert("Added to cart successfully!");
            }
        }
        else {
            alert("This product has been added to cart.")
        }
    }

    const addWishlist = async (product) => {
        if (!isLogged) return alert("Please login to continue")

        const check = wishlist.every(item => {
            return item._id !== product._id
        })

        if (check) {
            setWishlist([...wishlist, { ...product }])

            const response = await fetch('/user/addwishlist', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ wishlist: [...wishlist, { ...product }] })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                alert("Added to wishlist successfully!");
            }
        }
        else {
            alert("This product has been added to wishlist.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        wishlist: [wishlist, setWishlist],
        addWishlist: addWishlist,
        history: [history, setHistory]
    }
}

export default UserAPI
