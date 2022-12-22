import React from 'react'
import {Banner} from "../" 


type Props = {
  banner: {
    title: string;
    text: string;
    image: {};
  };
};

const HomePage = ({ banner }: Props) => {

  return (
    <section>
      <Banner banner={banner} />
      
      <style jsx>{`
              section{
      padding: 3vw;
      }
            `}</style>
    </section>
  );
};

export default HomePage