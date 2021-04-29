export const Card = ({ title, subtitle }) => (
  <div className="flex flex-col border-gray-700 border-opacity-10 border-4 shadow-2xl rounded-md ring-opacity-80 ring-offset-white p-2 lg:p-3 xl:p-6 text-center">
    <div className="bg-white rounded-md p-2 lg:p-3 xl:p-6">
      <dd className="order-1 text-4xl font-extrabold text-indigo-600">
        {title}
      </dd>
      <dt className="order-2 mt-2 text-sm leading-6 font-small text-gray-500">
        {subtitle}
      </dt>
    </div>
  </div>
)
