import React from "react";

const page = () => {
  //These are the mock data
  const mockSkills = [
    {
      name: "Walls & Fences",
      icon: "/walls&fances.svg",
    },
    {
      name: "Electricity",
      icon: "/electricity.svg",
    },
    {
      name: "Lifting",
      icon: "/lifting.svg",
    },
    {
      name: "Roofing",
      icon: "/roofing.svg",
    },
  ];

  const mockImages = [
    "https://s3-alpha-sig.figma.com/img/7c61/ff74/35428f5a99c897d286a522fd017a6f40?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ITon40lKBwNkrjJvNv1XWM02w7DtAqtJxETPiVn3v-AO6mEC8-tvVYqF-JcRQRT4I7SvRx2VRs117MQRD0cJV-CTXSRYe2j3MesYzUu~-x2w2STtq3MJpMiQS6RutxXvkqn0gi7Z5fUSBgcXnQMuq1WUmlqFnlD9XACTwYRtUpMxE8nVCxMwlEa9kzPjnOzE9fyEXgeyuya96n9KW3UHiBvqieniNcn90Qn39zf-s9sDndwfmPZx7aCtKuivvSma9b6CJjAZRWrE5mI1eSBfBOJ2FeygpZGaqoGlhYZ3R54XEze2EfpnbR0clB2L9SreaCoaBhN9QdamHI6nlC38CA__",
    "https://s3-alpha-sig.figma.com/img/6ebe/a296/4afd8ae0173b29bcfe45830d1297d640?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkwQNADDLQDZWaVUg-jCHaLxuqAT~xixVfLBanjS14KWs2tCaOmPVOcHxvITLFufhJ8hQ6d~sY4YfJfniBOjcuHOPV0PomIknR6DvZ-XQ~GqfSg77M3sVQHZP84kk4A4g7umVpLdkEDYdE1BgS4Qiev3Svn-pi4J37niaAYUGkIBr~ZaFgtPXTwskvhu4dfPOJEGLMxUzoVKY32GpiU9BHqGRBznhyGDRv74gQEfid~IzPTK0ht-~6Ro1bS52sk4nHlAVPi3uByichfJkkWAAvSDp8dzCFSwbZKvjXVtDpGz~fEYqSo33-orJYl6CUEyKuqLXLul4vea~bFbvy5sAw__",
    "https://s3-alpha-sig.figma.com/img/81c6/6e78/7cf21e3aafde0d550112e8b5ce3bc256?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-8NweOCBDqqTwKeAEixF50O~8TaqOY0fXG45o7OZ~Mn69LkCECrArzcd7VgL8Ak8XLRY7V0dLaNa~ocg8x2iRE9sA~09PTP6cteiDyJtavchWzRIoJ5VhmUT9iLL9fZBHroypUreoUN6w-4HIs0X6UrF5ZtCfA9TbSPEM1pSMxFr6KFtVGH2JNYKjKrw27UIBvEuzWtZZdyTCKcIrrZeZszE7Hcx3C8ION9PKCCUXC~ULMz81efDvrFcfDEIGSBiD4nLz9f7pJ483hkcet1R2UzpsGkoyafwCeHjAoxJCgll0PK-OZWlvsOi19CfYFPnG6SD~vcsccvSR2-sOgezg__",
  ];

  return (
    <section className="mx-auto max-w-[1440px] grid md:gap-8 grid-cols-1 md:grid-cols-5 2xl:grid-cols-7 px-2 md:px-4 lg:px-0 md:py-8">
      <div className=" md:col-span-2 2xl:col-span-2">
        <div className="bg-white shadow-md rounded-lg">
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-full flex justify-between px-4">
              <span></span>
              <button className="text-sm font-semibold">Edit</button>
            </div>
            <img
              className="h-32 p-1 rounded-full bg-white mt-13"
              src="/profile.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-xl font-bold text-center">Mark John</h2>
            <div className="flex justify-start items-center gap-[2px]">
              <img
                className="h-3 sm:h-4"
                src="/star-yellow.svg"
                alt="staryellow"
              />
              <img
                className="h-3 sm:h-4"
                src="/star-yellow.svg"
                alt="staryellow"
              />
              <img
                className="h-3 sm:h-4"
                src="/star-yellow.svg"
                alt="staryellow"
              />
              <img
                className="h-3 sm:h-4"
                src="/star-yellow.svg"
                alt="staryellow"
              />
              <img
                className="h-3 sm:h-4"
                src="/star-empty.svg"
                alt="starempty"
              />
              <h4 className="text-sm sm:text-base font-semibold text-fikz-gray-light">
                (51)
              </h4>
            </div>
          </div>
          <span className="w-full flex justify-center items-center">
            <button className="mt-2 py-3 px-8 w-[90%] mx-auto text-center border-2 bg-fikz-black text-white rounded-xl flex items-center justify-center gap-2">
              <img src="/chat.svg" alt="chat" />
              <span>Chat</span>
            </button>
          </span>
          <div className="py-2 px-4 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="flex justify-start items-center gap-4 py-2">
                <h4 className="text-lg font-semibold text-fikz-gray-light">
                  Hourly Rate
                </h4>
              </span>
              <span className="flex justify-start items-center gap-2 py-2">
                <h4 className="text-lg font-semibold">
                  <span className="text-fikz-yellow">155</span>/hr
                </h4>
              </span>
            </div>
            <hr className="h-[2px] w-full bg-fikz-gray-light/20 my-1" />
            <div className="flex justify-between items-center">
              <span className="flex justify-start items-center gap-4 py-2">
                <h4 className="text-lg font-semibold text-fikz-gray-light">
                  Phone
                </h4>
              </span>
              <span className="flex justify-start items-center gap-2 py-2">
                <h4 className="text-lg font-semibold">+123 456 789</h4>
              </span>
            </div>
            <hr className="h-[2px] w-full bg-fikz-gray-light/20 my-1" />
            <div className="flex justify-between items-center">
              <span className="flex justify-start items-center gap-4 py-2">
                <h4 className="text-lg font-semibold text-fikz-gray-light">
                  Address
                </h4>
              </span>
              <h6 className="text-lg font-semibold">United State</h6>
            </div>
            <hr className="h-[2px] w-full bg-fikz-gray-light/20 my-1" />
            <div className="flex justify-between items-center">
              <span className="flex justify-start items-center gap-4 py-2">
                <h4 className="text-lg font-semibold text-fikz-gray-light">
                  Language
                </h4>
              </span>
              <span className="flex items-center">
                <h6 className="text-lg font-semibold">English</h6>-
                <h6 className="text-lg font-semibold text-fikz-gray-light">
                  Fluent
                </h6>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg mt-4 px-4 py-4">
          <div className="flex justify-between">
            <p className="text-base">Skills</p>
            <button className="text-sm font-semibold">Edit</button>
          </div>
          <div className="flex mt-4 gap-4">
            {mockSkills.map((skill, index) => (
              <div
                key={index}
                className="w-12 flex flex-col flex-wrap gap-1 items-center"
              >
                <img
                  src={skill.icon}
                  alt="icon"
                  className="bg-[#f5f5f5] p-2 w-full"
                />
                <p className="text-xs text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="border-2 border-black rounded-md py-1 px-2 mt-2 text-sm font-medium">
              See More
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg mt-4 px-4 py-4">
          <div className="flex justify-between">
            <p className="text-base">Licenses</p>
            <button className="text-sm font-semibold">Edit</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {mockImages.map((image, index) => (
              <img src={image} alt="image" className="w-20 h-20 rounded-md" />
            ))}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg mt-4 px-4 py-4">
          <div className="flex justify-between">
            <p className="text-base">Sample of work</p>
            <button className="text-sm font-semibold">Edit</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            {mockImages.map((image, index) => (
              <img src={image} alt="image" className="w-20 h-20 rounded-md" />
            ))}
          </div>
        </div>
      </div>
      <div className=" md:col-span-3 2xl:col-span-5 mt-4 sm:mt-0 py-4 md:py-0">
        <div className="w-full flex flex-wrap justify-between">
          <div className="md:w-2/5 w-full grid grid-cols-2 bg-white shadow-md rounded-lg p-1">
            <button className="bg-[#f5f5f5] rounded-lg text-xl font-bold">
              Requests
            </button>
            <button className="rounded-lg text-xl font-bold">History</button>
          </div>
          <div className="flex gap-1 items-center md:self-auto mt-2 md:mt-0">
            <label htmlFor="Sortby" className="text-base font-semibold">
              Sort By:
            </label>
            <select className="outline-none p-0 bg-inherit border-0" name="" id="">
              <option className="flex gap-0.5" value="latest">
                <span>Latest</span>
                <img src="/downArrow.svg" alt="downArrow" />
              </option>
            </select>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg px-2 md:px-4 py-4 mt-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/customerProfile.svg" alt="profile-img" />
              <div>
                <p className="text-base font-semibold">Jeff Morrison</p>
                <p className="text-sm font-medium">Louisiana, UK</p>
              </div>
            </div>
            <p className="text-fikz-gray-light text-sm font-medium self-start">10 min ago</p>
          </div>
          <div className="flex mt-6 gap-4">
            {mockSkills.map((skill, index) => (
              <div
                key={index}
                className="w-14 flex flex-col flex-wrap gap-1 items-center"
              >
                <img
                  src={skill.icon}
                  alt="icon"
                  className="bg-[#f5f5f5] p-2 w-full rounded-lg"
                />
                <p className="text-xs text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span></span>
            <button className="text-sm font-semibold text-white bg-fikz-black px-4 py-2 rounded-md">Detail & Bid</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg px-2 md:px-4 py-4 mt-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/customerProfile.svg" alt="profile-img" />
              <div>
                <p className="text-base font-semibold">Jeff Morrison</p>
                <p className="text-sm font-medium">Louisiana, UK</p>
              </div>
            </div>
            <p className="text-fikz-gray-light text-sm font-medium self-start">10 min ago</p>
          </div>
          <div className="flex mt-6 gap-4">
            {mockSkills.map((skill, index) => (
              <div
                key={index}
                className="w-14 flex flex-col flex-wrap gap-1 items-center"
              >
                <img
                  src={skill.icon}
                  alt="icon"
                  className="bg-[#f5f5f5] p-2 w-full rounded-lg"
                />
                <p className="text-xs text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span></span>
            <button className="text-sm font-semibold text-white bg-fikz-black px-4 py-2 rounded-md">Detail & Bid</button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg px-2 md:px-4 py-4 mt-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-2">
              <img src="/customerProfile.svg" alt="profile-img" />
              <div>
                <p className="text-base font-semibold">Jeff Morrison</p>
                <p className="text-sm font-medium">Louisiana, UK</p>
              </div>
            </div>
            <p className="text-fikz-gray-light text-sm font-medium self-start">10 min ago</p>
          </div>
          <div className="flex mt-6 gap-4">
            {mockSkills.map((skill, index) => (
              <div
                key={index}
                className="w-14 flex flex-col flex-wrap gap-1 items-center"
              >
                <img
                  src={skill.icon}
                  alt="icon"
                  className="bg-[#f5f5f5] p-2 w-full rounded-lg"
                />
                <p className="text-xs text-center">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span></span>
            <button className="text-sm font-semibold text-white bg-fikz-black px-4 py-2 rounded-md">Detail & Bid</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
