import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
    fontFamily: 'Helvetica',
    marginTop: 20,
  },
  header: {
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 4,
  },
  note: {
    fontSize: 8,
    marginTop: 2,
    marginBottom: 2,
    
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginBottom: 2,
    marginTop: 2,
  },
  rollNoBox: {
    width: 50,
    height: 18,
    border: '1px solid #000',
    marginLeft: 'auto',
  },
  rollNoLabel: {
    fontSize: 8,
    textAlign: 'center',
  },
  table: {
    marginTop: 4,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 30,
    marginRight: 30,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 20,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    padding: 2,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableCellLeft: {
    padding: 2,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'left',
    justifyContent: 'center',
  },
  courseNoCell: {
    width: '8%',
  },
  courseNameCell: {
    width: '52%',
  },
  streamCell: {
    width: '20%',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  checkboxLabel: {
    fontSize: 8,
    marginRight: 2,
  },
  checkbox: {
    width: 10,
    height: 10,
    border: '1px solid #000',
    marginRight: 2,
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'flex-start',
      marginLeft: 30,
    marginRight: 30,
  },
  formLabel: {
    fontSize: 9,
    width: '20%',
    marginRight: 4,
  },
  formValue: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  charBox: {
    width: 14,
    height: 14,
    border: '1px solid #000',
    marginRight: 2,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  charText: {
    fontSize: 9,
    textAlign: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    border: '1px solid #000',
    marginRight: 2,
  },
  radioFilled: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    margin: 1,
  },
  radioLabel: {
    fontSize: 9,
  },
  smallNote: {
    fontSize: 7,
    fontStyle: 'italic',
    marginTop: 1,
    marginLeft: 4,
  },
  photo: {
    width: 70,
    height: 80,
    border: '1px solid #000',
    marginTop: 2,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  signatureBox: {
    width: '30%',
    alignItems: 'center',
  },
  signatureLabel: {
    fontSize: 9,
    marginTop: 2,
  },
  signature: {
    width: 100,
    height: 50,
    border: '1px solid #000',
  },
  refundSection: {
    marginTop: 6,
    border: '1px solid #000',
    padding: 6,
      marginLeft: 30,
    marginRight: 30,
  },
  refundTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 3,
  },
  refundText: {
    fontSize: 8,
    marginBottom: 1,
    lineHeight: 1.3,
  },
  termsSection: {
    marginTop: 6,
      marginLeft: 30,
    marginRight: 30,
  },
  termItem: {
    fontSize: 9,
    marginBottom: 1,
    lineHeight: 1.3,
  },
  paymentSection: {
    marginBottom: 8,
      marginLeft: 30,
    marginRight: 30,
  },
  paymentRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  paymentField: {
    marginLeft: 4,
    height: 16,
    border: '1px solid #000',
    flex: 1,
    marginRight: 4,
  },
  paymentText: {
    fontSize: 9,
    paddingLeft: 2,
  },
});

// Helper function to create character boxes for text fields
const CharacterBoxes = ({ text = '', count = 12 }) => {
  const chars = text ? text.toUpperCase().split('') : [];
  
  return (
    <View style={styles.formValue}>
      {Array.from({ length: count }).map((_, index) => (
        <View key={index} style={styles.charBox}>
          {index < chars.length && (
            <Text style={styles.charText}>{chars[index]}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

// Helper function for radio buttons
const RadioButton = ({ selected, label }) => (
  <View style={styles.radioOption}>
    <View style={styles.radioCircle}>
      {selected && <View style={styles.radioFilled} />}
    </View>
    <Text style={styles.radioLabel}>{label}</Text>
  </View>
);

// Helper function for checkboxes
const Checkbox = ({ checked, label }) => (
  <View style={styles.checkboxRow}>
    {label && <Text style={styles.checkboxLabel}>{label}</Text>}
    <View style={styles.checkbox}>
      {checked && (
        <View style={{
          width: 6,
          height: 6,
          backgroundColor: '#000',
          margin: 1,
        }} />
      )}
    </View>
  </View>
);

// PDF Document component
const ApplicationFormPDF = ({ formData }: { formData: any }) => {
  // Extract course type and stream from selectedCourse
  const courseValue = formData.selectedCourse || '';
  const isJEEStream = courseValue.includes('jee');
  const isNEETStream = courseValue.includes('neet');
  const courseType = courseValue.split('_')[0];
  
  // Format date of birth
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  return (
    <Document>
      {/* First Page */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Prof. P. C. Thomas Classes & Chaithanya Classes</Text>
          <Text style={styles.subtitle}>APPLICATION FORM</Text>
          <View style={styles.headerRow}>
            <Text style={styles.note}>Note : Read Item No. 15 before filling up. (Put a ✓ mark in the appropriate box)</Text>
            <View>
              <Text style={styles.rollNoLabel}>Roll No</Text>
              <View style={styles.rollNoBox}>
                <Text style={{ fontSize: 10, textAlign: 'center' }}>{formData.rollNumber}</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Course Selection Table */}
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>Course No.</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Course </Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Text>JEE Stream</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Text>NEET Stream</Text>
            </View>
          </View>
          
          {/* Repeater */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>1</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Repeater</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'repeater' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'repeater' && isNEETStream} />
            </View>
          </View>
          
          {/* Bridge Course */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>2</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Bridge Course</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'bridge' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'bridge' && isNEETStream} />
            </View>
          </View>
          
          {/* Offline Regular */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>3</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Offline Regular Tuition & Entrance Coaching</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular' && isNEETStream} />
            </View>
          </View>
          
          {/* Online Regular */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>4</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Online Regular Tuition & Entrance Coaching</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'online_regular' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'online_regular' && isNEETStream} />
            </View>
          </View>
          
          {/* Hybrid Batch */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>5</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Holiday-Vacation Batch - Tuition & Entrance Coaching</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'holiday_vacation' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'holiday_vacation' && isNEETStream} />
            </View>
          </View>
          
          {/* Tuition only */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>6</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>PCM Tuition only</Text>
            </View>
            <View style={[styles.tableCell, { width: '40%' }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Checkbox label="Phy" checked={formData.physics} />
                <Checkbox label="Che" checked={formData.chemistry} />
                <Checkbox label="Maths" checked={formData.maths} />
              </View>
            </View>
          </View>
        </View>
        
        {/* Personal Information */}
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>1. Name</Text>
          <CharacterBoxes text={formData.name} count={30} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>2. Sex</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton selected={formData.gender === 'Male'} label="Male" />
            <RadioButton selected={formData.gender === 'Female'} label="Female" />
            <Text style={[styles.formLabel, { marginLeft: 20 }]}>Date of Birth</Text>
            <Text style={{ fontSize: 9, border: '1px solid #000', padding: 2, width: 80, textAlign: 'center' }}>{formatDate(formData.dateOfBirth)}</Text>
          </View>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>3. Father's Name</Text>
          <CharacterBoxes text={formData.fathersName} count={30} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>4. Occupation</Text>
          <CharacterBoxes text={formData.occupation} count={30} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>5. Address</Text>
          <View style={{ width: '80%' }}>
            <CharacterBoxes text={formData.address?.substring(0, 35)} count={35} />
            <CharacterBoxes text={formData.address?.substring(35, 70)} count={35} />
            <CharacterBoxes text={formData.address?.substring(70, 105)} count={35} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
              <Text style={{ fontSize: 6, marginRight: 2 }}>Pin</Text>
              <CharacterBoxes text={formData.pincode} count={6} />
            </View>
          </View>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>6. Parent Mobile No</Text>
          <CharacterBoxes text={formData.parentMobile} count={10} />
          <Text style={{ fontSize: 6, marginLeft: 5, marginRight: 2 }}>Alternate Mobile No</Text>
          <CharacterBoxes text={formData.alternateMobile} count={10} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>7. Parent's Whatsapp No</Text>
          <CharacterBoxes text={formData.parentWhatsapp} count={10} />
          <Text style={styles.smallNote}>(For the purpose of sending examination marks and dates of absence)</Text>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>8. Student Mobile number for sending login details</Text>
          <CharacterBoxes text={formData.studentMobile} count={10} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>9. Parent's E-mail</Text>
          <CharacterBoxes text={formData.parentEmail} count={35} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>10. Student's E-mail for sending login details</Text>
          <CharacterBoxes text={formData.studentEmail} count={35} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>11. Name of School (10th Std)</Text>
          <CharacterBoxes text={formData.schoolName} count={35} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>12. Marks of 10th</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Show selected board and marks */}
            {formData.board && (
              <View style={{ marginRight: 10, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 8, marginRight: 5 }}>{formData.board}:</Text>
                <View style={{ border: '1px solid #000', padding: 2, width: 40 }}>
                  <Text style={{ fontSize: 8, textAlign: 'center' }}>
                    {formData.board === 'CBSE' && formData.marks?.cbse}
                    {formData.board === 'STATE BOARD' && formData.marks?.stateboard}
                    {formData.board === 'ICSE' && formData.marks?.icse}
                    {formData.board === 'Others' && formData.marks?.others}
                  </Text>
                </View>
              </View>
            )}
            
            {/* Legacy display for backward compatibility */}
            {!formData.board && (
              <>
                <View style={{ marginRight: 5, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5 }}>STATE BOARD</Text>
                  <CharacterBoxes text={formData.marks?.stateboard} count={4} />
                </View>
                <View style={{ marginRight: 5, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5 }}>CBSE</Text>
                  <CharacterBoxes text={formData.marks?.cbse} count={4} />
                </View>
                <View style={{ marginRight: 5, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5 }}>ICSE</Text>
                  <CharacterBoxes text={formData.marks?.icse} count={4} />
                </View>
                <View style={{ marginRight: 5, marginBottom: 2 }}>
                  <Text style={{ fontSize: 5 }}>Others</Text>
                  <CharacterBoxes text={formData.marks?.others} count={4} />
                </View>
              </>
            )}
          </View>
        </View>
        
        {/* +2 Educational Details for Repeater Course */}
        {formData.selectedCourse?.startsWith('repeater') && (
          <>
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Name of School (+2 std)</Text>
              <CharacterBoxes text={formData.schoolNamePlusTwo} count={35} />
            </View>
            
            <View style={styles.formRow}>
              <Text style={styles.formLabel}>Board (+2 std)</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                {/* Show selected +2 board and marks */}
                {formData.boardPlusTwo && (
                  <View style={{ marginRight: 10, marginBottom: 2, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 8, marginRight: 5 }}>{formData.boardPlusTwo}:</Text>
                    <View style={{ border: '1px solid #000', padding: 2, width: 40 }}>
                      <Text style={{ fontSize: 8, textAlign: 'center' }}>
                        {formData.boardPlusTwo === 'CBSE' && formData.marksPlusTwo?.cbse}
                        {formData.boardPlusTwo === 'STATE BOARD' && formData.marksPlusTwo?.stateboard}
                        {formData.boardPlusTwo === 'ICSE' && formData.marksPlusTwo?.icse}
                        {formData.boardPlusTwo === 'Others' && formData.marksPlusTwo?.others}
                      </Text>
                    </View>
                  </View>
                )}
                
                {/* Legacy display for backward compatibility */}
                {!formData.boardPlusTwo && (
                  <>
                    
                    <View style={{ marginRight: 5, marginBottom: 2 }}>
                      <Text style={{ fontSize: 5 }}>CBSE</Text>
                      <CharacterBoxes text={formData.marksPlusTwo?.cbse} count={4} />
                    </View>
                    <View style={{ marginRight: 5, marginBottom: 2 }}>
                      <Text style={{ fontSize: 5 }}>STATE BOARD</Text>
                      <CharacterBoxes text={formData.marksPlusTwo?.stateboard} count={4} />
                    </View>
                    <View style={{ marginRight: 5, marginBottom: 2 }}>
                      <Text style={{ fontSize: 5 }}>ICSE</Text>
                      <CharacterBoxes text={formData.marksPlusTwo?.icse} count={4} />
                    </View>
                    <View style={{ marginRight: 5, marginBottom: 2 }}>
                      <Text style={{ fontSize: 5 }}>Others</Text>
                      <CharacterBoxes text={formData.marksPlusTwo?.others} count={4} />
                    </View>
                  </>
                )}
              </View>
            </View>
          </>
        )}
      </Page>
      
      {/* Second Page */}
      <Page size="A4" style={styles.page}>
        {/* Payment Details */}
        <View style={styles.paymentSection}>
          
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Name of the Student</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.studentName}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Name of the Account Holder</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.accountHolderName}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Amount Remitted</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.amountRemitted}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Name of Bank</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.bankName}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Reference Number</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.referenceNumber}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Date of Remittance</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.remittanceDate}</Text>
            </View>
          </View>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Mobile No</Text>
            <View style={styles.paymentField}>
              <Text style={styles.paymentText}>{formData.mobileNumber}</Text>
            </View>
          </View>
        </View>
        
        {/* Terms and Conditions */}
        <View style={styles.termsSection}>
          <Text style={styles.termItem}>15. a) I have received the Prospectus and gone through it.</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    b) I have received the Joining Memo.</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    c) I will not discontinue the course</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    d) I am agreable to all the changes in the time table you
 make according to necessity</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    e) I shall obey all the rules regarding discipline.</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    f) Your decision will be final on matters regarding discipline.</Text>
          <Text style={[styles.termItem , {paddingLeft:12}]}>    g) Prof. P. C. Thomas Classes reserve the absolute right to decide the mode of coaching.</Text>
        </View>
        
        {/* Photo Box */}
        <View style={{ position: 'absolute', top: 150, right: 20, width: 70, height: 80, border: '1px solid #000', justifyContent: 'center', alignItems: 'center' }}>
          {formData.photo ? (
            <Image src={formData.photo} style={{ width: 68, height: 78 }} />
          ) : (
            <Text style={{ fontSize: 9, textAlign: 'center' }}>PHOTO</Text>
          )}
        </View>
        
        {/* Refund Policy */}
        <View style={styles.refundSection}>
          <Text style={styles.refundTitle}>REFUND OF FEES (General Norms)</Text>
          <Text style={styles.refundText}>If you discontinue the class room course you have joined, you are entitled for a partial refund of fee, as per the following norms</Text>
          <Text style={styles.refundText}> a) The application for refund must be made in the prescribed form available free of cost from
 the office on request.</Text>
          <Text style={styles.refundText}> b) Admission fees will not be refunded.</Text>
          <Text style={styles.refundText}>c) The cost of study material supplied at the time of admission or later will not be refunded.</Text>
          <Text style={styles.refundText}>d) GST will not be refunded.</Text>
          <Text style={styles.refundText}>e) For getting refund of the remaining amount the student or guardian has to apply in the prescribed application form. If the application is submitted in person,  he will get a receipt
 indicating the date of receiving the application. If not submitted in person the application is
 to be sent by registered post A/D. The date of receiving the application will be taken for
 calculating the amount of refund.</Text>
          <Text style={styles.refundText}>f) (1) Number of sessions taken for deduction at the above rates will be the sessions conducted at
 the centre between the starting of the course and the receipt of refund application. Whether the
 student was actually present or not is not taken into consideration. </Text>
          <Text style={styles.refundText}>   (2) The actual number of sessions conducted may be more than the quoted above. It depends on the time available before the examination. Any how these sessions will not be included for refund.</Text>
          <Text style={styles.refundText}>g) An amount of Rs. 650/Session for Repeater and Rs. 200/Session for other courses will be deducted for each teaching session conducted after the date of joining </Text>
          <Text style={styles.refundText}>h) The following items namely (1) Fee Receipt (2) must be surrendered along with the application for refund. Without the above items the refund cannot be made.</Text>
          <Text style={styles.refundText}>i) The refund amount will be given as crossed cheque in the name of the parent or guardian within 30 days after the receipt of the application for refund.</Text>
        </View>
        
        <View style={{ marginTop: 3 ,marginLeft:30 ,marginRight:30}}>
          <Text style={{ fontSize: 8, fontWeight: 'bold' }}>I agree to it.</Text>
        </View>
        
        {/* Signatures */}
        <View style={styles.signatureRow}>
          <View style={styles.signatureBox}>
            <Text style={{ fontSize: 8 }}>16.</Text>
            <Text style={styles.signatureLabel}>Signature of Student</Text>
            <View style={styles.signature}>
              {formData.studentSignature ? (
                <Image src={formData.studentSignature} style={{ width: 98, height: 50 }} />
              ) : null}
            </View>
          </View>
          
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLabel}>Signature of Parent</Text>
            <View style={styles.signature}>
              {formData.parentSignature ? (
                <Image src={formData.parentSignature} style={{ width: 98, height: 50 }} />
              ) : null}
            </View>
          </View>
          
          <View style={styles.signatureBox}>
            <Text style={styles.signatureLabel}>Date</Text>
            <CharacterBoxes text={formData.date} count={6} />
          </View>
        </View>
      </Page>
    </Document>
  );
};

// PDF Download Button component
export const PDFDownloadButton = ({ formData }: { formData: any }) => (
  <PDFDownloadLink 
    document={<ApplicationFormPDF formData={formData} />} 
    fileName="application-form.pdf"
    style={{
      textDecoration: 'none',
      padding: '10px 20px',
      color: 'white',
      backgroundColor: '#4CAF50',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'inline-block',
      marginTop: '10px',
    }}
  >
    {({ blob, url, loading, error }) => 
      loading ? 'Generating PDF...' : 'Download Application PDF'
    }
  </PDFDownloadLink>
);

export default ApplicationFormPDF;