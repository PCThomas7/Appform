import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  // Course Selection
  selectedCourse: string;
  
  // Personal Information
  name: string;
  gender: 'Male' | 'Female';
  dateOfBirth: string;
  fathersName: string;
  occupation: string;
  address: string;
  pincode: string;
  
  // Contact Information
  parentMobile: string;
  alternateMobile: string;
  parentWhatsapp: string;
  studentMobile: string;
  parentEmail: string;
  studentEmail: string;
  
  // Educational Details
  schoolName: string;
  marks: {
    sslc: string;
    plusOne: string;
    cbse: string;
    stateBoardPlusTwo: string;
    icse: string;
    others: string;
  };
  
  // Payment Details
  paymentMethod: string;
  bankName: string;
  totalAmount: string;
  
  // Terms and Conditions
  termsAgreed: boolean[];
  
  // Signatures
  studentSignature: string;
  parentSignature: string;
};

const ApplicationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  
  const onSubmit = (data: FormInputs) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Prof. P. C. Thomas Classes</h1>
        <h2 className="text-xl">APPLICATION FORM FOR REGULAR & SUNDAY BATCHES (2025-27)</h2>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Form content will be implemented in sections */}
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Course Selection</h3>
          {/* Course selection fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Personal Information</h3>
          {/* Personal information fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Parent/Guardian Information</h3>
          {/* Parent/Guardian information fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Educational Details</h3>
          {/* Educational details fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Payment Details</h3>
          {/* Payment details fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Terms and Conditions</h3>
          {/* Terms and conditions fields will be added here */}
        </div>
        
        <div className="border p-4 rounded-md">
          <h3 className="font-bold mb-2">Signatures</h3>
          {/* Signature fields will be added here */}
        </div>
        
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;