// Step2.jsx

import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

function Step2({ formData, setFormData }) {
  const plans = [
    {
      name: 'Arcade',
      price: '$9/mo',
      icon: arcadeIcon,
    },
    {
      name: 'Advanced',
      price: '$12/mo',
      icon: advancedIcon,
    },
    {
      name: 'Pro',
      price: '$15/mo',
      icon: proIcon,
    },
  ]

  return (
    <div>
      <h1 className='title'>Select your plan</h1>

      <p className='description'>
        You have the option of monthly or
        yearly billing.
      </p>

      <div className='plans'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              formData.plan === plan.name
                ? 'plan-card active-plan'
                : 'plan-card'
            }
            onClick={() =>
              setFormData({
                ...formData,
                plan: plan.name,
              })
            }
          >
            <img src={plan.icon} alt='' />

            <div>
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step2