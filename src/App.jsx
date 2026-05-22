import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'

import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import ThankYou from './components/ThankYou'

import './index.css'

function App() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',

    plan: 'Arcade',

    billing: 'monthly',

    addons: [],
  })

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <div className='app'>
      <div className='container'>
        <Sidebar step={step} />

        <div className='content'>
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
            />
          )}

          {step === 4 && (
            <Step4
              formData={formData}
              setStep={setStep}
            />
          )}

          {/* THANK YOU */}

          {step === 5 && <ThankYou />}

          {/* HIDE NAVIGATION */}

          {step < 5 && (
            <Navigation
              step={step}
              nextStep={nextStep}
              prevStep={prevStep}
              formData={formData}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App