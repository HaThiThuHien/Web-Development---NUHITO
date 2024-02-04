import { useState, useEffect } from 'react'

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('/api/category');
            const data = await res.json();
            setCategories(data);
        }
        getCategories()
    }, [callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoriesAPI