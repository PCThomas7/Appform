import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

// Create styles for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    width: '30%',
  },
  value: {
    fontSize: 10,
    width: '70%',
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  photo: {
    width: 100,
    height: 120,
    border: '1px solid #000',
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  signatureBox: {
    width: '45%',
    alignItems: 'center',
  },
  signatureLabel: {
    fontSize: 10,
    marginTop: 5,
  },
  signature: {
    width: 150,
    height: 50,
    border: '1px solid #000',
  },
});

// PDF Document component
const ApplicationFormPDF = ({ formData }: { formData: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Prof. P. C. Thomas Classes</Text>
        <Text style={styles.subtitle}>APPLICATION FORM FOR REGULAR & SUNDAY BATCHES (2025-27)</Text>
      </View>

      {/* Course Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Course Selection</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Selected Course:</Text>
          <Text style={styles.value}>{formData.selectedCourse}</Text>
        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{formData.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{formData.gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{formData.dateOfBirth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Father's Name:</Text>
          <Text style={styles.value}>{formData.fathersName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Occupation:</Text>
          <Text style={styles.value}>{formData.occupation}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{formData.address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Pincode:</Text>
          <Text style={styles.value}>{formData.pincode}</Text>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Parent Mobile:</Text>
          <Text style={styles.value}>{formData.parentMobile}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Alternate Mobile:</Text>
          <Text style={styles.value}>{formData.alternateMobile}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Parent Whatsapp:</Text>
          <Text style={styles.value}>{formData.parentWhatsapp}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Student Mobile:</Text>
          <Text style={styles.value}>{formData.studentMobile}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Parent Email:</Text>
          <Text style={styles.value}>{formData.parentEmail}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Student Email:</Text>
          <Text style={styles.value}>{formData.studentEmail}</Text>
        </View>
      </View>

      {/* Educational Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educational Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>School Name:</Text>
          <Text style={styles.value}>{formData.schoolName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>SSLC:</Text>
          <Text style={styles.value}>{formData.marks?.sslc}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Plus One:</Text>
          <Text style={styles.value}>{formData.marks?.plusOne}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>CBSE:</Text>
          <Text style={styles.value}>{formData.marks?.cbse}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>State Board Plus Two:</Text>
          <Text style={styles.value}>{formData.marks?.stateBoardPlusTwo}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>ICSE:</Text>
          <Text style={styles.value}>{formData.marks?.icse}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Others:</Text>
          <Text style={styles.value}>{formData.marks?.others}</Text>
        </View>
      </View>

      {/* Payment Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.value}>{formData.paymentMethod}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Bank Name:</Text>
          <Text style={styles.value}>{formData.bankName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.value}>{formData.totalAmount}</Text>
        </View>
      </View>

      {/* Photo */}
      {formData.photo && (
        <View style={styles.photoContainer}>
          <Text style={styles.sectionTitle}>Photo</Text>
          <Image src={formData.photo} style={styles.photo} />
        </View>
      )}

      {/* Signatures */}
      <View style={styles.signatureRow}>
        <View style={styles.signatureBox}>
          <Image src={formData.studentSignature} style={styles.signature} />
          <Text style={styles.signatureLabel}>Signature of Student</Text>
        </View>
        <View style={styles.signatureBox}>
          <Image src={formData.parentSignature} style={styles.signature} />
          <Text style={styles.signatureLabel}>Signature of Parent</Text>
        </View>
      </View>
    </Page>
  </Document>
);

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