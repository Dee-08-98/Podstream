import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Religion from "./Pages/Religion";
import History from "./Pages/History";
import Development from "./Pages/Development";
import Culture from "./Pages/Culture";
import Upload from "./Pages/Upload";
import TrendingBio from "./Pages/TrendingBio";
import Login from "./Pages/Login";
import ProtectRoute from "./ProtectRoute/ProtectRoute";
import { lazy } from "react";
import Popular from "./Pages/Popular";
import SignUp from "./Pages/SignUp";
import ContextApp from "./ContextProvider/ContextApp";
import SportCategoryID from './Pages/Sport/SportCategoryID.jsx'
import Buisness from "./Pages/Buisness/Buisness.jsx";
import BuisnessCategoryID from "./Pages/Buisness/BuisnessCategoryID.jsx";
import Sports from "./Pages/Sport/Sports.jsx";
import News from "./Pages/News/News.jsx";
import Health from "./Pages/Health/Health.jsx";
import Education from "./Pages/Education/Education.jsx";
import Crime from "./Pages/Crime/Crime.jsx";
import Comedy from "./Pages/Comedy/Comedy.jsx";
import ComedyCategoryID from "./Pages/Comedy/ComedyCategoryID.jsx";
import CrimeCategoryID from "./Pages/Crime/CrimeCategoryID.jsx";
import EducationCategoryID from "./Pages/Education/EducationCategoryID.jsx";
import HealthCategoryID from "./Pages/Health/HealthCategoryID.jsx";
import NewsCategoryID from "./Pages/News/NewsCategoryID.jsx";
import Science from "./Pages/Science/Science.jsx";
import ScienceCategoryID from "./Pages/Science/ScienceCategoryID.jsx";
// const Upload = lazy(() => import('./Pages/Upload'))

export default function App() {
  return (
    <div className="bg-black min-h-screen max-h-screen w-full font-serif">

      <BrowserRouter>
        <ContextApp />
        <Routes>


          <Route element={<ProtectRoute />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/biography' element={<Search />}></Route>
            <Route path='/popular' element={<Popular />}></Route>
            <Route path='/upload' element={<Upload />}></Route>
            <Route path='/trending' element={<TrendingBio />}></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />}></Route>


            <Route path='/culture' element={<Culture />}></Route>
            <Route path='/religion' element={<Religion />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/development' element={<Development />}></Route>


            <Route path='/science' element={<Science />}></Route>
            <Route path='/scienceCategory/:id' element={<ScienceCategoryID/>}></Route>

          
            <Route path='/news' element={<News />}></Route>
            <Route path='/newsCategory/:id' element={<NewsCategoryID/>}></Route>

            <Route path='/health' element={<Health />}></Route>
            <Route path='/healthCategory/:id' element={<HealthCategoryID/>}></Route>

            <Route path='/education' element={<Education />}></Route>
            <Route path='/educationCategory/:id' element={<EducationCategoryID/>}></Route>

            <Route path='/crime' element={<Crime />}></Route>
            <Route path='/crimeCategory/:id' element={<CrimeCategoryID/>}></Route>

            <Route path='/comedy' element={<Comedy />}></Route>
            <Route path='/comedyCategory/:id' element={<ComedyCategoryID />}></Route>

            <Route path='/buisness' element={<Buisness />}></Route>
            <Route path='/buisnessCategory/:id' element={<BuisnessCategoryID />}></Route>

            <Route path='/sports' element={<Sports />}></Route>
            <Route path='/sportCategory/:id' element={<SportCategoryID />}></Route>



          </Route>




        </Routes>

      </BrowserRouter>


    </div>
  )
}
