import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 5,
  },
  note: {
    fontSize: 9,
    marginTop: 2,
    marginBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  rollNoBox: {
    width: 80,
    height: 25,
    border: '1px solid #000',
    marginLeft: 'auto',
  },
  rollNoLabel: {
    fontSize: 9,
    textAlign: 'center',
  },
  table: {
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableCell: {
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'center',
  },
  tableCellLeft: {
    padding: 4,
    fontSize: 8,
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'left',
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
    marginTop: 2,
  },
  checkboxLabel: {
    fontSize: 7,
    marginRight: 2,
  },
  checkbox: {
    width: 10,
    height: 10,
    border: '1px solid #000',
    marginRight: 5,
  },
  formRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  formLabel: {
    fontSize: 9,
    width: '20%',
    marginRight: 5,
  },
  formValue: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  charBox: {
    width: 18,
    height: 18,
    border: '1px solid #000',
    marginRight: 2,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  charText: {
    fontSize: 10,
    textAlign: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  radioCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    border: '1px solid #000',
    marginRight: 5,
  },
  radioFilled: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#000',
    margin: 2,
  },
  radioLabel: {
    fontSize: 9,
  },
  smallNote: {
    fontSize: 7,
    fontStyle: 'italic',
    marginTop: 2,
  },
  photo: {
    width: 80,
    height: 100,
    border: '1px solid #000',
    marginTop: 5,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signatureBox: {
    width: '45%',
    alignItems: 'center',
  },
  signatureLabel: {
    fontSize: 9,
    marginTop: 5,
  },
  signature: {
    width: 150,
    height: 30,
    border: '1px solid #000',
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
      {checked && <Text style={{ fontSize: 8, textAlign: 'center' }}>✓</Text>}
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
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Prof. P. C. Thomas Classes</Text>
          <Text style={styles.subtitle}>APPLICATION FORM FOR REGULAR & SUNDAY BATCHES (2025-27)</Text>
          <View style={styles.headerRow}>
            <Text style={styles.note}>Note : Read Item No. 15 before filling up. (Put a ✓ mark in the appropriate box)</Text>
            <View>
              <Text style={styles.rollNoLabel}>Roll No</Text>
              <View style={styles.rollNoBox}>
                <Text>{formData.rollNumber}</Text>
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
              <Text>Course (Tuition & Entrance XI-XII)</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Text>JEE Stream</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Text>NEET Stream</Text>
            </View>
          </View>
          
          {/* Bridge Course */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>1</Text>
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
          
          {/* School Integrated */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>2</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>School Integrated Entrance Coaching</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'school_integrated' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'school_integrated' && isNEETStream} />
            </View>
          </View>
          
          {/* Offline Regular State */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>3</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Offline Regular Tuition & Entrance Coaching (State)</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular_state' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular_state' && isNEETStream} />
            </View>
          </View>
          
          {/* Offline Regular CBSE */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>4</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Offline Regular Tuition & Entrance Coaching (CBSE)</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular_cbse' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'offline_regular_cbse' && isNEETStream} />
            </View>
          </View>
          
          {/* Online Regular */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>5</Text>
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
              <Text>6</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Tuition & Entrance Hybrid (Holiday-Vacation) Batch</Text>
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'tuition_entrance_hybrid' && isJEEStream} />
            </View>
            <View style={[styles.tableCell, styles.streamCell]}>
              <Checkbox checked={courseType === 'tuition_entrance_hybrid' && isNEETStream} />
            </View>
          </View>
          
          {/* Tuition only */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.courseNoCell]}>
              <Text>7</Text>
            </View>
            <View style={[styles.tableCellLeft, styles.courseNameCell]}>
              <Text>Tuition only Hybrid Batch</Text>
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
          <CharacterBoxes text={formData.name} count={12} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>2. Sex</Text>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton selected={formData.gender === 'Male'} label="Male" />
            <RadioButton selected={formData.gender === 'Female'} label="Female" />
            <Text style={[styles.formLabel, { marginLeft: 20 }]}>Date of Birth</Text>
            <Text style={{ fontSize: 9 }}>{formatDate(formData.dateOfBirth)}</Text>
          </View>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>3. Father's Name</Text>
          <CharacterBoxes text={formData.fathersName} count={12} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>4. Occupation</Text>
          <CharacterBoxes text={formData.occupation} count={12} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>5. Address</Text>
          <View style={{ width: '80%' }}>
            <CharacterBoxes text={formData.address?.substring(0, 24)} count={24} />
            <CharacterBoxes text={formData.address?.substring(24, 48)} count={24} />
            <CharacterBoxes text={formData.address?.substring(48, 72)} count={24} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Text style={{ fontSize: 9, marginRight: 5 }}>Pin</Text>
              <CharacterBoxes text={formData.pincode} count={6} />
            </View>
          </View>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>6. Parent Mobile No</Text>
          <CharacterBoxes text={formData.parentMobile} count={10} />
          <Text style={{ fontSize: 9, marginLeft: 10, marginRight: 5 }}>Alternate Mobile No</Text>
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
          <Text style={styles.smallNote}>(For Online & Hybrid batch)</Text>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>9. Parent's E-mail</Text>
          <CharacterBoxes text={formData.parentEmail} count={24} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>10. Student's E-mail for sending login details</Text>
          <CharacterBoxes text={formData.studentEmail} count={24} />
          <Text style={styles.smallNote}>(For Online & Hybrid batch)</Text>
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>11. Name of School (10th Std)</Text>
          <CharacterBoxes text={formData.schoolName} count={24} />
        </View>
        
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>12. Marks of 10th</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 7 }}>SSLC</Text>
              <CharacterBoxes text={formData.marks?.sslc} count={4} />
            </View>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 7 }}>+1</Text>
              <CharacterBoxes text={formData.marks?.plusOne} count={4} />
            </View>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 7 }}>CBSE</Text>
              <CharacterBoxes text={formData.marks?.cbse} count={4} />
            </View>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 7 }}>ICSE</Text>
              <CharacterBoxes text={formData.marks?.icse} count={4} />
            </View>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
              <Text style={{ fontSize: 7 }}>Others</Text>
              <CharacterBoxes text={formData.marks?.others} count={4} />
            </View>
          </View>
        </View>
        
        {/* Photo and Signatures would be on the next page */}
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