import React from "react";

export default function Timeline() {
  return (
    <div>
      <>
        <h1 className="flex justify-center font-extrabold text-xl p-4">
          Timeline
        </h1>
      </>

      {/* Display timeline 01 */}
      <>
        <div className="bg-white flex justify-center">
          <div className="w-1/2 border-2 border-black-500 p-5">
            <div className="flex justify-between mb-6">
              {" "}
              <h4 className="font-bold">Nome Usuario</h4>
              <h4 className="font-extralight">00/00/0000</h4>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur temporibus illum nulla ipsam nobis dicta aliquid
              libero excepturi quas! Et iusto vero sed corporis ratione quisquam
              fugit impedit cumque sit.
            </p>
          </div>
        </div>
      </>
    </div>
  );
}
