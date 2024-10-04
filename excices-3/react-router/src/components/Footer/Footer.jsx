import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white border-y rounded">

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="flex gap-2 items-center justify-center ">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="#" className="mx-3 hover:underline">
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Facebook page</span>
            </Link>

          </div>
        </div>
      
    </footer>
  )
}

export default Footer