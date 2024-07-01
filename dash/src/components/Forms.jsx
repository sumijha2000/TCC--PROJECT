// Forms.jsx
import React from 'react';
import EconomyForm from './EconomyForm';
import InventorsForm from './InventorsForm';
import BlogsForm from './BlogsForm';
import CommunicationForm from './ComminicatioFrom';
import CultureForm from './CultureForm';
import EnvironmentForm from './EnvironmentForm';
import FashionForm from './FashionForm';
import FoodForm from './FoodForm';
import HealthForm from './HealthForm';
import MedicineForm from './MedicineForm';
import PoliticsForm from './PoliticsForm';
import ScienceForm from './ScienceForm';
import SportsForm from './SportsForm';
import TechnologyForm from './TechnologyForm';
import TransportationForm from './TransportationForm';

const Forms = () => {
  return (
    <div className="forms">
      <h2>Forms</h2>
      <div className="form-section">
        <EconomyForm />
      </div>
      <div className="form-section">
        <CommunicationForm />
      </div>
      <div className="form-section">
        <CultureForm />
      </div>
      <div className="form-section">
        <EnvironmentForm />
      </div>
      <div className="form-section">
        <FashionForm />
      </div>
      <div className="form-section">
        <FoodForm />
      </div>
      <div className="form-section">
        <HealthForm />
      </div>
      <div className="form-section">
        <MedicineForm />
      </div>
      <div className="form-section">
        <PoliticsForm />
      </div>
      <div className="form-section">
        <ScienceForm />
      </div>
      <div className="form-section">
        <SportsForm />
      </div>
      <div className="form-section">
        <TechnologyForm />
      </div>
      <div className="form-section">
        <TransportationForm />
      </div>
      
      <div className="form-section">
        <InventorsForm />
      </div>
      <div className="form-section">
        <BlogsForm />
      </div>
    </div>
  );
};

export default Forms;
