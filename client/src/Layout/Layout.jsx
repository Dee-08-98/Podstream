
import Menu from '../Components/Menu';
import { Holder } from '../ContextProvider/ContextApp';
import Sidebar from '../Components/Sidebar';

const Layout = () => (WrapedComponent) => {



    return (props) => (

        <>


            {/* ================ */}

            <div className='flex w-full h-screen '>

                <div className="hidden lg:block w-[20%] screen ">

                    <Sidebar />
                </div>
                <div className="lg:w-[80%] w-full h-screen   overflow-y-scroll bg-gray-800">
                    <div className="  sm:px-14 md:px-16 lg:px-16  ">
                        <Menu />
                        <div className="mt-3">
                            <WrapedComponent {...props} />
                        </div>

                    </div>

                </div>
            </div>

            {/* ================ */}


        </>
    );
}

export default Layout;







// const Layout = () => (WrapedComponent) => {



//     return (props) => (

//         <Navbar/>
//         <WrapedComponent {...props} />

//     );
// };

// export default Layout;
