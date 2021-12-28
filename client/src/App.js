import React from "react";
import Navbar from "./views/navbar";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PostForm from "./views/postForm";
import ViewPosts from "./views/viewPosts";
import PaymentForm from "./views/paymentForm";
import PaymentSuccess from "./views/paymentSuccess";
import PaymentCancel from "./views/paymentCancel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={
          <Navigate to="/create-posts" />
        }/>
        <Route path="/create-posts" element={<PostForm />} />
        <Route path="/view-posts" element={<ViewPosts />} />
        <Route path="/payment-form/:name" element={<PaymentForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
      </Routes>
    </Router>
  );
}

export default App;
