import React from 'react';
import Header from './components/Header';
import QuestionsSection from './components/Questionsection';
import BlogSection from './components/Blogsection';
import Footer from './components/Footer';
import './App.css'; // Optional: For custom styles

function App() {
  return (
    <div className="app">
      <Header />
      <QuestionsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;