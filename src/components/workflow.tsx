import Image from "next/image";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";


const steps = [
    {
      title: "Step 1: Schedule an appointment.",
      description: `
            Easily schedule appointments through our user-friendly interface, selecting the best times for you and your patients.
          `,
      image: userOneImg,
    },
    {
      title: "Step 2: Receive payment prompts.",
      description: `
            Receive automated payment prompts that ensure you get paid before the appointment, streamlining the process for both parties.
          `,
      image: userTwoImg,
    },
    {
      title: "Step 3: Get automated reminders.",
      description: `
            Patients receive automated reminders via SMS or email, reducing no-shows and ensuring they remember their appointments.
          `,
      image: userThreeImg,
    },
  ];

export default function Timeline() {
    return (
        <div className="mx-auto max-w-6xl">
          <div className=" py-12 md:py-20 md:py-20">
            {/* Section header */}
           
            <div className="flex flex-col items-center w-full gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col w-full">
                    <div className="relative top-[-1rem] left-[-1rem] w-10 h-10 rounded-full bg-indigo-500 text-white p-0 flex items-center justify-center mb-2">
                      <span>{index + 1}</span>
                    </div>
                    <div className="grid grid-cols-6 mb-4 gap-4 w-full p-4">
                      <div className="col-span-1 flex items-center">
                        <Image
                          src={step.image}
                          alt={`Step ${index + 1}`}
                          className="rounded-md"
                          width={150} // Adjust width as needed
                          height={150} // Adjust height as needed
                        />
                      </div>
                      <div className="flex items-center col-span-2">
                        <h2 className="bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
                          {step.title}
                        </h2>
                      </div>
                      <p className="mb-8 text-xl text-gray-500 col-span-3 flex items-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Only show arrow if it's not the last step */}
                  {index < steps.length - 1 && (
                    <span className="text-indigo-600 font-bold text-4xl mt-8">
                      ↓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
