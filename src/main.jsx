import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import ListedBooks from './Components/ListedBooks.jsx'
import PagesToRead from './Components/PagesToRead.jsx'
import NotFound from './Components/NotFound.jsx'
import BookDetails from './Components/BookDetails.jsx'
import ReadBooks from './Components/ReadBooks.jsx'
import WishlistBooks from './Components/WishlistBooks.jsx'
import BestSelling from './Components/BestSelling.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/listed-books',
        element : <ListedBooks></ListedBooks>,
        children : [
          {
            path : '/listed-books/read-books',
            element : <ReadBooks></ReadBooks>,
            loader : () => fetch('../books.json')
          },
          {
            path : '/listed-books/wishlist-books',
            element : <WishlistBooks></WishlistBooks>,
            loader : () => fetch('../books.json')
          }
        ]
      },
      {
        path : '/books/:id',
        element : <BookDetails></BookDetails>,
        loader : () => fetch('books.json')
      },
      {
        path : '/pages-to-read',
        element : <PagesToRead></PagesToRead>
      },
      {
        path : '/best-selling-books',
        element : <BestSelling></BestSelling>,
        loader : () => fetch('bestSell.json')
      },
      {
        path : '*',
        element : <NotFound></NotFound> 
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
