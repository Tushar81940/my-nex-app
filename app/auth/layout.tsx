import React from 'react'

export default function SignInLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div>
        20 % off for new users
      </div>
      {children}
    </div>
  )
}