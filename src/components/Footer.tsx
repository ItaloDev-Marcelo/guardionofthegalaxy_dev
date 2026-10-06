import { LinkData } from '@/shared/constants/LinkData';
import SocialLink from './SocialLink';

const Footer = () => {
  return (
    <footer className="bg-[#0A0B12] h-[6.25em] lg:h-[7.5em] border-t border-[#B919BC] flex flex-row items-center justify-center  gap-x-5 xl:gap-x-6">
      <p className="text-[#B919BC] font-medium xl:font-extrabold font-roboto text-[10px] lg:text-[1em] pt-2 xl:text-[1.1em] cursor-default ">
        Siga as redes sociais da comunidade Frontend Fusion
      </p>
      <div className="flex flex-row items-center gap-x-2.5 mt-2 xl:mt-0 xl:gap-x-5">
        {LinkData.map(({ id, alt, icon, link }) => (
          <SocialLink
            key={id}
            alt={alt}
            icon={icon}
            link={link}
            size="w-[1.5em] lg:w-13 xll:w-14"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
