export const Card = ({ title, subtitle }) => (
  <div className="flex flex-col border-gray-700 border-opacity-10 border-4 shadow-2xl rounded-md ring-opacity-80 ring-offset-white p-2 lg:p-3 xl:p-6 text-center">
    <div className="bg-white rounded-md p-2 lg:p-3 xl:p-2">
      <dt className="order-1 py-2 text-sm  font-small text-gray-500">
        {subtitle}
      </dt>
      <dd className="order-2 pb-4 text-2xl xl:text-3xl font-extrabold text-indigo-600">
        {title}
      </dd>
    </div>
  </div>
)
