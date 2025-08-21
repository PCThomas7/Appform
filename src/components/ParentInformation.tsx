import { useForm } from 'react-hook-form';

type ParentInformationProps = {
  register: any;
  errors: any;
};

const ParentInformation = ({ register, errors }: ParentInformationProps) => {
  return (
    <div className="space-y-4">
      {/* Parent Mobile */}
      <div>
        <label htmlFor="parentMobile" className="block text-sm font-medium mb-1">6. Parent Mobile No</label>
        <input
          type="text"
          id="parentMobile"
          inputMode="numeric"
          maxLength={10}
          className="w-full border rounded-md p-2"
          {...register('parentMobile', { 
            required: 'Parent mobile number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Mobile number must be 10 digits'
            }
          })}
        />
        {errors.parentMobile && (
          <p className="text-red-500 text-sm">{errors.parentMobile.message}</p>
        )}
      </div>

      {/* Alternate Mobile */}
      <div>
        <label htmlFor="alternateMobile" className="block text-sm font-medium mb-1">Alternate Mobile No</label>
        <input
          type="text"
          id="alternateMobile"
          inputMode="numeric"
          maxLength={10}
          className="w-full border rounded-md p-2"
          {...register('alternateMobile', { 
            pattern: {
              value: /^\d{10}$/,
              message: 'Mobile number must be 10 digits'
            }
          })}
        />
        {errors.alternateMobile && (
          <p className="text-red-500 text-sm">{errors.alternateMobile.message}</p>
        )}
      </div>

      {/* Parent's Whatsapp */}
      <div>
        <label htmlFor="parentWhatsapp" className="block text-sm font-medium mb-1">7. Parent's Whatsapp No</label>
        <input
          type="text"
          id="parentWhatsapp"
          inputMode="numeric"
          maxLength={10}
          className="w-full border rounded-md p-2"
          {...register('parentWhatsapp', { 
            required: 'Parent\'s Whatsapp number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Whatsapp number must be 10 digits'
            }
          })}
        />
        <p className="text-xs italic mt-1">(For the purpose of sending examination marks and dates of absence)</p>
        {errors.parentWhatsapp && (
          <p className="text-red-500 text-sm">{errors.parentWhatsapp.message}</p>
        )}
      </div>

      {/* Student Mobile */}
      <div>
        <label htmlFor="studentMobile" className="block text-sm font-medium mb-1">8. Student Mobile number for sending login details</label>
        <input
          type="text"
          id="studentMobile"
          inputMode="numeric"
          maxLength={10}
          className="w-full border rounded-md p-2"
          {...register('studentMobile', { 
            pattern: {
              value: /^\d{10}$/,
              message: 'Mobile number must be 10 digits'
            }
          })}
        />
        
        {errors.studentMobile && (
          <p className="text-red-500 text-sm">{errors.studentMobile.message}</p>
        )}
      </div>

      {/* Parent Email */}
      <div>
        <label htmlFor="parentEmail" className="block text-sm font-medium mb-1">9. Parent's E-mail</label>
        <input
          type="email"
          id="parentEmail"
          {...register('parentEmail', { 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full border rounded-md p-2"
        />
        {errors.parentEmail && (
          <p className="text-red-500 text-sm">{errors.parentEmail.message}</p>
        )}
      </div>

      {/* Student Email */}
      <div>
        <label htmlFor="studentEmail" className="block text-sm font-medium mb-1">10. Student's E-mail for sending login details</label>
        <input
          type="email"
          id="studentEmail"
          {...register('studentEmail', { 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full border rounded-md p-2"
        />
        {errors.studentEmail && (
          <p className="text-red-500 text-sm">{errors.studentEmail.message}</p>
        )}
      </div>
    </div>
  );
};

export default ParentInformation;