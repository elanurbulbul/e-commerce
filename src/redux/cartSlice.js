import {createSlice} from '@reduxjs/toolkit';

//verileri çağırdığımızda local storage'dan verileri almak için bir fonksiyon oluşturuyoruz
const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart')//get the cart from local storage
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    }
    else {
        return [] //return empty array if nos cart is found in local storage
    }
}
//verileri local storage'a kaydetmek için bir fonksiyon oluşturuyoruz
const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}


const initialState = {
    carts:fetchFromLocalStorage() ,
    itemCount: 0,
    totalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    //normalde extrareducer kullanırdık ama burada api üzerinden veri çekmediğimiz için direkt reducers kullanıyoruz
    //local storage'a veri eklemek veya stateleri güncellemek için addToCart fonksiyonunu oluşturuyoruz
    reducers:{
        addToCart: (state, action) => {
            //bir ürün eklediğimizde state'i güncelliyoruz
            //bir ürün karta eklenmişse tekrar eklenmez state'i güncellemek yerine sadece miktarı arttırıyoruz 
            //verileri alıp map leriz
            const isItemCart = state.carts.find (item => item.id === action.payload.id)
            // herbir elemanı tek tek kontrol eder ve eğer aynı id varsa miktarı arttırır, hr gezdiğin elemanın id değeri action.payload.id'ye eşitse yani dısarıdan gelen id değerine
            if(isItemCart){
                const tempCart = state.carts.map(item => {
                //state cartları tek tek gez ve maple    
                    if(item.id === action.payload.id){
                    //bu iki değer eşitse miktarı arttır
                        let temQty = item.quantity + action.payload.quantity
                        //her urunun guantitiy'si olacak onları artırır
                        let tempTotalPrice = temQty + item.price
                        //her ürünün fiyatını artırır
                        return {...item, quantity: temQty, totalPrice: tempTotalPrice} 
                    }
                    else{
                        return item
                        //eğer aynı id yoksa aynı ürünü geri döndür
                    }
                })
                state.carts = tempCart //state'i güncelle  
                storeInLocalStorage(state.carts) //local storage'a güncel verileri kaydet
            }  
            else{
                state.carts.push(action.payload) //eğer aynı id yoksa yeni ürünü ekler
                storeInLocalStorage(state.carts) //local storage'a güncel verileri kaydet
            }  
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            //itemların id'si action.payload'ye eşit değilse filtrele
            state.carts = tempCart
            storeInLocalStorage(state.carts)
            //ürünü karta eklediğimizde state'i güncelliyoruz
        },
        //silme işlemi yaparken dısarıdan bi id göndericz onun üzerinden filtreleme yapıcak, farklı olanları filtrele aynı olanları sil
        
        clearCart: (state) => {
            state.carts = []
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) =>
            {
                return cartTotal += cartItem.price * cartItem.quantity
            },0)
            state.itemCount = state.carts.length
        }
    }
})

export const {addToCart, removeFromCart, clearCart, getCartTotal} = cartSlice.actions
export default cartSlice.reducer