import React from 'react'

const Aaj = ({data}) => {
  return (
    <div>
    {/* Render your data here */}
    <pre>{JSON.stringify(data, null, 2)}</pre>
</div>
  )
}

export default Aaj