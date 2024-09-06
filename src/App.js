import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import RunOnGithub from './RunOnGithub';
import RunOnDNAnexus from './RunOnDNAnexus';
import Navbar from './Navbar';
import ConfigForm from "./ConfigForm";
import S3ResourceFiles from "./S3ResourceFiles";
/*import VisualizeOutput from "./VisualizeOutput";*/

function App(){
return(
    <Router>
    <div>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<ConfigForm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/run-on-dnanexus" element={<RunOnDNAnexus/>} />
        <Route path="/run-on-github" element={<RunOnGithub/>} />
        <Route path="/s3-resource-files" element={<S3ResourceFiles/>} />
        {/*<Route path="/visualize-output" component={VisualizeOutput} />*/}
    </Routes>
    </div>
</Router>   
  );
};
export default App;