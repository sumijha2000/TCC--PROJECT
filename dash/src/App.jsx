import React from 'react'
import { Routes, Route } from 'react-router-dom'




// Admin Dashbords
import Sidebar from './components/Sidebar';
import LoginPage from './components/Loginpage';
import Tables from './components/Tables';
import Dashboards from './components/Dashboards';
import FieldForm from './components/FieldForm';
import InventorsForm from './components/InventorsForm';
import BlogsForm from './components/BlogsForm';
import UserSignupTable from './components/UserSignupTable';
import ContactTable from './components/ContactTable';
import UploaderTable from './components/UploaderTable';
import BlogsTable from './components/BlogsTable';
import InventorsTable from './components/InventorsTable';
import InventionTable from './components/InventionTable';
import EconomyForm from './components/EconomyForm';
import Forms from './components/Forms';
import CommunicationForm from './components/ComminicatioFrom';
import CultureForm from './components/CultureForm';
import ScienceForm from './components/ScienceForm';
import EnvironmentForm from './components/EnvironmentForm';
import FashionForm from './components/FashionForm';
import FoodForm from './components/FoodForm';
import HealthForm from './components/HealthForm';
import MedicineForm from './components/MedicineForm';
import PoliticsForm from './components/PoliticsForm';
import SportsForm from './components/SportsForm';
import TechnologyForm from './components/TechnologyForm';
import TransportationForm from './components/TransportationForm';
import ScienceTable from './components/ScienceTable';
import EconomyTable from './components/EconomyTable';
import CultureTable from './components/CultureTable';
import HealthTable from './components/HealthTable';
import FoodTable from './components/FoodTable';
import FashionTable from './components/FashionTable';
import SportsTable from './components/SportsTable';
import TransportationTable from './components/TransportationTable';
import TechnologyTable from './components/TechnologyTable';
import PoliticsTable from './components/PoliticsTable';
import MedicineTable from './components/MedicineTable';
import EnvironmentTable from './components/EnvironmentTable';
import CommunicationTable from './components/CommunicationTable';
import EditEcoForm from './components/EditEcoForm';















const App = () => {
  return (
    <>

     
        <Routes>

          

       

          {/* // Admin Route */}
          <Route path='/admin' Component={Dashboards} />
          <Route path='/sidebar' Component={Sidebar} />
          <Route path='/' Component={LoginPage} />
          <Route path='/tables' Component={Tables} />
          <Route path='/forms' Component={Forms} />
          <Route path='/fieldform' Component={FieldForm} />
          <Route path='/inventorsform' Component={InventorsForm} />
          <Route path='/blogsform' Component={BlogsForm} />
          <Route path='/tables/usersignup' Component={UserSignupTable} />
          <Route path='/tables/contact' Component={ContactTable} />
          <Route path='/tables/uploader' Component={UploaderTable} />
          <Route path='/tables/blogs' Component={BlogsTable} />
          <Route path='/tables/inventors' Component={InventorsTable} />
          <Route path='/tables/invention' Component={InventionTable} />


          <Route path='/forms/economy' Component={EconomyForm} />
          <Route path='/forms/communication' Component={CommunicationForm} />
          <Route path='/forms/culture' Component={CultureForm} />
          <Route path='/forms/environment' Component={EnvironmentForm} />
          <Route path='/forms/fashion' Component={FashionForm} />
          <Route path='/forms/food' Component={FoodForm} />
          <Route path='/forms/health' Component={HealthForm} />
          <Route path='/forms/medicine' Component={MedicineForm} />
          <Route path='/forms/politics' Component={PoliticsForm} />
          <Route path='/forms/science' Component={ScienceForm } />
          <Route path='/forms/sports' Component={SportsForm} />
          <Route path='/forms/technology' Component={TechnologyForm} />
          <Route path='/forms/transportation' Component={TransportationForm} />
          


          {/* tables */}
          <Route path='/sciencetable' Component={ScienceTable} />
          <Route path='/economytable' Component={EconomyTable} />
          <Route path="/editecoform/:id" component={EditEcoForm} />
          <Route path='/culturetable' Component={CultureTable} />
          <Route path='/healthtable' Component={HealthTable} />
          <Route path='/foodtable' Component={FoodTable} />
          <Route path='/sportstable' Component={SportsTable} />
          <Route path='/transtable' Component={TransportationTable} />
          <Route path='/techtable' Component={TechnologyTable} />
          <Route path='/politictable' Component={PoliticsTable} />
          <Route path='/medtable' Component={MedicineTable} />
          <Route path='/envtable' Component={EnvironmentTable} />
          <Route path='/commtable' Component={CommunicationTable} />
          <Route path='/fashiontable' Component={FashionTable} />
          
                
          
          
        </Routes>
      

    </>
  )
}

export default App
