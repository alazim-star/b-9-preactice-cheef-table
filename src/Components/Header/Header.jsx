

const Header = () => {
    return (
   
        <div className="flex justify-between items-center my-8 space-y-4">
            {/* logo  */}
            <h1 className="text-gray-800 font-bold text-3xl ">Chef &apos;s Table</h1>



            {/* menu start  */}
            <div className="flex flex-row justify-between items-center gap-4">
            <ul className="flex gap-6 text-gray-600 font-semibold text-base">
                <li>
                    <a href="">Home</a>
            
                </li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>

            </ul>
            </div>
            {/* search  */}
            <div className="flex justify-between items-center relative">
            <input className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray- 800 outline-none" type="text" placeholder="Search"/>

            
           
         {/* icon  */}

                <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
                    <i className="fa-regular fa-user-circle text-3xl"></i>
  
                </div>

                </div>
             

            </div>

       
     
     


    );
};

export default Header;