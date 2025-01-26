import React from 'react';
import MainLayout from '../../components/Layout';

const Main = () => {
  return (
    <MainLayout>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">דף ראשי</h1>
        <p>ברוכים הבאים לעמוד הראשי של התוספים והתוכנות שלנו.</p>
      </div>
    </MainLayout>
  );
};

export default Main;
