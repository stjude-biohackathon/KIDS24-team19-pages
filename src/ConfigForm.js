import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function ConfigForm() {
   const [formData, setFormData] = useState({
      controlCountPrefix: "",
      controlCountSuffix: "",
      controlAnnoPrefix: "",
      controlAnnoSuffix: "",
      loadingPath: "",
      rfModelPath: "",
      threshold: "0.75",
      caseBed: "NA",
      caseVCFPrefix: "",
      caseVCFSuffix: "",
      caseSample: "",
      outputRoot: "",
      annovarFolder: "",
      CoCoRVFolder: "",
      refFASTA: "",
      build: "GRCh37",
      gnomADVersion: "v2exome",
      chrSet: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22",
      ACANConfig: "",
      variantExclude: "",
      AFMax: "0.0005",
      variantMissing: "0.1",
      variantGroup: "annovar_pathogenic",
      REVELThreshold: "0.65",
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    
     setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };
    // Validate form fields
    const validateForm = () => {
     const newErrors = {};
     for (const [key, value] of Object.entries(formData)) {
       if (!value.trim()) {
        newErrors[key] = 'This field is required and cannot be empty';
       }
      }
     return newErrors;
    };
    
    // Handle form submit while accounting for errors
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Validate the form
      const validationErrors = validateForm();
      
      // If there are validation errors, set them
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
         console.log('Required field cannot be empty');
      } else {
        // If no errors, proceed with the submission and show the modal
         console.log('Form is valid, proceed with submission');
         setShowModal(true);
        /* handleDownload(); // Call the function to handle the file download*/
      }
    };
    
    // Assume `validateForm` function exists and returns an object of errors
    // If `newErrors` was supposed to be used, it has been replaced with `validationErrors` for consistency.
    
  

      // Logic to generate the text file based on formData
    const handleDownload = () => {
    const textFileContent = Object.entries (formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
      const blob = new Blob([textFileContent], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'cocorv_input_config_file.txt';
      link.click();
    };
    const [show, setShow] = useState(false);
    
      
        // Toggle modal visibility
    const handleShowModal = () => {
        
          setShow(true);
        };
      
        const handleCloseModal = () => {
          setShow(false);
        };
    

    
  
  return (
     
          <div className="container">
            <h2 className= "text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide pt-7 pb-3">Config Form</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="controlCountPrefix" className="mb-3">
                <Form.Label>Control Count Prefix</Form.Label>
                <Form.Control
                  type="text"
                  name="controlCountPrefix"
                  value={formData.controlCountPrefix}
                  onChange={handleChange}
                  isInvalid={!!errors.controlCountPrefix}
                />
    
                 <div
                 className="text-blue-500 ml-2 cursor-pointer"
                 onClick={() => handleShowModal("This is where you input....")}
                 >
                   ?
               </div>
               {/* Modal */}
       <Modal show={show} onHide={handleShowModal}>
      
        <Modal.Body>"This is where you input...."</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
           </Form.Group>
  
              <Form.Group controlId="controlCountSuffix" className="mb-3">
                <div className='flex justify-between items-center w-full'> 
                 <Form.Label>Control Count Suffix</Form.Label>
                 <span
                   className="text-red-900  ml-2 cursor-pointer"
                   onClick={() => handleShowModal("This is where you input....")}
                  >
                    ?
                 </span>
                </div>
                <Form.Control
                  type="text"
                  name="controlCountSuffix"
                  value={formData.controlCountSuffix}
                  onChange={handleChange}
                  isInvalid={!!errors.controlCountSuffix}
                />
                 
              </Form.Group>
  
              <Form.Group controlId="controlAnnoPrefix" className="mb-3">
                <Form.Label>Control Annotation Prefix</Form.Label>
                <Form.Control
                  type="text"
                  name="controlAnnoPrefix"
                  value={formData.controlAnnoPrefix}
                  onChange={handleChange}
                  isInvalid={!!errors.controlAnnoPrefix}
                />
                <span
                 className="text-blue-500 ml-2 cursor-pointer"
                 onClick={() => handleShowModal("This is where you input....")}
                 >
                   ?
               </span>
              </Form.Group>
  
              <Form.Group controlId="controlAnnoSuffix" className="mb-3">
                <Form.Label>Control Annotation Suffix</Form.Label>
                <Form.Control
                  type="text"
                  name="controlAnnoSuffix"
                  value={formData.controlAnnoSuffix}
                  onChange={handleChange}
                  isInvalid={!!errors.controlAnnoSuffix}
                />
                <span
                 className="text-blue-500 ml-2 cursor-pointer"
                 onClick={() => handleShowModal("This is where you input....")}
                 >
                   ?
               </span>
              </Form.Group>
  
              <Form.Group controlId="loadingPath" className="mb-3">
                <Form.Label>Loading Path</Form.Label>
                <Form.Control
                  type="text"
                  name="loadingPath"
                  value={formData.loadingPath}
                  onChange={handleChange}
                  isInvalid={!!errors.loadingPath}
                />
                <span
                 className="text-blue-500 ml-2 cursor-pointer"
                 onClick={handleShowModal}
                 >
                   ?
               </span>
              </Form.Group>
  
              <Form.Group controlId="rfModelPath" className="mb-3">
                <Form.Label>RF Model Path</Form.Label>
                <Form.Control
                  type="text"
                  name="rfModelPath"
                  value={formData.rfModelPath}
                  onChange={handleChange}
                  isInvalid={!!errors.rfModelPath}
                />
                <span
                 className="text-blue-500 ml-2 cursor-pointer"
                 onClick={() => handleShowModal("This is where you input....")}
                 >
                   ?
               </span>
              </Form.Group>
  
              <Form.Group controlId="threshold" className="mb-3">
                <Form.Label>Threshold</Form.Label>
                <Form.Control
                  as="select"
                  name="threshold"
                  value={formData.threshold}
                  onChange={handleChange}
                  isInvalid={!!errors.threshold}
                >
                  <option value="0.75">0.75</option>
                  <option value="0.9">0.9</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="caseBed" className="mb-3">
                <Form.Label>Case Bed</Form.Label>
                <Form.Control
                  type="text"
                  name="caseBed"
                  value={formData.caseBed}
                  onChange={handleChange}
                  placeholder="NA"
                  isInvalid={!!errors.caseBed}
                />
              </Form.Group>
  
              <Form.Group controlId="caseVCFPrefix" className="mb-3">
                <Form.Label>Case VCF Prefix</Form.Label>
                <Form.Control
                  type="text"
                  name="caseVCFPrefix"
                  value={formData.caseVCFPrefix}
                  onChange={handleChange}
                  isInvalid={!!errors.caseVCFPrefix}
                />
              </Form.Group>
  
              <Form.Group controlId="caseVCFSuffix" className="mb-3">
                <Form.Label>Case VCF Suffix</Form.Label>
                <Form.Control
                  type="text"
                  name="caseVCFSuffix"
                  value={formData.caseVCFSuffix}
                  onChange={handleChange}
                  isInvalid={!!errors.caseVCFSuffix}
                />
              </Form.Group>
  
              <Form.Group controlId="caseSample" className="mb-3">
                <Form.Label>Case Sample</Form.Label>
                <Form.Control
                  type="text"
                  name="caseSample"
                  value={formData.caseSample}
                  onChange={handleChange}
                  isInvalid={!!errors.caseSample}
                />
              </Form.Group>
  
              <Form.Group controlId="outputRoot" className="mb-3">
                <Form.Label>Output Root</Form.Label>
                <Form.Control
                  type="text"
                  name="outputRoot"
                  value={formData.outputRoot}
                  onChange={handleChange}
                  isInvalid={!!errors.outputRoot}
                />
              </Form.Group>
  
              <Form.Group controlId="annovarFolder" className="mb-3">
                <Form.Label>Annovar Folder</Form.Label>
                <Form.Control
                  type="text"
                  name="annovarFolder"
                  value={formData.annovarFolder}
                  onChange={handleChange}
                  isInvalid={!!errors.annovarFolder}
                />
              </Form.Group>
  
              <Form.Group controlId="CoCoRVFolder" className="mb-3">
                <Form.Label>CoCoRV Folder</Form.Label>
                <Form.Control
                  type="text"
                  name="CoCoRVFolder"
                  value={formData.CoCoRVFolder}
                  onChange={handleChange}
                  isInvalid={!!errors.CoCoRVFolder}
                />
              </Form.Group>
  
              <Form.Group controlId="refFASTA" className="mb-3">
                <Form.Label>Reference FASTA</Form.Label>
                <Form.Control
                  type="text"
                  name="refFASTA"
                  value={formData.refFASTA}
                  onChange={handleChange}
                  isInvalid={!!errors.refFASTA}
                />
              </Form.Group>
  
              <Form.Group controlId="build" className="mb-3">
                <Form.Label>Build</Form.Label>
                <Form.Control
                  as="select"
                  name="build"
                  value={formData.build}
                  onChange={handleChange}
                  isInvalid={!!errors.build}
                >
                  <option value="GRCh37">GRCh37</option>
                  <option value="GRCh38">GRCh38</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="gnomADVersion" className="mb-3">
                <Form.Label>gnomAD Version</Form.Label>
                <Form.Control
                  as="select"
                  name="gnomADVersion"
                  value={formData.gnomADVersion}
                  onChange={handleChange}
                  isInvalid={!!errors.gnomADVersion}
                >
                  <option value="v2exome">v2exome</option>
                  <option value="v4exome">v4exome</option>
                  <option value="v4genome">v4genome</option>
                </Form.Control>
              </Form.Group>
  
              <Form.Group controlId="chrSet" className="mb-3">
                <Form.Label>Chromosome Set</Form.Label>
                <Form.Control
                  type="text"
                  name="chrSet"
                  value={formData.chrSet}
                  onChange={handleChange}
                  placeholder="1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22"
                  isInvalid={!!errors.chrSet}
                />
              </Form.Group>
  
              <Form.Group controlId="ACANConfig" className="mb-3">
                <Form.Label>ACAN Config</Form.Label>
                <Form.Control
                  type="text"
                  name="ACANConfig"
                  value={formData.ACANConfig}
                  onChange={handleChange}
                  isInvalid={!!errors.ACANConfig}
                />
                </Form.Group>
                
                <Form.Group controlId = " variantExclude" className = "mb-4 col-span-full"> 
                  <Form.Label>Variant Exclude</Form.Label>
                  <Form.Control
                   type = "text"
                   name = "variantExclude"
                   value = {formData.variantExclude}
                   onChange= {handleChange}
                   isInvalid={!!errors.variantExclude}
                   />
                </Form.Group>
                <Form.Group controlId = "AFMax" className = "mb-4 col-span-full">
                  <Form.Label> AFMax </Form.Label>
                  <Form.Control
                   type = "number"
                   name = "AFMax"
                   value = {formData.AFMax}
                   onChange = {handleChange}
                   isInvalid={!!errors.AFMax}
                    />
                </Form.Group>
                <Form.Group controlId = "variantMissing" className = "mb-4 col-span-full">
                  <Form.Label> variantMissing </Form.Label>
                  <Form.Control
                   type = "number"
                   name = "variantMissing"
                   value = {formData.variantMissing}
                   onChange = {handleChange}
                   isInvalid={!!errors.variantMissing}
                    />
                </Form.Group>
                <Form.Group controlId = "variantGroup" className = "mb-4 col-span-full">
                  <Form.Label> variantGroup </Form.Label>
                  <Form.Control
                   type = "text"
                   name = "variantGroup"
                   value = {formData.variantGroup}
                   onChange = {handleChange}
                   isInvalid={!!errors.variantGroup}
                    />
                </Form.Group>
                <Form.Group controlId = "REVELThreshold" className = "mb-4 col-span-full">
                  <Form.Label> REVELThreshold </Form.Label>
                  <Form.Control
                   type = "number"
                   name = "REVELThreshold"
                   value = {formData.REVELThreshold}
                   onChange = {handleChange}
                   isInvalid={!!errors.REVELThreshold}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
           
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Config File Ready</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your config file is ready for download.</Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="primary" onClick={handleDownload}>
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
}

export default ConfigForm;
