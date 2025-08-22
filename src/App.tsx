
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


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
  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const loadDummyData = () => {
    const dummyData = {
      // Course Selection
      selectedCourse: 'offline_regular_jee',
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
      
      // Physics, Chemistry, Maths checkboxes for course 6
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
    <div className="container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
      <div className="max-w-4xl mx-auto p-3 sm:p-5 md:p-6 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Prof. P. C. Thomas Classes & Chaithanya Classes</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2">APPLICATION FORM</h2>
          <p className="text-xs sm:text-sm mt-2 text-gray-600">Note : Read Item No. 15 before filling up. (Put a ✓ mark in the appropriate box)</p>
        </div>
        
        <div className="flex justify-end mb-4 sm:mb-5">
          <button 
            type="button" 
            onClick={loadDummyData}
            className="bg-gray-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-700 transition-colors text-xs sm:text-sm shadow-sm"
          >
            Load Sample Data
          </button>
        </div>
        
        {isSubmitted ? (
          <div className="text-center p-4 sm:p-6 md:p-8">
            <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-100 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 sm:mb-4">Application Submitted Successfully!</h3>
              <p className="mb-4 text-sm sm:text-base text-gray-700">Thank you for submitting your application.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-green-700 transition-colors shadow-sm">
                <PDFDownloadButton formData={formData} />
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
              >
                Fill Another Application
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Course Selection</h3>
              <CourseSelection register={register} errors={errors} watch={watch} setValue={setValue} />
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Personal Information</h3>
              <PersonalInformation register={register} errors={errors} />
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Parent/Guardian Information</h3>
              <ParentInformation register={register} errors={errors} />
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Educational Details</h3>
              <EducationalDetails register={register} errors={errors} setValue={setValue} />
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Payment Details</h3>
              <PaymentDetails register={register} errors={errors} />
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2 md:hidden">Terms and Conditions</h3>
                <TermsAndConditions register={register} errors={errors} />
              </div>
              <div>
                <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Photo</h3>
                <PhotoUpload register={register} setValue={setValue} errors={errors} />
              </div>
            </div>
            
            <div className="border p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-800 border-b pb-2">Signatures</h3>
              <Signatures register={register} setValue={setValue} errors={errors} />
            </div>
            
            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-base sm:text-lg font-medium shadow-md"
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
