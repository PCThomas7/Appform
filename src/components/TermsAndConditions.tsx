import { useForm } from 'react-hook-form';

type TermsAndConditionsProps = {
  register: any;
  errors: any;
};

const TermsAndConditions = ({ register, errors }: TermsAndConditionsProps) => {
  const terms = [
    'I have received the Prospectus and gone through it.',
    'I have received the Joining Memo.',
    'I have received the Time Table.',
    'I am agreeable to all the changes in the time table you may do according to necessity.',
    'I will abide by all the rules and regulations of the coaching centre.',
    'Your decision will be final on matters regarding discipline.',
    'An amount of Rs. 250 will be deducted from the coaching session fee as admission fee.',
    'I will not claim any refund of fees if I discontinue the coaching session.',
    'I understand that the decision of the management of Prof. P.C. Thomas Classes reserve the absolute right to decide the mode of coaching.'
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold">14. a) I have received the Prospectus and gone through it.</h3>
      
      <div className="space-y-2">
        {terms.map((term, index) => (
          <div key={index} className="flex items-start">
            <input
              type="checkbox"
              id={`term-${index}`}
              {...register(`termsAgreed.${index}`, { required: 'You must agree to all terms' })}
              className="h-4 w-4 mt-1 mr-2"
            />
            <label htmlFor={`term-${index}`} className="text-sm">{term}</label>
          </div>
        ))}
      </div>
      {errors.termsAgreed && (
        <p className="text-red-500 text-sm">{errors.termsAgreed.message}</p>
      )}

      <div className="mt-6">
        <h3 className="font-bold mb-2">REFUND OF FEES (General Norms)</h3>
        <p className="text-sm mb-4">
          If you discontinue the class room course you have joined, you are entitled for a partial
          refund of fee, as per the following norms:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            The application for refund must be made in the prescribed form available free of cost from
            the office on request.
          </li>
          <li>
            Admission fees will not be refunded. It is the cost of Registration form, Brochure, Joining
            memo, List of holidays, Application form, Identity & Mark card and other procedures.
          </li>
          <li>
            The cost of study material supplied at the time of admission in toto will not be refunded.
          </li>
          <li>
            For getting refund of the remaining amount the student or guardian has to apply in the
            prescribed application form. If the application is submitted in person, he will get a receipt
            indicating the date of receiving the application. If not submitted in person the application is
            to be sent by registered post. The date of receiving the application will be taken for
            calculating the amount of refund.
          </li>
        </ol>
        
        <p className="text-sm mt-4">
          Number of sessions taken for deduction of the above rates will be the sessions conducted at
          the centre from the date of commencement of the course to the date of receiving the
          application. Whether the student has attended the sessions or not, the sessions conducted at
          the centre will be taken for calculation.
        </p>
        
        <p className="text-sm mt-2">
          The following items namely (1) Fee Receipt (2) Identity card must be surrendered
          along with the application for refund. Without the above items the refund cannot be made.
        </p>
        
        <p className="text-sm mt-2">
          The refund amount will be paid by account payee cheque in the name of the parent or guardian.
        </p>
        
        <p className="text-sm font-bold mt-4">I agree to it.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;