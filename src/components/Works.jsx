import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const cardContent = (
    <>
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl bg-black-200">
        {!imgError ? (
          <img
            src={images[currentImageIndex]}
            alt={`${name} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-secondary text-sm">
            Image unavailable
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </>
  );

  const Wrapper = isMobile ? "div" : motion.div;
  const wrapperProps = isMobile
    ? {}
    : {
        variants: fadeIn("up", "spring", index * 0.5, 0.75),
        // Each card observes its OWN viewport entry — doesn't rely on parent
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.1 },
      };

  return (
    <Wrapper {...wrapperProps}>
      {isMobile ? (
        <div className="bg-tertiary p-5 rounded-2xl w-full">{cardContent}</div>
      ) : (
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          {cardContent}
        </Tilt>
      )}
    </Wrapper>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center sm:justify-start gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");