import { useState } from 'react';
import { useForm } from 'react-hook-form';

type SignaturesProps = {
  register: any;
  setValue: any;
  errors: any;
};

const Signatures = ({ register, setValue, errors }: SignaturesProps) => {
  const [studentSignatureURL, setStudentSignatureURL] = useState('');
  const [parentSignatureURL, setParentSignatureURL] = useState('');
  
  // Handle student signature upload
  const handleStudentSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const dataURL = event.target.result as string;
          setStudentSignatureURL(dataURL);
          setValue('studentSignature', dataURL);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  // Handle parent signature upload
  const handleParentSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const dataURL = event.target.result as string;
          setParentSignatureURL(dataURL);
          setValue('parentSignature', dataURL);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Student Signature */}
        <div>
          <label htmlFor="studentSignature" className="block text-sm font-medium mb-2">Signature of Student</label>
          <div className="border rounded-md p-4 h-32 flex items-center justify-center bg-gray-50">
            {studentSignatureURL ? (
              <img src={studentSignatureURL} alt="Student Signature" className="max-h-full" />
            ) : (
              <p className="text-gray-400 text-sm">Upload signature image</p>
            )}
          </div>
          <input
            type="file"
            id="studentSignature"
            accept="image/*"
            onChange={handleStudentSignatureChange}
            className="mt-2"
          />
          <input
            type="hidden"
            {...register('studentSignature')}
          />
        </div>

        {/* Parent Signature */}
        <div>
          <label htmlFor="parentSignature" className="block text-sm font-medium mb-2">Signature of Parent</label>
          <div className="border rounded-md p-4 h-32 flex items-center justify-center bg-gray-50">
            {parentSignatureURL ? (
              <img src={parentSignatureURL} alt="Parent Signature" className="max-h-full" />
            ) : (
              <p className="text-gray-400 text-sm">Upload signature image</p>
            )}
          </div>
          <input
            type="file"
            id="parentSignature"
            accept="image/*"
            onChange={handleParentSignatureChange}
            className="mt-2"
          />
          <input
            type="hidden"
            {...register('parentSignature')}
          />
        </div>
      </div>

      {/* Date */}
      <div className="flex justify-end">
        <div className="w-32">
          <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            id="date"
            {...register('date')}
            className="w-full border rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Signatures;