import {useState, useEffect} from 'react'
// import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () => {
                try {
                    const res = await fetch('/user/infor', {
                        headers: {Authorization: token}
                    });
                    const data = await res.json();
            
                    setIsLogged(true);
                    data.role === 1 ? setIsAdmin(true) : setIsAdmin(false);
            
                    setCart(data.cart);
            
                } catch (err) {
                    alert(err.message);
                }
            }            
            getUser()
            
        }
    },[token])

    

    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])
        
            const response = await fetch('/user/addcart', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({cart: [...cart, {...product, quantity: 1}]})
            });
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        }
        else{
            alert("This product has been added to cart.")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default UserAPI
 