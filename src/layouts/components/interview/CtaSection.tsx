import React from "react";
import { CtaSectionModel } from "@/layouts/models/CtaSectionModel";

export default function CtaSection(CtaSectionModel: CtaSectionModel) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-center text-white">
        <h2 className="text-2xl font-bold mb-4">{CtaSectionModel.title}</h2>
        <p className="mb-6 max-w-2xl mx-auto">{CtaSectionModel.description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={CtaSectionModel.buttonLink_1}>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
              {CtaSectionModel.buttonText_1}
            </button>
          </a>
          <a href={CtaSectionModel.buttonLink_2}>
            <button className="border border-white text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
              {CtaSectionModel.buttonText_2}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
