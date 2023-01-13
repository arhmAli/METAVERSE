/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/img-redundant-alt */

'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, ind }) => (
  <motion.div
    variants={fadeIn('up', 'spring', ind * 0.3, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="image"
      className="md:w-[270px] w-full h-[250px] rounded-[32px]
        object-cover"
    />
    <div className="w-full flex justify-between items-center"
    >
      <div className="flex-1 md:ml-[62px] flex flex-col
          max-w[650px]"
      >
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px]
              text-[14px] text-secondary-white"
        >{subtitle}
        </p>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
