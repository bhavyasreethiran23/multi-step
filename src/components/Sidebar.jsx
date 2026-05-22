// Sidebar.jsx

import desktopSidebar from '../assets/images/bg-sidebar-desktop.svg'
import mobileSidebar from '../assets/images/bg-sidebar-mobile.svg'

function Sidebar({ step }) {
  const steps = [
    {
      number: 1,
      title: 'YOUR INFO',
    },

    {
      number: 2,
      title: 'SELECT PLAN',
    },

    {
      number: 3,
      title: 'ADD-ONS',
    },

    {
      number: 4,
      title: 'SUMMARY',
    },
  ]

  return (
    <div className='sidebar'>
      {/* BACKGROUND IMAGE */}

      <picture>
        <source
          media='(max-width:768px)'
          srcSet={mobileSidebar}
        />

        <img
          src={desktopSidebar}
          alt=''
          className='sidebar-image'
        />
      </picture>

      {/* CONTENT ON TOP OF IMAGE */}

      <div className='sidebar-content'>
        {steps.map((item) => (
          <div
            key={item.number}
            className='sidebar-step'
          >
            <div
              className={
                step === item.number
                  ? 'circle active'
                  : 'circle'
              }
            >
              {item.number}
            </div>

            <div className='step-details'>
              <p>STEP {item.number}</p>

              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar