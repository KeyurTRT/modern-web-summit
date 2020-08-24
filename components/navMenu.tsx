import React from 'react'

const NavMenu = (props: NavMenuProps) => {
  const { menuOpen, handleButtonClick } = props
  const buttonClass = "border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400 hover:bg-gray-400 focus:outline-none hover:text-white"
  const linkClass = "text-xl text-gray-300 font-medium hover:text-purple-200"
  return (
    <div className="bg-white absolute top-0 inset-x-0 z-10 shadow-xs">
      <div className="m-3">
        <img src="/images/close.svg" className="cursor-pointer" onClick={menuOpen} />
      </div>
      <div className="flex w-3/5 mx-auto my-10">
        <div className="w-1/4">
          <p><a className={linkClass} href="https://www.google.co.in/">Terms of Service</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Privacy Policy</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Selection Committee</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Workshops</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Jobs</a></p>
        </div>
        <div className="w-2/5 flex flex-col mx-5">
          <button
            onClick={() => handleButtonClick('home')}
            className={buttonClass}
            type="button" >
            Home
            </button>
          <button
            onClick={() => handleButtonClick('speakers')}
            className={buttonClass}
            type="button" >
            speakers
            </button>
          <button
            onClick={() => handleButtonClick('sponsors')}
            className={buttonClass}
            type="button" >
            sponsors
            </button>
          <button
            onClick={() => handleButtonClick('curators')}
            className={buttonClass}
            type="button" >
            curators
            </button>
          <button
            onClick={() => handleButtonClick('home')}
            className={buttonClass}
            type="button" >
            code of conduct
            </button>
          <button
            onClick={() => handleButtonClick('home')}
            className={buttonClass}
            type="button" >
            schedule - coming soon
            </button>
        </div>
        <div className="w-1/4 ml-16">
          <p><a className={linkClass} href="https://www.google.co.in/">Volunteer</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Request for Sponsorship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Apply for Scholarship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Convince your boss</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Submit a talk proposal</a></p>
        </div>
      </div>
    </div>
  )

}

export default NavMenu
type NavMenuProps = {
  menuOpen: any,
  handleButtonClick: any
}
