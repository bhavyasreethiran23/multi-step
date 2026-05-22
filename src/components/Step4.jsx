function Step4({ formData, setStep }) {
  const planPrice = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  }

  const addonPrices = {
    'Online service': 1,

    'Larger storage': 2,

    'Customizable profile': 2,
  }

  const addonsTotal =
    formData.addons?.reduce(
      (acc, addon) =>
        acc + addonPrices[addon],
      0
    ) || 0

  const total =
    planPrice[formData.plan] +
    addonsTotal

  return (
    <div>
      <h1 className='title'>Finishing up</h1>

      <p className='description'>
        Double-check everything looks OK
        before confirming.
      </p>

      <div className='summary-box'>
        <div className='summary-top'>
          <div>
            <h3>
              {formData.plan} (Monthly)
            </h3>

            <button
              className='change-btn'
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>

          <h3 className='summary-price'>
            $
            {planPrice[formData.plan]}/mo
          </h3>
        </div>

        <div className='summary-addons'>
          {formData.addons?.map(
            (addon) => (
              <div
                key={addon}
                className='summary-addon'
              >
                <p>{addon}</p>

                <span>
                  +$
                  {addonPrices[addon]}/mo
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <div className='total'>
        <p>Total (per month)</p>

        <h2>+${total}/mo</h2>
      </div>
    </div>
  )
}

export default Step4