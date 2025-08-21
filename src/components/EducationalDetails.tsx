import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type EducationalDetailsProps = {
  register: any;
  errors: any;
  setValue?: any;
};

const EducationalDetails = ({ register, errors, setValue }: EducationalDetailsProps) => {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedPlusTwoBoard, setSelectedPlusTwoBoard] = useState('');
  const [isRepeaterCourse, setIsRepeaterCourse] = useState(false);
  
  // Check if the selected course is 'repeater'
  useEffect(() => {
    const checkCourseSelection = () => {
      const selectedCourseElement = document.querySelector('input[name="selectedCourse"]:checked');
      if (selectedCourseElement) {
        const courseValue = selectedCourseElement.getAttribute('value');
        setIsRepeaterCourse(courseValue?.startsWith('repeater') || false);
      }
    };
    
    // Initial check
    checkCourseSelection();
    
    // Add event listener to detect changes in course selection
    const courseRadios = document.querySelectorAll('input[name="selectedCourse"]');
    courseRadios.forEach(radio => {
      radio.addEventListener('change', checkCourseSelection);
    });
    
    return () => {
      // Clean up event listeners
      courseRadios.forEach(radio => {
        radio.removeEventListener('change', checkCourseSelection);
      });
    };
  }, []);

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
  
  const handlePlusTwoBoardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const board = e.target.value;
    setSelectedPlusTwoBoard(board);
    // Clear previous +2 marks when board changes
    setValue('marksPlusTwo.sslc', '');
    setValue('marksPlusTwo.cbse', '');
    setValue('marksPlusTwo.stateBoardPlusTwo', '');
    setValue('marksPlusTwo.icse', '');
    setValue('marksPlusTwo.others', '');
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
      
      {/* +2 Educational Details for Repeater Course */}
      {isRepeaterCourse && (
        <>
          {/* School Name for +2 */}
          <div>
            <label htmlFor="schoolNamePlusTwo" className="block text-sm font-medium mb-1">Name of School (+2 std)</label>
            <input
              type="text"
              id="schoolNamePlusTwo"
              {...register('schoolNamePlusTwo')}
              className="w-full border rounded-md p-2"
            />
          </div>
          
          {/* Board Selection for +2 */}
          <div>
            <label htmlFor="boardPlusTwo" className="block text-sm font-medium mb-1">Board (+2 std)</label>
            <select
              id="boardPlusTwo"
              {...register('boardPlusTwo')}
              className="w-full border rounded-md p-2"
              onChange={handlePlusTwoBoardChange}
            >
              <option value="">Select Board</option>
              <option value="SSLC">SSLC</option>
              <option value="CBSE">CBSE</option>
              <option value="STATE BOARD">STATE BOARD</option>
              <option value="ICSE">ICSE</option>
              <option value="Others">Others</option>
            </select>
          </div>
          
          {/* Marks Input based on selected +2 board */}
          {selectedPlusTwoBoard && (
            <div>
              <label htmlFor="marksPlusTwo" className="block text-sm font-medium mb-1">Percentage Marks (+2 std)</label>
              <input
                type="text"
                id="marksPlusTwo"
                {...register(`marksPlusTwo.${selectedPlusTwoBoard.toLowerCase().replace(' ', '')}`)}
                className="w-full border rounded-md p-2"
                placeholder="Enter percentage"
              />
            </div>
          )}
          
          {/* Legacy Marks Fields for +2 - Hidden but kept for compatibility */}
          <div className="hidden">
            <div className="grid grid-cols-6 gap-4">
              <div>
                <input type="text" id="sslcPlusTwo" {...register('marksPlusTwo.sslc')} />
              </div>
              <div>
                <input type="text" id="cbsePlusTwo" {...register('marksPlusTwo.cbse')} />
              </div>
              <div>
                <input type="text" id="stateBoardPlusTwoPlusTwo" {...register('marksPlusTwo.stateBoardPlusTwo')} />
              </div>
              <div>
                <input type="text" id="icsePlusTwo" {...register('marksPlusTwo.icse')} />
              </div>
              <div>
                <input type="text" id="othersPlusTwo" {...register('marksPlusTwo.others')} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationalDetails;