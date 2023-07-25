import { CategoriesProvider } from "./context/CategoriesProvider"
import {CartProvider} from "./context/CartProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"
import { ModalProvider } from "./context/ModalProvider"

function App() {

  return (
    <ModalProvider>
      <CartProvider>
        <MainLayout>
          <DrinksProvider>
            <CategoriesProvider>
              <CartProvider>
                <AppRoutes />
              </CartProvider>
            </CategoriesProvider>
          </DrinksProvider>
        </MainLayout>
      </CartProvider>
    </ModalProvider>
  )
}

export default App
