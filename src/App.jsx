
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import OurRecipe from './Components/Our Recipes/OurRecipe';
import Recipes from './Components/Recipes';
import Sidebar from './Components/Sidebar';


function App() {
  

  return (
    <div className='container mx-auto px-4' >
     
    {/* header section  */}
    <Header></Header>
    {/* banner section  */}
    <Banner></Banner>
    {/* our recipe section  */}
    <OurRecipe></OurRecipe>
    {/* Recipe card section  */}
    <section className='flex flex-col md:flex-row gap-6'>
      {/* card section  */}
      <Recipes ></Recipes>
      {/* sidebar */}
      <Sidebar></Sidebar>

    </section>
    
      
       
    </div>
  )
}

export default App
