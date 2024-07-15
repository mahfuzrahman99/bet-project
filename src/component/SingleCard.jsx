/* eslint-disable react/prop-types */
import { Badge } from "antd";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const SingleCard = ({
  HBgColor,
  HTextColor,
  icon,
  title,
  ammount,
  isBadge,
  postAmmount,
  tamplate,
  category,
  storage,
  word,
  BtnBg,
  BtnText,
  BtnBorder,
  UpTo
}) => {
  return (
    <div className="md:w-[360px] w-[340px] rounded-md shadow-xl parant_div mb-4 md:mb-0">
      {isBadge ? (
        <Badge.Ribbon text="Best Schema" color="#fe8112" className="mt-4">
          <div className={`p-6  bg-[${HBgColor}] text-[${HTextColor}]`}>
            <div className="space-y-3">
              <span>{icon}</span>
              <h1 className="text-xl">{title}</h1>
              <p className="font-normal">
                <span className="font-bold text-3xl">${ammount}</span>
                <span className="mt-3">/month</span>
              </p>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div className={`p-6  bg-[${HBgColor}] text-[${HTextColor}]`}>
          <div className="space-y-3">
            <span>{icon}</span>
            <h1 className="text-xl">{title}</h1>
            <p className="font-normal">
              <span className="font-bold text-3xl">${ammount}</span>
              <span className="mt-2">/month</span>
            </p>
          </div>
        </div>
      )}
      <div className="p-6 space-y-4">
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>
          {postAmmount} post a month
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          Unlimited Audio Transcribe
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          Unlimited Video Transcribe
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          Unlimited ChatGPT 3.5 Use
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          {tamplate} Templates
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          Generate summaries, show notes, newsletters, blog posts, social posts,
          keywords, and more
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          {category} Customer Support
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          {UpTo} {storage} GB Storage
        </p>
        <p>
          <span className="text-2xl">
            {<IoCheckmarkCircleOutline color="#0000FF" />}
          </span>{" "}
          Summaries {word} words
        </p>
        <button
          className={`btn bg-[${BtnBg}] w-full rounded-xl border border-[${BtnBorder}] hover:border-[${BtnBorder}] hover:bg-[${BtnBg}] text-[${BtnText}] hover:text-[${BtnText}]`}
        >
          Sign Up For Free
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
