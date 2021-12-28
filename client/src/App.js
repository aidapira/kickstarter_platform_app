import React from "react";
import Navbar from "./views/navbar";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PostForm from "./views/postForm";
import ViewPosts from "./views/viewPosts";
import PaymentForm from "./views/paymentForm";

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
      </Routes>
    </Router>
  );
}

export default App;
