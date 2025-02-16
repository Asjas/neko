import type { ReactNode } from "react";
import { NavLink } from "remix";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="bg-local bg-black bg-center bg-no-repeat bg-cover bg-hero-image aspect-w-16 aspect-h-9">
        <div className="flex flex-col p-4 md:p-8 lg:p-14">
          <div className="flex justify-between">
            <NavLink className="h-12 p-2 rounded-sm" to="/">
              <svg className="h-auto w-14 md:w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.959 27.757">
                <g id="Group_1" data-name="Group 1" transform="translate(-292.036 -280.745)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M317.633,315.543V289.077h-7.11v.757q0,6.333-.008,12.667c0,.213,0,1.226,0,1.226s-.656-.768-.79-.931c-.832-1.017-1.654-2.043-2.45-3.089-2.6-3.418-5.18-6.849-7.792-10.258a1.167,1.167,0,0,0-.8-.4c-2.215-.034-4.431-.022-6.646-.025V315.42a5.207,5.207,0,0,0,.768.117c1.684.01,3.368.005,5.051.005h1.483c0-.322,0-.56,0-.8q0-6.6,0-13.195c0-.154.009-.46.009-.46l0-.952s7.431,9.8,10.226,13.828l1.206,1.593h6.913"
                    transform="translate(0 -7.182)"
                    fill="#fff"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M883.731,308.5c-1.071-.295-2.163-.532-3.21-.9a12.741,12.741,0,0,1-5.54-3.942,13.424,13.424,0,0,1-3.169-7.42,13.966,13.966,0,0,1,3.247-10.759,12.826,12.826,0,0,1,7.8-4.525,12.679,12.679,0,0,1,9.824,2.2,13.663,13.663,0,0,1,5.666,8.941c.087.453.182.9.274,1.357V296.1c-.137.625-.244,1.259-.415,1.875-1.444,5.22-4.675,8.71-10.014,10.141-.551.148-1.112.259-1.669.388Zm-4.02-14.629c.019,2.9.658,4.883,2.375,6.508a4.431,4.431,0,0,0,5.927,0,7.509,7.509,0,0,0,2.262-4.641,7.906,7.906,0,0,0-2.329-7.145,4.4,4.4,0,0,0-6.27.393A7.392,7.392,0,0,0,879.712,293.874Z"
                    transform="translate(-502.626 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M688.511,314.669h-4.837c-.775,0-1.554-.044-2.325.014-.618.046-.735-.2-.727-.748.029-1.979.007-3.958.012-5.937q.023-9.565.052-19.13c0-.214,0-.427,0-.673h7.657c.014.2.037.4.038.585q.021,5.112.037,10.224a1.318,1.318,0,0,0,.009.393,3.218,3.218,0,0,0,.251.483c.138-.116.33-.2.406-.352.761-1.481,1.5-2.972,2.252-4.46,1.085-2.159,2.179-4.312,3.244-6.48a.863.863,0,0,1,.907-.567c2.782.024,5.564.012,8.524.012-.523.929-.934,1.666-1.351,2.4q-2.845,5-5.7,10a.829.829,0,0,0,.015.954q2.773,4.644,5.523,9.3c.741,1.252,1.474,2.509,2.231,3.8a2.033,2.033,0,0,1-.266.052c-2.805.046-5.61.08-8.415.145a.935.935,0,0,1-.982-.57c-1.853-3.527-3.727-7.042-5.6-10.56-.01-.019-.014-.045-.028-.059q-.346-.343-.694-.685a4.034,4.034,0,0,0-.227.885c-.029,1.011-.011,2.023-.011,3.034Z"
                    transform="translate(-336.927 -6.308)"
                    fill="#fff"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M438.211,316.051H431.3l-.266-26.455h7.179Z"
                    transform="translate(-120.518 -7.674)"
                    fill="#fff"
                  />
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M543.8,442.316v6.09H527.388v-6.09Z"
                    transform="translate(-204.064 -140.091)"
                    fill="#fff"
                  />
                  <path
                    id="Path_7"
                    data-name="Path 7"
                    d="M543.8,365.636v6.09H527.388v-6.09Z"
                    transform="translate(-204.064 -73.605)"
                    fill="#fff"
                  />
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M527.249,295.436v-5.948h16.4v5.948Z"
                    transform="translate(-203.944 -7.58)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </NavLink>
            {children}
          </div>
          <div className="self-end w-6/12 translate-x-4 translate-y-20 sm:translate-y-40 md:translate-y-24 md:w-5/12 lg:translate-y-36 xl:translate-y-64 lg:translate-x-14">
            <h1 className="w-10/12 text-2xl font-bold text-right text-white lg:w-11/12 3xl:w-10/12 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
              Challenge The Limits
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
