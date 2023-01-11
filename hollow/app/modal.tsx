// https://headlessui.com/react/dialog

export default function Modal() {
  return <div
    className="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true">

    <div className="t-fixed t-inset-0 t-bg-neutral-500 t-bg-opacity-75 t-transition-opacity"></div>

    <div className="t-fixed t-inset-0 t-z-10 t-overflow-y-auto">
      <div className="t-flex t-min-h-full t-items-end t-justify-center t-p-4 t-text-center sm:t-items-center sm:t-p-0">

        <div className="t-relative t-transform t-overflow-hidden t-rounded-lg t-bg-white t-text-left t-shadow-xl t-transition-all sm:t-my-8 sm:t-w-full sm:t-max-w-lg">
          <div className="t-bg-white t-px-4 t-pt-5 t-pb-4 sm:t-p-6 sm:t-pb-4">
            <div className="sm:t-flex sm:t-items-start">
              <div className="t-mx-auto t-flex t-h-12 t-w-12 t-flex-shrink-0 t-items-center t-justify-center t-rounded-full t-bg-red-100 sm:t-mx-0 sm:t-h-10 sm:t-w-10">
                <svg className="t-h-6 t-w-6 t-text-red-600"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke-width="1.5"
                     stroke="currentColor"
                     aria-hidden="true">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"/>
                </svg>
              </div>
              <div className="t-mt-3 t-text-center sm:t-mt-0 sm:t-ml-4 sm:t-text-left">
                <h3 className="t-text-lg t-font-medium t-leading-6 t-text-neutral-900"
                    id="modal-title">Deactivate account</h3>
                <div className="t-mt-2">
                  <p className="t-text-sm t-text-neutral-500">Are you sure you want to deactivate your account? All of your
                    data will be permanently removed. This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="t-bg-neutral-50 t-px-4 t-py-3 sm:t-flex sm:t-flex-row-reverse sm:t-px-6">
            <button type="button"
                    className="t-inline-flex t-w-full t-justify-center t-rounded-md t-border t-border-transparent t-bg-red-600 t-px-4 t-py-2 t-text-base t-font-medium t-text-white t-shadow-sm hover:t-bg-red-700 focus:t-outline-none focus:t-ring-2 focus:t-ring-red-500 focus:t-ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Deactivate
            </button>
            <button type="button"
                    className="t-mt-3 t-inline-flex t-w-full t-justify-center t-rounded-md t-border t-border-neutral-300 t-bg-white t-px-4 t-py-2 t-text-base t-font-medium t-text-neutral-700 t-shadow-sm hover:t-bg-neutral-50 focus:t-outline-none focus:t-ring-2 focus:t-ring-indigo-500 focus:t-ring-offset-2 sm:t-mt-0 sm:t-ml-3 sm:t-w-auto sm:t-text-sm">Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
}
