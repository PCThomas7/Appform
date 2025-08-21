import { useForm } from 'react-hook-form';

type FormInputs = {
  selectedCourse: string;
  rollNumber: string;
  // Other form fields will be added as needed
};

type CourseSelectionProps = {
  register: any;
  errors: any;
};

const CourseSelection = ({ register, errors }: CourseSelectionProps) => {
  const courses = [
    { id: 1, name: 'Repeater', value: 'repeater' },
    { id: 2, name: 'Bridge Course', value: 'bridge' },
    { id: 3, name: 'Offline Regular Tuition & Entrance Coaching ', value: 'offline_regular' },
    { id: 4, name: 'Online Regular Tuition & Entrance Coaching', value: 'online_regular' },
    { id: 5, name: 'Holiday-Vacation Batch - Tuition & Entrance Coaching', value: 'holiday_vacation' },
    { id: 6, name: 'PCM Tuition only', value: 'tuition_only_hybrid' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <div className="border border-gray-300 p-2 w-48">
          <div className="text-sm mb-1">Roll No</div>
          <input
            type="text"
            {...register('rollNumber')}
            className="w-full p-1 border border-gray-300"
          />
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-center w-16">Course No.</th>
            <th className="border p-2 text-center">Course </th>
            <th className="border p-2 text-center w-24">JEE Stream</th>
            <th className="border p-2 text-center w-24">NEET Stream</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border p-2 text-center">{course.id}</td>
              <td className="border p-2">{course.name}</td>
              <td className="border p-2 text-center">
                {course.id !== 6 ? (
                  <input
                    type="radio"
                    id={`course-${course.id}-jee`}
                    value={`${course.value}_jee`}
                    {...register('selectedCourse', { required: 'Please select a course' })}
                    className="h-4 w-4"
                  />
                ) : (
                  <div className="flex justify-center items-center">
                    <span className="mr-2">Phy</span>
                    <input
                      type="checkbox"
                      id="physics"
                      {...register('physics')}
                      className="h-4 w-4 mx-1"
                    />
                    <span className="mx-2">Che</span>
                    <input
                      type="checkbox"
                      id="chemistry"
                      {...register('chemistry')}
                      className="h-4 w-4 mx-1"
                    />
                    <span className="mx-2">Maths</span>
                    <input
                      type="checkbox"
                      id="maths"
                      {...register('maths')}
                      className="h-4 w-4 mx-1"
                    />
                  </div>
                )}
              </td>
              <td className="border p-2 text-center">
                {course.id !== 7 && (
                  <input
                    type="radio"
                    id={`course-${course.id}-neet`}
                    value={`${course.value}_neet`}
                    {...register('selectedCourse', { required: 'Please select a course' })}
                    className="h-4 w-4"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {errors.selectedCourse && (
        <p className="text-red-500 text-sm">{errors.selectedCourse.message}</p>
      )}
      

    </div>
  );
};

export default CourseSelection;