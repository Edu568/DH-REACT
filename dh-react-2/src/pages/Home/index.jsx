import DrinksList from "../../components/DrinksList";
import DrinkDetailModal from "../../components/DrinkModal";
import SearchForm from "../../components/SearchForm";

export default function Home(){
    return(
        <div>
            <SearchForm />
            <DrinksList />
            <DrinkDetailModal />
        </div>
    )
}