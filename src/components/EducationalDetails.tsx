import { useState } from 'react';
import { useForm } from 'react-hook-form';

type EducationalDetailsProps = {
  register: any;
  errors: any;
  setValue?: any;
};

const EducationalDetails = ({ register, errors, setValue }: EducationalDetailsProps) => {
  const [selectedBoard, setSelectedBoard] = useState('');

  const handleBoardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const board = e.target.value;
    setSelectedBoard(board);
    // Clear previous marks when board changes
    setValue('marks.sslc', '');
    setValue('marks.cbse', '');
    setValue('marks.stateBoardPlusTwo', '');
    setValue('marks.icse', '');
    setValue('marks.others', '');
  };

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

      {/* Board Selection */}
      <div>
        <label htmlFor="board" className="block text-sm font-medium mb-1">12. Board of 10th</label>
        <select
          id="board"
          {...register('board')}
          className="w-full border rounded-md p-2"
          onChange={handleBoardChange}
        >
          <option value="">Select Board</option>
          <option value="SSLC">SSLC</option>
          <option value="CBSE">CBSE</option>
          <option value="STATE BOARD">STATE BOARD</option>
          <option value="ICSE">ICSE</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Marks Input based on selected board */}
      {selectedBoard && (
        <div>
          <label htmlFor="marks" className="block text-sm font-medium mb-1">Percentage Marks</label>
          <input
            type="text"
            id="marks"
            {...register(`marks.${selectedBoard.toLowerCase().replace(' ', '')}`)} 
            className="w-full border rounded-md p-2"
            placeholder="Enter percentage"
          />
        </div>
      )}

      {/* Legacy Marks Fields - Hidden but kept for compatibility */}
      <div className="hidden">
        <div className="grid grid-cols-6 gap-4">
          <div>
            <input type="text" id="sslc" {...register('marks.sslc')} />
          </div>
          <div>
            <input type="text" id="plusOne" {...register('marks.plusOne')} />
          </div>
          <div>
            <input type="text" id="cbse" {...register('marks.cbse')} />
          </div>
          <div>
            <input type="text" id="stateBoardPlusTwo" {...register('marks.stateBoardPlusTwo')} />
          </div>
          <div>
            <input type="text" id="icse" {...register('marks.icse')} />
          </div>
          <div>
            <input type="text" id="others" {...register('marks.others')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalDetails;