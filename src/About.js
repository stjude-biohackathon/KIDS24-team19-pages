import React from 'react';
import workflow from "./pipeline.jpg"

function About() {
    return (
        
        <div className="container mt-10 p-4 bg-light rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center text-black"> Consistent summary Count based Rare Variant burden test (CoCoRV)</h2>
            <div style={{ textAlign: "justify" }}>
            <p className="text-lg p-3 text-gray-700 mt-4">
            This repository includes tools for performing consistent summary count based rare variant burden test, 
            which is useful when we only have sequenced cases data. For example, we can compare the cases against 
            public summary count data, such as gnomAD. Consistent filtering is applied to make sure the same set of high quality variants are used. 
            It can stratify cases into different ethnicity groups, and perform stratified analysis with group-matched control summary counts. 
            </p>
            <p className="text-lg p-3 text-gray-700 mt-4"> For recessive models, 
            it can exclude double heterozygous due to high linkage disequilibrium in populations. This package also provides accurate inflation factor estimate, QQ plot, 
            and powerful FDR control for discrete count data, whose p-value distribution under the null is far from the uniform distribution when the alleles are very rare.
           </p>
        </div>
        <div className="container bg-white mt-10 p-4 bg-light rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center text-black"> Workflow for the CoCoRV Pipeline</h2>
      <img className="w-full h-full object-cover mx-auto" src={workflow} />
    </div>
        </div>


    );
}

export default About;
