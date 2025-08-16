import { useForm } from 'react-hook-form';

type EducationalDetailsProps = {
  register: any;
  errors: any;
};

const EducationalDetails = ({ register, errors }: EducationalDetailsProps) => {
  return (
    <div className="space-y-4">
      {/* School Name */}
      <div>
        <label htmlFor="schoolName" className="block text-sm font-medium mb-1">11. Name of School (10th std)</label>
        <input
          type="text"
          id="schoolName"
          {...register('schoolName')}
          className="w-full border rounded-md p-2"
        />
      </div>

      {/* Marks */}
      <div>
        <label className="block text-sm font-medium mb-1">12. Marks of 10th</label>
        <div className="grid grid-cols-6 gap-4">
          <div>
            <label htmlFor="sslc" className="block text-xs font-medium mb-1">SSLC</label>
            <input
              type="text"
              id="sslc"
              {...register('marks.sslc')}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="plusOne" className="block text-xs font-medium mb-1">+1</label>
            <input
              type="text"
              id="plusOne"
              {...register('marks.plusOne')}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="cbse" className="block text-xs font-medium mb-1">CBSE</label>
            <input
              type="text"
              id="cbse"
              {...register('marks.cbse')}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="stateBoardPlusTwo" className="block text-xs font-medium mb-1">STATE BOARD</label>
            <input
              type="text"
              id="stateBoardPlusTwo"
              {...register('marks.stateBoardPlusTwo')}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="icse" className="block text-xs font-medium mb-1">ICSE</label>
            <input
              type="text"
              id="icse"
              {...register('marks.icse')}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="others" className="block text-xs font-medium mb-1">Others</label>
            <input
              type="text"
              id="others"
              {...register('marks.others')}
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalDetails;