
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

// Import components
import ApplicationForm from './components/ApplicationForm';
import CourseSelection from './components/CourseSelection';
import PersonalInformation from './components/PersonalInformation';
import ParentInformation from './components/ParentInformation';
import EducationalDetails from './components/EducationalDetails';
import PaymentDetails from './components/PaymentDetails';
import TermsAndConditions from './components/TermsAndConditions';
import Signatures from './components/Signatures';
import PhotoUpload from './components/PhotoUpload';

// Import PDF generator
import { PDFDownloadButton } from './utils/pdfGenerator';

function App() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const loadDummyData = () => {
    const dummyData = {
      // Course Selection
      selectedCourse: 'offline_regular_state_jee',
      rollNumber: 'PCR2025',
      
      // Personal Information
      name: 'JOHN DOE',
      gender: 'Male',
      dateOfBirth: '2008-05-15',
      fathersName: 'JAMES DOE',
      occupation: 'SOFTWARE ENGINEER',
      address: '123 MAIN STREET, APARTMENT 4B, KOCHI',
      pincode: '682001',
      
      // Parent Information
      parentMobile: '9876543210',
      alternateMobile: '8765432109',
      parentWhatsapp: '9876543210',
      studentMobile: '7654321098',
      parentEmail: 'parent@example.com',
      studentEmail: 'student@example.com',
      
      // Educational Details
      schoolName: 'ST. THOMAS HIGHER SECONDARY SCHOOL',
      board: 'CBSE',
      marksType: 'percentage',
      marks: '95',
      
      // Payment Details
      paymentMethod: 'cash',
      amount: '25000',
      
      // Terms and Conditions
      termsAccepted: true,
      
      // Physics, Chemistry, Maths checkboxes for course 7
      physics: false,
      chemistry: false,
      maths: false
    };
    
    reset(dummyData);
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setFormData(data);
    setIsSubmitted(true);
    // Here you could send the data to a server or generate a PDF
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Prof. P. C. Thomas Classes & Chaithanya Classes</h1>
          <h2 className="text-xl">APPLICATION FORM </h2>
          <p className="text-sm mt-2">Note : Read Item No. 15 before filling up. (Put a ✓ mark in the appropriate box)</p>
        </div>
        
        <div className="flex justify-end mb-4">
          <button 
            type="button" 
            onClick={loadDummyData}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm"
          >
            Load Sample Data
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center p-8">
            <h3 className="text-xl font-bold text-green-600 mb-4">Application Submitted Successfully!</h3>
            <p className="mb-4">Thank you for submitting your application.</p>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                <PDFDownloadButton formData={formData} />
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Fill Another Application
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Course Selection</h3>
              <CourseSelection register={register} errors={errors} />
            </div>
            
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Personal Information</h3>
              <PersonalInformation register={register} errors={errors} />
            </div>
            
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Parent/Guardian Information</h3>
              <ParentInformation register={register} errors={errors} />
            </div>
            
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Educational Details</h3>
              <EducationalDetails register={register} errors={errors} setValue={setValue} />
            </div>
            
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Payment Details</h3>
              <PaymentDetails register={register} errors={errors} />
            </div>
            
            <div className="border p-4 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h3 className="font-bold mb-4">Terms and Conditions</h3>
                <TermsAndConditions register={register} errors={errors} />
              </div>
              <div>
                <h3 className="font-bold mb-4">Photo</h3>
                <PhotoUpload register={register} setValue={setValue} errors={errors} />
              </div>
            </div>
            
            <div className="border p-4 rounded-md">
              <h3 className="font-bold mb-4">Signatures</h3>
              <Signatures register={register} setValue={setValue} errors={errors} />
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App
