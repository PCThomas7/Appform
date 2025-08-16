import { useForm } from 'react-hook-form';

type PersonalInformationProps = {
  register: any;
  errors: any;
};

const PersonalInformation = ({ register, errors }: PersonalInformationProps) => {
  return (
    <div className="space-y-4">
      {/* Name */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">1. Name</label>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 12 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-full border rounded-md p-2 text-center uppercase"
                {...register(`name_${index}`, { maxLength: 1 })}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sex */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-1">2. Sex</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                value="Male"
                {...register('gender', { required: 'Gender is required' })}
                className="h-4 w-4 mr-2"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                value="Female"
                {...register('gender', { required: 'Gender is required' })}
                className="h-4 w-4 mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            {...register('dateOfBirth', { required: 'Date of birth is required' })}
            className="w-full border rounded-md p-2"
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>
      </div>

      {/* Father's Name */}
      <div>
        <label htmlFor="fathersName" className="block text-sm font-medium mb-1">3. Father's Name</label>
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-full border rounded-md p-2 text-center uppercase"
              {...register(`fathersName_${index}`, { maxLength: 1 })}
            />
          ))}
        </div>
      </div>

      {/* Occupation */}
      <div>
        <label htmlFor="occupation" className="block text-sm font-medium mb-1">4. Occupation</label>
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-full border rounded-md p-2 text-center uppercase"
              {...register(`occupation_${index}`, { maxLength: 1 })}
            />
          ))}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">5. Address</label>
        <textarea
          id="address"
          rows={3}
          {...register('address', { required: 'Address is required' })}
          className="w-full border rounded-md p-2"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
        
        {/* Pincode */}
        <div className="mt-2">
          <label htmlFor="pincode" className="block text-sm font-medium mb-1">Pin</label>
          <input
            type="text"
            id="pincode"
            {...register('pincode', { 
              required: 'Pincode is required',
              pattern: {
                value: /^\d{6}$/,
                message: 'Pincode must be 6 digits'
              }
            })}
            className="w-32 border rounded-md p-2"
            maxLength={6}
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;