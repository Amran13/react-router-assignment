const getStoredReadItems = () =>{
    const storedReadItems = localStorage.getItem('read-items');
    // const storedWishlistItems = localStorage.getItem('wishlist-items');
    if(storedReadItems){
        return JSON.parse(storedReadItems);
    }
    return [];
}

const getStoredWishlistItems = () =>{
    const storedWishlistItems = localStorage.getItem('wishlist-items');
    if(storedWishlistItems){
        return JSON.parse(storedWishlistItems);
    }
    return [];
}


const saveWishlistItems = id =>{
    const storedWishlistItems = getStoredWishlistItems();
    const exists = storedWishlistItems.find(jobId => jobId === id);
    if(!exists){
        storedWishlistItems.push(id);
        localStorage.setItem('wishlist-items', JSON.stringify(storedWishlistItems))
    }
}

const saveReadItems = id =>{
    const storedReadItems = getStoredReadItems();
    const exists = storedReadItems.find(jobId => jobId === id);
    if(!exists){
        storedReadItems.push(id);
        localStorage.setItem('read-items', JSON.stringify(storedReadItems))
    }
}

export { getStoredReadItems, saveReadItems, getStoredWishlistItems, saveWishlistItems}