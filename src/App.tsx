import Card from "./components/Card/Card";
import EnviloupMainCard from "./components/EnviloupMainCardSection/EnviloupMainCardSection";
import EnviloupSideCardSection from "./components/EnviloupSideCardSection/EnviloupSideCardSection";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import Header from "./components/Header/Header";
import Image from "./components/Image/Image";
import Section from "./components/Section/Section";
import Link from "./components/Link/Link";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <WaveBackground>
        <div className="flex flex-col items-center h-full gap-8 pt-16 pb-16">
          <Card className="rotate-[4deg] sm:mb-6 md:mb-8 lg:mb-12">
            <EnviloupMainCard />
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>О нас</Header>
              <Section>
                <Paragraph className="mb-4">
                  Мы команда Enviloup: 4 энтузиаста, которые хотят перевернуть
                  интернет!
                </Paragraph>
                <Paragraph className="mb-4">
                  На данный момент мы разрабатывает полноценный клон ютуба с
                  самыми важными вещами (об этом ниже).
                </Paragraph>
                <Paragraph>
                  Следите за нашими свершениями на нашем{" "}
                  <Link href="https://github.com/ENVILOUP" showAnchorIcon>
                    GitHub
                  </Link>
                </Paragraph>
              </Section>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Что такое Enviloup?</Header>
              <Section>
                <Paragraph className="mb-4">
                  Enviloup aka энвилоп - это <b>концепция</b> программы, которая
                  включает в себя все программы. Энвилоп - это множество всех
                  возможных программ на машине Тьюринга. Я придумал эту
                  концепцию несколько лет назад, когда изучал C++
                </Paragraph>
                <Paragraph className="mb-4">
                  Название концепция получила позже из ролика Азазазынг aka
                  Azazin Kreet, где Максос сказал это ржачное слово. Мы же нагло
                  его приватизировали и используем!
                </Paragraph>
                <Link href="https://t.me/jojopko_dev/172" showAnchorIcon>
                  Подробнее о концепции - тут
                </Link>
              </Section>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Enviloup Videos &amp; Road Map</Header>
              <Section>
                <Paragraph className="mb-4">
                  Enviloup Videos - это наш флагманский проект: клон YouTube.
                </Paragraph>
                <Paragraph className="mb-4">
                  У нас есть некоторый план (Road Map) для проекта и вот он:
                </Paragraph>
                <ol className="list-decimal ml-4">
                  <li>
                    <b>Фичи для MVP Enviloup Videos:</b>
                    <p>
                      P.s. Это фичи для самого базового просмотра и загрузки
                      видосиков.
                    </p>
                    <ul className="list-disc ml-4">
                      <li>Потоковое видео</li>
                      <li>Лайки, дизы</li>
                      <li>Лента видосов</li>
                      <li>Моковые рекомендации</li>
                      <li>Админка для авторов (загрузка)</li>
                      <li>Авторизация</li>
                    </ul>
                  </li>
                  <li>
                    <b>Фичи для Enviloup Videos v.1:</b>
                    <p>
                      P.s. Здесь уже нас могу выкупить, так как мы реализовали
                      80% фичей крупных сервисов.
                    </p>
                    <ul className="list-disc ml-4">
                      <li>Сбор метаданных о юзерах</li>
                      <li>Реальные рекомендации</li>
                      <li>Комментарии</li>
                      <li>Нормальный видеоплеер</li>
                      <li>Умный поиск</li>
                    </ul>
                  </li>
                  <li>
                    <b>Фичи для Enviloup Videos v.2:</b>
                    <p>
                      P.s. Это уже уже можно на полном серьёзе продвигать как
                      замена ютуба по части функционала, остальное решается
                      через инвестиции.
                    </p>
                    <ul className="list-disc ml-4">
                      <li>Реклама и монетизация</li>
                      <li>Продвинутая админка</li>
                      <li>Модерация контента</li>
                      <li>Кэшировние и CDN</li>
                    </ul>
                  </li>
                </ol>
              </Section>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Самореклама</Header>
              <div className="flex flex-col justify-around items-center md:flex-row">
                <Section className="pr-6 pb-4 text-center mb-4 sm:pb-0 md:text-left md:mb-0">
                  <Link href="https://t.me/+IvXVmRDjwO8xNzFi" showAnchorIcon>
                    Подписывайтесь на телеграм канал CTO проекта!
                  </Link>
                </Section>
                <Image
                  className="md:mb-auto rounded-2xl w-[30vw]"
                  src="jojopkodev.png"
                  alt=""
                />
              </div>
            </EnviloupSideCardSection>
          </Card>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
