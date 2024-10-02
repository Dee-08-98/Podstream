const express = require('express')
const router = express.Router()

const user = require('../Controllers/user.js');
const login = require('../Controllers/userLogin.js');
const admin = require('../Controllers/admin.js');
const adminLogin = require('../Controllers/adminLogin.js');
const bio = require('../Controllers/bioCategory.js');
const authmiddleware = require('../middleware/auth.Js');
const logOut = require('../Controllers/userLogout.js');
const adminLogOut = require('../Controllers/adminLogout.js');
const bioSearch = require('../Controllers/bioCategorySearch.js');
const popularPage = require('../Controllers/popular.js');
const sportCat = require('../Controllers/SportCategory/sport.js');
const sportSpecificContent = require('../Controllers/SportCategory/SportSpecificContent.js');
const cultureCat = require('../Controllers/CultureCategory/cultureCat.js');
const SpecificContent = require('../Controllers/CultureCategory/specificContent.js');
const sportCatData = require('../Controllers/SportCategory/sportsGet.js');
const buisnessCat = require('../Controllers/Buisness/buisness.js');
const buisnessSpecificContent = require('../Controllers/Buisness/BuisnessSpecificContent.js');
const buisnessCatData = require('../Controllers/Buisness/buisnessGet.js');
const comedyCat = require('../Controllers/Comedy/comedy.js');
const comedySpecificContent = require('../Controllers/Comedy/ComedySpecificContent.js');
const comedyCatData = require('../Controllers/Comedy/comedyGet.js');
const educationCat = require('../Controllers/Education/education.js');
const educationSpecificContent = require('../Controllers/Education/EducationSpecificContent.js');
const educationCatData = require('../Controllers/Education/educationGet.js');
const healthCat = require('../Controllers/Health/health.js');
const healthSpecificContent = require('../Controllers/Health/HealthSpecificContent.js');
const healthCatData = require('../Controllers/Health/healthGet.js');
const newsCatData = require('../Controllers/News/newsGet.js');
const newsSpecificContent = require('../Controllers/News/NewsSpecificContent.js');
const newsCat = require('../Controllers/News/news.js');
const scienceCat = require('../Controllers/Science/science.js');
const scienceSpecificContent = require('../Controllers/Science/ScienceSpecificContent.js');
const scienceCatData = require('../Controllers/Science/scienceGet.js');
const findPopular = require('../Controllers/findPopular.js');
const trendingPage = require('../Controllers/Trending/trending.js');
const findTrending = require('../Controllers/Trending/getAllTrending.js');

router.post('/user/register', user)
router.post('/user/login', login)
router.get('/user/logout',authmiddleware , logOut)

router.post('/admin/register', admin)
router.post('/admin/login', adminLogin)
router.get('/admin/logout',authmiddleware , adminLogOut)


router.post('/bioCategory/register', bio)
router.get('/bioCategory/search', bioSearch)

router.post('/bioCategory/culture', cultureCat)
router.post('/bioCategory/cultureCategory/:id', SpecificContent)


router.post('/bioCategory/sport', sportCat)
router.post('/bioCategory/sportCategory/:id', sportSpecificContent)
router.get('/bioCategory/sportData', sportCatData)


router.post('/bioCategory/buisness', buisnessCat)
router.post('/bioCategory/buisnessCategory/:id', buisnessSpecificContent)
router.get('/bioCategory/buisnessData', buisnessCatData)

router.post('/bioCategory/comedy', comedyCat)
router.post('/bioCategory/comedyCategory/:id', comedySpecificContent)
router.get('/bioCategory/comedyData', comedyCatData)

router.post('/bioCategory/education', educationCat)
router.post('/bioCategory/educationCategory/:id', educationSpecificContent)
router.get('/bioCategory/educationData', educationCatData)

router.post('/bioCategory/health', healthCat)
router.post('/bioCategory/healthCategory/:id', healthSpecificContent)
router.get('/bioCategory/healthData', healthCatData)

router.post('/bioCategory/news',newsCat )
router.post('/bioCategory/newsCategory/:id', newsSpecificContent)
router.get('/bioCategory/newsData', newsCatData)

router.post('/bioCategory/science', scienceCat)
router.post('/bioCategory/scienceCategory/:id', scienceSpecificContent)
router.get('/bioCategory/scienceData', scienceCatData)

router.post('/popular', popularPage)
router.get('/getAllPopular', findPopular)

router.post('/trending', trendingPage)
router.get('/getAllTrending', findTrending)









module.exports = router;