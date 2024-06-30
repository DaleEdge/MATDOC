'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return(
      <>

    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between w-full mt-4">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Resources
        </h2>
        <div className="w-[48%] flex justify-end items-center gap-x-5">
          <select className="w-fit min-w-[200px] border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-4 outline-none  text-base ">
            <option>2023</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between w-full mt-10">
        <div className=" w-[33%] overflow-y-auto ">
          <ul className="w-full">
            <li className="w-full p-3 mt-3 flex justify-between items-center  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-gray-115 dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Basic Resources
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
          </ul>
        </div>
        <div className=" w-[65%]  border border-gray-300 rounded-md dark:border-gray-800">
          <div className="flex items-center justify-center w-full px-5 py-2 text-sm text-center ">
            NEET PG 2023 RESOURCES
          </div>
          <ul className="w-full text-sm font-medium text-black dark:text-white">
            {" "}
            <li className="mt-1 first:mt-0">
              <div className="bg-gray-115 border-b border-gray-300 dark:border-gray-800 dark:bg-black-100 py-1.5 px-7">
                Pointers on Counseling Management
              </div>
              <ul className="pt-3 mt-3 text-sm font-normal text-black px-7 pb-7 dark:text-white">
                <li className="mt-1 first:mt-0">
                  2023 Joining Documents - State wise - Joining Documents
                </li>
                <li className="mt-1 first:mt-0">
                  All India Counseling 2023 MCC Participating Institute Info
                  List -Participating Institute Info List
                </li>
                <li className="mt-1 first:mt-0">
                  All India Counseling 2023 Important Pointers for choice
                  filling - Info video
                </li>
                <li className="mt-1 first:mt-0">
                  All India Counseling Certificates And Documents Required for
                  2022 - Info Video / Joining Documents / NRI Documents
                </li>
                <li className="mt-1 first:mt-0">
                  Steps by Step Approach to NEET PG 2023 - Pointers
                </li>
                <li className="mt-1 first:mt-0">
                  Frequently Asked Questions on GAP Certificate - Info Video /
                  Format Gap Certificate
                </li>
                <li className="mt-1 first:mt-0">
                  Deemed PG 2023 Fee and Joining Documents - Details
                </li>
                <li className="mt-1 first:mt-0">
                  2023 Joining Documents - State wise - Joining Documents
                </li>
                <li className="mt-1 first:mt-0">
                  How to fill application form in Tamil Nadu Government Quota
                  Counsleing 2023 - Info Vidoes
                </li>
                <li className="mt-1 first:mt-0">
                  Applying for Eligibility Certificate - TN MGR University 2023
                  - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Tamil Nadu Government Quota - Form Filling / Document FAQ Rule
                  Changes - 2023 vs 2022 - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Tamil Nadu - Candidates who are facing difficulties in getting
                  the Eligibility Certificate on time - Can upload this Self
                  Declaration - Self Declaration Format (Modify as required)
                </li>
                <li className="mt-1 first:mt-0">
                  Permitted Seats &amp; Recognition of MD MS Seats /
                  Accreditation of DNB Seats Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  All Institute Wise Telegram Groups - Link
                </li>
              </ul>
            </li>{" "}
            <li className="mt-1 first:mt-0">
              <div className="bg-gray-115 border-b border-gray-300 dark:border-gray-800 dark:bg-black-100 py-1.5 px-7">
                Set 1 - Info Videos
              </div>
              <ul className="pt-3 mt-3 text-sm font-normal text-black px-7 pb-7 dark:text-white">
                <li className="mt-1 first:mt-0">
                  Information On Counseling Management
                </li>
                <li className="mt-1 first:mt-0">
                  Smartest Choice for Your NEET PG Dream Seat - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  How To Use ZyNerd For All India Counseling - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Ultimate Guide to NEET PG 2023 Part I - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Ultimate Guide to NEET PG 2023 Part II - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Certificates And Documents Required for All India Counseling -
                  Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Deemed Universities and All India Seat Matrix - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  NRI Quota In All India Counseling - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  OBC Non Creamy Layer - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Exploring DNB/ NBE Diploma - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  All India And State Counselings - Sequence of Rules and
                  Eligibility Session-1 Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  All India And State Counselings - Sequence of Rules and
                  Eligibility Session-2 Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  How to Get Score Card / Admit Card for NEET PG 2023 in NBE
                  portal! - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Frequently Asked Questions on GAP Certificate - Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  NEET PG AIQ 50% Scorecard and its relevance | NEET PG 2023 -
                  Info Video
                </li>
                <li className="mt-1 first:mt-0">
                  Points to be noted - Telangana Candidate List 2023 - Info
                  Video
                </li>
                <li className="mt-1 first:mt-0">
                  Points to be noted - Andhra Pradesh Display List 2023 - Info
                  Video
                </li>
                <li className="mt-1 first:mt-0">
                  All India Counseling / State wise Info Videos - Document
                  Format from the Prospectus / Complete Information on the
                  Counseling Eligibility / Rules / Fee Payment / Stipend /
                  Penalty of 2022
                </li>
                <li className="mt-1 first:mt-0">
                  All India Counseling - Joining Documents / NRI Documents
                </li>
                <li className="mt-1 first:mt-0">
                  AFMS (through MCC) - Joining Documents from Prospectus
                </li>
                <li className="mt-1 first:mt-0">
                  Andhra Pradesh Management Quota Counseling - Info Videos /
                  Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Andhra Pradesh Government Quota Counseling - Info Videos /
                  Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Assam State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Bihar State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Chhattisgarh State Counseling - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Gujarat State Counseling - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Haryana State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Jharkhand State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Karnataka State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Kerala State Counseling - Info Videos / Joining Documents from
                  Prospectus / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Maharashtra State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Madhya Pradesh State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  NEIGRIHMS State Counseling - Joining Documents from Prospectus
                </li>
                <li className="mt-1 first:mt-0">
                  Odisha State Counseling - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Pondicherry State Counseling - Info Videos / Joining Documents
                  from Prospectus / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Punjab State Counseling - Info Videos / Eligibility Criteria /
                  NRI Info Video / Joining Documents from Prospectus
                </li>
                <li className="mt-1 first:mt-0">
                  Rajasthan State Counseling - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  Sikkim State Counseling - Joining Documents from Prospectus
                </li>
                <li className="mt-1 first:mt-0">
                  Tamil Nadu Government Quota Counseling - Info Videos / Joining
                  Documents from Prospectus / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Telangana Government Quota Counseling - Info Videos / Joining
                  Documents from Prospectus / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Telangana Management Quota Counseling - Info Videos / Closing
                  Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Uttar Pradesh State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">
                  Uttarakhand State Counseling - Info Videos
                </li>
                <li className="mt-1 first:mt-0">
                  West Bengal State Counseling - Info Videos / Closing Ranks
                </li>
                <li className="mt-1 first:mt-0">Institute Wise Info Videos</li>
                <li className="mt-1 first:mt-0">
                  Christian Medical College, Vellore - Institute Info Series
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
)
}