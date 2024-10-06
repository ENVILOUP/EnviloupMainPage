import Card from "./components/Card/Card";
import EnviloupMainCard from "./components/EnviloupMainCardSection/EnviloupMainCardSection";
import EnviloupSideCardSection from "./components/EnviloupSideCardSection/EnviloupSideCardSection";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import Image from "./components/Image/Image";

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
              <Paragraph>
                Мы команда Enviloup: 4 шиза, которые хотят перевернуть интернет!<br/><br/>
                Мы разрабатываем супер крутые вещи на нашем <a href="https://github.com/ENVILOUP">GitHub</a>!
                На данный момент мы разрабатывает полноценный клон ютуба с самыми важными вещами (об этом ниже).
              </Paragraph>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Что такое Enviloup?</Header>
              <Paragraph>
                Enviloup aka энвилоп - это <b>концепция</b> программы, которая включает в себя все программы.
                Энвилоп - это множество всех возможных программ на машине Тьюринга.
                Я придумал эту концепцию несколько лет назад, когда изучал C++<br/><br/>
                Название концепция получила позже из ролика Азазазынг aka Azazin Kreet, где Максос сказал это ржачное слово.
                Мы же нагло его приватизировали и используем!<br/><br/>
                Подробнее о концепции - <a href="https://t.me/jojopko_dev/172">тут</a>
              </Paragraph>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Enviloup Videos &amp; Road Map</Header>
              <Paragraph>
                Enviloup Videos - это наш флагманский проект: клон YouTube.<br/><br/>
                У нас есть некоторый план (Road Map) для проекта и вот он:<br/><br/>
                <ul>
                  <b>Фичи для MVP Enviloup Videos:</b>
                  <p>Это фичи для самого базового просмотра и загрузки видосиков.</p>
                  <li>Потоковое видео</li>
                  <li>Лайки, дизы</li>
                  <li>Лента видосов</li>
                  <li>Моковые рекомендации</li>
                  <li>Админка для авторов (загрузка)</li>
                  <li>Авторизация</li>
                </ul>
                <ul>
                  <b>Фичи для Enviloup Videos v.1:</b>
                  <p>Здесь уже нас могу выкупить, так как мы реализовали 80% фичей крупных сервисов.</p>
                  <li>Сбор метаданных о юзерах</li>
                  <li>Реальные рекомендации</li>
                  <li>Комментарии</li>
                  <li>Нормальный видеоплеер</li>
                  <li>Умный поиск</li>
                </ul>
                <ul>
                  <b>Фичи для Enviloup Videos v.2:</b>
                  <p>Это уже уже можно на полном сурьёзе продвигать как замена ютуба по части функционала, остальное решается через инвестиции.</p>
                  <li>Реклама и монетизация</li>
                  <li>Продвинутая админка</li>
                  <li>Модерация контента</li>
                  <li>Кэшировние и CDN</li>
                </ul>
              </Paragraph>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Самореклама</Header>
              <div className="flex flex-col justify-around items-center md:flex-row">
                <Paragraph className="pr-6 pb-4 sm:pb-0">
                  Подписывайтесь на <a href="https://t.me/+IvXVmRDjwO8xNzFi">телеграм канал</a> CTO проекта!
                </Paragraph>
                <Image className="md:mb-auto" src="jojopkodev.png" alt="" />
              </div>
            </EnviloupSideCardSection>
          </Card>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
