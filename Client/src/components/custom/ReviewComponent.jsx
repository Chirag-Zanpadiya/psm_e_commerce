import React from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { starsGenerator } from "@/constants/Helper";
import { Colors } from "@/constants/Colors";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

const ReviewComponent = () => {
  return (
    <div className="sm:my-20 my-10 w-[93vw] lg:w-[70vw] mx-auto">
      <h3 className="font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center">
        Reviews
      </h3>
      {/* Write review section */}
      <div className="rounded-lg">
        <h4 className="font-semibold text-lg text-gray-700 dark:text-[#FDF5E6] mb-4">
          Write a review
        </h4>
        <Textarea placeholder="Type your review here..." className="mb-4" />
        <div className="flex gap-5">
          <Input
            type="number"
            max="5"
            min="1"
            className="mb-4 w-[10rem]"
            placeholder="Rating (1-5)"
          />
          <Button>Submit review</Button>
        </div>
      </div>
      {/* review list */}
      <div className="space-y-6 my-10">
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg dark:bg-zinc-900  dark:border-none">
          {/*Rivewer ka info  */}
          <div className="flex items-center mb-4 space-x-2">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full object-cover object-center"
                src="https://images.pexels.com/photos/25398338/pexels-photo-25398338.jpeg"
              />
              <AvatarFallback>User_Photo</AvatarFallback>
            </Avatar>
            <div>
              <h4>Chirag Zanpadiya</h4>
              <div className="flex items-center mt-1">
                {starsGenerator(5, "0", "15", Colors.customYellow)}
              </div>
            </div>
          </div>

          {/* Review Content */}
          <p className="text-gray-600 text-sm dark:text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, obcaecati!
          </p>

          {/* replay section  */}
          <div className="mt-5 bg-gray-50 p-4 rounded-lg border dark:bg-zinc-800">
            <h5 className="font-bold text-sm text-gray-700 mb-3 dark:text-yellow-400">
              Replays (2)
            </h5>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 border-b pb-3 last:border-none">
                <Avatar>
                  <AvatarImage
                    className="w-8 h-8 rounded-full object-cover object-center"
                    src="https://images.pexels.com/photos/25398338/pexels-photo-25398338.jpeg"
                  />
                  <AvatarFallback>User_Photo</AvatarFallback>
                </Avatar>

                <div>
                  <h6 className="font-medium text-gray-800 text-sm dark:text-gray-200 capitalize">
                    ZCATechX
                  </h6>
                  <p className="text-gray-600 text-sm dark:text-[#a4a4a4]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*replay form  */}
          <div className="mt-4">
            <Textarea placeholder="Write Your Reply..." />
            <Button size="sm" className="mt-4">Reply</Button>
          </div>

          


        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
