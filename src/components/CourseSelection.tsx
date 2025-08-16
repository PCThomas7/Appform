import { useForm } from 'react-hook-form';

type FormInputs = {
  selectedCourse: string;
  // Other form fields will be added as needed
};

type CourseSelectionProps = {
  register: any;
  errors: any;
};

const CourseSelection = ({ register, errors }: CourseSelectionProps) => {
  const courses = [
    { id: 1, name: 'Bridge Course', value: 'bridge' },
    { id: 2, name: 'School Integrated Entrance Coaching', value: 'school_integrated' },
    { id: 3, name: 'Offline Regular Tuition & Entrance Coaching (State)', value: 'offline_regular_state' },
    { id: 4, name: 'Offline Regular Tuition & Entrance Coaching (CBSE)', value: 'offline_regular_cbse' },
    { id: 5, name: 'Online Regular Tuition & Entrance Coaching', value: 'online_regular' },
    { id: 6, name: 'Tuition & Entrance + Plus1 (Holiday/Vacation Batch)', value: 'tuition_entrance_plus1' },
    { id: 7, name: 'Tuition as per Hybrid Batch', value: 'hybrid_batch' },
  ];

  return (
    <div className="space-y-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left w-16">Sl. No.</th>
            <th className="border p-2 text-left">Course Name & Entrance Exam</th>
            <th className="border p-2 text-center w-24">Self No.</th>
            <th className="border p-2 text-center w-24">Mark if Selected</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border p-2 text-center">{course.id}</td>
              <td className="border p-2">{course.name}</td>
              <td className="border p-2"></td>
              <td className="border p-2 text-center">
                <input
                  type="radio"
                  id={`course-${course.id}`}
                  value={course.value}
                  {...register('selectedCourse', { required: 'Please select a course' })}
                  className="h-4 w-4"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errors.selectedCourse && (
        <p className="text-red-500 text-sm">{errors.selectedCourse.message}</p>
      )}
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="border p-2 text-center">
          <label htmlFor="day" className="block text-sm font-medium">Day</label>
          <input
            type="checkbox"
            id="day"
            {...register('day')}
            className="h-4 w-4 mt-1"
          />
        </div>
        <div className="border p-2 text-center">
          <label htmlFor="one" className="block text-sm font-medium">One</label>
          <input
            type="checkbox"
            id="one"
            {...register('one')}
            className="h-4 w-4 mt-1"
          />
        </div>
        <div className="border p-2 text-center">
          <label htmlFor="month" className="block text-sm font-medium">Month</label>
          <input
            type="checkbox"
            id="month"
            {...register('month')}
            className="h-4 w-4 mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;