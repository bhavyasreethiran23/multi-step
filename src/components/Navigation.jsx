function Navigation({
  step,
  nextStep,
  prevStep,
  formData,
}) {
  /* STEP 1 */

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      alert('Name is required')

      return false
    }

    if (!formData.email.trim()) {
      alert('Email is required')

      return false
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(formData.email)) {
      alert('Please enter valid email')

      return false
    }

    if (!formData.phone.trim()) {
      alert('Phone number is required')

      return false
    }

    const phoneRegex = /^[0-9]{10}$/

    if (!phoneRegex.test(formData.phone)) {
      alert(
        'Phone number must contain exactly 10 digits'
      )

      return false
    }

    return true
  }

  /* STEP 2 */

  const validateStep2 = () => {
    if (!formData.plan) {
      alert('Please select a plan')

      return false
    }

    return true
  }

  /* STEP 3 */

  const validateStep3 = () => {
    if (
      !formData.addons ||
      formData.addons.length === 0
    ) {
      alert('Please select at least one add-on')

      return false
    }

    return true
  }

  /* NEXT */

  const handleNext = () => {
    if (step === 1) {
      const valid = validateStep1()

      if (!valid) return
    }

    if (step === 2) {
      const valid = validateStep2()

      if (!valid) return
    }

    if (step === 3) {
      const valid = validateStep3()

      if (!valid) return
    }

    nextStep()
  }

  return (
    <div className='navigation'>
      {step > 1 ? (
        <button
          className='back-btn'
          onClick={prevStep}
        >
          Go Back
        </button>
      ) : (
        <div></div>
      )}

      <button
        className={
          step === 4
            ? 'confirm-btn'
            : 'next-btn'
        }
        onClick={handleNext}
      >
        {step === 4
          ? 'Confirm'
          : 'Next Step'}
      </button>
    </div>
  )
}

export default Navigation