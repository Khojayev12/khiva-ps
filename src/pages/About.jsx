import SinglePage from "../components/SinglePage";
import Photo from "../media/school.svg";

export default function About() {
  return (
    <SinglePage>
      <div className="about-page">
        <div className="school-img" data-aos="fade-down">
          <img src={Photo} alt="" />
        </div>
        <div className="school-img" data-aos="fade-down">
          <span style={{ marginLeft: "35px" }}> Prezident</span> maktablari –
          O‘zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev tashabbusi
          bilan 2019-2021-yillarda tashkil etilgan 14 ta maxsus maktablar.
          2019-yil 20- fevraldagi “Prezident maktablarini tashkil etish
          chora-tadbirlari to‘g‘risida O‘zbekiston Respublikasi Prezidentining
          qarori” ga asosan 2019-yilda 4 ta Prezident maktablari Toshkent, Xiva,
          Namangan va Nukus shaharlarida o‘z faoliyatini boshlagan.
        </div>
        <div className="about-text" data-aos="fade-down">
          <p  >
            <span style={{ marginLeft: "35px" }}>2019-yilning</span> iyun oyida
            „Prezident maktablari toʻgʻrisida nizom“ tasdiqlanib, sentabrda
            „Oʻzbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Prezident,
            ijod va ixtisoslashtirilgan maktablarni rivojlantirish agentligini
            tashkil etish toʻgʻrisida“ Prezident farmoni eʼlon qilindi.
            Prezidentning 2021-yilda imzolagan qaroriga muvofiq, agentlik nomi
            „Prezident taʼlim muassasalari agentligi“ga oʻzgartirildi. 2021-
            yilda yana 10 ta hududda Prezident maktablari o‘z faoliyatini
            boshlagan.
          </p>
          <p>
            <span style={{ marginLeft: "35px" }}>Prezident</span> maktablariga
            4-sinfni tamomlagan o‘quvchilar qabul qilinadi. Prezident
            maktablariga hujjatlarni topshirish uchun talabgorlar STEAM
            fanlardan oʻtgan oʻquv yilini matematika va tabiatshunoslik
            fanlaridan aʼlo bahoga tugatgan boʻlishlari shart. Bundan tashqari,
            talabgor oʻquvchilar oʻqiyotgan maktab Prezident maktabi joylashgan
            hududga mansub boʻlishi lozim.
          </p>
          <p>
            <span style={{ marginLeft: "35px" }}> </span>Har bir alohida
            Prezident maktabining yillik qabul kvotasi 5-sinf uchun 24 nafar
            oʻquvchidan iborat boʻlib, ular keyinchalik ikkita sinfga bir xil —
            12 nafardan oʻquvchi taqsimlanadi.
          </p>
          <p>
            <span style={{ marginLeft: "35px" }}> Prezident</span> maktablarini
            tashkil etishdan ko‘zlangan asosiy maqsad ta’lim jarayonida ilg‘or
            texnologiyalarni qo‘llash orqali iqtidorli bolalarni aniqlash va
            o‘qitish tizimini shakllantirish, shuningdek, iqtidorli yoshlarni
            qo‘llab-quvvatlash va rag‘batlantirish, ma’naviy boy va intellektual
            rivojlangan avlodni tarbiyalash kafolatlarini ta’minlashdan iborat.
            Prezident maktablarida bepul umumiy o‘rta ta’lim beriladi.
            O‘quvchilar bepul kiyimlar va besh mahal ovqat bilan ta’minlangan.
          </p>
          <p>
            <span style={{ marginLeft: "35px" }}> Prezident</span> maktablarida
            STEAM fanlar (Science-fan) matematika, fizika, kimyo, biologiya va
            kompyuter taʼlimi ingliz tilida olib boriladi. Prezident
            maktablarida ta’lim jarayoni umumiy o‘rta ta’limning davlat ta’lim
            standartlari hisobga olingan holda, umumiy o‘rta ta’lim sohasida
            xizmat ko‘rsatuvchi ixtisoslashtirilgan xorijiy tashkilotlar bilan
            hamkorlikda ishlab chiqiladigan hamda Prezident ta’lim
            muassasasalari agentligi tomonidan tasdiqlanadigan o‘quv rejalari va
            dasturlariga muvofiq amalga oshiriladi.
          </p>
          <p>
            <span style={{ marginLeft: "35px" }}>Prezident</span>maktabi
            o‘quvchilari zamon talablari darajasidagi bilimlar bilan birga
            musiqa, san’at, robototexnika, drama va notiqlik mahorati kabi
            to‘garak jarayonlarida zaruriy ko‘nikmalarni ham egallaydilar.
          </p>
        </div>
      </div>
    </SinglePage>
  );
}
