// Step3.jsx

function Step3({ formData, setFormData }) {
  const addons = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },

    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },

    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$2/mo',
    },
  ]

  const handleAddon = (addon) => {
    if (formData.addons.includes(addon)) {
      setFormData({
        ...formData,
        addons: formData.addons.filter(
          (item) => item !== addon
        ),
      })
    } else {
      setFormData({
        ...formData,
        addons: [...formData.addons, addon],
      })
    }
  }

  return (
    <div>
      <h1 className='title'>Pick add-ons</h1>

      <p className='description'>
        Add-ons help enhance your gaming
        experience.
      </p>

      <div className='addons'>
        {addons.map((addon) => (
          <div
            key={addon.title}
            className={
              formData.addons.includes(
                addon.title
              )
                ? 'addon-card active-addon'
                : 'addon-card'
            }
            onClick={() =>
              handleAddon(addon.title)
            }
          >
            <div className='addon-left'>
              <input
                type='checkbox'
                checked={formData.addons.includes(
                  addon.title
                )}
                readOnly
              />

              <div className='addon-text'>
                <h4>{addon.title}</h4>

                <p>
                  {addon.description}
                </p>
              </div>
            </div>

            <span className='addon-price'>
              {addon.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step3