import React from 'react'

function Layout({children}){
  return(
      <div className="bg-zinc-900 min-h-screen text-zinc-50 px-4">
          {children}
      </div>
  )
}
export default Layout;
