import React, { useState } from 'react'
import { SaveIcon, TrashIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  addPersonalInfoStart,
  addPersonalInfoSuccess,
  addPersonalInfoError,
  removePersonalInfo,
} from '../../redux/features/userInfoSlice'
import { addPersonalInfo } from '../../redux/apiCalls'
// Components
import Alert from '../Alert'

const Form01 = ({ className }) => {
  // Redux
  const _personalInfo = useSelector((state) => state.userInfo.personalInfo)
  const { pending, error, message } = useSelector(
    (state) => state.userInfo.personalInfo.status
  )
  const dispatch = useDispatch()

  // State
  const [personalInfo, setPersonalInfo] = useState(_personalInfo.data)

  // Function Handlers
  const handleSubmit = async (e) => {
    e.preventDefault()

    addPersonalInfo(personalInfo, dispatch)
  }

  const handleRemovePersonalInfo = (e) => {
    e.preventDefault()
    dispatch(removePersonalInfo())
  }

  const countryOptions = [
    'United States',
    'Canada',
    'France',
    'Germany',
    'United Kingdom',
  ]
  // const personalInfoJsx =
  // console.log('_personaInfo', _personalInfo)
  return (
    <div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="  border-gray-200" />
        </div>
      </div>

      <div className="mt-6 md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900 ">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
            {_personalInfo.status.error && !_personalInfo.status.success &&(
              <Alert
                className="my-4"
                msg={_personalInfo.status.message}
                error={_personalInfo.status.error}
              />
            )}
            {!_personalInfo.status.error && _personalInfo.status.success &&(
              <Alert
                className="my-4"
                msg={_personalInfo.status.message}
                error={_personalInfo.status.error}
              />
            )}
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className="overflow-hidden  border-gray-200 shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder={_personalInfo?.data?.firstName}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder={_personalInfo.data.lastName}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      placeholder={_personalInfo.data.email}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block h-10 w-full rounded-md border  border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none  focus:ring-indigo-500 sm:text-sm"
                      placeholder={_personalInfo.data.country}
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          country: e.target.value,
                        })
                      }
                    >
                      {countryOptions?.map((country) => (
                        <option
                          value={country}
                          key={country}
                          selected={country == personalInfo.country}
                          disabled={country == personalInfo.country}
                        >
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      placeholder={_personalInfo.data.street}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          street: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      placeholder={_personalInfo.data.city}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500  focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      placeholder={_personalInfo.data.region}
                      className="mt-1 block h-10 w-full rounded-md border border-gray-300 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      placeholder={_personalInfo.data.zip}
                      className="mt-1 block h-10  w-full rounded-md  border border-gray-300 p-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        setPersonalInfo({
                          ...personalInfo,
                          zip: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between  bg-gray-50 px-4 py-3  sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleRemovePersonalInfo}
                >
                  <TrashIcon
                    className="-ml-0.5 mr-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  Delete Persona Info
                </button>
                {_personalInfo.status.pending ? (
                  <button
                    type="button"
                    className=" inline-flex cursor-progress justify-center rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white  shadow-sm focus:ring-offset-2"
                    disabled
                  >
                    <svg
                      class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Save
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    <SaveIcon
                      className="-ml-0.5 mr-2 h-4 w-4"
                      aria-hidden="true"
                    />
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form01
