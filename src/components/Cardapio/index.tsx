import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/items/actions";
import { RootState } from "../../redux/root-reducer";
import Carrinho from "../Carrinho";
import { ListaItems } from "../ListaItems";
import * as Style from "./styles";
import { CiSearch } from "react-icons/ci";
import { AppDispatch } from "../../redux/store";


const Cardapio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, items, error } = useSelector((state: RootState) => state.itemReducer)

  const menuCategories:{name:string,image:string}[] = [
    {
      name:'Burguers',
      image:'https://s3-alpha-sig.figma.com/img/4c6b/b640/682074bd8f32093df7a218a6af4f165b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRwks5cs0PeT0IdUlWG4-u25pD7ChA5PTEZ-rcg5Y9fX6Zc9HB2T0jEU-0rP9rJ4DWpq1vqJL2glMYVatdkQCBXuiWigwYHu1frpfxTmDocSKpWa8loycLam75Kwt24F3D0ddgrntNJNFgUWjm0dYfcIJXTDndteK4ymSdaBx8v0AsSGiEAp~Fh690IyL63OkfKjW-aHv3WXDdhgw8l2L3SuMDiEQw8p6yXuox64T~nVpTvpSZzBUZndJmKzVXoqIHcv2pbdqkoxK2w3zEENtrVTnUulmvlIGh5esMYhMt62qpZgdbzLZc2j1ur6SSuPQfvD-KD1M2C487Kgn2hdJA__'
    },
    {
      name:'Drinks',
      image:'https://s3-alpha-sig.figma.com/img/476a/2319/9beb6a3677bf24b9c6dba2a73b18ac8c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-OM1Etb00bgHG4b6M062wbLhqZC1I~-KmvcgFjgP01~7OZilcyFE8a3eSkl4bWe-MfbVh4vel5KGoDmltwvAnq0PKdnzLpYBNZITgypLZHk1Lit0hQ5XRulhviWmtSIAujgZR4zh0lm5JeeJ~CnXR2eGAJ2GIPuP1ANENELalJ74y71li4dNuRwLS81-XdOsruZdB5YqiCWs7RmGgBPZJgefcH~3QJjYmOyKq8D2iSDq-POeluntU-LOjlwWk8X3qfIXI5eW1u2W1OmFpyaNTNnjhNbwjlwRwybTjioniPd1NuK2uL9bdzLjGhfIFlssLDManFxuyvWUh3mhIDveQ__'
    },
    {
      name:'Desserts',
      image:'https://s3-alpha-sig.figma.com/img/ae88/8556/b1cfecd253d1171dfa2d1c3bff830286?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIEBF0CMC0N9IDtT5e9Kw-78Zeh-ykrE3~Xpz0UvCvUC03RFGGgt2A5RPpQlXO0usjT0q6Y6DWOeWOHfgI~5Jzwv30x6CJwUSSPjz~B48YwSuNEwbf0rVlcQTZ~xJTyETG6AjXfbcfyPG8BBkgat0tsj2jFl4ua8JD0MOJyGqUZ2b522sN0pmcDOFnkGcdeFg29NXVZZNqZAy7YsRV4T2yp5w3n6C8JOGSPolDDZwIwd~GMZya9qSbOuJWP2dgR9AX0OPdY-ESbn3LjuA-gfi6Og7OxNV3ZxP4P2GX8RVKvHkF2qPqowSGoAPij7qe6ab-Fh5loXoy232fXiIkxLFg__'
    }
  ]

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  { error && <div>Erro</div> }
  
  return (
    <>
    <Style.ContainerSearch>
      <CiSearch size={32} color="#8A94A4" className="iconSearch"/>
      <input type="text" name="" id="" className="searchBar" placeholder="Search menu items" />
    </Style.ContainerSearch>
 
      <Style.FlexContainerItems>
        {
          menuCategories.map((item, index) => (
            <Style.ContainerItem key={index}>
              <Style.MenuImage src={item.image} alt="" />
              <Style.MenuImageText>{item.name}</Style.MenuImageText>
            </Style.ContainerItem>
          ))
        }
      </Style.FlexContainerItems>
    <Style.Container>
      <div className="containerItems">
        <ListaItems
          secao={items?.sections}
        />
        { loading && <Style.ContainerLoader><div></div><div></div><div></div><div></div></Style.ContainerLoader>}
      </div>
      <Carrinho />
    </Style.Container>
    </>
  )
}

export default Cardapio;