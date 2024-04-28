/* eslint-disable react/prop-types */
export function RevenueCard({ title, orderCount, amount }) {
  return (
    <div className="bg-white rounded shadow-sm p-4">
      <div>{title}?</div>
      <div className="flex justify-between">
        <div className="">$ {amount}</div>
        {orderCount ? (
          <div>
            {orderCount} order(s) {">"}
          </div>
        ) : null}
      </div>
    </div>
  );
}
