import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'semantic-ui-react'

import Layout from '../components/layout';

import '../pages/index.css';

import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
  <Layout>
    <div className="hero-text">
      <h1>Welcome to HealthMate</h1>
      <p>Reducing waittimes by connecting patients to qualified healthcare practitioners before the ER.</p>
    </div>
    <div className="formstyle">
      <label className="form-label" for="username">Username</label>
      <input className="form-input" type="text" name="username" required/>
      <br></br>
      <label className="form-label" for="password">Password</label>
     <input className="form-input" type="password" name="password" required/>
     <br></br>
     <a href="http://localhost:3000/"><Button color='orange' className="Signupbtn">Sign In</Button></a>
    </div>
    <div className="disclaimer">
      <p>If you are experiencing difficulty breathing, chest pains, shortness of breath, uncotrolled bleeding and loss of eyesight amongst other things. Call 911.</p>
    </div>
  </Layout>
)

export default IndexPage
