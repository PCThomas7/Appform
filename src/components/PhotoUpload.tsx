import { useState } from 'react';
import { useForm } from 'react-hook-form';

type PhotoUploadProps = {
  register: any;
  setValue: any;
  errors: any;
};

const PhotoUpload = ({ register, setValue, errors }: PhotoUploadProps) => {
  const [photoURL, setPhotoURL] = useState('');
  
  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          const dataURL = event.target.result as string;
          setPhotoURL(dataURL);
          setValue('photo', dataURL);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-dashed border-gray-300 rounded-md p-4 w-32 h-40 flex items-center justify-center bg-gray-50 mb-2">
        {photoURL ? (
          <img src={photoURL} alt="Student Photo" className="max-h-full max-w-full" />
        ) : (
          <p className="text-gray-400 text-sm text-center">Upload Photo</p>
        )}
      </div>
      <input
        type="file"
        id="photo"
        accept="image/*"
        onChange={handlePhotoChange}
        className="text-sm"
      />
      <input
        type="hidden"
        {...register('photo')}
      />
      {errors.photo && (
        <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
      )}
    </div>
  );
};

export default PhotoUpload;