import React from "react";
import { offSet, drumSmoker } from "../data";

function Smokers() {
  return (
    // <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
    //   <img class="w-full" src="/assets/docs/master/image-01.jpg" alt="Sunset in the mountains"/>
    //     <div class="px-6 py-4">
    //       <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    //       <p class="text-gray-700 text-base">
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
    //         perferendis eaque, exercitationem praesentium nihil.
    //             </p>
    //     </div>
    //     <div class="px-6 py-4">
    //       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
    //       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
    //       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    //     </div>

    //     </div>

    <div className="flex mt-6">
      <div className="flex-col">
        <h2 className="text-4xl italic font-bold py-6 text-center">
          {offSet.type}
        </h2>
        <div className="flex justify-center">
          <img src={offSet.img} alt="offSet" className="max-w-lg" />
        </div>
        <h4 className="m-4 py-4 text-xl font-light">{offSet.description}</h4>
      </div>

      <div className="flex-col">
        <h2 className="text-4xl italic font-bold py-6 text-center">
          {drumSmoker.type}
        </h2>
        <div className="flex justify-center">
          <img src={drumSmoker.img} alt="offSet" className="max-w-lg" />
        </div>
        <h4 className="m-4 py-4 text-xl font-light">
          {drumSmoker.description}
        </h4>
      </div>
    </div>
  );
}

export default Smokers;
