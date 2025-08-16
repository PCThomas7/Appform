import { useForm } from 'react-hook-form';

type PaymentDetailsProps = {
  register: any;
  errors: any;
};

const PaymentDetails = ({ register, errors }: PaymentDetailsProps) => {
  return (
    <div className="space-y-4">
      {/* Payment Method */}
      <div>
        <label htmlFor="paymentMethod" className="block text-sm font-medium mb-1">13. DD / Online Transfer details</label>
        <input
          type="text"
          id="paymentMethod"
          {...register('paymentMethod')}
          className="w-full border rounded-md p-2"
          placeholder="Payment method details"
        />
      </div>

      {/* Bank Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="bankName" className="block text-sm font-medium mb-1">Name of Bank</label>
          <input
            type="text"
            id="bankName"
            {...register('bankName')}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Total Amount */}
        <div>
          <label htmlFor="totalAmount" className="block text-sm font-medium mb-1">Total Amount</label>
          <input
            type="text"
            id="totalAmount"
            {...register('totalAmount', {
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: 'Please enter a valid amount'
              }
            })}
            className="w-full border rounded-md p-2"
          />
          {errors.totalAmount && (
            <p className="text-red-500 text-sm">{errors.totalAmount.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;