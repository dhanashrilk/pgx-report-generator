import React from "react";

const FifthPage = () => {
  return (
    <div className="custom-container py-4">
      <div className="custom-row">
        <h5 className="head-line text-center mb-2">ADDITIONAL INFORMATION</h5>
        <h6 className="headline-green text-center fw-normal fs-5 mb-0">
          DISCLAIMER
        </h6>
        <div className="desc-text m-0 py-2">
          <p className="px-2">
            The content provided as a professional service by PODhealth has not
            been reviewed or approved by the FDA. This diagnostic report,
            including all findings and interpretations, is provided exclusively
            for the medical professional. It is based on the analysis of the
            patient’s buccal swab using Whole Exome Sequencing (WES) technology,
            followed by the use of databases to mark down the pharmacogenomic
            interactions specific to each patient. The patient from whom the
            sample was collected has been confirmed to have a neurological,
            neurodegenerative, or neurodevelopmental disorder. This report is
            intended to serve as a companion diagnostic tool to aid in the
            patient’s management and treatment planning
          </p>
          <p className="px-2">
            This report is intended for medical and scientific evaluation
            purposes only. ALL methodologies, including the WES technology and
            pharmacogenomic interaction analysis utilized in this report, are
            currently being validated as part of a clinical study and have not
            been certified by the National Accreditation Board for Testing and
            Calibration Laboratories (NABL). While these methodologies are
            considered highly reliable, no diagnostic procedure is 100%
            accurate. Variations in test results may occur due to factors such
            as sample quality, genetic variability, or other clinical
            considerations.
          </p>
          <p className="px-2">
            {" "}
            The information contained in this report is intended to support, not
            replace, the professional judgment of the treating neurologist or
            medical professional. The presence or absence of ANY specific
            variant or pharmacogenomic interaction should be considered
            alongside other clinical and diagnostic findings when formulating
            the appropriate treatment plan for the patient. The ordering medical
            professional is responsible for interpreting these findings within
            the context of the patient’s overall medical condition.
          </p>
          <p className="px-2">
            By using the information provided in this report, the ordering
            medical professional acknowledges that any decisions made based on
            the diagnostic findings are at their sole discretion. PODhealth,
            Inc., along with its associated laboratories and affiliates, shall
            not be liable for any interpretations or treatment decisions made
            based on this report.
          </p>
          <p className="px-2">
            In accordance with the Health Insurance Portability and
            Accountability Act (HIPAA), all patient information contained in
            this report is confidential and intended solely for the use of the
            individual or entity to whom it is addressed. Unauthorized use,
            disclosure, or distribution of this report is strictly prohibited.
          </p>
          <p className="px-2">
            {" "}
            By accepting this report, the ordering medical professional
            acknowledges their understanding and acceptance of these terms and
            conditions. This report is furnished to the recipient with the
            understanding that it will be used only for its intended purposes
            and in accordance with all applicable legal and ethical standards.
            The ordering medical professional is also responsible for ensuring
            compliance with all relevant laws, regulations, and guidelines
            governing the use of patient data and the practice of medicine.
          </p>
        </div>

        <p className="px-2">
          To schedule your complimentary consultation, please call
          1-800-XXX-XXXX.
        </p>
      </div>
    </div>
  );
};

export default FifthPage;
