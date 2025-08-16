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
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              className="w-full border rounded-md p-2 text-center"
              {...register(`parentMobile_${index}`, { 
                maxLength: 1,
                pattern: /^\d$/
              })}
            />
          ))}
        </div>
        {errors.parentMobile && (
          <p className="text-red-500 text-sm">{errors.parentMobile.message}</p>
        )}
      </div>

      {/* Alternate Mobile */}
      <div>
        <label htmlFor="alternateMobile" className="block text-sm font-medium mb-1">Alternate Mobile No</label>
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              className="w-full border rounded-md p-2 text-center"
              {...register(`alternateMobile_${index}`, { 
                maxLength: 1,
                pattern: /^\d$/
              })}
            />
          ))}
        </div>
      </div>

      {/* Parent's Whatsapp */}
      <div>
        <label htmlFor="parentWhatsapp" className="block text-sm font-medium mb-1">7. Parent's Whatsapp No</label>
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              className="w-full border rounded-md p-2 text-center"
              {...register(`parentWhatsapp_${index}`, { 
                maxLength: 1,
                pattern: /^\d$/
              })}
            />
          ))}
        </div>
        <p className="text-xs italic mt-1">(For the purpose of sending examination marks and dates of absence)</p>
      </div>

      {/* Student Mobile */}
      <div>
        <label htmlFor="studentMobile" className="block text-sm font-medium mb-1">8. Student Mobile number for sending login details</label>
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              inputMode="numeric"
              pattern="[0-9]"
              className="w-full border rounded-md p-2 text-center"
              {...register(`studentMobile_${index}`, { 
                maxLength: 1,
                pattern: /^\d$/
              })}
            />
          ))}
        </div>
        <p className="text-xs italic mt-1">(For Online & Hybrid batch)</p>
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
        <p className="text-xs italic mt-1">(For Online & Hybrid batch)</p>
        {errors.studentEmail && (
          <p className="text-red-500 text-sm">{errors.studentEmail.message}</p>
        )}
      </div>
    </div>
  );
};

export default ParentInformation;