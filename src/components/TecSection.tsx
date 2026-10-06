import MiniCard from './MiniCard';
import { star, Bg } from '../assets/Tecs_icons/Tec_images';
import { tecData } from '@/shared/constants/TecData';

const TecSection = () => {
  return (
    <section
      className="md:h-[100vhd]  flex flex-col bg-[#140C28] md:bg-cover md:bg-center px-5 py-10 md:py-25"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className='flex xl:py-10 py-5 flex-col items-center justify-center bg-center bg-[url("./assets/Tecs_icons/tec_bg/bg-desktop.png")] md:bg-none '>
        <div className="flex flex-row items-center py-10 md:py-15  xl:py-12.5">
          <img src={star} alt="start-icon" className="w-12" />
          <h2 className="text-[24px]  font-chakra font-bold tracking-[4%]">
            Tecnologias usadas
          </h2>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 justify-center xl:scale-90 md:w-[67%] xl:w-[68%] xxl:scale-100 gap-5 xl:pb-20 lg:gap-y-6.5">
          {tecData.map((item) => (
            <MiniCard
              key={item.id}
              icon={item.icon}
              alt={item.title}
              size="w-9 lg:w-10"
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecSection;
