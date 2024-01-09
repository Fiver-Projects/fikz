import React from "react";

const page = () => {
  const mockImages = [
    "https://s3-alpha-sig.figma.com/img/7c61/ff74/35428f5a99c897d286a522fd017a6f40?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ITon40lKBwNkrjJvNv1XWM02w7DtAqtJxETPiVn3v-AO6mEC8-tvVYqF-JcRQRT4I7SvRx2VRs117MQRD0cJV-CTXSRYe2j3MesYzUu~-x2w2STtq3MJpMiQS6RutxXvkqn0gi7Z5fUSBgcXnQMuq1WUmlqFnlD9XACTwYRtUpMxE8nVCxMwlEa9kzPjnOzE9fyEXgeyuya96n9KW3UHiBvqieniNcn90Qn39zf-s9sDndwfmPZx7aCtKuivvSma9b6CJjAZRWrE5mI1eSBfBOJ2FeygpZGaqoGlhYZ3R54XEze2EfpnbR0clB2L9SreaCoaBhN9QdamHI6nlC38CA__",
    "https://s3-alpha-sig.figma.com/img/6ebe/a296/4afd8ae0173b29bcfe45830d1297d640?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkwQNADDLQDZWaVUg-jCHaLxuqAT~xixVfLBanjS14KWs2tCaOmPVOcHxvITLFufhJ8hQ6d~sY4YfJfniBOjcuHOPV0PomIknR6DvZ-XQ~GqfSg77M3sVQHZP84kk4A4g7umVpLdkEDYdE1BgS4Qiev3Svn-pi4J37niaAYUGkIBr~ZaFgtPXTwskvhu4dfPOJEGLMxUzoVKY32GpiU9BHqGRBznhyGDRv74gQEfid~IzPTK0ht-~6Ro1bS52sk4nHlAVPi3uByichfJkkWAAvSDp8dzCFSwbZKvjXVtDpGz~fEYqSo33-orJYl6CUEyKuqLXLul4vea~bFbvy5sAw__",
    "https://s3-alpha-sig.figma.com/img/81c6/6e78/7cf21e3aafde0d550112e8b5ce3bc256?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-8NweOCBDqqTwKeAEixF50O~8TaqOY0fXG45o7OZ~Mn69LkCECrArzcd7VgL8Ak8XLRY7V0dLaNa~ocg8x2iRE9sA~09PTP6cteiDyJtavchWzRIoJ5VhmUT9iLL9fZBHroypUreoUN6w-4HIs0X6UrF5ZtCfA9TbSPEM1pSMxFr6KFtVGH2JNYKjKrw27UIBvEuzWtZZdyTCKcIrrZeZszE7Hcx3C8ION9PKCCUXC~ULMz81efDvrFcfDEIGSBiD4nLz9f7pJ483hkcet1R2UzpsGkoyafwCeHjAoxJCgll0PK-OZWlvsOi19CfYFPnG6SD~vcsccvSR2-sOgezg__",
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-start md:justify-between gap-5 md:gap-0 items-center border-b-2 border-fikz-gray-light/30 py-3">
        <div className="flex justify-start items-center gap-4 md:gap-20">
          <button className="flex items-center gap-4">
            <span className="h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center">
              1
            </span>
            <span className="font-bold text-fikz-black">Business Info</span>
          </button>
          <button className="flex items-center gap-4">
            <span className="h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center">
              2
            </span>
            <span className="font-bold text-fikz-gray-light">Payment Info</span>
          </button>
          <button className="flex items-center gap-4">
            <span className="h-8 w-8 font-semibold rounded-full border-2 border-fikz-black text-center flex justify-center items-center">
              3
            </span>
            <span className="font-bold text-fikz-gray-light">
              Skills & Documents
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-fikz-black">
            Completion info: 30%
          </h4>
          <div className="h-3 w-48 bg-fikz-gray-light rounded-lg relative">
            <div className="h-full w-1/3 bg-fikz-black rounded-lg absolute top-0 left-0 z-10"></div>
          </div>
        </div>
      </div>
      <div className="w-full py-5 max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Add Licence */}
          <div className="flex flex-col gap-3">
            <div className="bg-fikz-black/10 w-full flex justify-between items-center px-4 py-2">
              <p className="text-base">Add Licence</p>
              <div className="flex justify-center items-center gap-5">
                <button className="text-sm">+ Add</button>
                <img src="downArrow.svg" alt="down-arrow" />
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-6 py-2 border border-dashed border-fikz-black/10">
              <p className="text-sm">{"Document sample.docx"}</p>
              <button>
                <img src="/delete.svg" alt="delete" />
              </button>
            </div>
            <div className="flex gap-2">
              {mockImages.map((image) => (
                <div className="relative w-32 h-32">
                  <img src={image} alt="image" className="w-full h-full" />
                  <img
                    src="/cross.svg"
                    alt="cross"
                    className="absolute bottom-0 right-0"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Add Sample of work */}
          <div className="flex flex-col gap-3">
            <div className="bg-fikz-black/10 w-full flex justify-between items-center px-4 py-2">
              <p className="text-base">Add Sample of work</p>
              <div className="flex justify-center items-center gap-5">
                <button className="text-sm">+ Add</button>
                <img src="downArrow.svg" alt="down-arrow" />
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-6 py-2 border border-dashed border-fikz-black/10">
              <p className="text-sm">{"Document sample.docx"}</p>
              <button>
                <img src="/delete.svg" alt="delete" />
              </button>
            </div>
            <div className="flex gap-2">
              {mockImages.map((image) => (
                <div className="relative w-32 h-32">
                  <img src={image} alt="image" className="w-full h-full" />
                  <img
                    src="/cross.svg"
                    alt="cross"
                    className="absolute bottom-0 right-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
