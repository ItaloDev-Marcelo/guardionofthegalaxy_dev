import { type ChangeEvent, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  testimonialSchema,
  type TestimonialFormData,
} from '@/lib/zodSchemaTestimonial';
import { BlockBadWords } from '@/lib/toxiBrFilter';
import type { Inputs } from '@/shared/types/TestimonialFormType';

export default function Testimolial() {
  const [count, setCount] = useState(0);
  const [submited, setSubmited] = useState(false);
  const [alertOfWord, setAlertOfWord] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TestimonialFormData>({
    resolver: zodResolver(testimonialSchema),
  });

  const SubmitForm: SubmitHandler<Inputs> = () => {
    setCount(0);
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 2000);
    reset();
  };

  const countLetters = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    const result = BlockBadWords(text);
    setAlertOfWord(result);
    const numOfLetters = text.length;
    setCount(numOfLetters);
  };

  return (
    <section id="testimonial-bg" className="bg-cover bg-no-repeat bg-bottom">
      <div className="flex flex-col items-center justify-center opacity-100 relative xl:top-25 xl:py-60">
        <div className="place-items-center my-10 xl:my-3 w-83.25 md:w-137.5 xl:w-auto xl:px-40 ">
          <h4 className="font-bold text-center my-10  xl:-mt-25 xl:mb-35 testimonial-header tracking-[4%]  text-[24px] xl:text-[36px] text-white">
            Deixe seu depoimento
          </h4>
          <div>
            <p className="text-white text-[16px] tracking-[15%] xl:text-[22px] leading-5 xl:leading-8">
              <span className=" font-bold bold">
                Teve alguma experiência com o squad Guardiões da Galáxia?
              </span>
              <br />
              <span className="regular font-normal">
                Seja como participante ou recrutador, compartilhe seu
                depoimento. <br className="hidden xl:block" /> Seu feedback
                ajuda outros a entender o valor real da comunidade.
              </span>
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(SubmitForm)}
          className="bg-[#1A0F2E] border rounded-[20px] xl:rounded-[80px]   my-5 md:my-0 md:mt-2.5 p-5 mb-25 md:mb-30 md:w-137.5  w-83.25 xl:w-164 md:h-168.75 xl:h-167.75  h-auto border-[#B919BC] place-items-center xl:place-items-start xl:gap-6"
        >
          <div className="p-3 flex flex-col md:w-full gap-3 relative">
            <label htmlFor="name" className="pl-2.5 ">
              Nome<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              maxLength={112}
              className="border-2 mt-2 w-77.25 md:w-full p-3 border-white rounded-xs"
              placeholder="Digite seu nome completo"
            />
            {errors.name && (
              <p className="text-[14px] absolute top-[94%] left-[5%] xl:left-[2%] w-auto leading-2.5">
                {errors.name?.message}
              </p>
            )}
          </div>

          <div className="p-3 md:w-full gap-3">
            <label htmlFor="depoimento" className="pl-2.5 chakra">
              Depoimento<span>*</span>
            </label>
            <div className="relative">
              <textarea
                minLength={32}
                {...register('testimonial', { required: true })}
                onChange={(e) => countLetters(e)}
                id="depoimento"
                className="border-2 mt-4 p-3 md:p-4 xl:p-3 w-77.25 md:w-full xl:h-80 resize-none  h-86 border-white rounded-xs"
                placeholder="Compartilhe sua experiência com o projeto ou com os talentos 
da plataforma "
              ></textarea>

              <p
                className={`absolute  top-[88%] inter text-white opacity-50 font-medium tracking-[4px] text-[12px] md:top-[86%] ${
                  count >= 100
                    ? ' left-[72%] md:left-[78%] xl:left-[85%]'
                    : 'left-[74%] md:left-[82%] xl:left-[86%]'
                }`}
              >
                ({count}/244)
              </p>

              {errors.testimonial && (
                <p className="text-[14px] absolute top-full left-[2%] xl:left-0 w-auto leading-3 xl:leading-2.5">
                  {errors.testimonial?.message}
                </p>
              )}

              {alertOfWord && (
                <p className="text-[14px] absolute top-full left-[2%] xl:left-0 w-auto leading-3 xl:leading-2.5">
                  Remova as palavras ofensivas para continuar
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={` ${count > 244 || (count < 32 && 'disabled')}  font-bold bg-linear-65 w-77.25 xl:w-62.5 xl:h-13.75 -left-2 h-12.5 relative md:left-2.5 mt-5 xl:mt-4.5 border-2 rounded-[100px] hover:opacity-85 active:opacity-85 cursor-pointer  from-[#B919BC57] to-[#170748]`}
          >
            Enviar
          </button>
          {submited && (
            <p className="text-[14px] relative -left-5 top-5 md:top-2.5 md:-left-28 xl:left-5">
              Depoimento enviado com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
