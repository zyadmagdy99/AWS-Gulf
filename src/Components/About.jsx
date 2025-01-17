import React from 'react'
import { useTheme } from '../context/ThemeContext'

function About() {
  const {Ison}= useTheme();
  return (
    <div className={`${Ison?"bg-white":"bg-black"}  flex flex-col-reverse gap-8 md:gap-0 md:flex-row py-10 items-center justify-around`}> 
          <div className='xl:w-[26rem] md:w-[20rem] md:ms-20 flex justify-center h-[20rem] w-full md:h-[30rem] items-center bg-[#eaf5f6]'>
  <p className='text-[#478b9c] text-[60px] font-bold'>الثقة</p>
</div>


      <div className='md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 lg:px-0 flex flex-col gap-8 md:px-16'>
      <h1 className={`${Ison?"text-[#003540]":"text-[#89cedc]"} text-2xl font-semibold text-[#003540] md:text-start`}>حول AWS GULF</h1>
      <p  className={`${Ison?"text-black/75":"text-white"}   md:text-start text-[15px] xl:pe-16 tracking-wider `}> يعتبر AWS GULF شركة رائدة في مجال تكامل نظم تكنولوجيا المعلومات وتقديم الخدمات، تأسست في عام 2024 مع تركيز على تقديم حلول الأجهزة التكنولوجية المتطورة، إدراكاً منها للتطور المستمر في المشهد التكنولوجي واحتياجات السوق المتغيرة بسرعة، وسعت الشركة محفظتها لتشمل خدمات البرمجيات. لم يكن هذا الإضافة مجرد تحسين، بل ضرورة لتلبية متطلبات الأعمال الحديثة المتطورة. من خلال دمج خدمات البرمجيات، تهدف AWS GULF إلى توفير حلول شاملة تمكّن عملاءها من التميز في سوق تنافسية. ومع التزامها بالابتكار والتميز، تكرس AWS GULF جهودها لتحقيق تأثير كبير من خلال تلبية وتجاوز توقعات العملاء.
</p>
      <div className='flex gap-4 xl:gap-0'>
            <div className='w-1/2 flex flex-col'>
            <h3 className=' text-white text-3xl xl:w-[250px] md:h-[60px] h-[50px] bg-gradient-to-b from-[#04323D] to-[#0f93b4] flex justify-center items-center rounded-lg'>الإبداع</h3>
            <div className={`md:text-start flex flex-col py-4 ps-1 gap-2 ${Ison?"text-black/50":"text-white"}`}>
              <p>تصاميم رائدة</p>
              <p>إنشاء محتوى إبداعي   </p>
              <p>تجربة مستخدم تفاعلية   </p>
              <p>العلامات التجارية الإستراتيجية والتصميمات الجرافيكية   </p>
              <p>حلول مدعومة بالذكاء الاصطناعي </p>
            </div>
            </div>
            <div className='w-1/2 flex flex-col'>
            <h3 className='bg-gradient-to-b from-[#04323D] to-[#0f93b4] text-white text-3xl xl:w-[250px] md:h-[60px] h-[50px] flex justify-center items-center rounded-lg'>التكنولوجيا</h3>
            <div className={`md:text-start flex flex-col py-4 ps-1 gap-2 ${Ison?"text-black/50":"text-white"}`}>
              <p>تصميم واجهات المستخدم وتجربة المستخدم              </p>
              <p>برمجة تطبيقات الهاتف المحمول باستخدام <br />Flutter Native              </p>
              <p>حلول التجارة الإلكترونية              </p>
              <p>تطوير البرمجيات المخصصة</p>
            </div>
            </div>
      </div>
      <p className={`md:text-start ${Ison?"text-[#003540]":"text-[#35a0b6]"} underline cursor-pointer underline-offset-2`}>مزيد عنا</p>
      </div>
    </div>
  )
}

export default About
